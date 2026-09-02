import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import Messages from "../../../../shared/constants/messages.js";
import ProgressType from "../../../../shared/enums/progressType.enum.js";

import * as progressRepository from "../repositories/progress.repository.js";

import progressPresenter from "../presenters/progress.presenter.js";

import updateTopicProgress from "../services/application/updateTopicProgress.service.js";
import getSectionProgress from "../services/application/getSectionProgress.service.js";
import getModuleProgress from "../services/application/getModuleProgress.service.js";
import getLearningPathProgress from "../services/application/getLearningPathProgress.service.js";
import getProgressDashboard from "../services/application/getProgressDashboard.service.js";
import getContinueLearning  from "../services/application/getContinueLearning.service.js";
import completeTopicContent  from "../services/application/completeTopicContent.service.js";

/**
 * Complete topic content
 */
export const completeTopicContent = asyncHandler(
  async (req, res) => {
    const progress =
      await updateTopicProgress({
        userId: req.user.id,
        topicId: req.params.topicId,
        type: req.body.type,
      });

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: progressPresenter(progress),
      })
    );
  }
);

/**
 * Get Topic Progress
 */
export const getTopicProgress = asyncHandler(
  async (req, res) => {
    const progress =
      await progressRepository.findProgressByUserAndTopic(
        req.user.id,
        req.params.topicId
      );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: progress
          ? progressPresenter(progress)
          : {
              topic: req.params.topicId,
              noteCompleted: false,
              resourceCompleted: false,
              playgroundCompleted: false,
              quizCompleted: false,
              progress: 0,
              lastVisitedAt: null,
              completedAt: null,
            }
      })
    );
  }
);

/**
 * Get Section Progress
 */
export const getSectionProgressController =
  asyncHandler(async (req, res) => {
    const result =
      await getSectionProgress({
        userId: req.user.id,
        sectionId: req.params.sectionId,
      });

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: result,
      })
    );
  });

/**
 * Get Module Progress
 */
export const getSectionProgressController =
  asyncHandler(async (req, res) => {
    const result =
      await getSectionProgress({
        userId: req.user.id,
        sectionId: req.params.sectionId,
      });

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: result,
      })
    );
  });

/**
 * Get Learning Path Progress
 */
export const getLearningPathProgressController =
  asyncHandler(async (req, res) => {
    const result =
      await getLearningPathProgress({
        userId: req.user.id,
        learningPathId:
          req.params.learningPathId,
      });

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: result,
      })
    );
  });

/**
 * Get Progress Dashboard
 */
export const getProgressDashboardController =
  asyncHandler(async (req, res) => {
    const result =
      await getProgressDashboard(
        req.user.id
      );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: result,
      })
    );
  });

/**
 * Get Continue Learning
 */
export const getContinueLearningController =
  asyncHandler(async (req, res) => {
    const result =
      await getContinueLearning(
        req.user.id
      );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: result,
      })
    );
  });

/**
 * Complete Topic Content
 */
export const completeTopicContentController =
  asyncHandler(async (req, res) => {
    const result =
      await completeTopicContent({
        userId: req.user.id,
        topicId: req.params.topicId,
        type: req.body.type,
      });

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: result,
      })
    );
  });