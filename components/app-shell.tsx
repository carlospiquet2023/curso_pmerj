"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { navItems } from "@/lib/edital-data";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Esconder a nav se for o painel admin
  if (pathname.startsWith("/admin")) {
    return <main>{children}</main>;
  }

  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="top-nav-left">
          <Link href="/" className="brand">
            <span className="brand-mark">
              <ShieldCheck size={22} />
            </span>
            <span>
              <strong>PMERJ</strong>
              <small>Aprovacao Inteligente</small>
            </span>
          </Link>

          <nav className="nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link className={active ? "nav-link active" : "nav-link"} href={item.href} key={item.href}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="top-nav-right">
          <Link className="primary-action" href="/aluno" style={{ minHeight: '38px', borderRadius: '6px' }}>
            Meu Painel
          </Link>
        </div>
      </header>

      <div className="shell-main">
        <main>{children}</main>
      </div>
    </div>
  );
}
