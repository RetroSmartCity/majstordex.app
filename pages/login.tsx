// pages/login.tsx
import dynamic from "next/dynamic";

const LoginPage = dynamic(
  () => import("@/components/LoginClientOnly"),
  { ssr: false }
);

export default LoginPage;
