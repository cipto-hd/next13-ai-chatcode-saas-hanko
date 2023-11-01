import HomePageContent from "@/components/HomePageContent";
import HomePageHero from "@/components/HomePageHero";
import HomePageNavbar from "@/components/HomePageNavbar";

const HomePage = () => {
  return (
    <div className="h-full ">
      <HomePageNavbar />
      <HomePageHero />
      <HomePageContent />
    </div>
  );
};

export default HomePage;
