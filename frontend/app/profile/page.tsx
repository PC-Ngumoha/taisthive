
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { buttonVariants } from "@/components/ui/button";

const ProfilePage = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="w-[80%] md:w-[50%] h-[40vh] mx-auto my-6 relative bg-[url('/ingredients.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <Image
            src="https://i.ibb.co/C98rcRx/avatar.png"
            alt='User avatar'
            width={150}
            height={150}
            className='rounded-full'
          />
          <span className="text-2xl font-bold text-white">Jon Doe</span>
          <span className="text-base text-gray-100">jondoe@example.com</span>
          <Link
            href='#'
            className={`${buttonVariants({ variant: 'default' })} bg-brown-100 text-white absolute top-2 right-1`}>
            <FontAwesomeIcon icon={faPen} className="fa-solid fa-pen" />
          </Link>
        </div>
      </div>
      <p>Display Name: Jon Doe</p>
      <p>First Name: Jon</p>
      <p>Middle Name: **Not Provided**</p>
      <p>Last Name: Doe</p>
    </div>
  );
};

export default ProfilePage;
