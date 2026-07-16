import unlock from "../assets/Frame35.png";

function Unlock() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image */}
        <div className="flex-1">
          <img
            src={unlock}
            alt="Unlock"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            The unseen of spending three years at Pixelgrade
          </h2>

          <p className="mt-6 text-gray-500 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>

          <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Unlock;