import ensureResourceExists from "../domain/ensureResourceExists.service.js";

import * as resourceRepository from "../../repositories/resource.repository.js";

const updateResourceStatusService = async (
  id,
  status,
  userId
) => {
  await ensureResourceExists(id);

  return resourceRepository.updateResource(
    id,
    {
      status,
      updatedBy: userId,
    }
  );
};

export default updateResourceStatusService;