const quizAttemptPresenter = (
  attempt
) => ({
  id: attempt.id,

  quiz: attempt.quiz,

  score: attempt.score,

  totalPoints:
    attempt.totalPoints,

  percentage:
    attempt.percentage,

  passed:
    attempt.passed,

  submittedAt:
    attempt.submittedAt,

  answers: attempt.answers.map(
    (answer) => ({
      question: answer.question,

      selectedOption:
        answer.selectedOption,

      correctOption:
        answer.correctOption,

      isCorrect:
        answer.isCorrect,

      pointsEarned:
        answer.pointsEarned,
    })
  ),
});

export default quizAttemptPresenter;