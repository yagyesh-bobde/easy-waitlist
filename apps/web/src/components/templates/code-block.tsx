import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { highlightCode } from "@/lib/shiki";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

/**
 * CodeBlock component with syntax highlighting using Shiki
 * Features:
 * - Syntax highlighting with Shiki
 * - Copy button
 * - Optional line numbers
 * - Scrollable container
 */
export default function CodeBlock({
  code,
  language = "tsx",
  title,
  showLineNumbers = false,
  className = "",
}: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // Detect theme (can be improved with a theme hook)
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Detect theme from document
    const isDark =
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const detectedTheme = isDark ? "dark" : "light";
    setTheme(detectedTheme);

    // Highlight code with detected theme
    highlightCode(code, language, detectedTheme)
      .then((html) => {
        setHighlightedCode(html);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to highlight code:", error);
        // Fallback to plain code
        setHighlightedCode(
          `<pre><code>${escapeHtml(code)}</code></pre>`
        );
        setIsLoading(false);
      });
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className={`relative rounded-lg border bg-muted/50 ${className}`}>
      {/* Header with title and copy button */}
      <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
        {title && (
          <span className="text-muted-foreground text-sm font-medium">
            {title}
          </span>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 gap-2 ml-auto"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="size-4" />
              <span className="text-xs">Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-4" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </Button>
      </div>

      {/* Code content */}
      <div className="relative overflow-x-auto">
        {isLoading ? (
          <div className="flex items-center justify-center p-8">
            <div className="text-muted-foreground text-sm">Loading code...</div>
          </div>
        ) : (
          <div
            className="code-block"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
            style={{
              // Ensure proper styling for Shiki output
              fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}
          />
        )}
      </div>

      {/* Custom styles for code block */}
      <style>{`
        .code-block pre {
          margin: 0;
          padding: 1rem;
          overflow-x: auto;
          background: transparent !important;
        }
        .code-block code {
          font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
        }
        .code-block pre code {
          display: block;
          width: 100%;
        }
        ${showLineNumbers ? `
        .code-block .line {
          display: block;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .code-block .line::before {
          content: attr(data-line);
          display: inline-block;
          width: 2rem;
          margin-right: 1rem;
          text-align: right;
          color: rgba(128, 128, 128, 0.5);
          user-select: none;
        }
        ` : ""}
      `}</style>
    </div>
  );
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

