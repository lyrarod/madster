import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { VideosList } from "@/components/VideosList";

export default function Home() {
  return (
    <>
      <Hero />
      <VideosList />
      <Cta />
    </>
  );
}
