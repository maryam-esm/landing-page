import calendarImg from "../assets/pana.png";

function Calendar() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image */}
        <div className="flex-1">
          <img
            src={calendarImg}
            alt="Calendar"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            How to design your site footer like we did
          </h2>

          <p className="mt-6 text-gray-500 leading-8">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at
            scelerisque elit erat a magna. Donec quis erat at libero ultrices
            mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui,
            at porta nisi facilisis finibus. In euismod augue vitae nisi
            ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
            commodo faucibus efficitur quis massa. Praesent felis est, finibus
            et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
            ipsum id gravida.
          </p>

          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Calendar;