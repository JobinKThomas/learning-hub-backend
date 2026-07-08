import ApiResponse from "../../../../shared/ApiResponse";
import { Messages } from "../../../../shared/constants/messages";
import deleteModuleService from "../services/application/deleteModule.service";
import listModulesService from "../services/application/listModules.service";
import updateModuleStatusService from "../services/application/updateModuleStatus.service";

export const listModules =
asyncHandler(async (req,res)=>{

const result =
await listModulesService({

learningPathId:
req.params.learningPathId,

...req.query

});

return res.json(

new ApiResponse({

message:
Messages.SUCCESS,

data:result

})

);

});

export const getModuleBySlug =
asyncHandler(async (req, res) => {

  const module =
    await getModuleBySlugService(
      req.params.slug
    );

  return res.json(
    new ApiResponse({
      message: Messages.SUCCESS,
      data: module,
    })
  );

});

export const updateModule =
asyncHandler(async (req, res) => {

  const module =
    await updateModuleService({
      id: req.params.id,
      payload: req.body,
      userId: req.user.id,
    });

  return res.json(
    new ApiResponse({
      message: Messages.MODULE_UPDATED,
      data: module,
    })
  );

});

export const updateModuleStatus =
asyncHandler(async (req, res) => {

    const module =
        await updateModuleStatusService({
            id: req.params.id,
            status: req.body.status,
            userId: req.user.id,
        });

    return res.json(
        new ApiResponse({
            message: Messages.MODULE_UPDATED,
            data: modulePresenter(module)
        })
    );

});

export const deleteModule =
asyncHandler(async (req, res) => {

    await deleteModuleService({
        id: req.params.id,
        userId: req.user.id,
    });

    return res.json(
        new ApiResponse({
            message: Messages.MODULE_DELETED,
        })
    );

});