const calculateAverageProgress = (progressValues = []) => {
  if (!progressValues.length) {
    return 0;
  }

  const total = progressValues.reduce(
    (sum, value) => sum + Number(value || 0),
    0
  );

  return Math.round(
    total / progressValues.length
  );
};

export default calculateAverageProgress;