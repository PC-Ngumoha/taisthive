"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import RecipeCard from '@/components/custom/recipe-card';
import { getAllRecipes, status } from '@/utils';
import { RecipeResponseDataType } from '@/types';

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

    </div>
  );
};

export default RecipesPage;