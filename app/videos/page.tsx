"use client";

import { useRef, useState } from "react";
import { PlayCircle } from "lucide-react";

type VideoItem = {
  title: string;
  videoId: string;
  listId?: string;
  index?: number;
};

type VideoCategory = {
  title: string;
  videos: VideoItem[];
};

const VIDEO_CATEGORIES: VideoCategory[] = [
  {
    title: "Língua Portuguesa",
    videos: [
      {
        title: "SOLDADO PMERJ 2026 | LÍNGUA PORTUGUESA - PRONOMES",
        videoId: "c1a1mQDR44c"
      }
    ]
  },
  {
    title: "Matemática",
    videos: [
      { title: "Aula 01", videoId: "yDfYIRwRSgc", listId: "PLzUIZP_8jXW7BEets3jlIYE-OFPxrYi4w" },
      { title: "Aula 02", videoId: "hVHHdjim1OI", listId: "PLzUIZP_8jXW7BEets3jlIYE-OFPxrYi4w", index: 2 },
      { title: "Aula 03", videoId: "m6xCTY-jS80", listId: "PLzUIZP_8jXW7BEets3jlIYE-OFPxrYi4w", index: 3 },
      { title: "Aula 04", videoId: "Xcp4F24bmaY", listId: "PLzUIZP_8jXW7BEets3jlIYE-OFPxrYi4w", index: 4 },
      { title: "Aula 05", videoId: "CrRJCjDEcPo", listId: "PLzUIZP_8jXW7BEets3jlIYE-OFPxrYi4w", index: 5 },
      { title: "Aula 06", videoId: "--In4r8a5yk", listId: "PLzUIZP_8jXW7BEets3jlIYE-OFPxrYi4w", index: 6 },
      { title: "Aula 07", videoId: "JLDNnD8iTTA", listId: "PLzUIZP_8jXW7BEets3jlIYE-OFPxrYi4w", index: 7 },
      { title: "Aula 08", videoId: "0gRswdmujkk", listId: "PLzUIZP_8jXW7BEets3jlIYE-OFPxrYi4w", index: 8 },
      { title: "Aula 09 e 10", videoId: "Nh3Ub6-SqCo", listId: "PLzUIZP_8jXW7BEets3jlIYE-OFPxrYi4w", index: 9 },
      { title: "Aula 11", videoId: "d7bL-9Gqrs0", listId: "PLzUIZP_8jXW7BEets3jlIYE-OFPxrYi4w", index: 10 }
    ]
  },
  {
    title: "Direitos Humanos",
    videos: [
      { title: "Noções de Direitos Humanos", videoId: "e6HVwd6zSeQ" }
    ]
  },
  {
    title: "Direito Administrativo",
    videos: [
      { title: "Legislação Aplicada à PMERJ", videoId: "ZFvuYm9BSlA" }
    ]
  },
  {
    title: "Direito Penal",
    videos: [
      { title: "Aula 1", videoId: "4LKecwQBCBg" },
      { title: "Aula 2", videoId: "z7bjBxyJnHg" }
    ]
  }
];

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEO_CATEGORIES[0].videos[0]);
  const playerRef = useRef<HTMLElement>(null);

  const getEmbedUrl = (video: VideoItem) => {
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1"
    });

    return `https://www.youtube.com/embed/${video.videoId}?${params.toString()}`;
  };

  const selectVideo = (video: VideoItem) => {
    setActiveVideo(video);

    requestAnimationFrame(() => {
      playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <span className="eyebrow">Videoaulas</span>
          <h1>Aulas preparatórias PMERJ 2026</h1>
          <p>Assista às aulas preparatórias focadas no edital da PMERJ 2026.</p>
        </div>
      </section>

      <div className="videos-layout">
        <section className="video-player-container" ref={playerRef}>
          <div className="video-responsive">
            <iframe
              key={activeVideo.videoId}
              className="video-frame"
              src={getEmbedUrl(activeVideo)}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h2 className="video-title">{activeVideo.title}</h2>
        </section>

        <aside className="video-sidebar">
          {VIDEO_CATEGORIES.map((category) => (
            <div key={category.title} className="video-category">
              <h3>{category.title}</h3>
              <div className="video-list">
                {category.videos.map((video) => {
                  const isActive = activeVideo.videoId === video.videoId;
                  return (
                    <button
                      key={video.videoId}
                      className={isActive ? "video-button active" : "video-button"}
                      onClick={() => selectVideo(video)}
                      type="button"
                      aria-pressed={isActive}
                    >
                      <PlayCircle size={20} />
                      <span>{video.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
