import {
  DEFAULT_EXCERPT_LENGTH,
} from "../../constants/content.js";

/**
 * Build a readable excerpt from plain text.
 *
 * @param {string} plainText
 * @param {number} maxLength
 * @returns {string}
 */
const buildExcerpt = (
  plainText = "",
  maxLength = DEFAULT_EXCERPT_LENGTH
) => {
  if (typeof plainText !== "string") {
    return "";
  }

  const text = plainText
    .replace(/\s+/g, " ")
    .trim();

  if (!text) {
    return "";
  }

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
};

export default buildExcerpt;