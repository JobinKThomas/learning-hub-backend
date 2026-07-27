const notePresenter = (note) => ({
  id: note.id,

  topic: note.topic,

  title: note.title,

  slug: note.slug,

  shortDescription: note.shortDescription,

  thumbnail: note.thumbnail,

  icon: note.icon,

  type: note.type,

  difficulty: note.difficulty,

  readingTime: note.readingTime,

  wordCount: note.wordCount,

  tags: note.tags,

  order: note.order,
});

export default notePresenter;