import ApiError from "../../../../../shared/ApiError.js";

import * as playgroundRepository from "../../repositories/playground.repository.js";

const ensurePlaygroundExists = async (
  id
) => {
  const playground =
    await playgroundRepository.findPlaygroundById(
      id
    );

  if (!playground) {
    throw new ApiError(
      404,
      "Playground not found"
    );
  }

  return playground;
};

export default ensurePlaygroundExists;