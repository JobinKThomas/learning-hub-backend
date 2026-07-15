import createSlug from "../../../../../shared/services/slugify.service.js";

import {
  existsBySlug,
} from "../../repositories/topic.repository.js";

const generateUniqueTopicSlug = async (
  title,
  excludeId = null
) => {
  const baseSlug =
    createSlug(title);

  let slug = baseSlug;

  let counter = 1;

  while (
    await existsBySlug(
      slug,
      excludeId
    )
  ) {
    counter++;

    slug =
      `${baseSlug}-${counter}`;
  }

  return slug;
};

export default generateUniqueTopicSlug;