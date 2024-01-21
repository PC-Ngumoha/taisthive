import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Importing fontawesome css
// import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';


const RecipesPage = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 p-7">

      <div className="hover:bg-brown-50 bg-grey-50 rounded-lg md:w-1/3 w-1/2 p-3 mx-auto leading-10 tracking-wide">
        <div>
          <h1 className="text-lg font-serif">Recipe #1</h1>
          <h1 className="text-sm font-serif italic">description</h1>
        </div>
        <hr className="text-grey-100 w-full" />
        <div className="flex justify-end items-center">
          <Link
            href="/recipes/1"
            className={buttonVariants({ variant: "ghost" })}>
            <FontAwesomeIcon icon={faArrowRight} className="fas fa-arrow-right text-brown-100" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default RecipesPage;