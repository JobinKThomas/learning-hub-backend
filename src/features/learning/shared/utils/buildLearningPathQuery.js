const buildLearningPathQuery = (filters = {}) => {
  const query = {
    deletedAt: null,
  };

  if (filters.search) {
    query.$text = {
      $search: filters.search,
    };
  }

  if (filters.difficulty) {
    query.difficulty = filters.difficulty;
  }

  if (filters.visibility) {
    query.visibility = filters.visibility;
  }

  if (filters.subscriptionType) {
    query.subscriptionType = filters.subscriptionType;
  }

  if (filters.status) {
    query.status = filters.status;
  }

  return query;
};

export default buildLearningPathQuery;