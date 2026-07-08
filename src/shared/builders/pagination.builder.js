const buildPaginationMeta = ({
  page,
  limit,
  total,
}) => {
  const totalPages =
    Math.ceil(total / limit);

  return {
    page,

    limit,

    total,

    totalPages,

    hasNext:
      page < totalPages,

    hasPrevious:
      page > 1,
  };
};

export default buildPaginationMeta;