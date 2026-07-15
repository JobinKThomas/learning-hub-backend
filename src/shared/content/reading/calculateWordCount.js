/**
 * Calculate the total number of words in plain text.
 *
 * @param {string} plainText
 * @returns {number}
 */
const calculateWordCount = (
  plainText = ""
) => {
  if (typeof plainText !== "string") {
    return 0;
  }

  const normalizedText = plainText.trim();

  if (!normalizedText) {
    return 0;
  }

  return normalizedText
    .split(/\s+/)
    .filter(Boolean)
    .length;
};

export default calculateWordCount;