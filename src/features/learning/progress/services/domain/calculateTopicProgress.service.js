const calculateTopicProgress = ({
  noteExists = false,
  resourceExists = false,
  playgroundExists = false,
  quizExists = false,

  noteCompleted = false,
  resourceCompleted = false,
  playgroundCompleted = false,
  quizCompleted = false,
}) => {
  const contents = [
    {
      exists: noteExists,
      completed: noteCompleted,
    },
    {
      exists: resourceExists,
      completed: resourceCompleted,
    },
    {
      exists: playgroundExists,
      completed: playgroundCompleted,
    },
    {
      exists: quizExists,
      completed: quizCompleted,
    },
  ];

  const availableContents =
    contents.filter(
      (content) => content.exists
    );

  /**
   * No content available.
   */
  if (!availableContents.length) {
    return 0;
  }

  const completedContents =
    availableContents.filter(
      (content) => content.completed
    ).length;

  return Math.round(
    (completedContents /
      availableContents.length) *
      100
  );
};

export default calculateTopicProgress;