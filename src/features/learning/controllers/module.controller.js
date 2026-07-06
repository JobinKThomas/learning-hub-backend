import ApiResponse
from "../../../shared/ApiResponse.js";

import createModuleService
from "../services/createModule.service.js";

export const createModule=async(req,res,next)=>{

try{

const module=
await createModuleService(
    req.body,
    req.user._id
);

return res.status(201).json(

new ApiResponse({

message:"Module created",

data:module

})

);

}catch(error){

next(error);

}

}