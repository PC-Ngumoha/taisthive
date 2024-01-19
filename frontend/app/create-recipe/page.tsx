"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CreateRecipePage = () => {
  return (
    <form className="m-5 p-5 flex flex-col" action="" onSubmit={() => null}>
      <div className="flex flex-row justify-between align-middle">
        <h1 className="lg:text-xl text-base font-bold lg:ml-10 ml-3 self-center">Create new recipe</h1>
        <Button className="lg:mr-10 mr-3 w-28 bg-brown-100" type="submit">Save</Button>
      </div>
      <div className="lg:w-[40%] w-[90%] self-center m-4 p-3">
        <div>
          <Label className="text-lg" htmlFor="recipe-title">Recipe Title:</Label>
          <Input id="recipe-title" type="text" />
        </div>
        <div>
          <Label className="text-lg" htmlFor="desc">Description:</Label>
          <Input id="desc" type="text" />
        </div>
      </div>
    </form>
  );
};

export default CreateRecipePage;