import customerImg from "../assets/image9.png";

import img1 from "../assets/Logo1.png";
import img2 from "../assets/Logo2.png";
import img3 from "../assets/Logo3.png";
import img4 from "../assets/Logo4.png";
import img5 from "../assets/Logo5.png";
import img6 from "../assets/Logo6.png";

function Customers() {
  const logos = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="bg-[#F5F7FA] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={customerImg}
            alt="Customer"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-[#717171] leading-7 text-sm sm:text-base">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales.
            Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
            potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat
            eget. Quisque vulputate odio neque, eget efficitur libero
            condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
            amet magna.
          </p>

          <h3 className="mt-6 text-xl sm:text-2xl font-bold text-[#4CAF4F]">
            Tim Smith
          </h3>

          <p className="mt-2 text-[#717171]">
            British Dragon Boat Racing Association
          </p>

          {/* Logos */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-between gap-4">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>

            <a
              href="#"
              className="text-[#4CAF4F] font-semibold whitespace-nowrap hover:underline"
            >
              Meet all customers →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;