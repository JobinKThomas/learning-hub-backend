const Errors = Object.freeze({
  LEARNING_PATH_NOT_FOUND: "Learning Path not found",
  LEARNING_PATH_ALREADY_EXISTS: "Learning Path already exists",
  
  MODULE_NOT_FOUND:
    "Module not found.",

  SECTION_NOT_FOUND:
    "Section not found.",

  DUPLICATE_SLUG:
    "Slug already exists.",

  INVALID_PARENT_SECTION:
    "Invalid parent section.",

  SECTION_HAS_CHILDREN:
    "Cannot delete a section that has child sections.",
  
  TOPIC_NOT_FOUND: "Topic not found",

  NOTE_NOT_FOUND: "Note not found",

  NOTE_ALREADY_EXISTS: "Note already exists",
});

export default Errors;