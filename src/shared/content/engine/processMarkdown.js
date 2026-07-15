import normalizeMarkdown from "../markdown/normalizeMarkdown.js";
import markdownToPlainText from "../markdown/markdownToPlainText.js";

import calculateWordCount from "../reading/calculateWordCount.js";
import calculateReadingTime from "../reading/calculateReadingTime.js";

import buildExcerpt from "../presentation/buildExcerpt.js";


/**
 * Process markdown into reusable content metadata.
 *
 * @param {string} markdown
 * @returns {{
 *   markdown: string,
 *   plainText: string,
 *   wordCount: number,
 *   readingTime: number,
 *   excerpt: string
 * }}
 */
const processMarkdown = (
  markdown = ""
) => {
  const normalizedMarkdown =
    normalizeMarkdown(markdown);

  const plainText =
    markdownToPlainText(
      normalizedMarkdown
    );

  const wordCount =
    calculateWordCount(
      plainText
    );

  const readingTime =
    calculateReadingTime(
      wordCount
    );

  const excerpt =
    buildExcerpt(
      plainText
    );

  return {
    markdown:
      normalizedMarkdown,

    plainText,

    wordCount,

    readingTime,

    excerpt,
  };
};

export default processMarkdown;