const quizPresenter = (quiz) => ({
  id: quiz.id,

  topic: quiz.topic,

  title: quiz.title,

  slug: quiz.slug,

  shortDescription:
    quiz.shortDescription,

  description:
    quiz.description,

  instructions:
    quiz.instructions,

  passingScore:
    quiz.passingScore,

  timeLimit:
    quiz.timeLimit,

  difficulty:
    quiz.difficulty,

  visibility:
    quiz.visibility,

  subscriptionType:
    quiz.subscriptionType,

  order:
    quiz.order,

  status:
    quiz.status,

  createdAt:
    quiz.createdAt,

  updatedAt:
    quiz.updatedAt,
});

export default quizPresenter;