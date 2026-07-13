"use client";

import { useEffect, useRef } from "react";
import { VIDEO_SECTION } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import BlurText from "./BlurText";

type Video = { src: string; caption: string };

const videos: Video[] = [
  { src: "/images/V1.mp4", caption: "Chronic Low Back Pain Treatment" },
  { src: "/images/V2.mp4", caption: "Sports Injury Rehab" },
  { src: "/images/V3.mp4", caption: "Post Meniscus Injury Rehab" },
  { src: "/images/V4.mp4", caption: "Physiotherapy session — Elavive Physio, Jaipur" },
  { src: "/images/V5.mp4", caption: "Neck Pain Treatment with Mulligan Manual Therapy" },
  { src: "/images/V6.mp4", caption: "PCL, Meniscus and Patellar Dislocation Rehab" },
  { src: "/images/V7.mp4", caption: "Sciatica Pain Treatment" },
];

// Duplicate the 7 videos so the -50% marquee shift loops seamlessly (14 total).
const LOOP_VIDEOS = [...videos, ...videos];

// Single portrait video card. `aria` hidden the duplicated marquee copies.
function VideoCard({
  video,
  duplicate,
}: {
  video: Video;
  duplicate?: boolean;
}) {
  return (
    <li
      className="w-[200px] shrink-0 sm:w-[260px]"
      aria-hidden={duplicate ? true : undefined}
    >
      <figure className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black shadow-soft">
        <video
          data-src={video.src}
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        {/* Bottom gradient overlay for caption legibility. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
        <figcaption className="absolute bottom-3 left-3 right-3 text-xs text-white">
          {video.caption}
        </figcaption>
      </figure>
    </li>
  );
}

export default function VideoTestimonials() {
  const ref = useScrollReveal<HTMLDivElement>({
    selector: "[data-reveal]",
    stagger: 0.1,
  });

  // Lazy-load each clip only when its card nears the viewport. Every <video>
  // ships with preload="none" and its real source in data-src; on intersection
  // we copy data-src → src (once) and stop observing that element. This keeps
  // the initial page weight near zero instead of loading all clips up front.
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = marqueeRef.current;
    if (!root) return;

    const vids = Array.from(
      root.querySelectorAll<HTMLVideoElement>("video[data-src]")
    );

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const video = entry.target as HTMLVideoElement;
          const src = video.dataset.src;
          if (src && !video.src) {
            video.src = src;
            video.load();
          }
          obs.unobserve(video);
        });
      },
      { rootMargin: "200px" }
    );

    vids.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-content px-5 sm:px-8" ref={ref}>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-3">Patient success stories</p>
          <BlurText
            as="h2"
            text={VIDEO_SECTION.heading}
            className="font-heading text-3xl font-light text-charcoal sm:text-4xl lg:text-5xl"
          />
          <p data-reveal className="mt-4 text-muted">
            {VIDEO_SECTION.subheading}
          </p>
        </div>
      </div>

      {/*
        Full-bleed marquee. The track holds a doubled list of videos and shifts
        by -50% (one full copy) on a 40s linear infinite loop, so the seam is
        invisible. Hovering the container pauses the scroll. Under
        prefers-reduced-motion we swap the marquee for a static 3-card row.
      */}
      <div
        ref={marqueeRef}
        data-reveal
        className="group/marquee mt-2 w-full overflow-hidden"
        aria-label="Patient recovery videos"
      >
        {/* Animated marquee (hidden when the user prefers reduced motion). */}
        <ul className="flex w-max animate-marquee flex-row gap-4 [animation-duration:40s] group-hover/marquee:[animation-play-state:paused] motion-reduce:hidden">
          {LOOP_VIDEOS.map((video, i) => (
            <VideoCard
              key={i}
              video={video}
              duplicate={i >= videos.length}
            />
          ))}
        </ul>

        {/* Static fallback: a plain 3-card row for reduced-motion users. */}
        <ul className="hidden flex-row gap-4 motion-reduce:flex">
          {videos.slice(0, 3).map((video, i) => (
            <VideoCard key={i} video={video} />
          ))}
        </ul>
      </div>
    </section>
  );
}
