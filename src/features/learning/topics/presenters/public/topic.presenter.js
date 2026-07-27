const topicPresenter = (topic) => ({
  id: topic.id,

  section: topic.section,

  title: topic.title,

  slug: topic.slug,

  shortDescription: topic.shortDescription,

  thumbnail: topic.thumbnail,

  icon: topic.icon,

  difficulty: topic.difficulty,

  estimatedHours: topic.estimatedHours,

  estimatedReadTime: topic.estimatedReadTime,

  estimatedPracticeTime: topic.estimatedPracticeTime,

  order: topic.order,

  tags: topic.tags,

  hasNotes: topic.estimatedNotes > 0,

  hasResources: topic.estimatedResources > 0,

  hasPlaygrounds: topic.estimatedPlaygrounds > 0,

  hasQuizzes: topic.estimatedQuizzes > 0,

  hasInterviewQuestions:
    topic.estimatedInterviewQuestions > 0,

  totalContent: topic.totalContent,
});

export default topicPresenter;