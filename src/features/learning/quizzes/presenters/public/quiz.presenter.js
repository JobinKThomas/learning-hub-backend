const quizPresenter = (quiz) => ({
  id: quiz.id,

  topic: quiz.topic,

  title: quiz.title,

  slug: quiz.slug,

  shortDescription: quiz.shortDescription,

  thumbnail: quiz.thumbnail,

  icon: quiz.icon,

  difficulty: quiz.difficulty,

  tags: quiz.tags,

  order: quiz.order,

  duration: quiz.duration,

  totalQuestions: quiz.totalQuestions,

  passingScore: quiz.passingScore,

  totalMarks: quiz.totalMarks,
});

export default quizPresenter;