import playgroundPresenter from "../../presenters/playground.presenter.js";

import ensurePlaygroundExists from "../domain/ensurePlaygroundExists.service.js";

import * as playgroundRepository from "../../repositories/playground.repository.js";

const updatePlaygroundStatusService =
  async (
    id,
    status,
    userId
  ) => {
    await ensurePlaygroundExists(
      id
    );

    const updatedPlayground =
      await playgroundRepository.updatePlayground(
        id,
        {
          status,
          updatedBy: userId,
        }
      );

    return playgroundPresenter(
      updatedPlayground
    );
  };

export default updatePlaygroundStatusService;