const buildSectionPath = (parentSection) => {
  if (!parentSection) {
    return "";
  }

  return parentSection.path
    ? `${parentSection.path}/${parentSection.slug}`
    : parentSection.slug;
};

export default buildSectionPath;