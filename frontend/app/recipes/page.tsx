"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getAllRecipes } from '@/utils';
import { RecipeResponseDataType } from '@/types';

// Importing fontawesome css
// import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';


const RecipesPage = () => {
  const { toast } = useToast();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getAllRecipes();
        if (response.status === 200) {
          setRecipes(response.data);
        }
      } catch (error) {
        toast({
          title: 'Error:',
          description: 'Unable to list all available recipes',
          variant: 'destructive',
        });
      }
    };

    fetchRecipes();
  }, [toast]);

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