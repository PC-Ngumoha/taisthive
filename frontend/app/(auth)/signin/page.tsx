'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import AuthForm from '@/components/custom/auth-form';
import useAuthStore from '@/store/use-auth';
import usePageHistory from '@/store/use_page';
import { loginUser, status } from '@/utils';

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
            description: 'User logged in successfully'
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
    <AuthForm
      caption='Welcome back'
      buttonText='Sign In'
      fields={[email, password, confirmPassword]}
      fieldSetters={[setEmail, setPassword, setConfirmPassword]}
      onSubmit={handleSubmit}
    />
  );
};

export default SigninPage;