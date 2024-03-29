'use client';
import { Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";
import useAuthStore from "@/store/use-auth";
import { classNames } from "@/utils";
import { buttonVariants } from "../ui/button";


export const AuthSegment = () => (
  <div
    className='h-8 lg:h-10'
  >
    <a
      href='/signin'
      className={
        classNames(
          buttonVariants({ variant: 'default' }),
          'text-[9px] md:text-base mr-3 p-4 w-20 h-full lg:w-24 bg-brown-100 text-white shadow-md'
        )}
    >
      Sign In
    </a>

    <a
      href='/signup'
      className={
        classNames(
          buttonVariants({ variant: 'default' }),
          'text-[9px] md:text-base mr-3 p-4 w-20 h-full lg:w-24 bg-gray-100 text-black shadow-md'
        )}
    >
      Sign Up
    </a>
  </div>
);

export const ProfileDropdown = () => {
  const destroyTokens = useAuthStore(state => state.destroyTokens);
  const setIsAuth = useAuthStore(state => state.setIsAuthenticated);
  const router = useRouter();

  return (
    <Menu as="div" className="relative ml-3 h-10">
      <div>
        <Menu.Button className="relative h-full flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <div className='h-10 w-10'>
            <Image
              src="https://i.ibb.co/C98rcRx/avatar.png"
              alt='User avatar'
              width={40}
              height={40}
              className='rounded-full'
            />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={
                  classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                onClick={(evt) => {
                  evt.preventDefault();
                  router.replace('/profile');
                }}
              >
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={
                  classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
              >
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={
                  classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                onClick={(evt) => {
                  evt.preventDefault();
                  destroyTokens();
                  setIsAuth(false);
                  router.replace('/');
                }}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
};