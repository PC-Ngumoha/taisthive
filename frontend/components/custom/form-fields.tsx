'use client';
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";

const EmailField = ({ placeholder, email, setEmail }: {
  placeholder: string,
  email: string,
  setEmail: (param: string) => void
}) => {
  return (
    <div className='w-[400px] flex flex-row justify-around align-middle border-b-2 border-gray-100 px-2'>
      <FontAwesomeIcon
        icon={faEnvelope}
        className='fa-solid fa-envelope text-gray-400 self-center'
      />
      <Input
        type='email'
        placeholder={placeholder}
        value={email}
        onChange={(evt) => { setEmail(evt.target.value) }}
        className='w-[80%] border-0 hover:border-0 self-center py-3 h-[60px]'
      />
      <Button variant='ghost' className='w-[20px] pointer-events-none self-center' />
    </div>
  );
};


const PasswordField = ({ placeholder, password, setPassword }: {
  placeholder: string,
  password: string,
  setPassword: (param: string) => void
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className='w-[400px] flex flex-row justify-around align-middle border-b-2 border-gray-100 px-2'>
      <FontAwesomeIcon
        icon={faLock}
        className='fa-solid fa-lock text-gray-400 self-center'
      />
      <Input
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder}
        value={password}
        onChange={(evt) => { setPassword(evt.target.value) }}
        className='w-[80%] border-0 hover:border-0 self-center py-3 h-[60px]'
      />
      {isVisible ? (
        <Button
          variant='ghost'
          className='w-[20px] self-center'
          onClick={(evt) => {
            evt.preventDefault();
            setIsVisible(false)
          }}
        >
          <FontAwesomeIcon
            icon={faEyeSlash}
            className='fa-solid fa-eye-slash text-gray-300'
          />
        </Button>
      ) : (
        <Button
          variant='ghost'
          className='w-[20px] self-center'
          onClick={(evt) => {
            evt.preventDefault();
            setIsVisible(true)
          }}
        >
          <FontAwesomeIcon
            icon={faEye}
            className='fa-solid fa-eye text-gray-300'
          />
        </Button>
      )}
    </div>
  );
}

export {
  EmailField,
  PasswordField,
}