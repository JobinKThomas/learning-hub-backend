const learningPathPresenter = (learningPath) => {
  if (!learningPath) return null;

  const {
    id,
    title,
    slug,
    shortDescription,
    description,
    thumbnail,
    banner,
    icon,
    difficulty,
    visibility,
    subscriptionType,
    estimatedHours,
    estimatedModules,
    estimatedNotes,
    totalContent,
    tags,
    order,
    status,
    createdAt,
    updatedAt,
    _id
  } = learningPath;

  return {
    id,
    title,
    slug,
    shortDescription,
    description,
    thumbnail,
    banner,
    icon,
    difficulty,
    visibility,
    subscriptionType,
    estimatedHours,
    estimatedModules,
    estimatedNotes,
    totalContent,
    tags,
    order,
    status,
    createdAt,
    updatedAt,
    _id
  };
};

export default learningPathPresenter;