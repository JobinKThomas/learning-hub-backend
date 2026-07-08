import slugify from "slugify";

const createSlug = (value) => {
  return slugify(value, {
    lower: true,
    strict: true,
    trim: true,
  });
};

export default createSlug;