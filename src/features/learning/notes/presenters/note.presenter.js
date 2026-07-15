const notePresenter = (note) => {
  if (!note) {
    return null;
  }

  const {
    id,
    topic,
    title,
    slug,
    type,
    shortDescription,
    description,
    markdown,
    plainText,
    wordCount,
    readingTime,
    excerpt,
    difficulty,
    visibility,
    subscriptionType,
    order,
    version,
    isLatest,
    status,
    createdAt,
    updatedAt,
  } = note;

  return {
    id,
    topic,
    title,
    slug,
    type,
    shortDescription,
    description,
    markdown,
    plainText,
    wordCount,
    readingTime,
    excerpt,
    difficulty,
    visibility,
    subscriptionType,
    order,
    version,
    isLatest,
    status,
    createdAt,
    updatedAt,
  };
};

export default notePresenter;