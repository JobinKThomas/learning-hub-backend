import ApiError from "../../../../../shared/ApiError.js";

import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import { Messages } from "../../../../../shared/constants/messages.js";

import interviewQuestionDetailPresenter from "../../presenters/public/interviewQuestionDetail.presenter.js";

import * as interviewQuestionRepository from "../../repositories/interviewQuestion.repository.js";

const getInterviewQuestionBySlugService = async (
  slug
) => {
  const interviewQuestion =
    await interviewQuestionRepository.findInterviewQuestionBySlug(
      slug,
      {
        status: ContentStatus.PUBLISHED,
        visibility: Visibility.PUBLIC,
      }
    );

  if (!interviewQuestion) {
    throw new ApiError(
      404,
      Messages.INTERVIEW_QUESTION_NOT_FOUND
    );
  }

  return interviewQuestionDetailPresenter(
    interviewQuestion
  );
};

export default getInterviewQuestionBySlugService;