'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { buttonVariants } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { retrieveUserProfile, status, classNames } from "@/utils";
import usePageHistory from "@/store/use_page";
import { shantell_sans } from "@/fonts";

const ProfilePage = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [displayName, setDisplayName] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [middleName, setMiddleName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const setPreviousPage = usePageHistory(state => state.setPrevURL);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await retrieveUserProfile();

        if (response.status === status.HTTP_200_OK) {
          setDisplayName(response.data['display_name']);
          setFirstName(response.data['first_name']);
          setMiddleName(response.data['middle_name']);
          setLastName(response.data['last_name']);
          setEmail(response.data['email']);
        }
      } catch (err) {
        toast({
          title: 'Error:',
          description: 'Unable to retrieve user profile, try logging in again',
          variant: 'destructive',
        });
        router.push('/signin');
      }
    };

    fetchPageData();
  }, []);


  return (
    <div className="w-[80%] mx-auto">
      <div className={
        classNames(
          "w-[80%] md:w-[50%] h-[40vh] mx-auto my-6 relative rounded-tl-lg rounded-tr-lg",
          "bg-[url('/ingredients.jpg')] bg-no-repeat bg-cover bg-center"
        )}
      >
        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <Image
            src="https://i.ibb.co/C98rcRx/avatar.png"
            alt='User avatar'
            width={150}
            height={150}
            className='rounded-full'
          />
          <span className={
            classNames(shantell_sans.className, ' text-xl md:text-2xl lg:text-4xl font-bold text-white')
          }>
            {displayName}
          </span>
          <span className="text-base text-gray-100">{email}</span>
          <Link
            href='#'
            className={
              classNames(
                buttonVariants({ variant: 'default' }),
                'bg-brown-100 text-white absolute top-2 right-2'
              )}
            onClick={(evt) => {
              evt.preventDefault();
              setPreviousPage('/profile');
              router.push('/edit-profile')
            }}>
            <FontAwesomeIcon icon={faPen} className="fa-solid fa-pen" />
          </Link>
        </div>
      </div>

      <div className="w-[80%] md:w-[50%] h-[40vh] mx-auto my-6 relative bg-grey-50 p-6 overflow-auto rounded-bl-lg rounded-br-lg leading-8">
        <p><span className="font-bold">Display Name</span>:
          {` ${displayName}`}
        </p>
        {firstName && (
          <p><span className="font-bold">First Name</span>:
            {` ${firstName}`}
          </p>
        )}
        {middleName && (
          <p><span className="font-bold">Middle Name</span>:
            {` ${middleName}`}
          </p>
        )}
        {lastName && (
          <p><span className="font-bold">Last Name</span>:
            {` ${lastName}`}
          </p>
        )}
        <p><span className="font-bold">Email Address</span>:
          {` ${email}`}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
