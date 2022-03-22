import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import DynamicComponent from "./DynamicComponent";
 
const Page = ({ blok }) => (
  <main {...sbEditable(blok)}>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);
 
export default Page;