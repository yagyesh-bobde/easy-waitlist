import { getHighlighter, type Highlighter } from "shiki";

let highlighter: Highlighter | null = null;

/**
 * Get or create a Shiki highlighter instance
 * This is a singleton pattern to avoid recreating the highlighter on every render
 */
export async function getShikiHighlighter(): Promise<Highlighter> {
  if (highlighter) {
    return highlighter;
  }

  highlighter = await getHighlighter({
    themes: ["github-dark", "github-light"],
    langs: ["tsx", "ts", "jsx", "js", "css", "json", "md"],
  });

  return highlighter;
}

/**
 * Highlight code using Shiki
 */
export async function highlightCode(
  code: string,
  language: string = "tsx",
  theme: "light" | "dark" = "dark"
): Promise<string> {
  const shiki = await getShikiHighlighter();
  const themeName = theme === "dark" ? "github-dark" : "github-light";
  
  try {
    return shiki.codeToHtml(code, {
      lang: language,
      theme: themeName,
    });
  } catch (error) {
    // Fallback to plain text if language is not supported
    console.warn(`Language ${language} not supported, falling back to plain text`);
    return shiki.codeToHtml(code, {
      lang: "text",
      theme: themeName,
    });
  }
}

