
export interface RecipeDataType {
  name: string;
  description: string;
  ingredients: Array<string>;
  instructions: Array<string>;
}


export interface RecipeResponseDataType extends RecipeDataType {
  id: number;
}