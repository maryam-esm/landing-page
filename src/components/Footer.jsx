function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-[#F5F7FA] py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h2>

        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition">
          Get a Demo →
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#263238] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-green-500">
              Nexcent
            </h2>

            <p className="mt-8 text-gray-300">
              Copyright © 2020 Landify UI Kit.
            </p>

            <p className="text-gray-300">
              All rights reserved
            </p>

            
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Stay up to date
            </h3>

            <div className="flex bg-gray-700 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-transparent outline-none text-white placeholder:text-gray-300"
              />

              <button className="px-5 bg-green-600 hover:bg-green-700 transition">
                ➤
              </button>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;