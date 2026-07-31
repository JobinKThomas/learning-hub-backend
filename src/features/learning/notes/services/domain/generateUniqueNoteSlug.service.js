// import generateUniqueSlug from
// "../../../../../shared/services/generateUniqueSlug.service.js";

// const generateUniqueNoteSlug =
// (options) => {
//     return generateUniqueSlug({
//         ...options
//     });
// };

// export default generateUniqueNoteSlug;

import generateUniqueSlug from "../../../../../shared/services/generateUniqueSlug.service.js";

const generateUniqueNoteSlug = ({
  repository,
  title,
  excludeId,
}) => {
  return generateUniqueSlug({
    repository,
    value: title,
    excludeId,
  });
};

export default generateUniqueNoteSlug;