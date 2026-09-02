const calculateSectionProgress = ({
  progresses = [],
}) => {
  if (!progresses.length) {
    return 0;
  }

  const totalProgress = progresses.reduce(
    (sum, progress) => sum + (progress.progress || 0),
    0
  );

  return Math.round(
    totalProgress / progresses.length
  );
};

export default calculateSectionProgress;