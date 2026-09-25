import AdminNav from "@/components/AdminNav";

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="space-y-6">
      <AdminNav />
      {children}
    </div>
  );
}
