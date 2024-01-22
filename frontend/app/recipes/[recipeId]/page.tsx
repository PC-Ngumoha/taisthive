"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { getRecipe, deleteRecipe } from "@/utils";
import { RecipeResponseDataType } from "@/types";

const RecipePage = ({ params }: { params: { recipeId: number } }) => {
  const router = useRouter();
  const [recipe, setRecipe] = useState<RecipeResponseDataType>({
    id: 0,
    name: '',
    description: '',
    ingredients: [''],
    instructions: [''],
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipe(params.recipeId);
        if (response.status === 200) {
          setRecipe(response.data);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchRecipe();
  }, [params.recipeId]);

  return (
    <main className="p-7">
      <h1 className="text-3xl font-bold font-serif">{recipe.name}</h1>
      <div className="my-4">
        <p className="text-sm italic font-sans leading-6 tracking-wide">{recipe.description}</p>
      </div>
      <div className="my-4">
        <h2 className="text-lg font-bold font-serif">Ingredients:</h2>
        <ul className="text-sm font-serif px-5" style={{ listStyleType: 'disc' }}>
          {
            recipe.ingredients.map((ingredient: string, index: number) => {
              return (
                <li key={index}>{ingredient}</li>
              );
            })
          }
        </ul>
      </div>
      <div className="my-4">
        <h2 className="text-lg font-bold font-serif">Instructions:</h2>
        <ul className="text-sm font-serif px-5" style={{ listStyleType: 'disc' }}>
          {
            recipe.instructions.map((instruction: string, index: number) => {
              return (
                <li key={index}>{instruction}</li>
              );
            })
          }
        </ul>
      </div>
      <div className="my-4 flex justify-center">
        <Link
          className={`${buttonVariants({ variant: 'ghost' })} bg-brown-50 text-brown-100 md:w-[150px] w-[30%] mx-2`}
          href={{
            pathname: '/create-recipe',
            query: {
              recipeId: params.recipeId
            }
          }}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="fas fa-pen-to-square"
          />
        </Link>

        <Button
          variant="outline"
          className="text-brown-100 md:w-[150px] w-[30%] mx-2"
          onClick={async (evt) => {
            evt.preventDefault();
            try {
              const response = await deleteRecipe(params.recipeId);
              if (response.status === 204) {
                console.log('Recipe Deleted Successfully');
                router.replace('/recipes');
              }
            } catch (error) {
              console.log('Error: ', error);
            }
          }}>
          <FontAwesomeIcon
            icon={faTrash}
            className="fas fa-pen-to-square "
          />
        </Button>
      </div>
    </main>
  );
};

export default RecipePage;