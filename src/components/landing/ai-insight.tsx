'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sparkles, Loader2 } from 'lucide-react';
import { fetchAiInsightAction } from '@/app/actions';

interface AiInsightProps {
  techStack: string;
  userQuery: string;
}

export function AiInsight({ techStack, userQuery }: AiInsightProps) {
  const [insight, setInsight] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFetchInsight = async () => {
    if (insight) {
      setIsOpen(true);
      return;
    }
    setIsLoading(true);
    setIsOpen(true);
    const result = await fetchAiInsightAction({ techStack, userQuery });
    setInsight(result.insight);
    setIsLoading(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleFetchInsight}
          aria-label="Get AI Insight"
          className="h-8 w-8 text-muted-foreground hover:text-accent"
        >
          <Sparkles className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">AI Insight</h4>
            {isLoading ? (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                {insight}
              </p>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
