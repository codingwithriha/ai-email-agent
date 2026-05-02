import AppLayout from "@/components/layout/AppLayout";
import EmailForm from "@/components/sections/EmailForm";
import GeneratedEmail from "@/components/sections/GeneratedEmail";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <EmailForm />
      {/* TEMP SAMPLE OUTPUT (for UI testing) */}
      <GeneratedEmail
        email={`Dear Hiring Manager,

      I hope this message finds you well. I am writing to express my interest...

      Best regards,
      Your Name`}
      />
    </AppLayout>
  );
}
