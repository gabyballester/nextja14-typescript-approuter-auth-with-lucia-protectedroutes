import { AuthForm } from "@/components";

export default function Home({
  searchParams,
}: {
  searchParams: { mode: string };
}) {
  const formMode: string = searchParams.mode || "login";

  return <AuthForm mode={formMode} />;
}
