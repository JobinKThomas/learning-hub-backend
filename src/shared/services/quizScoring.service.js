const calculateQuizResult = ({
  quiz,
  questions,
  answers,
}) => {
  let score = 0;
  let totalPoints = 0;

  const submittedAnswers = [];

  for (const question of questions) {
    totalPoints += question.points;

    const answer = answers.find(
      (item) =>
        item.questionId.toString() ===
        question.id.toString()
    );

    const selectedOption =
      answer?.selectedOption || null;

    const isCorrect =
      selectedOption === question.correctOption;

    const pointsEarned = isCorrect
      ? question.points
      : 0;

    score += pointsEarned;

    submittedAnswers.push({
      question: question.id,

      selectedOption,

      correctOption:
        question.correctOption,

      isCorrect,

      pointsEarned,
    });
  }

  const percentage =
    totalPoints === 0
      ? 0
      : Number(
          (
            (score / totalPoints) *
            100
          ).toFixed(2)
        );

  return {
    answers: submittedAnswers,

    score,

    totalPoints,

    percentage,

    passed:
      percentage >= quiz.passingScore,
  };
};

export default calculateQuizResult;