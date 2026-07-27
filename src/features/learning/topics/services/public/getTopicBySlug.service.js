import ApiError from "../../../../../shared/ApiError.js";

import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import { Messages } from "../../../../../shared/constants/messages.js";

import topicPresenter from "../../presenters/public/topic.presenter.js";

import notePresenter from "../../../notes/presenters/public/note.presenter.js";
import resourcePresenter from "../../../resources/presenters/public/resource.presenter.js";
import playgroundPresenter from "../../../playground/presenters/public/playground.presenter.js";
import quizPresenter from "../../../quizzes/presenters/public/quiz.presenter.js";
import interviewQuestionPresenter from "../../../interview-questions/presenters/public/interviewQuestion.presenter.js";

import * as topicRepository from "../../repositories/topic.repository.js";
import * as noteRepository from "../../../notes/repositories/note.repository.js";
import * as resourceRepository from "../../../resources/repositories/resource.repository.js";
import * as playgroundRepository from "../../../playground/repositories/playground.repository.js";
import * as quizRepository from "../../../quizzes/repositories/quiz.repository.js";
import * as interviewQuestionRepository from "../../../interview-questions/repositories/interviewQuestion.repository.js";

const PUBLIC_FILTERS = {
  status: ContentStatus.PUBLISHED,
  visibility: Visibility.PUBLIC,
  sort: "order",
  page: 1,
  limit: Number.MAX_SAFE_INTEGER,
};

const getTopicBySlugService = async (slug) => {
  const topic = await topicRepository.findTopicBySlug(
    slug,
    {
      status: ContentStatus.PUBLISHED,
      visibility: Visibility.PUBLIC,
    }
  );

  if (!topic) {
    throw new ApiError(
      404,
      Messages.TOPIC_NOT_FOUND
    );
  }

  const filters = {
    ...PUBLIC_FILTERS,
    topic: topic.id,
  };

  const [
    notes,
    resources,
    playgrounds,
    quizzes,
    interviewQuestions,
  ] = await Promise.all([
    noteRepository.findNotes(filters),
    resourceRepository.findResources(filters),
    playgroundRepository.findPlaygrounds(filters),
    quizRepository.findQuizzes(filters),
    interviewQuestionRepository.findInterviewQuestions(filters),
  ]);

  return {
    topic: topicPresenter(topic),

    notes: notes.map(notePresenter),

    resources: resources.map(resourcePresenter),

    playgrounds: playgrounds.map(
      playgroundPresenter
    ),

    quizzes: quizzes.map(quizPresenter),

    interviewQuestions:
      interviewQuestions.map(
        interviewQuestionPresenter
      ),
  };
};

export default getTopicBySlugService;