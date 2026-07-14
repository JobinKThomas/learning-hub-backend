const sectionPresenter = (
  section
) => ({
  id: section.id,

  title: section.title,

  slug: section.slug,

  shortDescription:
    section.shortDescription,

  description:
    section.description,

  learningPath:
    section.learningPath,

  module:
    section.module,

  parentSection:
    section.parentSection,

  level:
    section.level,

  childrenCount:
    section.childrenCount,

  difficulty:
    section.difficulty,

  visibility:
    section.visibility,

  subscriptionType:
    section.subscriptionType,

  order:
    section.order,

  status:
    section.status,

  createdAt:
    section.createdAt,

  updatedAt:
    section.updatedAt,
});

export default sectionPresenter;