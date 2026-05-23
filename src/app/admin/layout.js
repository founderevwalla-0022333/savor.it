import AdminLayout from "@/components/AdminLayout/AdminLayout";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Setup Vault OS — Admin",
  description: "Premium Content Operating System",
};

export default async function AdminLayoutWrapper({ children }) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const hasBypassCookie = cookieStore.get("admin_bypass")?.value === "true";

  // Double-check auth in layout (middleware handles primary redirect)
  if (!user && !hasBypassCookie) {
    redirect("/admin/login");
  }

  return <AdminLayout>{children}</AdminLayout>;
}
