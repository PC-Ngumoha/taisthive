'use client';
import { useState } from 'react';
import AuthForm from '@/components/custom/auth-form';

const SignupPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <AuthForm
      caption='Want to join our Family?'
      submitCaption='Sign Up'
      fields={[email, password, confirmPassword]}
      setters={[setEmail, setPassword, setConfirmPassword]}
    />
  )
};

export default SignupPage;