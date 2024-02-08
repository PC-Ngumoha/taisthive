"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import useAuthStore from '@/store/use-auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getAllRecipes, refreshUserLogin } from '@/utils';
import { RecipeResponseDataType } from '@/types';

const RecipesPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const access = useAuthStore((state) => state.access);
  const refresh = useAuthStore((state) => state.refresh);
  const updateAccess = useAuthStore((state) => state.updateAccessToken);

  useEffect(() => {
    const fetchRecipes = async () => {
      let response = null;
      try {
        response = await getAllRecipes(access);
        if (response.status === 200) {
          setRecipes(response.data);
        }
      } catch (error) {
        if (response!.status === 401) {
          try {
            const response = await refreshUserLogin({ refresh });
            if (response.status === 200) {
              const { access } = response.data;
              console.log(access);
              updateAccess(access);
              router.refresh();
            }
          } catch (err) {
            toast({
              title: 'Error: ',
              description: 'Session expired, login again',
            })
            router.replace('/signin');
          }
        }
      }
    };

    fetchRecipes();
  }, [toast, access, router, refresh, updateAccess]);

  return (
    <div className="grid md:grid-cols-3 gap-4 p-7">

      {
        recipes.map((recipe: RecipeResponseDataType) => {
          return (
            <div key={recipe.id} className="hover:bg-brown-50 bg-grey-50 rounded-lg md:w-1/3 w-1/2 p-3 mx-auto leading-10 tracking-wide">
              <div>
                <h1 className="text-lg font-serif">{recipe.name}</h1>
                <h1 className="text-sm font-serif italic">{recipe.description}</h1>
              </div>
              <hr className="text-grey-100 w-full" />
              <div className="flex justify-end items-center">
                <Link
                  href={`/recipes/${recipe.id}`}
                  className={buttonVariants({ variant: "ghost" })}>
                  <FontAwesomeIcon icon={faArrowRight} className="fas fa-arrow-right text-brown-100" />
                </Link>
              </div>
            </div>
          )
        })
      }

    </div>
  );
};

export default RecipesPage;