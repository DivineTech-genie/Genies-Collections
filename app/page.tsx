import Hero from "@/components/hero";
import { Nav, SubNav } from "@/components/nav";
import Trending from "@/components/trending";

const Home = () => {
  console.log("Hello World!");

  return (
    <div>
      <SubNav />
      <Nav />
      <Hero />
      <Trending />
    </div>
  );
};

export default Home;
