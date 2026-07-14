import createSlug from "../services/slugify.service.js";

const generateUniqueSlug = async ({
  repository,
  value,
  excludeId = null,
}) => {
  const baseSlug = createSlug(value);

  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const exists = await repository.findBySlug(slug);

    if (!exists || exists._id.toString() === excludeId?.toString()) {
      break;
    }

    slug = `${baseSlug}-${counter++}`;
  }

  return slug;
};

export default generateUniqueSlug;