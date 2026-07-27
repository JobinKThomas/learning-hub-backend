const interviewQuestionDetailPresenter = (
  interviewQuestion
) => ({
  id: interviewQuestion.id,

  topic: interviewQuestion.topic,

  question: interviewQuestion.question,

  slug: interviewQuestion.slug,

  answer: interviewQuestion.answer,

  shortDescription:
    interviewQuestion.shortDescription,

  category:
    interviewQuestion.category,

  difficulty:
    interviewQuestion.difficulty,

  subscriptionType:
    interviewQuestion.subscriptionType,

  tags:
    interviewQuestion.tags,

  order:
    interviewQuestion.order,

  createdAt:
    interviewQuestion.createdAt,

  updatedAt:
    interviewQuestion.updatedAt,
});

export default interviewQuestionDetailPresenter;