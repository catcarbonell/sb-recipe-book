import React from "react";
import {StoryblokComponent, storyblokEditable} from "@storyblok/react";
 
const Grid = ({ blok }) => {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;