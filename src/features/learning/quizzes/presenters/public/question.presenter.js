const questionPresenter = (question) => ({
  id: question.id,

  question: question.question,

  type: question.type,

  options: question.options,

  points: question.points,

  order: question.order,
});

export default questionPresenter;