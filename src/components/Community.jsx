import blogo from "../assets/blogo.png";
import alogo from "../assets/alogo.png";
import glogo from "../assets/glogo.png";
import mlogo from "../assets/mlogo.png";
import dlogo from "../assets/dlogo.png";
import clogo from "../assets/clogo.png";

import membership from "../assets/Icon.png";
import association from "../assets/Icon(1).png";
import clubs from "../assets/Icon(2).png";

function Community() {
  const logos = [
    blogo,
    alogo,
    glogo,
    mlogo,
    dlogo,
    clogo,
  ];

  const cards = [
    {
      icon: membership,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
    },
    {
      icon: association,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
    },
    {
      icon: clubs,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clients */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#4D4D4D]">
            Our Clients
          </h2>

          <p className="mt-3 text-[#717171]">
            We have been working with some Fortune 500+ clients
          </p>

          {/* Logos */}
          <div className="flex justify-between items-center flex-wrap gap-8 mt-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="w-12 h-12 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Community */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-[#4D4D4D] max-w-3xl mx-auto leading-tight">
            Manage your entire community in a single system
          </h2>

          <p className="mt-4 text-[#717171]">
            Who is Nextcent suitable for?
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#4D4D4D]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[#717171] leading-7">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;