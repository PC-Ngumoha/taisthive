'use client';
import { useState } from 'react';
import AuthForm from '@/components/custom/auth-form';

const SigninPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <AuthForm
      caption='Welcome back'
      submitCaption='Sign In'
      fields={[email, password, confirmPassword]}
      setters={[setEmail, setPassword, setConfirmPassword]}
    />
  )
};

export default SigninPage;