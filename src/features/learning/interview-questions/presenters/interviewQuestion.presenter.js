const interviewQuestionPresenter = (
  interviewQuestion
) => ({
  id: interviewQuestion.id,

  topic: interviewQuestion.topic,

  question: interviewQuestion.question,

  answer: interviewQuestion.answer,

  shortDescription:
    interviewQuestion.shortDescription,

  category:
    interviewQuestion.category,

  tags:
    interviewQuestion.tags,

  difficulty:
    interviewQuestion.difficulty,

  visibility:
    interviewQuestion.visibility,

  subscriptionType:
    interviewQuestion.subscriptionType,

  order:
    interviewQuestion.order,

  status:
    interviewQuestion.status,

  createdAt:
    interviewQuestion.createdAt,

  updatedAt:
    interviewQuestion.updatedAt,
});

export default interviewQuestionPresenter;