
import FeaturedFoodsGallery from "@/components/FeaturedFoodsGallery";
import FeaturedFoods from "@/components/FeaturedFoods";
import FeatureSection from "@/components/FeatureSection";
import Banner from "@/components/Home/Banner";
import PopularDishes from "@/components/PopularDishes";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetFeaturedMenu from "@/components/GetFeaturedMenu";
import SpecialOfferSection from "@/components/SpecialOfferSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Banner></Banner>
      <PopularDishes></PopularDishes>
      <SpecialOfferSection></SpecialOfferSection>
      <GetFeaturedMenu></GetFeaturedMenu>
      <FeatureSection></FeatureSection>
      <FeaturedFoods></FeaturedFoods>
      <FeaturedFoodsGallery></FeaturedFoodsGallery>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
