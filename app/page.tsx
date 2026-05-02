import AppLayout from "@/components/layout/AppLayout";
import EmailForm from "@/components/sections/EmailForm";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <EmailForm />
    </AppLayout>
  );
}