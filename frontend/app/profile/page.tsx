
import Image from "next/image";

const ProfilePage = () => {
  return (
    <>
      <Image
        src="https://i.ibb.co/C98rcRx/avatar.png"
        alt='User avatar'
        width={40}
        height={40}
        className='rounded-full'
      />
      <p>Display Name: Jon Doe</p>
      <p>First Name: Jon</p>
      <p>Middle Name: **Not Provided**</p>
      <p>Last Name: Doe</p>
    </>
  );
};

export default ProfilePage;
