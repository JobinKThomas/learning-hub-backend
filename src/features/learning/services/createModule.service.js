import ApiError from "../../../shared/ApiError.js";

import * as repository
from "../repositories/module.repository.js";

const createModule = async (payload,userId)=>{

    const exists=
    await repository.findBySlug(payload.slug);

    if(exists){

        throw new ApiError(
            409,
            "Module already exists"
        );

    }

    return repository.createModule({

        ...payload,

        createdBy:userId

    });

}

export default createModule;