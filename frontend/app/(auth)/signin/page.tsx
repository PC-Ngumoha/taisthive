'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { EmailField, PasswordField } from '@/components/custom/form-fields';
import { loginUser, status, checkIfAuthenticated } from '@/utils';
import useAuthStore from '@/store/use-auth';
import usePageHistory from '@/store/use_page';
import displayPic from '../../../public/chicken-sauce.jpg';

const SigninPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const setAuthTokens = useAuthStore((state) => state.setAuthTokens);
  const setIsAuth = useAuthStore((state) => state.setIsAuthenticated);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const previousPage = usePageHistory(state => state.prevURL);

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    if (confirmPassword === password) {
      try {
        const response = await loginUser({ email, password });
        let next = '';
        if (response.status === status.HTTP_200_OK) {
          toast({
            title: 'Success: ',
            description: 'User signed in successfully'
          });
          const { access, refresh } = response.data;
          setAuthTokens(access, refresh);
          setIsAuth(true);
          toast({
            title: 'Success',
            description: 'User created successfully'
          });
          next = previousPage;
        } else {
          toast({
            title: 'Error: ',
            description: 'Improper request. Correct it and try again',
            variant: 'destructive'
          });
          next = '/signin';
        }
        router.replace(next);
      } catch (err) {
        toast({
          title: 'Error: ',
          description: 'Nonexistent email or Invalid password. Try again',
          variant: 'destructive'
        });
        router.replace('/signin');
      }
    } else {
      toast({
        title: 'Error: ',
        description: 'Passwords provided do not match',
        variant: 'destructive'
      })
    }
  };

  return (
    <div className=' lg:w-[60%] h-fit flex flex-row justify-center mx-auto my-20 p-4 border-2 border-gray-50 rounded-2xl shadow-lg shadow-gray-200'>
      <div className='mr-2 hidden lg:block'>
        <Image
          src={displayPic}
          alt='Image displaying a delicious Nigerian dish'
          priority
          className='h-full object-cover' />
      </div>

      <div className='ml-2 self-start'>
        <h1 className='w-full text-left text-xl font-bold leading-4 tracking-wide'>Welcome back</h1>
        <form action="" className='my-6' onSubmit={handleSubmit}>
          <div className='border-2 border-b-[1px] rounded-lg border-gray-100'>

            <EmailField
              placeholder='Enter email address'
              email={email}
              setEmail={setEmail}
            />

            <PasswordField
              placeholder='Enter password'
              password={password}
              setPassword={setPassword}
            />

            <PasswordField
              placeholder='Re-enter password'
              password={confirmPassword}
              setPassword={setConfirmPassword}
            />

          </div>

          <div className='flex space-x-2 my-6'>
            <Checkbox id='terms' className='data-[state=checked]:bg-brown-100 data-[state=checked]:text-white' />
            <Label htmlFor='terms' className='text-xs text-gray-400'>
              I agree to the <Link href='#' className='underline'>terms & policy</Link>
            </Label>
          </div>

          <div className='my-3'>
            <Button
              className='w-36 bg-brown-100 text-white'
              type='submit'
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div >
  )
};

export default SigninPage;