import { RxPerson } from 'react-icons/rx';
import { BsCircleHalf } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';
import { tray1, fufu } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <article>
      {/* Marketing hero section */}
      <section
        className="h-[200vh] md:h-[90vh] lg:h-[110vh] grid grid-cols-1 grid-rows-9
      md:grid-cols-2 lg:grid-cols-5 md:grid-rows-4 gap-6 my-4"
      >
        {/* 1st Card - Food Banner */}
        <div
          className="bg-gray-100 text-bold row-span-3 md:col-span-2 md:row-span-2 lg:col-span-5 lg:row-span-3
        rounded-3xl overflow-hidden relative"
        >
          <Image
            src={tray1}
            alt="tray of ingredients for meal"
            height={100}
            width={100}
            className="h-full w-full object-cover"
            unoptimized
          />

          {/* Overlay */}
          <div
            className="absolute h-full w-full top-0 left-0 bg-gray-200 bg-opacity-20 flex
          justify-center md:justify-start items-center p-4"
          >
            <div className="bg-black bg-opacity-40 p-4 rounded-3xl w-[90%] md:w-[80%] lg:w-[60%] text-white">
              <h1 className="text-4xl md:text-6xl lg:text-8xl mb-10 capitalize font-bold font-display tracking-wide">
                Explore tastes{' '}
                <span className="text-primary tracking-widest font-pacifico">
                  so good
                </span>
              </h1>
              <p className="font-sans font-bold text-xs md:text-sm tracking-widest">
                Discover the flavors that will tantalize your taste buds. Dive
                into a world of culinary delights that promise to excite and
                inspire. Join us on a journey where every bite tells a story.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd Card - Core Values */}
        <div
          className="bg-gray-50 p-2 text-bold row-span-4 md:col-span-2 md:row-span-1 lg:col-span-3
        h-full w-full flex rounded-3xl flex-col md:flex-row border-gray-200"
        >
          {[
            {
              id: 1,
              title: 'User focused',
              description:
                'Taisthive is user-focused: your culinary journey is our top priority.',
              icon: RxPerson,
            },
            {
              id: 2,
              title: 'Diverse community',
              description: 'Our diverse community celebrates global flavors.',
              icon: BsCircleHalf,
            },
            {
              id: 3,
              title: 'Fun recipes',
              description:
                "Unleash your culinary creativity with Taisthive's collection of fun and imaginative recipes.",
              icon: IoHeartOutline,
            },
          ].map((value) => (
            <div key={value.id} className="flex-1 p-2">
              <div
                className="bg-white rounded-full p-2 w-fit h-fit flex items-center justify-center
                              mb-2 text-xl"
              >
                <value.icon />
              </div>
              <div>
                <h3 className="text-gray-700 font-bold font-sans tracking-wide mb-1 capitalize">
                  {value.title}
                </h3>
                <span className="text-gray-500 tracking-wider">
                  {value.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3rd Card - Featured Recipe */}
        <div
          className="bg-gray-50 text-bold md:col-span-2 row-span-2 md:row-span-1 flex
        flex-col md:flex-row rounded-3xl overflow-hidden"
        >
          <div className="flex-1 h-full rounded-3xl overflow-hidden">
            <Image
              src={fufu}
              alt="plate of fufu"
              width={100}
              height={100}
              className="w-full h-full object-auto"
              unoptimized
            />
          </div>
          <div className="flex-1 p-4 flex flex-col">
            <div className="h-3/4">
              <h2 className="font-sans text-lg uppercase tracking-wide font-bold text-primary">
                Featured
              </h2>
              <span className="font-sans text-xl tracking-wider capitalize font-light">
                Fufu & egusi soup
              </span>
            </div>
            <div className="h-1/4">
              <Link
                href="#"
                target="_blank"
                className="underline capitalize font-medium tracking-wide text-gray-600"
              >
                See Recipe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
