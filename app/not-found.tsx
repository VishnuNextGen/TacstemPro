import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full">
          404 · Page Not Found
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Tactical Position Lost
        </h1>
        <p className="text-sm text-muted-foreground">
          The requested tactical analysis page or resource does not exist or has been relocated.
        </p>
        <div className="pt-2">
          <Button asChild className="gap-2">
            <Link href="/">
              <ArrowLeft className="size-4" />
              <span>Return to Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
