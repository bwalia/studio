import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { contentData } from "@/lib/data";
import ContentCard from "@/components/content-card";

export default function Dashboard() {
  const topics = ["All", ...Array.from(new Set(contentData.map(c => c.topic)))];
  const publishedContent = contentData
    .filter(c => c.status === 'Published')
    .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Published Content
        </h1>
        <p className="text-muted-foreground">
          A filterable, chronological display of your published work.
        </p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList>
          {topics.map(topic => (
            <TabsTrigger key={topic} value={topic}>{topic}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="All">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {publishedContent.map(item => (
              <ContentCard key={item.id} content={item} />
            ))}
          </div>
        </TabsContent>
        
        {topics.slice(1).map(topic => (
          <TabsContent key={topic} value={topic}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {publishedContent.filter(c => c.topic === topic).map(item => (
                <ContentCard key={item.id} content={item} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
