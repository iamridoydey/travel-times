import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import eiffel_tower from "@assets/images/eiffel_tower.jpg";
import gardens_by_the_bay from "@assets/images/gardens_by_the_bay.jpg";
import iolani_palace from "@assets/images/iolani_palace.jpg";
import mutianyu_great_wall from "@assets/images/mutianyu_great_wall.jpg";
import pyramid from "@assets/images/pyramid.jpg";
import shat_gambuj_mosque from "@assets/images/shat_gambuj_mosque.jpg"

export default function Home() {
  const features = [
    {
      title: "Eiffel Tower",
      description: "An iconic symbol of France, located in Paris.",
      location: "Paris, France",
      image: eiffel_tower.src,
    },
    {
      title: "Gardens by the Bay",
      description: "A futuristic park with Supertree structures and biodomes.",
      location: "Singapore",
      image: gardens_by_the_bay.src,
    },
    {
      title: "Iolani Palace",
      description: "The royal residence of the rulers of the Kingdom of Hawaii.",
      location: "Honolulu, Hawaii, USA",
      image: iolani_palace.src,
    },
    {
      title: "Mutianyu Great Wall",
      description: "A well-preserved section of the Great Wall of China.",
      location: "Beijing, China",
      image: mutianyu_great_wall.src,
    },
    {
      title: "Pyramid of Giza",
      description: "One of the Seven Wonders of the Ancient World.",
      location: "Giza, Egypt",
      image: pyramid.src,
    },
    {
      title: "Shat Gambuj Mosque",
      description: "A historic mosque with 60 domes, built during the Bengal Sultanate.",
      location: "Bagerhat, Bangladesh",
      image: shat_gambuj_mosque.src,
    },
  ];

  console.log(features)
  return (
    <div className="main_wrapper">
        <Hero />
        <Features />
        <Footer />
    </div>
  );
}
