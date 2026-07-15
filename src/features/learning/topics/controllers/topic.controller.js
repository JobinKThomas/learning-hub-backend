import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import Messages from "../../../../shared/constants/messages.js";

import topicPresenter from "../presenters/topic.presenter.js";

import createTopicService from "../services/application/createTopic.service.js";
import listTopicsService from "../services/application/listTopics.service.js";
import getTopicBySlugService from "../services/application/getTopicBySlug.service.js";
import updateTopicService from "../services/application/updateTopic.service.js";
import updateTopicStatusService from "../services/application/updateTopicStatus.service.js";
import deleteTopicService from "../services/application/deleteTopic.service.js";

export const createTopic = asyncHandler(async (req, res) => {
  const topic = await createTopicService(
    req.body,
    req.user.id
  );

  return res.status(201).json(
    new ApiResponse({
      message: Messages.TOPIC_CREATED,
      data: topicPresenter(topic),
    })
  );
});

export const listTopics = asyncHandler(async (req, res) => {
  const result = await listTopicsService(
    req.query
  );

  return res.json(
    new ApiResponse({
      message: Messages.SUCCESS,
      data: {
        ...result,
        items: result.items.map(
          topicPresenter
        ),
      },
    })
  );
});

export const getTopicBySlug = asyncHandler(async (req, res) => {
  const topic = await getTopicBySlugService(
    req.params.slug
  );

  return res.json(
    new ApiResponse({
      message: Messages.SUCCESS,
      data: topicPresenter(topic),
    })
  );
});

export const updateTopic = asyncHandler(async (req, res) => {
  const topic = await updateTopicService(
    req.params.id,
    req.body,
    req.user.id
  );

  return res.json(
    new ApiResponse({
      message: Messages.TOPIC_UPDATED,
      data: topicPresenter(topic),
    })
  );
});

export const updateTopicStatus = asyncHandler(async (req, res) => {
  const topic =
    await updateTopicStatusService(
      req.params.id,
      req.body.status,
      req.user.id
    );

  return res.json(
    new ApiResponse({
      message:
        Messages.TOPIC_STATUS_UPDATED,
      data: topicPresenter(topic),
    })
  );
});

export const deleteTopic = asyncHandler(async (req, res) => {
  await deleteTopicService(
    req.params.id,
    req.user.id
  );

  return res.json(
    new ApiResponse({
      message:
        Messages.TOPIC_DELETED,
    })
  );
});