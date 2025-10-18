import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';
import { AiInsight } from '@/components/landing/ai-insight';

export function Stack() {
  const { title, categories } = portfolioData.stack;

  return (
    <section id="stack" className="w-full py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl font-headline">
            {title}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name} className="flex flex-col text-center bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center space-y-4 pb-2">
                <CardTitle className="text-base font-medium flex flex-col items-center gap-2 text-primary">
                  {category.icon && <category.icon className="h-7 w-7" />}
                  {category.name}
                </CardTitle>
                <AiInsight
                  techStack={category.items.join(', ')}
                  userQuery={category.aiQueryHint}
                />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
