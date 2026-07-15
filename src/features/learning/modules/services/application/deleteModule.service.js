import * as moduleRepository from "../../repositories/module.repository.js";

import ensureModuleExists from "../domain/ensureModuleExists.service.js";

const deleteModuleService = async (
  id,
  userId
) => {
  await ensureModuleExists(id);

  await moduleRepository.softDeleteModule(
    id,
    userId
  );
};

export default deleteModuleService;