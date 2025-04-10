import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
      <div className="container mx-auto px-4 py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            We Build Digital Solutions That Thrive
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Nurture. Grow. Thrive.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              See Our Work
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition duration-300">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="hidden md:block relative aspect-video">
          {/* Placeholder for Hero Image */}
          <Image
            src="/images/laptop.png" // Replace with actual image if available
            alt="Digital Solutions Showcase"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
           {/* You might need to add a placeholder image `placeholder-laptop.jpg` to your `public` folder */}
        </div>
      </div>
    </section>
  );
};

export default Hero; 