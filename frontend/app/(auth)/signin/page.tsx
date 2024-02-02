import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import displayPic from '../../../public/chicken-sauce.jpg'

const SigninPage = () => {
  return (
    <div className=' lg:w-[60%] h-fit flex flex-row justify-center mx-auto my-20 p-4 border-2 border-gray-50 rounded-2xl shadow-lg shadow-gray-200'>
      <div className='mr-2 hidden lg:block'>
        <Image
          src={displayPic}
          alt='Image displaying a delicious Nigerian dish'
          className='h-full object-cover' />
      </div>

      <div className='ml-2 self-start'>
        <h1 className='w-full text-left text-xl font-bold leading-4 tracking-wide'>Want to join our Family</h1>
        <form action="" className='my-6'>
          <div className='border-2 border-b-[1px] rounded-lg border-gray-100'>
            <div className='w-[400px] flex flex-row justify-around align-middle border-b-2 border-gray-100 px-2'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='fa-solid fa-envelope text-gray-400 self-center'
              />
              <Input
                type='email'
                placeholder='Enter email address'
                className='w-[80%] border-0 hover:border-0 self-center py-3 h-[60px]'
              />
              <Button variant='ghost' className='w-[20px] pointer-events-none self-center' />
            </div>

            <div className='w-[400px] flex flex-row justify-around align-middle border-b-2 border-gray-100 px-2'>
              <FontAwesomeIcon
                icon={faLock}
                className='fa-solid fa-lock text-gray-400 self-center'
              />
              <Input
                type='password'
                placeholder='Enter password'
                className='w-[80%] border-0 hover:border-0 self-center py-3 h-[60px]'
              />
              <Button variant='ghost' className='w-[20px] self-center'>
                <FontAwesomeIcon
                  icon={faEye}
                  className='fa-solid fa-eye-slash text-gray-200'
                />
              </Button>
            </div>

            <div className='w-[400px] flex flex-row justify-around align-middle border-b-2 border-gray-100 px-2'>
              <FontAwesomeIcon
                icon={faLock}
                className='fa-solid fa-lock text-gray-400 self-center'
              />
              <Input
                type='password'
                placeholder='Re-enter password'
                className='w-[80%] border-0 hover:border-0 self-center py-3 h-[60px]'
              />
              <Button variant='ghost' className='w-[20px] self-center'>
                <FontAwesomeIcon
                  icon={faEye}
                  className='fa-solid fa-eye-slash text-gray-200'
                />
              </Button>
            </div>
          </div>

          <div className='flex space-x-2 my-6'>
            <Checkbox id='terms' className='data-[state=checked]:bg-brown-100 data-[state=checked]:text-white' />
            <Label htmlFor='terms' className='text-xs text-gray-400'>
              I agree to the <Link href='#' className='underline'>terms & policy</Link>
            </Label>
          </div>

          <div>
            <Button className='w-36 bg-brown-100 my-3' type='submit'>Sign Up</Button>
          </div>
        </form>
      </div>
    </div >
  )
};

export default SigninPage;