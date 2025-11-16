// pages/login.tsx
import dynamic from "next/dynamic";

const LoginClient = dynamic(() => import("@/components/LoginClientOnly"), {
  ssr: false,
});

export default function LoginPage() {
  return <LoginClient />;
}
