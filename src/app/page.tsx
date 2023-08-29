import About from "@/components/about";
import Intro from "@/components/intro";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <About />
      <Footer />
    </main>
  );
}
