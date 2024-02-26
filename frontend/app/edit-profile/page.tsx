'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { retrieveUserProfile, status, updateUserProfile } from "@/utils";
import usePageHistory from "@/store/use_page";

const EditProfilePage = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [displayName, setDisplayName] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [middleName, setMiddleName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const previousPage = usePageHistory(state => state.prevURL);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await retrieveUserProfile();

        if (response.status === status.HTTP_200_OK) {
          setDisplayName(response.data['display_name']);
          setFirstName(response.data['first_name']);
          setMiddleName(response.data['middle_name']);
          setLastName(response.data['last_name']);
        }
      } catch (err) {
        toast({
          title: 'Error:',
          description: 'Unable to retrieve user profile, try logging in again',
          variant: 'destructive',
        });
        router.push('/signin');
      }
    };

    fetchPageData();
  }, []);

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    let next = '';
    try {
      const data = { displayName, firstName, middleName, lastName };
      const response = await updateUserProfile(data);

      if (response.status === status.HTTP_200_OK) {
        toast({
          title: 'Success:',
          description: 'Profile Updated Successfully',
        })
        // router.replace('/profile');
        next = previousPage;
      }
    } catch (err: any) {
      if (err.response.status === status.HTTP_401_UNAUTHORIZED) {
        toast({
          title: 'Error:',
          description: 'Session expired, try logging in again',
          variant: 'destructive',
        })
        // router.replace('/signin');
        next = '/signin';
      } else {
        toast({
          title: 'Error:',
          description: 'Unable to update profile, try again',
          variant: 'destructive',
        })
        next = previousPage;
      }
    }
    router.replace(next);
  }

  return (
    <form
      className="m-5 p-5 flex flex-col"
      onSubmit={handleSubmit}
      name="edit-profile"
    >
      <div className="fixed top-0 w-full h-[18%] px-2 md:px-20 flex flex-row justify-between align-end bg-white opacity-95">
        <h1 className="lg:text-xl text-base font-bold lg:ml-10 ml-0 self-end">
          Edit Profile
        </h1>
        <Button className="lg:mr-10 mr-16 w-28 bg-brown-100 text-white self-end" type="submit">Save</Button>
      </div>
      <div className="lg:w-[40%] w-[90%] self-center m-4 p-3">
        <div className="my-5">
          <Label className="text-lg" htmlFor="display-name">Display Name:</Label>
          <Input
            placeholder="How do you want to be called?"
            id="display-name"
            type="text"
            value={displayName}
            onChange={(evt) => setDisplayName(evt.target.value)}
          />
        </div>
        <div className="my-5">
          <Label className="text-lg" htmlFor="first-name">First Name:</Label>
          <Input
            placeholder="Enter first name"
            id="first-name"
            type="text"
            value={firstName}
            onChange={(evt) => setFirstName(evt.target.value)}
          />
        </div>
        <div className="my-5">
          <Label className="text-lg" htmlFor="middle-name">Middle Name:</Label>
          <Input
            placeholder="Enter middle name"
            id="middle-name"
            type="text"
            value={middleName}
            onChange={(evt) => setMiddleName(evt.target.value)}
          />
        </div>
        <div className="my-5">
          <Label className="text-lg" htmlFor="last-name">Last Name:</Label>
          <Input
            placeholder="Enter last name"
            id="last-name"
            type="text"
            value={lastName}
            onChange={(evt) => setLastName(evt.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default EditProfilePage;
