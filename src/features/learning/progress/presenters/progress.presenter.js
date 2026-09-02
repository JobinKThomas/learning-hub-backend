const progressPresenter = (progress) => {
  if (!progress) {
    return null;
  }

  return {
    id:
      progress.id ??
      progress._id?.toString(),

    user:
      progress.user?.id ??
      progress.user?._id?.toString() ??
      progress.user,

    learningPath:
      progress.learningPath?.id ??
      progress.learningPath?._id?.toString() ??
      progress.learningPath,

    module:
      progress.module?.id ??
      progress.module?._id?.toString() ??
      progress.module,

    section:
      progress.section?.id ??
      progress.section?._id?.toString() ??
      progress.section,

    topic:
      progress.topic?.id ??
      progress.topic?._id?.toString() ??
      progress.topic,

    noteCompleted:
      progress.noteCompleted,

    resourceCompleted:
      progress.resourceCompleted,

    playgroundCompleted:
      progress.playgroundCompleted,

    quizCompleted:
      progress.quizCompleted,

    progress:
      progress.progress,

    lastVisitedAt:
      progress.lastVisitedAt,

    completedAt:
      progress.completedAt,

    createdAt:
      progress.createdAt,

    updatedAt:
      progress.updatedAt,
  };
};

export default progressPresenter;