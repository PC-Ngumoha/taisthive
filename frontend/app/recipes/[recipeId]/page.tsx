import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const RecipePage = ({ params }: { params: { recipeId: number } }) => {
  return (
    <main className="p-7">
      <h1 className="text-3xl font-bold font-serif">Recipe Title</h1>
      <div className="my-4">
        <p className="text-sm italic font-sans leading-6 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis accusantium distinctio blanditiis, quasi dolores dolore ea nisi repellendus laborum vitae molestias voluptatibus odit nemo sequi ad ipsa nobis odio.</p>
      </div>
      <div className="my-4">
        <h2 className="text-lg font-bold font-serif">Ingredients:</h2>
        <ul className="text-sm font-serif px-5" style={{ listStyleType: 'disc' }}>
          <li>Ingredient #1</li>
          <li>Ingredient #2</li>
          <li>Ingredient #3</li>
          <li>Ingredient #4</li>
          <li>Ingredient #5</li>
          <li>Ingredient #6</li>
        </ul>
      </div>
      <div className="my-4">
        <h2 className="text-lg font-bold font-serif">Instructions:</h2>
        <ul className="text-sm font-serif px-5" style={{ listStyleType: 'disc' }}>
          <li>Step #1</li>
          <li>Step #2</li>
          <li>Step #3</li>
          <li>Step #4</li>
          <li>Step #5</li>
          <li>Step #6</li>
        </ul>
      </div>
      <div className="my-4 flex justify-center">
        <Button
          variant="ghost"
          className="bg-brown-50 text-brown-100 md:w-[150px] w-[30%] mx-2">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="fas fa-pen-to-square"
          />
        </Button>

        <Button
          variant="outline"
          className="text-brown-100 md:w-[150px] w-[30%] mx-2">
          <FontAwesomeIcon
            icon={faTrash}
            className="fas fa-pen-to-square"
          />
        </Button>
      </div>
    </main>
  );
};

export default RecipePage;