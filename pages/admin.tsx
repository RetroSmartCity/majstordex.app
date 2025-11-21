import dynamic from "next/dynamic";

// učitava naš root/admin-client kao React SPA
const AdminApp = dynamic(() => import("../admin-client/index"), {
  ssr: false,
});

export default function AdminPage() {
  return <AdminApp />;
}
