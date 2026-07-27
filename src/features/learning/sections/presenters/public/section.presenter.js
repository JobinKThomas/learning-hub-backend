const sectionPresenter = (section) => ({
  id: section.id,

  module: section.module,

  title: section.title,

  slug: section.slug,

  shortDescription: section.shortDescription,

  thumbnail: section.thumbnail,

  icon: section.icon,

  difficulty: section.difficulty,

  estimatedHours: section.estimatedHours,

  estimatedTopics: section.estimatedTopics,

  estimatedNotes: section.estimatedNotes,

  totalContent: section.totalContent,

  order: section.order,

  tags: section.tags,
});

export default sectionPresenter;