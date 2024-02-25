'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import AuthForm from '@/components/custom/auth-form';
import useAuthStore from '@/store/use-auth';
import usePageHistory from '@/store/use_page';
import { createUser, loginUser, createUserProfile, status } from '@/utils';

const SignupPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const setAuthTokens = useAuthStore(state => state.setAuthTokens);
  const setIsAuth = useAuthStore(state => state.setIsAuthenticated);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const previousPage = usePageHistory(state => state.prevURL);

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    if (confirmPassword === password) {
      try {
        let response = await createUser({ email, password });
        let next = '';
        if (response.status === status.HTTP_201_CREATED) {
          response = await loginUser({ email, password });
          if (response.status === status.HTTP_200_OK) {
            const { access, refresh } = response.data;
            setAuthTokens(access, refresh);
            await createUserProfile();
            setIsAuth(true);
            toast({
              title: 'Success',
              description: 'User created successfully'
            });
            next = previousPage;
          }
        } else {
          toast({
            title: 'Error:',
            description: 'Unable to create new user',
            variant: 'destructive'
          });
          next = '/signup';
        }
        router.replace(next);
      } catch (err) {
        toast({
          title: 'Error: ',
          description: 'Oops!! an unexpected server error occurred',
          variant: 'destructive'
        })
        router.replace('/');
      }
    } else {
      toast({
        title: 'Error: ',
        description: 'Passwords provided do not match, try again',
        variant: 'destructive'
      })
    }
  };

  return (
    <AuthForm
      caption='Want to join our Family?'
      buttonText='Sign Up'
      fields={[email, password, confirmPassword]}
      fieldSetters={[setEmail, setPassword, setConfirmPassword]}
      onSubmit={handleSubmit}
    />
  )
};

export default SignupPage;