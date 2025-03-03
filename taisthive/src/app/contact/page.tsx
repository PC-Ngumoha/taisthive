import { nigerian_meal, black_chef } from '@/assets/images';
import Image from 'next/image';

export async function generateMetadata() {
  return {
    title: 'Taisthive | Contact',
  };
}

export default function ContactPage() {
  return (
    <article>
      <section className="w-full h-[40vh] relative my-6 rounded-2xl overflow-hidden p-4 flex">
        <h1
          className="font-lobster text-3xl md:text-6xl self-center w-[50%] md:w-[25%] leading-relaxed
        tracking-wider text-white bg-black bg-opacity-60 md:bg-opacity-10 p-4 rounded-lg font-bold"
        >
          <span className="text-primary font-pacifico tracking-widest">
            Reach
          </span>{' '}
          out to{' '}
          <span className="text-primary font-pacifico tracking-widest">Us</span>{' '}
        </h1>
        <Image
          src={nigerian_meal}
          alt="An image depicting a basic nigerian meal"
          className="w-full h-full object-cover absolute -z-10 bg-opacity-40 top-0 left-0"
        />
      </section>

      <section className="flex h-fit md:h-[55vh] my-6 flex-col md:flex-row">
        <div className="w-full md:w-1/2 mr-0 md:mr-2 h-full flex items-center rounded-2xl overflow-hidden relative">
          <Image
            src={black_chef}
            alt="A black chef preparing a delicious cuisine"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent via-[#ff6b6b4d]
          to-primary flex justify-start items-end text-left"
          >
            <span className="font-display text-white text-xl md:text-3xl tracking-widest capitalize p-4 font-bold">
              contact information
            </span>
          </div>
        </div>
        <div className="w-full md:w-3/4 ml-0 md:ml-4 h-full flex flex-col p-6">
          <p className="font-lora text-lg md:text-xl md:h-1/3 h-fit text-gray-500 text-justify my-3 md:my-0">
            Discover the essence of culinary artistry with Taisthive. Our
            passion for food transcends the ordinary, bringing you flavors that
            tell a story. Join us on a journey where every dish is a
            masterpiece, crafted with love and expertise. Let&quot;s create
            unforgettable memories together, one bite at a time.
          </p>
          <div
            className="font-lora text-lg md:text-xl md:h-1/3 h-fit flex flex-col bg-gray-100 p-4
          rounded-lg justify-around my-3 md:my-2"
          >
            <span className="text-gray-500">Phone</span>
            <span className="font-bold tracking-wider text-2xl md:text-3xl">
              +2347089699162
            </span>
          </div>
          <div
            className="font-lora text-lg md:text-xl md:h-1/3 h-fit flex flex-col bg-gray-100 p-4
          rounded-lg justify-around my-3 md:my-2"
          >
            <span className="text-gray-500">Email Address</span>
            <span className="font-bold tracking-wider text-2xl md:text-3xl">
              info@taisthive.com
            </span>
          </div>
        </div>
      </section>
    </article>
  );
}
