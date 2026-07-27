import ApiError from "../../../../../shared/ApiError.js";

import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import { Messages } from "../../../../../shared/constants/messages.js";

import sectionPresenter from "../../presenters/public/section.presenter.js";
import topicPresenter from "../../../topics/presenters/public/topic.presenter.js";

import * as sectionRepository from "../../repositories/section.repository.js";
import * as topicRepository from "../../../topics/repositories/topic.repository.js";

const getSectionBySlugService = async (slug) => {
  const section = await sectionRepository.findSectionBySlug(
    slug,
    {
      status: ContentStatus.PUBLISHED,
      visibility: Visibility.PUBLIC,
    }
  );

  if (!section) {
    throw new ApiError(
      404,
      Messages.SECTION_NOT_FOUND
    );
  }

  const topics = await topicRepository.findTopics({
    section: section._id || section.id,
    status: ContentStatus.PUBLISHED,
    visibility: Visibility.PUBLIC,
    limit: Number.MAX_SAFE_INTEGER,
    sort: "order",
  });

  return {
    section: sectionPresenter(section),
    topics: topics.map(topicPresenter),
  };
};

export default getSectionBySlugService;