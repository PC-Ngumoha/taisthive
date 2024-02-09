import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { RecipeResponseDataType } from "@/types";
import { buttonVariants } from "../ui/button";


const RecipeCard = ({ recipe }: { recipe: RecipeResponseDataType }) => {
  return (
    <div className="hover:bg-brown-50 bg-grey-50 rounded-lg p-3 mx-auto leading-10 tracking-wide">
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
  );
};

export default RecipeCard;