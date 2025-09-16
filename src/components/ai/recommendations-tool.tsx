"use client";

import { useState } from "react";
import { Sparkles, Loader2, FileText, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getPersonalizedRecommendations } from "@/ai/flows/personalized-resource-recommendations";
import { useToast } from "@/hooks/use-toast";
import { availableResources, clientSkillLevels, devOpsFocuses } from "@/lib/data";

export function RecommendationsTool() {
  const [skillLevel, setSkillLevel] = useState("");
  const [devOpsFocus, setDevOpsFocus] = useState("");
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGetRecommendations = async () => {
    if (!skillLevel || !devOpsFocus) {
      toast({
        title: "Missing Information",
        description: "Please select both a skill level and a DevOps focus.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setRecommendations([]);
    try {
      const result = await getPersonalizedRecommendations({
        clientSkillLevel: skillLevel,
        devOpsFocus: devOpsFocus,
        availableResources: availableResources,
      });
      setRecommendations(result.recommendedResources);
    } catch (error) {
      console.error(error);
      toast({
        title: "Recommendation Failed",
        description: "An error occurred while generating recommendations.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Resource Recommender</CardTitle>
        <CardDescription>
          Generate personalized resource recommendations for your clients based on their needs.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="skill-level">Client Skill Level</label>
            <Select onValueChange={setSkillLevel} value={skillLevel}>
              <SelectTrigger id="skill-level">
                <SelectValue placeholder="Select skill level" />
              </SelectTrigger>
              <SelectContent>
                {clientSkillLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="devops-focus">DevOps Focus Area</label>
            <Select onValueChange={setDevOpsFocus} value={devOpsFocus}>
              <SelectTrigger id="devops-focus">
                <SelectValue placeholder="Select focus area" />
              </SelectTrigger>
              <SelectContent>
                {devOpsFocuses.map((focus) => (
                  <SelectItem key={focus} value={focus}>
                    {focus}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleGetRecommendations} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Get Recommendations
        </Button>
        
        {(isLoading || recommendations.length > 0) && (
            <div className="space-y-2 rounded-lg border bg-secondary/50 p-4">
                 <h3 className="font-semibold">Recommended Resources</h3>
                {isLoading && Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-pulse rounded-full bg-muted" />
                        <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                    </div>
                ))}

                {!isLoading && (
                    <ul className="list-inside list-disc space-y-2">
                        {recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                {rec.includes('(Video)') ? <Video className="mt-1 h-4 w-4 flex-shrink-0" /> : <FileText className="mt-1 h-4 w-4 flex-shrink-0" />}
                                <span>{rec}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )}

      </CardContent>
    </Card>
  );
}
