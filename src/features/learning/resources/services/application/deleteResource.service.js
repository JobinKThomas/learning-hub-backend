import ensureResourceExists from "../domain/ensureResourceExists.service.js";

import * as resourceRepository from "../../repositories/resource.repository.js";

const deleteResourceService = async (
  id,
  userId
) => {
  await ensureResourceExists(id);

  await resourceRepository.updateResource(
    id,
    {
      deletedAt: new Date(),
      updatedBy: userId,
    }
  );
};

export default deleteResourceService;