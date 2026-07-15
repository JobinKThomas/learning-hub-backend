const modulePresenter = (module) => {
  if (!module) {
    return null;
  }

  return {
    id:
      module.id ??
      module._id?.toString(),

    title: module.title,

    slug: module.slug,

    description:
      module.description ?? "",

    learningPath:
      module.learningPath,

    difficulty:
      module.difficulty,

    estimatedHours:
      module.estimatedHours,

    estimatedSections:
      module.estimatedSections,

    estimatedNotes:
      module.estimatedNotes,

    visibility:
      module.visibility,

    subscriptionType:
      module.subscriptionType,

    order:
      module.order,

    status:
      module.status,

    url:
      module.url,

    createdAt:
      module.createdAt,

    updatedAt:
      module.updatedAt,
  };
};

export default modulePresenter;