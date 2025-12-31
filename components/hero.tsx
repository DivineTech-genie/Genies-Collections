import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-start text-white"
      style={{
        backgroundImage: "url('./products/hero_product(1).jpeg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-11/12 mx-auto">
        <h2>Shop In Style</h2>
        <Button className="bg-white text-black">Shop Collection</Button>
      </div>
    </div>
  );
};

export default Hero;
