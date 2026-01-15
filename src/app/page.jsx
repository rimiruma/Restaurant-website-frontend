
// import ChefSpecials from "@/components/ChefSpecials";
import FeaturedFoodsGallery from "@/components/FeaturedFoodsGallery";
import FeaturedFoods from "@/components/FeaturedFoods";
import FeatureSection from "@/components/FeatureSection";
import Banner from "@/components/Home/Banner";
import PopularDishes from "@/components/PopularDishes";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Banner></Banner>
      <PopularDishes></PopularDishes>
      {/* <ChefSpecials></ChefSpecials> */}
      <FeatureSection></FeatureSection>
      <FeaturedFoods></FeaturedFoods>
      <FeaturedFoodsGallery></FeaturedFoodsGallery>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
