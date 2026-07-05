import { getCurrentUser } from "@/lib/auth";
import { errorResponse } from "@/lib/security";

export async function requireAdminApi() {
  const user = await getCurrentUser();

  if (!user) {
    return errorResponse("Autenticacao obrigatoria.", 401);
  }

  if (user.role !== "ADMIN") {
    return errorResponse("Acesso restrito ao administrador.", 403);
  }

  return null;
}
