const modulePresenter = (module) => ({
  id: module.id,

  learningPath: module.learningPath,

  title: module.title,

  slug: module.slug,

  shortDescription: module.shortDescription,

  thumbnail: module.thumbnail,

  icon: module.icon,

  difficulty: module.difficulty,

  estimatedHours: module.estimatedHours,

  estimatedSections: module.estimatedSections,

  estimatedNotes: module.estimatedNotes,

  totalContent: module.totalContent,

  order: module.order,

  tags: module.tags,
});

export default modulePresenter;