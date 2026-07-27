const resourceDetailPresenter = (resource) => ({
  id: resource.id,

  topic: resource.topic,

  title: resource.title,

  slug: resource.slug,

  type: resource.type,

  url: resource.url,

  shortDescription: resource.shortDescription,

  description: resource.description,

  difficulty: resource.difficulty,

  subscriptionType: resource.subscriptionType,

  order: resource.order,

  createdAt: resource.createdAt,

  updatedAt: resource.updatedAt,
});

export default resourceDetailPresenter;