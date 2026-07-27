const noteDetailPresenter = (note) => ({
  id: note.id,

  topic: note.topic,

  title: note.title,

  slug: note.slug,

  shortDescription: note.shortDescription,

  excerpt: note.excerpt,

  thumbnail: note.thumbnail,

  icon: note.icon,

  type: note.type,

  difficulty: note.difficulty,

  markdown: note.markdown,

  plainText: note.plainText,

  wordCount: note.wordCount,

  readingTime: note.readingTime,

  estimatedPracticeTime:
    note.estimatedPracticeTime,

  tags: note.tags,

  order: note.order,

  version: note.version,

  isLatest: note.isLatest,

  createdAt: note.createdAt,

  updatedAt: note.updatedAt,
});

export default noteDetailPresenter;