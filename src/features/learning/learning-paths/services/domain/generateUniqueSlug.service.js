import createSlug from "../../../../../shared/services/slugify.service.js";

import {
  existsBySlug,
} from "../../repositories/learningPath.repository.js";

const generateUniqueSlug = async (title) => {
  let slug = createSlug(title);

  let counter = 1;

  while (await existsBySlug(slug)) {
    counter++;

    slug = `${createSlug(title)}-${counter}`;
  }

  return slug;
};

export default generateUniqueSlug;