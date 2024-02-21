'use client';
import Image from "next/image";
import Link from "next/link";
import { EmailField, PasswordField } from "./form-fields";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import displayPic from '../../public/chicken-sauce.jpg';


interface AuthFormTypes {
  caption: string;
  buttonText: string;
  fields: [
    email: string,
    password: string,
    confirmPassword: string
  ];
  fieldSetters: [
    setEmail: (val: string) => void,
    setPassword: (val: string) => void,
    setConfirmPassword: (val: string) => void,
  ];
  onSubmit: (evt: any) => void;
};

const AuthForm = ({ caption, buttonText, fields, fieldSetters, onSubmit }: AuthFormTypes) => {

  const [email, password, confirmPassword] = fields;
  const [setEmail, setPassword, setConfirmPassword] = fieldSetters;

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
        <h1 className='w-full text-left text-xl font-bold leading-4 tracking-wide'>{caption}</h1>
        <form action="" className='my-6' onSubmit={onSubmit}>
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
              {buttonText}
            </Button>
          </div>
        </form>
      </div>
    </div >
  );
};

export default AuthForm;
