const playgroundDetailPresenter = (
  playground
) => ({
  id: playground.id,

  topic: playground.topic,

  title: playground.title,

  slug: playground.slug,

  shortDescription:
    playground.shortDescription,

  description:
    playground.description,

  language: playground.language,

  starterCode:
    playground.starterCode,

  solutionCode:
    playground.solutionCode,

  explanation:
    playground.explanation,

  difficulty:
    playground.difficulty,

  estimatedMinutes:
    playground.estimatedMinutes,

  subscriptionType:
    playground.subscriptionType,

  order:
    playground.order,

  createdAt:
    playground.createdAt,

  updatedAt:
    playground.updatedAt,
});

export default playgroundDetailPresenter;