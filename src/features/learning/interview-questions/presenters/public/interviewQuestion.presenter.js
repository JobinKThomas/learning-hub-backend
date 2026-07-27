const interviewQuestionPresenter = (
  interviewQuestion
) => ({
  id: interviewQuestion.id,

  title: interviewQuestion.title,

  slug: interviewQuestion.slug,

  shortDescription:
    interviewQuestion.shortDescription,

  difficulty:
    interviewQuestion.difficulty,

  category:
    interviewQuestion.category,

  experienceLevel:
    interviewQuestion.experienceLevel,

  tags:
    interviewQuestion.tags,

  order:
    interviewQuestion.order,
});

export default interviewQuestionPresenter;