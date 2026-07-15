const calculateSectionLevel = (parentSection) => {
  if (!parentSection) {
    return 1;
  }

  return parentSection.level + 1;
};

export default calculateSectionLevel;