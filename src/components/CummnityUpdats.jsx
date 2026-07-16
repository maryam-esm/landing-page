import img1 from "../assets/image18.png";
import img2 from "../assets/image19.png";
import img3 from "../assets/image20.png";

function CommunityUpdates() {
  const blogs = [
    {
      image: img1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: img2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: img3,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            Caring is the new marketing
          </h2>

          <p className="mt-5 text-gray-500 leading-8">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {blogs.map((blog, index) => (
            <div key={index} className="relative">
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-xl"
              />

              {/* Card */}
              <div className="bg-white shadow-lg rounded-xl p-6 w-[90%] mx-auto -mt-16 relative">
                <h3 className="text-lg font-semibold text-gray-700 text-center">
                  {blog.title}
                </h3>

                <div className="mt-5 text-center">
                  <a
                    href="#"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityUpdates;