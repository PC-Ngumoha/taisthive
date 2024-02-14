"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useToast } from '@/components/ui/use-toast';
import RecipeCard from '@/components/custom/recipe-card';
import { getAllRecipes, status } from '@/utils';
import { RecipeResponseDataType } from '@/types';
import { buttonVariants } from '@/components/ui/button';

const RecipesPage = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getAllRecipes();
        if (response.status === status.HTTP_200_OK) {
          setRecipes(response.data);
        }
      } catch (error) {
        toast({
          title: 'Error:',
          description: 'Session has expired. Login Again',
          variant: 'destructive',
        });
        router.replace('/signin');
      }
    };

    fetchRecipes();
  }, [toast, router]);

  return (
    <div className="grid md:grid-cols-3 gap-4 p-7">

      {
        recipes.map((recipe: RecipeResponseDataType) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))
      }
      <div className='bg-white border-[1px] md:border-0 border-grey-50 rounded-tl-[80px] rounded-tr-[80px] flex justify-center z-10 w-[100vw] md:w-fit h-[20vh] md:h-fit md:bg-transparent fixed bottom-0 place-self-center md:absolute md:bottom-[5%] md:right-[5%]'>
        <Link
          href='/create-recipe'
          className={`self-center md:rounded-full md:w-14 md:h-14 ${buttonVariants({ variant: "default" })} text-brown-100`}>
          <FontAwesomeIcon
            icon={faPlus}
            className='fa-solid fa-plus text-2xl p-5'
          />
        </Link>
      </div>

    </div>
  );
};

export default RecipesPage;