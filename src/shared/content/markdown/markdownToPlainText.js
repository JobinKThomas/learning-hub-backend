/**
 * Convert Markdown into readable plain text.
 *
 * This implementation intentionally keeps the API stable.
 * Internally it can later be replaced by remark without
 * affecting callers.
 */
const markdownToPlainText = (
  markdown = ""
) => {
  if (typeof markdown !== "string") {
    return "";
  }

  return markdown
    // Remove fenced code blocks
    .replace(/```[\s\S]*?```/g, "")

    // Remove inline code
    .replace(/`([^`]*)`/g, "$1")

    // Images → remove completely
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")

    // Links → keep label
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")

    // Headings
    .replace(/^#{1,6}\s+/gm, "")

    // Blockquotes
    .replace(/^>\s?/gm, "")

    // Bold / Italic
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")

    // Horizontal rules
    .replace(/^(-{3,}|_{3,}|\*{3,})$/gm, "")

    // List markers
    .replace(/^\s*([-*+]|\d+\.)\s+/gm, "")

    // Collapse whitespace
    .replace(/\n{3,}/g, "\n\n")
    .trim();
};

export default markdownToPlainText;