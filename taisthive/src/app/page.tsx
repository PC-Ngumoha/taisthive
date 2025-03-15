import { RxPerson } from 'react-icons/rx';
import { BsCircleHalf } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';
import { LuChefHat } from 'react-icons/lu';
import { RiKnifeLine } from 'react-icons/ri';
import { MdLiveTv } from 'react-icons/md';
import { SlGlobe } from 'react-icons/sl';
import { tray1, fufu, slicing, maryam } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import { SlideInLeft, SlideInRight, SlideDown, SlideUp } from '@/animations';

export default function Home() {
  return (
    <article>
      {/* Marketing hero section */}
      <section
        className="h-[200vh] md:h-[90vh] lg:h-[110vh] grid grid-cols-1 grid-rows-9
      md:grid-cols-2 lg:grid-cols-5 md:grid-rows-4 gap-6 my-4"
      >
        {/* 1st Card - Food Banner
         */}
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
              <SlideInLeft>
                <h1 className="text-4xl md:text-6xl lg:text-8xl mb-10 capitalize font-bold font-display tracking-wide">
                  Explore tastes{' '}
                  <span className="text-primary tracking-widest font-pacifico">
                    so good
                  </span>
                </h1>
              </SlideInLeft>
              <p className="font-sans font-bold text-xs md:text-sm tracking-widest">
                Discover the flavors that will tantalize your taste buds. Dive
                into a world of culinary delights that promise to excite and
                inspire. Join us on a journey where every bite tells a story.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd Card - Core Values
         */}
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
          ].map((value, idx) => (
            <SlideUp delay={idx + 0.2} key={value.id} className="flex-1 p-2">
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
            </SlideUp>
          ))}
        </div>

        {/* 3rd Card - Featured Recipe
         */}
        <SlideInRight
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
        </SlideInRight>
      </section>

      {/* Pitch section */}
      <section className="w-full h-fit my-4 p-4">
        {/* Heading
         */}
        <div className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold tracking-wide text-gray-700">
            Nail your dishes with{' '}
            <span className="text-primary font-pacifico tracking-widest">
              our
            </span>{' '}
            recipes
          </h1>
          <span className="inline-block w-[80%] mt-3 text-gray-500">
            We are a home to a variety of recipes worldwide for you to learn.
          </span>
        </div>

        {/* Featured Items */}
        <section
          className="h-[150vh] md:h-[70vh] grid grid-cols-1 grid-rows-7 md:grid-cols-2 md:grid-rows-2
        lg:grid-cols-4 lg:grid-rows-1 gap-4 my-4"
        >
          {/* Food Display card
           */}
          <SlideDown className="row-span-2 md:row-span-1 flex flex-col justify-start">
            <div className="relative rounded-3xl overflow-hidden h-full lg:h-[75%] lg:mt-8">
              <Image
                src={slicing}
                alt="depicting a person cooking"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute left-0 top-0 w-full h-full bg-gray-600 bg-opacity-10 flex flex-col
                      justify-between"
              >
                <div className="w-full flex justify-end p-2">
                  <div className="bg-black h-fit rounded-full p-4 text-secondary text-xl shadow">
                    <LuChefHat />
                  </div>
                </div>

                <div className="bg-secondary-light text-black w-fit m-4 rounded-3xl p-3 flex items-center">
                  <RiKnifeLine className="text-primary mr-2" />
                  <span className="font-sans">Easy to follow recipes</span>
                </div>
              </div>
            </div>
          </SlideDown>

          {/* Comment Card
           */}
          <SlideDown delay={1.5} className="flex flex-col justify-end">
            <div
              className="h-full md:h-[60%] w-full rounded-3xl overflow-hidden bg-primary-dark text-white
                      flex flex-col justify-end lg:mb-12"
            >
              {/* Comment */}
              <span className="block w-full p-2 text-2xl lg:text-5xl font-lobster text-center tracking-wide font-bold">
                &quot;Wallahi, I never thought cooking could be this fun.&quot;
              </span>
              {/* Commenter Avatar */}
              <div className="flex p-4 justify-center">
                <Image
                  src={maryam}
                  alt="female nigerian user avatar"
                  className="w-[50px] h-auto rounded-full mr-2"
                />
                <div className="w-3/5 capitalize">
                  <h3 className="font-bold font-sans tracking-wider capitalize">
                    Maryam Hajara
                  </h3>
                  <span className="text-secondary-light">House wife 2025</span>
                </div>
              </div>
            </div>
          </SlideDown>

          {/* Jump Links Card
           */}
          <SlideDown
            delay={2.0}
            className="row-span-2 md:row-span-1 flex flex-col justify-start lg:justify-end"
          >
            <div className="flex flex-col justify-between items-center gap-6 p-4 h-full w-full md:h-[60%] rounded-3xl overflow-hidden bg-gray-50">
              {[
                {
                  id: 1,
                  title: 'live now',
                  body: 'chef adaugo nwora',
                  url: 'https://www.youtube.com/@chukwuemekangumoha8771',
                  icon: MdLiveTv,
                },
                {
                  id: 2,
                  title: 'contribute now',
                  body: 'share your recipe !',
                  url: '#',
                  icon: LuChefHat,
                },
                {
                  id: 3,
                  title: 'join community',
                  body: 'connect with us',
                  url: '/contact',
                  icon: SlGlobe,
                },
              ].map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className="bg-white w-full flex-1 p-1 flex items-center rounded-2xl shadow hover:bg-gray-50
                            hover:shadow-none duration-700 ease-in-out"
                >
                  <link.icon className="text-primary inline-block w-1/4 font-bold text-xl" />
                  <div className="capitalize">
                    <h3 className="font-bold text-black tracking-wide font-sans">
                      {link.title}
                    </h3>
                    <span className="text-gray-500 text-sm">{link.body}</span>
                  </div>
                </Link>
              ))}
            </div>
          </SlideDown>

          {/* Live Video Demo Card
           */}
          <SlideUp
            delay={1.5}
            className="bg-gray-100 row-span-2 md:row-span-1 relative rounded-3xl overflow-hidden"
          >
            {/* Display Video */}
            <video
              width={100}
              height={100}
              autoPlay
              muted
              loop
              poster="/assets/images/meat_frying_thumbnail.webp"
              className="w-full h-full object-cover"
            >
              <source src="/assets/videos/meat_frying.mp4" type="video/mp4" />
              {/* Alternative Image displayed for older browsers */}
              <Image
                src="/assets/images/meat_frying_thumbnail.webp"
                alt="Chef Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </video>

            {/* Video Overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#FF6B6B]
          flex flex-col justify-end items-center"
            >
              <Link
                href="https://www.youtube.com/@chukwuemekangumoha8771"
                target="_blank"
                rel="noopener"
                className="bg-white absolute text-gray-500 top-2 right-2 shadow rounded-3xl h-fit w-[150px] p-2
              flex justify-center items-center hover:bg-black hover:text-secondary-dark duration-200 ease-in-out capitalize"
              >
                <MdLiveTv className="inline mr-2 text-primary text-lg" /> watch
                now
              </Link>

              <span
                className="align-baseline text-white text-2xl md:text-4xl text-left font-bold p-6 w-full capitalize
            font-sans tracking-wider"
              >
                master great & tasty delicacies
              </span>
            </div>
          </SlideUp>
        </section>
      </section>

      {/* Popular Recipes Section */}
      <section className="w-full h-fit my-8 p-4">
        <div className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto mb-8 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-wide text-gray-700">
            Popular Recipes
          </h2>
          <span className="inline-block w-[80%] mt-3 text-gray-500">
            Join our community to access our most loved recipes from around the
            world
          </span>
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-gray-50 rounded-3xl p-8 text-center w-full md:w-[60%] lg:w-[40%] shadow-sm">
            <LuChefHat className="text-primary text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-gray-700 mb-2">
              Exclusive Recipes Await
            </h3>
            <p className="text-gray-500 mb-6">
              Create an account to unlock our collection of popular recipes and
              join thousands of food lovers!
            </p>
            <Link
              href="/login"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full
            hover:bg-primary-dark transition duration-300 ease-in-out font-medium"
            >
              Sign up now
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
