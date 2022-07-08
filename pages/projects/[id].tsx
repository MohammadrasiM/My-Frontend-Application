import React from "react";
import { projectsImages } from "../../components/Projects/ProjectsData";
import TopSection from "./TopSection";
import LowerSections from "./LowerSection";

interface InputProps {
  params?: any;
  result?: {
    title?: string | undefined;
    src?: string | undefined;
    tech?: string | undefined;
    link?: string | undefined;
    id?: number | undefined;
    name?: string | undefined;
    description?: string | undefined;
    technologies?: any | undefined;
    website?: string | undefined;
  };
}
function project({ result }: InputProps) {
  return (
    <div className="w-full">
      <TopSection src={result?.src} title={result?.title} tech={result?.tech} />
      <LowerSections
        description={result?.description}
        technologies={result?.technologies}
        website={result?.website}
      />
    </div>
  );
}

export default project;

export async function getServerSideProps({ params }: InputProps) {
  let result = projectsImages.find((project) => project.name === params.id);

  return {
    props: {
      result: result,
      seo: {
        title: `smrm | ${result?.name}` || "",
        description: result?.name || "",
      },
    },
  };
}
