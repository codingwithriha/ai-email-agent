import Navbar from "./Navbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </div>
  );
}