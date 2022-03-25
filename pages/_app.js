import { storyblokInit, apiPlugin } from "@storyblok/react";
import '../styles/globals.css'
import Teaser from "../components/Teaser";
import Grid from "../components/Grid";
import Feature from "../components/Feature";
import Page from "../components/Page";
import Recipe from "../components/Recipe";
import FeaturedRecipes from "../components/FeaturedRecipes";
 
// resolve Storyblok components to Next.js components
const components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  page: Page,
  recipe: Recipe,
  "featured-recipes": FeaturedRecipes,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_PREVIEW,
  // bridge: false,
  // apiOptions: { 
  //   version: "draft",
  //   resolveRelations: ["featured-recipes.recipes"] },
  components,
  use: [apiPlugin],
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
