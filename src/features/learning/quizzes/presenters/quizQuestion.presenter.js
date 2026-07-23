const questionPresenter = (question) => ({
  id: question.id,

  quiz: question.quiz,

  question: question.question,

  explanation: question.explanation,

  type: question.type,

  options: question.options,

  correctOption: question.correctOption,

  points: question.points,

  order: question.order,

  createdAt: question.createdAt,

  updatedAt: question.updatedAt,
});

export default questionPresenter;