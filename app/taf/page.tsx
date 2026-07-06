import { redirect } from "next/navigation";
import { TafModule } from "@/components/taf-module";
import { getCurrentUser } from "@/lib/auth";
import { getTafDashboard } from "@/lib/taf";

export const dynamic = "force-dynamic";

export default async function TafPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const dashboard = await getTafDashboard(user.id);

  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <span className="eyebrow">TAF e etapas pós-prova</span>
          <h1>Preparação física, saúde, documentos e exames em um fluxo real</h1>
          <p>
            A preparação para a PMERJ não termina na prova objetiva. O aluno registra treinos,
            acompanha evolução, controla pendências e organiza as etapas posteriores antes da convocação.
          </p>
        </div>
      </section>

      <TafModule dashboard={dashboard} />
    </div>
  );
}
