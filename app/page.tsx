import Dashboard_1 from "@/components/dashboard-1";
import Dashboard_2 from "@/components/dashboard-2";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-screen bg-slate-100">
      <div className="">
        <Navbar />
        <Dashboard_1 />
        <Dashboard_2 />
      </div>
      <Footer />
    </main>
  );
}
