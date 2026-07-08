const buildContentQuery = (filters = {}) => {
  const {
    search,
    visibility,
    status,
    subscriptionType,
    difficulty,
    learningPath,
    module,
    section,
  } = filters;

  const query = {
    deletedAt: null,
  };

  if (search) {
    query.$text = {
      $search: search,
    };
  }

  if (visibility) query.visibility = visibility;

  if (status) query.status = status;

  if (subscriptionType)
    query.subscriptionType = subscriptionType;

  if (difficulty)
    query.difficulty = difficulty;

  if (learningPath)
    query.learningPath = learningPath;

  if (module)
    query.module = module;

  if (section)
    query.section = section;

  return query;
};

export default buildContentQuery;