const playgroundPresenter = (
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

  language:
    playground.language,

  starterCode:
    playground.starterCode,

  solutionCode:
    playground.solutionCode,

  explanation:
    playground.explanation,

  estimatedMinutes:
    playground.estimatedMinutes,

  difficulty:
    playground.difficulty,

  visibility:
    playground.visibility,

  subscriptionType:
    playground.subscriptionType,

  order:
    playground.order,

  status:
    playground.status,

  createdAt:
    playground.createdAt,

  updatedAt:
    playground.updatedAt,
});

export default playgroundPresenter;