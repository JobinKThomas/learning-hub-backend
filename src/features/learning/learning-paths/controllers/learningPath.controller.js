import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";
import ApiResponse from "../../../../shared/ApiResponse.js";
import Messages from "../../../../shared/constants/messages.js";

import learningPathDto from "../dto/learningPath.dto.js";

import listLearningPathsService from "../services/application/listLearningPaths.service.js";
import createLearningPathService from "../services/application/createLearningPath.service.js";
import getLearningPathService from "../services/application/getLearningPathBySlug.service.js.js";
import getLearningPathBySlugService from "../services/application/getLearningPathBySlug.service.js";
import updateLearningPathStatusService from "../services/application/updateLearningPathStatus.service.js";
import updateLearningPathService from "../services/application/updateLearningPath.service.js";
import deleteLearningPathService from "../services/application/deleteLearningPath.service.js";

export const createLearningPath = asyncHandler(async (req, res) => {
  const learningPath = await createLearningPathService(
    req.body,
    req.user.id
  );

  return res.status(201).json(
    new ApiResponse({
      message: Messages.LEARNING_PATH_CREATED,
      data: learningPathDto(learningPath),
    })
  );
});

export const getLearningPaths =
asyncHandler(async (req,res)=>{

const result =
await listLearningPathsService(req.query);

return res.json(
new ApiResponse({

message:
Messages.SUCCESS,

data:result

})
);

});

export const getLearningPathBySlug =
asyncHandler(async (req,res)=>{

const learningPath =
await getLearningPathBySlugService(
req.params.slug
);

return res.json(
new ApiResponse({

message:Messages.SUCCESS,

data:learningPath

})
);

});

export const updateLearningPath =
asyncHandler(async (req,res)=>{

const learningPath =
await updateLearningPathService(

req.params.id,

req.body,

req.user.id

);

return res.json(

new ApiResponse({

message:
Messages.LEARNING_PATH_UPDATED,

data:learningPath

})

);

});

export const updateLearningPathStatus =
asyncHandler(async (req, res) => {

  const learningPath =
    await updateLearningPathStatusService(
      req.params.id,
      req.body.status,
      req.user.id
    );

  return res.json(
    new ApiResponse({
      message: Messages.LEARNING_PATH_UPDATED,
      data: learningPath,
    })
  );

});

export const deleteLearningPath =
asyncHandler(async (req, res) => {

  await deleteLearningPathService({
    id: req.params.id,
    userId: req.user.id,
  });

  return res.json(
    new ApiResponse({
      message: Messages.LEARNING_PATH_DELETED,
    })
  );

});