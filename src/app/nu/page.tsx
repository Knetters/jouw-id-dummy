"use client";

import { Suspense } from "react";
import recommendations from "./dummy-recommendations.json";
import WebComponent from "@/components/WebComponent/WebComponent";
import RecommendationsSection from "@/components/RecommendationsSection/RecommendationsSection";
import { Recommendation } from "@/interfaces/Recommendation";
import styles from "./page.module.scss";

const loggedIn = true;
const loggedOut = false;

const Page = () => {
  // fake async fetching of recommendations.
  const recommendationsPromise = new Promise<Recommendation[]>((resolve) => {
    setTimeout(() => {
      resolve(recommendations);
    }, 1000);
  });
  return (
    <div className={styles.NuPage}>
      {loggedOut && <WebComponent />}
      <Suspense fallback={<div>Loading...</div>}>
        {loggedIn && (
          <RecommendationsSection recommendations={recommendationsPromise} />
        )}
      </Suspense>
    </div>
  );
};

export default Page;
