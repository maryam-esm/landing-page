import memberIcon from "../assets/member.png";
import clubsIcon from "../assets/clubs.png";
import bookingsIcon from "../assets/event.png";
import paymentsIcon from "../assets/pay.png";

function Achievements() {
  const stats = [
    {
      icon: memberIcon,
      number: "2,245,341",
      title: "Members",
    },
    {
      icon: clubsIcon,
      number: "46,328",
      title: "Clubs",
    },
    {
      icon: bookingsIcon,
      number: "828,867",
      title: "Event Bookings",
    },
    {
      icon: paymentsIcon,
      number: "1,926,436",
      title: "Payments",
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4D4D4D] leading-tight">
            Helping a local
            <br />
            <span className="text-[#4CAF4F]">
              business reinvent itself
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#717171]">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
              />

              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4D4D4D] break-words">
                  {item.number}
                </h3>

                <p className="text-sm sm:text-base text-[#717171]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;