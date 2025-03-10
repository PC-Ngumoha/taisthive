import { RxPerson } from 'react-icons/rx';
import { BsCircleHalf } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';

export default function Home() {
  return (
    <article>
      {/* Marketing hero section */}
      <section
        className="h-[180vh] md:h-[90vh] lg:h-[110vh] grid grid-cols-1 grid-rows-10
      md:grid-cols-2 lg:grid-cols-5 md:grid-rows-4 gap-4 my-4"
      >
        <div className="bg-gray-100 p-2 text-bold row-span-3 md:col-span-2 md:row-span-2 lg:col-span-5 lg:row-span-3">
          1
        </div>

        {/* 2nd Card - Core Values */}
        <div
          className="bg-gray-50 p-2 text-bold row-span-3 md:col-span-2 md:row-span-1 lg:col-span-3
        h-full w-full flex rounded-3xl flex-col md:flex-row border-gray-100"
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
        <div className="bg-gray-100 p-2 text-bold row-span-2 md:row-span-1">
          3
        </div>
        <div className="bg-gray-100 p-2 text-bold row-span-2 md:row-span-1">
          4
        </div>
      </section>
    </article>
  );
}
