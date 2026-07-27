const learningPathPresenter = (learningPath) => ({
  id: learningPath.id,

  title: learningPath.title,

  slug: learningPath.slug,

  shortDescription:
    learningPath.shortDescription,

  thumbnail:
    learningPath.thumbnail,

  banner:
    learningPath.banner,

  icon:
    learningPath.icon,

  difficulty:
    learningPath.difficulty,

  estimatedHours:
    learningPath.estimatedHours,

  estimatedModules:
    learningPath.estimatedModules,

  estimatedNotes:
    learningPath.estimatedNotes,

  totalContent:
    learningPath.totalContent,

  tags:
    learningPath.tags,
});

export default learningPathPresenter;