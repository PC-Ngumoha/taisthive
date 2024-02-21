
export interface RecipeDataType {
  name: string;
  description: string;
  ingredients: Array<string>;
  instructions: Array<string>;
}

export interface UserDetailsType {
  email: string;
  password: string;
}

export interface UserLoginRefreshType {
  refresh: string;
}


export interface RecipeResponseDataType extends RecipeDataType {
  id: number;
}

export interface NavigationOptionType {
  name: string;
  href: string;
  current: boolean;
};