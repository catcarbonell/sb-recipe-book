import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import Link from "next/link";

const FeaturedRecipes = ({ blok }) => {
  return (
    <div
      {...sbEditable(blok)}
      key={blok._uid}
      className="py-8 mb-6 container mx-auto text-left"
    >
      <div className="relative">
        <h2 className="relative font-serif text-4xl z-10 text-primary">
          {blok.title}
        </h2>
        <div className="absolute top-0 w-64 h-10 mt-6 -ml-4 bg-yellow-300 opacity-50" />
        </div>
        <ul className="flex">
          
          {blok.recipes.map((recipe) => {
            return (
              <li key={recipe.slug} className="pr-8 w-1/3">
                <Link href={`recipes/${recipe.slug}`}>
                  <a className="py-16 block transition hover:opacity-50">
                    <img src={recipe.image} className="pb-10 w-full" />
                    <h2 className="pb-6 text-lg font-bold">
                      {recipe}
                    </h2>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
    </div>
  );
};

export default FeaturedRecipes;
