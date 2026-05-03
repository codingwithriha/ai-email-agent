import AppLayout from "@/components/layout/AppLayout";
import EmailForm from "@/components/sections/EmailForm";
import GeneratedEmail from "@/components/sections/GeneratedEmail";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <div id="email-form" className="mt-12 max-w-3xl mx-auto scroll-mt-24">
      <EmailForm />
      </div>
    </AppLayout>
  );
}
