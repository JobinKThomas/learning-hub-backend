const buildSort = (sort = "latest") => {
  switch (sort) {
    case "oldest":
      return { createdAt: 1 };

    case "title":
      return { title: 1 };

    case "title_desc":
      return { title: -1 };

    case "updated":
      return { updatedAt: -1 };

    default:
      return { createdAt: -1 };
  }
};

export default buildSort;