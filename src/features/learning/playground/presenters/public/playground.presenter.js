const playgroundPresenter = (playground) => ({
  id: playground.id,

  topic: playground.topic,

  title: playground.title,

  slug: playground.slug,

  shortDescription:
    playground.shortDescription,

  thumbnail: playground.thumbnail,

  icon: playground.icon,

  difficulty: playground.difficulty,

  tags: playground.tags,

  order: playground.order,

  editable: playground.editable,

  language: playground.language,
});

export default playgroundPresenter;