import * as moduleRepository from "../../repositories/module.repository.js";

import ensureModuleExists from "../domain/ensureModuleExists.service.js";

const updateModuleStatusService = async (
  id,
  status,
  userId
) => {
  await ensureModuleExists(id);

  return moduleRepository.updateModule(
    id,
    {
      status,
      updatedBy: userId,
    }
  );
};

export default updateModuleStatusService;