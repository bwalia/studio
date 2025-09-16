"use client";

import { useState } from "react";
import { BrainCircuit, Clipboard, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { summarizeContent } from "@/ai/flows/automated-content-summarization";
import { useToast } from "@/hooks/use-toast";

export function SummarizationTool() {
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    if (!content.trim()) {
      toast({
        title: "Content is empty",
        description: "Please paste some content to summarize.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setSummary("");
    try {
      const result = await summarizeContent({ content });
      setSummary(result.summary);
    } catch (error) {
      console.error(error);
      toast({
        title: "Summarization Failed",
        description: "An error occurred while generating the summary.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Content Summarizer</CardTitle>
        <CardDescription>
          Paste any content below to generate a quick summary using AI.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Paste your blog post, video script, or any text here..."
          className="min-h-[200px] text-base"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button onClick={handleSummarize} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <BrainCircuit className="mr-2 h-4 w-4" />
          )}
          Generate Summary
        </Button>
        {(isLoading || summary) && (
          <div className="space-y-2 rounded-lg border bg-secondary/50 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Generated Summary</h3>
              {summary && !isLoading && (
                 <Button variant="ghost" size="icon" onClick={handleCopy}>
                    {hasCopied ? <Check className="h-4 w-4 text-accent" /> : <Clipboard className="h-4 w-4" />}
                 </Button>
              )}
            </div>

            {isLoading && (
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-muted" />
                <div className="h-4 w-full animate-pulse rounded bg-muted" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              </div>
            )}
            
            {summary && !isLoading && (
                <p className="text-muted-foreground">{summary}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
