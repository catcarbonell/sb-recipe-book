import React from "react";
import {storyblokEditable} from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";


const Recipe = ({ blok }) => {
    return (
      <div {...storyblokEditable(blok)} key={blok._uid}>
        <div className="bg-white-half w-full">
          <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
            <img className="w-1/2 bg-gray-300 my-16" src={blok.image.filename} />
          </div>
        </div>
        <div>
          {render(blok.ingredients)}
        </div>
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
            {render(blok.instructions)}
          </div>
        </div>
      </div>
    );
  };
  
  export default Recipe;