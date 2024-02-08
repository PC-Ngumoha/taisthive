"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MultiInput from "@/components/custom/multi-input";
import { useToast } from "@/components/ui/use-toast";
import { createRecipe, getRecipe, updateRecipe, status } from "@/utils";
import { RecipeDataType, RecipeResponseDataType } from "@/types";

const CreateRecipePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [ingredientFields, setIngredientFields] = useState<Array<string>>(['']);
  const [instructionFields, setInstructionFields] = useState<Array<string>>(['']);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (searchParams.has('recipeId')) {
        const recipeId = parseInt(searchParams.get('recipeId')!);
        try {
          const response = await getRecipe(recipeId)
          if (response.status === status.HTTP_200_OK) {
            const {
              name, description, ingredients, instructions
            }: RecipeResponseDataType = response.data;
            setTitle(name);
            setDescription(description);
            setIngredientFields(ingredients);
            setInstructionFields(instructions);
          }
        } catch (error) {
          toast({
            title: 'Error:',
            description: `Unable to retrieve for recipe with ID: ${recipeId}`,
            variant: 'destructive'
          });
        }
      }
    };

    fetchRecipe();
  }, [searchParams, toast, router]);

  const handleSubmit = async (evt: any) => {
    try {
      evt.preventDefault();
      const payload: RecipeDataType = {
        name: title,
        description: description,
        ingredients: ingredientFields,
        instructions: instructionFields
      };
      let response;
      if (searchParams.has('recipeId')) {
        const recipeId = parseInt(searchParams.get('recipeId')!);
        response = await updateRecipe(recipeId, payload);
        if (response.status === status.HTTP_200_OK) {
          toast({
            title: 'Success:',
            description: 'Recipe Updated Successfully'
          })
          router.replace('/recipes');
        }
      } else {
        response = await createRecipe(payload);
        if (response.status === status.HTTP_201_CREATED) {
          toast({
            title: 'Success:',
            description: 'Recipe Created Successfully'
          })
          router.replace('/recipes');
        }
      }
    } catch (error) {
      toast({
        title: 'Error:',
        description: 'Unable to save recipe',
        variant: 'destructive'
      })
    }
  };

  return (
    <form
      className="m-5 p-5 flex flex-col"
      onSubmit={handleSubmit}
      name="create-recipe"
    >
      <div className="flex flex-row justify-between align-middle">
        <h1 className="lg:text-xl text-base font-bold lg:ml-10 ml-3 self-center">Create new recipe</h1>
        <Button className="lg:mr-10 mr-3 w-28 bg-brown-100" type="submit">Save</Button>
      </div>
      <div className="lg:w-[40%] w-[90%] self-center m-4 p-3">
        <div className="my-5">
          <Label className="text-lg" htmlFor="recipe-title">Recipe Title:</Label>
          <Input
            placeholder="what do you want to call it?"
            id="recipe-title"
            type="text"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />
        </div>
        <div className="my-5">
          <Label className="text-lg" htmlFor="desc">Description:</Label>
          <Input
            placeholder="tell me more about your recipe"
            id="desc"
            type="text"
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
          />
        </div>
        <div className="my-5">
          <Label className="text-lg" htmlFor="ingredients">Ingredients:</Label>
          <MultiInput
            id="ingredients"
            field={ingredientFields}
            setter={setIngredientFields}
            itemClass="Ingredient" />
        </div>
        <div className="my-5">
          <Label className="text-lg" htmlFor="instructions">Instructions:</Label>
          <MultiInput
            id="instructions"
            field={instructionFields}
            setter={setInstructionFields}
            itemClass="Step" />
        </div>
      </div>
    </form>
  );
};

export default CreateRecipePage;