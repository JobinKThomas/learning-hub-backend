import generateUniqueSlug from
"../../../../../shared/services/generateUniqueSlug.service.js";

const generateUniqueNoteSlug =
(options) => {
    return generateUniqueSlug({
        ...options
    });
};

export default generateUniqueNoteSlug;