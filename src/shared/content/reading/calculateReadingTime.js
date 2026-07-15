import {
  DEFAULT_READING_SPEED,
} from "../../constants/content.js";

/**
 * Calculate estimated reading time in minutes.
 *
 * @param {number} wordCount
 * @returns {number}
 */
const calculateReadingTime = (
  wordCount = 0
) => {
  if (
    !Number.isFinite(wordCount) ||
    wordCount <= 0
  ) {
    return 0;
  }

  return Math.ceil(
    wordCount /
    DEFAULT_READING_SPEED
  );
};

export default calculateReadingTime;