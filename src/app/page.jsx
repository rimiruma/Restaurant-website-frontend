import Banner from "@/components/Home/Banner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
