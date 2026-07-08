const moduleDto = (module) => {
  if (!module) return null;

  const {
    id,
    title,
    slug,
    description,
    learningPath,
    difficulty,
    estimatedHours,
    estimatedSections,
    estimatedNotes,
    visibility,
    subscriptionType,
    order,
    status,
    createdAt,
    updatedAt,
  } = module;

  return {
    id,
    title,
    slug,
    description,
    learningPath,
    difficulty,
    estimatedHours,
    estimatedSections,
    estimatedNotes,
    visibility,
    subscriptionType,
    order,
    status,
    createdAt,
    updatedAt,
  };
};

export default moduleDto;