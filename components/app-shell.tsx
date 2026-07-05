"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ShieldCheck, Menu, X } from "lucide-react";
import { navItems } from "@/lib/edital-data";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Esconder a nav se for o painel admin
  if (pathname.startsWith("/admin")) {
    return <main>{children}</main>;
  }

  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="top-nav-left">
          <button 
            className="menu-button" 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
          
          <Link href="/" className="brand">
            <span className="brand-mark">
              <ShieldCheck size={22} />
            </span>
            <span className="brand-text">
              <strong>PMERJ</strong>
              <small>Aprovacao Inteligente</small>
            </span>
          </Link>
        </div>
        
        <div className="top-nav-right">
          <Link className="primary-action" href="/aluno" style={{ minHeight: '38px', borderRadius: '6px' }}>
            Meu Painel
          </Link>
        </div>
      </header>

      {/* Drawer Overlay */}
      {isMenuOpen && (
        <div className="drawer-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <span className="brand-mark" style={{ width: 32, height: 32 }}>
                <ShieldCheck size={18} />
              </span>
              <strong>Menu</strong>
              <button className="close-button" onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="drawer-nav">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href || pathname.startsWith(item.href + "/");

                return (
                  <Link 
                    className={active ? "drawer-link active" : "drawer-link"} 
                    href={item.href} 
                    key={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      <div className="shell-main">
        <main>{children}</main>
      </div>
    </div>
  );
}
