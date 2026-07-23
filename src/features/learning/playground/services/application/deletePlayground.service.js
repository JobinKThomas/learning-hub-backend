import ensurePlaygroundExists from "../domain/ensurePlaygroundExists.service.js";

import * as playgroundRepository from "../../repositories/playground.repository.js";

const deletePlaygroundService =
  async (
    id,
    userId
  ) => {
    await ensurePlaygroundExists(
      id
    );

    await playgroundRepository.updatePlayground(
      id,
      {
        deletedAt: new Date(),
        updatedBy: userId,
      }
    );
  };

export default deletePlaygroundService;