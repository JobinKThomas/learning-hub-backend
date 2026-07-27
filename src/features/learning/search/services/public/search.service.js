import * as learningPathSearchRepository from "../../../learning-paths/repositories/learningPathSearch.repository.js";
import * as moduleSearchRepository from "../../../modules/repositories/moduleSearch.repository.js";
import * as sectionSearchRepository from "../../../sections/repositories/sectionSearch.repository.js";
import * as topicSearchRepository from "../../../topics/repositories/topicSearch.repository.js";
import * as noteSearchRepository from "../../../notes/repositories/noteSearch.repository.js";

import learningPathPresenter from "../../../learning-paths/presenters/public/learningPath.presenter.js";
import modulePresenter from "../../../modules/presenters/public/module.presenter.js";
import sectionPresenter from "../../../sections/presenters/public/section.presenter.js";
import topicPresenter from "../../../topics/presenters/public/topic.presenter.js";
import notePresenter from "../../../notes/presenters/public/noteDetail.presenter.js";

const searchService = async ({
  search,
  limit = 5,
}) => {
  const [
    learningPaths,
    modules,
    sections,
    topics,
    notes,
  ] = await Promise.all([
    learningPathSearchRepository.searchLearningPaths({
      search,
      limit,
    }),
    moduleSearchRepository.searchModules({
      search,
      limit,
    }),
    sectionSearchRepository.searchSections({
      search,
      limit,
    }),
    topicSearchRepository.searchTopics({
      search,
      limit,
    }),
    noteSearchRepository.searchNotes({
      search,
      limit,
    }),
  ]);

  const groups = {
    learningPaths: learningPaths.map(
      learningPathPresenter
    ),

    modules: modules.map(modulePresenter),

    sections: sections.map(sectionPresenter),

    topics: topics.map(topicPresenter),

    notes: notes.map(notePresenter),
  };

  const results = [
    ...groups.learningPaths.map((item) => ({
      type: "learningPath",
      data: item,
    })),

    ...groups.modules.map((item) => ({
      type: "module",
      data: item,
    })),

    ...groups.sections.map((item) => ({
      type: "section",
      data: item,
    })),

    ...groups.topics.map((item) => ({
      type: "topic",
      data: item,
    })),

    ...groups.notes.map((item) => ({
      type: "note",
      data: item,
    })),
  ];

  return {
    total: results.length,
    results,
    groups,
  };
};

export default searchService;