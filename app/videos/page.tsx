"use client";

import { useState } from "react";
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

  const getEmbedUrl = (video: VideoItem) => {
    let url = `https://www.youtube.com/embed/${video.videoId}`;
    if (video.listId) {
      url += `?list=${video.listId}`;
    }
    return url;
  };

  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <h1>Videoaulas</h1>
        <p>Assista às aulas preparatórias focadas no edital da PMERJ 2026.</p>
      </header>

      <div className="videos-layout" style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        <section className="video-player-container" style={{ flex: 1, position: 'sticky', top: '100px' }}>
          <div className="video-responsive" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.1)', background: '#000' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src={getEmbedUrl(activeVideo)}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h2 style={{ marginTop: '24px', fontSize: '1.4rem' }}>{activeVideo.title}</h2>
        </section>

        <aside className="video-sidebar" style={{ width: '380px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px' }}>
          {VIDEO_CATEGORIES.map((category) => (
            <div key={category.title} className="video-category">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                {category.title}
              </h3>
              <div className="video-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {category.videos.map((video) => {
                  const isActive = activeVideo.videoId === video.videoId;
                  return (
                    <button
                      key={video.videoId}
                      onClick={() => setActiveVideo(video)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '8px',
                        border: 'none',
                        background: isActive ? 'var(--primary-light)' : 'var(--surface)',
                        color: isActive ? 'var(--primary-dark)' : 'var(--ink)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        fontWeight: isActive ? '600' : '400',
                        boxShadow: isActive ? 'inset 2px 0 0 var(--primary)' : 'none'
                      }}
                    >
                      <PlayCircle size={20} style={{ flexShrink: 0, color: isActive ? 'var(--primary)' : 'var(--ink-light)' }} />
                      <span style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>{video.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </aside>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          .videos-layout {
            flex-direction: column !important;
          }
          .video-sidebar {
            width: 100% !important;
          }
          .video-player-container {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}} />
    </div>
  );
}
