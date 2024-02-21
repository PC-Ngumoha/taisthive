'use client';
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { shantell_sans } from '@/fonts';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import useAuthStore from '@/store/use-auth';
import { NavigationOptionType } from '@/types';
import { checkIfAuthenticated, classNames } from '@/utils';
import { AuthSegment, ProfileDropdown } from './navbar-sections';




export default function Navbar () {
  const router = useRouter();
  const pathname = usePathname();

  const [navigation, setNavigation] = useState<Array<NavigationOptionType>>([
    { name: 'Home', href: '/', current: true },
    { name: 'Recipes', href: '/recipes', current: false },
    { name: 'About Us', href: '/about', current: false },
  ]);

  const changeCurrent = (index: number): void => {
    const newNavigation = [...navigation];
    newNavigation.forEach((item) => { item.current = false });
    newNavigation[index].current = true;
    setNavigation(newNavigation);
  };

  const setCurrent = (): void => {
    const newNavigation = [...navigation];
    newNavigation.forEach((item) => {
      if (item.href === pathname) {
        item.current = true;
      } else {
        item.current = false;
      }
    })
    setNavigation(newNavigation);
  };

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    checkIfAuthenticated();
    setCurrent();
  }, [pathname, isAuthenticated]);

  // console.log(isAuthenticated)

  return (
    <Disclosure as="nav" className={
      classNames(
        pathname === '/create-recipe' ? 'bg-white opacity-95' : 'bg-transparent',
        "sticky top-0 z-30"
      )
    }>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-brown-100 hover:bg-brown-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center align-middle text-2xl">
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="fa-solid fa-utensils"
                  />
                  <p className={shantell_sans.className}>
                    taist<span className='font-bold text-brown-100'>hive</span>
                  </p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        onClick={(evt) => {
                          evt.preventDefault();
                          changeCurrent(index);
                          router.push(item.href);
                        }}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-brown-100 text-white' : 'text-brown-100 hover:bg-brown-50',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {isAuthenticated ? <ProfileDropdown /> : <AuthSegment />}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={(evt) => {
                    evt.preventDefault();
                    changeCurrent(index);
                    router.push(item.href);
                  }}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-brown-100 text-white' : 'text-brown-100 hover:bg-brown-50',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
