import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SummarizationTool } from "@/components/ai/summarization-tool";
import { RecommendationsTool } from "@/components/ai/recommendations-tool";

export default function ToolsPage() {
  return (
    <div className="space-y-6">
        <div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI-Powered Tools</h1>
            <p className="text-muted-foreground">
                Leverage AI to streamline your coaching workflow.
            </p>
        </div>
        <Tabs defaultValue="summarization" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="summarization">Automated Content Summarization</TabsTrigger>
                <TabsTrigger value="recommendations">Personalized Recommendations</TabsTrigger>
            </TabsList>
            <TabsContent value="summarization">
                <SummarizationTool />
            </TabsContent>
            <TabsContent value="recommendations">
                <RecommendationsTool />
            </TabsContent>
        </Tabs>
    </div>
  )
}
