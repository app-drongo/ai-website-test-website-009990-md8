'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CloudIcon } from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Build the Future of Tech',
  description:
    'A minimal platform for modern web applications. Clean, fast, and developer-focused.',
  primaryCTA: 'Get Started',
  secondaryCTA: 'View Docs',
  primaryCTAHref: '/get-started',
  secondaryCTAHref: '/docs',
  showIcon: true,
  iconUrl: '',
  iconAlt: 'Tech platform logo',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();

  return (
    <section id="hero" className="relative min-h-[80vh] overflow-hidden bg-background">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[80vh] flex-col items-center justify-center py-20 text-center">
          {/* Icon/Logo */}
          {config.showIcon && (
            <div className="mb-12 flex h-32 w-32 items-center justify-center rounded-full bg-foreground text-background">
              {config.iconUrl ? (
                <Image
                  src={config.iconUrl}
                  alt={config.iconAlt}
                  width={128}
                  height={128}
                  className="rounded-full"
                  data-editable-src="iconUrl"
                />
              ) : (
                <CloudIcon className="h-16 w-16" />
              )}
            </div>
          )}

          {/* Main Title */}
          <h1
            data-editable="title"
            className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {config.title}
          </h1>

          {/* Description */}
          <p
            data-editable="description"
            className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            {config.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group px-8"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="px-8"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
