const topicPresenter = (topic) => {
  if (!topic) {
    return null;
  }

  return {
    id: topic._id?.toString() || topic.id,

    title: topic.title,

    slug: topic.slug,

    shortDescription:
      topic.shortDescription,

    description:
      topic.description,

    learningPath:
      topic.learningPath,

    module:
      topic.module,

    section:
      topic.section,

    estimatedMinutes:
      topic.estimatedMinutes,

    thumbnail:
      topic.thumbnail,

    icon:
      topic.icon,

    visibility:
      topic.visibility,

    subscriptionType:
      topic.subscriptionType,

    order:
      topic.order,

    status:
      topic.status,

    tags:
      topic.tags,

    url:
      topic.url,

    createdAt:
      topic.createdAt,

    updatedAt:
      topic.updatedAt,
  };
};

export default topicPresenter;