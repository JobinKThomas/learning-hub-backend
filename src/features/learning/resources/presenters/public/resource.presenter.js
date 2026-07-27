const resourcePresenter = (resource) => ({
  id: resource.id,

  topic: resource.topic,

  title: resource.title,

  slug: resource.slug,

  shortDescription: resource.shortDescription,

  thumbnail: resource.thumbnail,

  icon: resource.icon,

  difficulty: resource.difficulty,

  type: resource.type,

  provider: resource.provider,

  url: resource.url,

  duration: resource.duration,

  tags: resource.tags,

  order: resource.order,
});

export default resourcePresenter;