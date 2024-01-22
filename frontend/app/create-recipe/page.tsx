"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { createRecipe, getRecipe, updateRecipe } from "@/utils";
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
          if (response.status === 200) {
            const {
              name, description, ingredients, instructions
            }: RecipeResponseDataType = response.data;
            setTitle(name);
            setDescription(description);
            setIngredientFields(ingredients);
            setInstructionFields(instructions);
          }
        } catch (error) {
          // console.log('Error: ', error);
          toast({
            title: 'Error:',
            description: `Unable to retrieve for recipe with ID: ${recipeId}`,
            variant: 'destructive'
          });
        }
      }
    };

    fetchRecipe();
  }, [searchParams, toast]);

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
        if (response.status === 200) {
          // console.log('');
          toast({
            title: 'Success:',
            description: 'Recipe Updated Successfully'
          })
          router.replace('/recipes');
        }
      } else {
        response = await createRecipe(payload);
        if (response.status === 201) {
          // console.log('Recipe Created Successfully');
          toast({
            title: 'Success:',
            description: 'Recipe Created Successfully'
          })
          router.replace('/recipes');
        }
      }
    } catch (error) {
      // console.log('Error: ', error);
      toast({
        title: 'Error:',
        description: 'Unable to save recipe',
        variant: 'destructive'
      })
    }
  };

  const handleChange = (index: number, value: string, field: Array<string>, setter: (param: Array<string>) => void) => {
    const newField: Array<string> = [...field];
    newField[index] = value;
    setter(newField);
  }

  const addField = (field: Array<string>, setter: (param: Array<string>) => void) => {
    setter([...field, '']);
  }

  const removeField = (index: number, field: Array<string>, setter: (param: Array<string>) => void) => {
    field.splice(index, 1);
    const newField = [...field];
    setter(newField);
  };

  return (
    <form className="m-5 p-5 flex flex-col" action="" onSubmit={handleSubmit}>
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
          <div id="ingredients">
            {
              ingredientFields.map((ingredient, index) => {
                return (
                  <div className="m-2 flex justify-between" key={index}>
                    <Input
                      type="text"
                      placeholder={`Ingredient #${index + 1}`}
                      value={ingredient}
                      onChange={
                        (evt) => {
                          handleChange(index, evt.target.value, ingredientFields, setIngredientFields);
                        }}
                    />
                    <Button
                      className="text-brown-100 bg-brown-50 ml-2"
                      variant="ghost"
                      onClick={(evt) => {
                        evt.preventDefault();
                        removeField(index, ingredientFields, setIngredientFields)
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} className="fas fa-trash" />
                    </Button>
                  </div>
                );
              })
            }
            <Button
              className="text-brown-100"
              variant="ghost"
              onClick={(evt) => {
                evt.preventDefault();
                addField(ingredientFields, setIngredientFields)
              }}
            >
              + Add
            </Button>
          </div>
        </div>
        <div className="my-5">
          <Label className="text-lg" htmlFor="instructions">Instructions:</Label>
          <div id="instructions">
            {
              instructionFields.map((ingredient, index) => {
                return (
                  <div className="m-2 flex justify-between" key={index}>
                    <Input
                      type="text"
                      placeholder={`Step #${index + 1}`}
                      value={ingredient}
                      onChange={
                        (evt) => {
                          handleChange(index, evt.target.value, instructionFields, setInstructionFields);
                        }}
                    />
                    <Button
                      className="text-brown-100 bg-brown-50 ml-2"
                      variant="ghost"
                      onClick={(evt) => {
                        evt.preventDefault();
                        removeField(index, instructionFields, setInstructionFields)
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} className="fas fa-trash" />
                    </Button>
                  </div>
                );
              })
            }
            <Button
              className="text-brown-100"
              variant="ghost"
              onClick={(evt) => {
                evt.preventDefault();
                addField(instructionFields, setInstructionFields)
              }}
            >
              + Add
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateRecipePage;