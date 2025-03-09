import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="bg">
      <div className="py-18 px-28 flex flex-col justify-between gap-14">
        <Nav />
        <Hero />
      </div>
    </div>
  );
}