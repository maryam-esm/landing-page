import heroImage from "../assets/Hero.png";

function Hero() {
  return (
    <section className="bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side */}
        <div className="max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#4D4D4D] leading-tight">
            Lessons and insights
            <br />
            <span className="text-[#4CAF4F]">
              from 8 years
            </span>
          </h1>

          <p className="mt-6 text-[#717171]">
            Where to grow your business as a photographer:
            site or social media?
          </p>

          <button className="mt-8 bg-[#4CAF4F] hover:bg-green-700 transition text-white px-8 py-3 rounded">
            Register
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center pb-8 gap-3">
        <span className="w-3 h-3 rounded-full bg-[#4CAF4F]"></span>
        <span className="w-3 h-3 rounded-full bg-[#C8E6C9]"></span>
        <span className="w-3 h-3 rounded-full bg-[#C8E6C9]"></span>
      </div>
    </section>
  );
}

export default Hero;