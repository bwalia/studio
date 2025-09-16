import { PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { trainingSessions } from "@/lib/data";
import { format } from "date-fns";

export default function SchedulePage() {
  const sortedSessions = trainingSessions.sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle className="font-headline">Training Schedule</CardTitle>
                <CardDescription>
                Manage your one-on-one training sessions with clients.
                </CardDescription>
            </div>
            <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                New Session
                </span>
            </Button>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="multiple"
              selected={trainingSessions.map(s => s.date)}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {sortedSessions.map((session) => (
              <div key={session.id} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                    <div className="flex flex-col items-center justify-center rounded-md bg-secondary p-2 text-secondary-foreground">
                        <span className="text-sm font-medium">{format(session.date, 'MMM')}</span>
                        <span className="text-xl font-bold">{format(session.date, 'd')}</span>
                    </div>
                </div>
                <div className="grid gap-1">
                  <p className="font-semibold">{session.clientName}</p>
                  <p className="text-sm text-muted-foreground">
                    {session.topic}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{format(session.date, 'h:mm a')}</span>
                  </div>
                </div>
              </div>
            ))}
             {sortedSessions.length === 0 && (
              <p className="text-sm text-muted-foreground">No upcoming sessions.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
