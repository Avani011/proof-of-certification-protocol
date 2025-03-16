import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import How from "@/components/How";
export default function Home() {
  return (
    <div className="bg">
      <div className="py-18 px-28 flex flex-col justify-between gap-14">
        <Nav />
        <div className="flex flex-col gap-24">
          <Hero />
          <div className="flex flex-col ">
            <Features />
            <How />
          </div>
        </div>
      </div>
    </div>
  );
}