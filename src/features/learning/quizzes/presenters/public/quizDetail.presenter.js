const quizDetailPresenter = (quiz) => ({
  id: quiz.id,

  topic: quiz.topic,

  title: quiz.title,

  slug: quiz.slug,

  shortDescription: quiz.shortDescription,

  description: quiz.description,

  instructions: quiz.instructions,

  passingScore: quiz.passingScore,

  timeLimit: quiz.timeLimit,

  difficulty: quiz.difficulty,

  subscriptionType: quiz.subscriptionType,

  order: quiz.order,

  createdAt: quiz.createdAt,

  updatedAt: quiz.updatedAt,
});

export default quizDetailPresenter;