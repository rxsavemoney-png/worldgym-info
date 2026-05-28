import { Navbar } from "@/components/worldgym/Navbar";
import { HeroCarousel } from "@/components/worldgym/HeroCarousel";
import { Promotions } from "@/components/worldgym/Promotions";
import { CourseCatalog } from "@/components/worldgym/CourseCatalog";
import { BranchCategories } from "@/components/worldgym/BranchCategories";
import { Pricing } from "@/components/worldgym/Pricing";
import { MembershipFlow, WorldGymFooter } from "@/components/worldgym/MembershipFlow";
import { MobileFAB } from "@/components/worldgym/MobileFAB";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <HeroCarousel />
        <Promotions />
        <CourseCatalog />
        <BranchCategories />
        <Pricing />
        <MembershipFlow />
      </main>
      <WorldGymFooter />
      <MobileFAB />
    </>
  );
}
