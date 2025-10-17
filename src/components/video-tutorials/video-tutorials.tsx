'use client';

import { videoTutorials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslation } from '@/context/translation-context';
import { type LocaleStrings } from '@/lib/locale';

export default function VideoTutorials({ dictionary }: { dictionary: LocaleStrings }) {
    const { t } = useTranslation();
    return (
        <section id="videos" className="w-full py-12 md:py-20">
            <div className="container mx-auto max-w-6xl px-4 animate-fade-in-up animation-delay-800">
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t('videos.title')}</h2>
                    <p className="text-muted-foreground">
                        {t('videos.description')}
                    </p>
                </div>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {videoTutorials.map((video, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                                    <CardContent className="p-0 relative">
                                        <Image
                                            src={video.thumbnail}
                                            alt={t(video.title)}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto aspect-video object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <PlayCircle className="h-16 w-16 text-white/80 transform transition-transform group-hover:scale-110" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 bg-black/50 text-white px-3 py-1 text-sm rounded-tr-lg">
                                            {video.duration}
                                        </div>

                                    </CardContent>
                                    <div className="p-4 bg-card">
                                      <h3 className="font-semibold text-lg">{t(video.title as any)}</h3>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="ml-12" />
                  <CarouselNext className="mr-12" />
                </Carousel>
            </div>
        </section>
    );
}
