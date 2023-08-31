import Intro from "@/components/intro";
import Header from "@/components/header";
import About from "@/components/about";
import HowWorks from "@/components/how-works";
import Illustration from "@/components/illustrate";
import Details from "@/components/details";
import HomeCalculator from "@/components/home-calculator";
import Explain from "@/components/explain";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Intro />
      <About />
      <HowWorks />
      <Illustration />
      <Details />
      <HomeCalculator />
      <Explain />
      <Footer />
    </main>
  );
}
