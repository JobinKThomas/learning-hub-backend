/**
 * Normalize markdown without changing its meaning.
 *
 * Rules:
 * - Normalize line endings
 * - Remove trailing whitespace
 * - Collapse 3+ blank lines into 2
 * - Trim leading/trailing whitespace
 */
const normalizeMarkdown = (
  markdown = ""
) => {
  if (typeof markdown !== "string") {
    return "";
  }

  return markdown
    // Windows → Unix line endings
    .replace(/\r\n/g, "\n")

    // Remove trailing spaces/tabs
    .replace(/[ \t]+$/gm, "")

    // Collapse excessive blank lines
    .replace(/\n{3,}/g, "\n\n")

    // Trim document
    .trim();
};

export default normalizeMarkdown;