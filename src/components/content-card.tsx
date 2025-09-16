import Image from "next/image";
import { FileText, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Content } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface ContentCardProps {
  content: Content;
}

export default function ContentCard({ content }: ContentCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === content.id);

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="p-0">
        <Image
            src={placeholder?.imageUrl || `https://picsum.photos/seed/${content.id}/600/400`}
            alt={content.title}
            width={600}
            height={400}
            className="aspect-video w-full rounded-t-lg object-cover"
            data-ai-hint={placeholder?.imageHint || 'abstract tech'}
        />
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <Badge variant="outline" className="mb-2">{content.topic}</Badge>
        <CardTitle className="font-headline text-lg">{content.title}</CardTitle>
        <CardDescription className="mt-2 line-clamp-3 text-sm">{content.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
                {content.type === "Blog Post" ? <FileText className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                <span>{content.type}</span>
            </div>
            <span>{new Date(content.publicationDate).toLocaleDateString()}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
