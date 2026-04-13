"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config"; // Adjust this path if your config is somewhere else

export default function StudioPage() {
  return <NextStudio config={config} />;
}