import { createFileRoute } from "@tanstack/react-router";
import { OsApp } from "@/components/os/os-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <OsApp />;
}
