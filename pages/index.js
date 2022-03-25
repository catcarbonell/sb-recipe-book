import Head from "next/head";
import styles from "../styles/Home.module.css";
 
// The Storyblok Client & hook
import { StoryblokComponent, useStoryblokState, getStoryblokApi } from "@storyblok/react";
 
export default function Home({ story }) {
 
  story = useStoryblokState(story, {
    resolveRelations: ["featured-recipes.recipes"],
  });
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header>
 
      <StoryblokComponent blok={story.content} />
    </div>
  );
}
 
export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
  // load the published content outside of the preview mode
  let sbParams = {
    version: "draft",
    resolve_relations: ["featured-recipes.recipes"], // or 'draft'
  };
 
  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}