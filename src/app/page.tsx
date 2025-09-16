import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, CalendarCheck, FileText, Video, Sparkles, Server, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import Logo from "@/components/logo";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { contentData } from "@/lib/data";

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');
  const publishedContent = contentData.filter(c => c.status === 'Published').slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="flex items-center gap-4">
           <Button variant="ghost" asChild>
            <Link href="#features">Features</Link>
          </Button>
           <Button variant="ghost" asChild>
            <Link href="#videos">Videos</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Your All-In-One DevOps & SRE Coaching Platform
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                  Manage content, schedule training, and empower your clients with AI-driven insights. Workstation Solutions Ltd is the ultimate tool for the modern tech coach.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/dashboard">
                      Get Started <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#features">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-[400px]">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="rounded-xl object-cover"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
                 <div className="absolute -bottom-8 -right-8 -z-10 hidden h-full w-full rounded-xl bg-primary/10 lg:block" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full bg-background py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features Built for Coaches
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Streamline your workflow and deliver exceptional value to your clients.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <FileText className="h-8 w-8 text-primary" />
                  <CardTitle>Content Repository</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>A central place to upload and manage blog posts, videos, and training materials with ease.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <CalendarCheck className="h-8 w-8 text-primary" />
                  <CardTitle>1-1 Training Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Effortlessly schedule and manage one-on-one training sessions with your clients.</CardDescription>
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                  <CardTitle>AI Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Suggest relevant resources to clients based on their skill level and focus using AI.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <CardTitle>AI Content Summarization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Automatically generate concise summaries of your content to provide quick overviews.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Server className="h-8 w-8 text-primary" />
                  <CardTitle>Content Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Schedule the publication of your blog posts and videos to different platforms.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Code className="h-8 w-8 text-primary" />
                  <CardTitle>Content Display</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Showcase your published content in an appealing, filterable, and chronological display.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="videos" className="w-full py-20 md:py-32">
          <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
                Latest Videos
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Check out some of our latest videos.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {publishedContent.map((item) => {
                const placeholder = PlaceHolderImages.find(p => p.id === item.id);
                return (
                  <Card key={item.id} className="overflow-hidden text-left">
                    <Image
                      src={placeholder?.imageUrl || ''}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="aspect-video w-full object-cover"
                      data-ai-hint={placeholder?.imageHint || ''}
                    />
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                        {item.type === "Blog Post" ? <FileText className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                        <span>{item.type}</span>
                        <span className="mx-1">·</span>
                        <span>{new Date(item.publicationDate).toLocaleDateString()}</span>
                      </div>
                      <CardTitle className="font-headline">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="https://www.youtube.com/@balinderwalia" target="_blank" rel="noopener noreferrer">
                  More Videos on YouTube <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full bg-background py-20 md:py-32">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Elevate Your Coaching?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Fill out the form below to get in touch and learn more about my coaching services.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg">
              <Card>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
          <Logo />
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Workstation Solutions Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
