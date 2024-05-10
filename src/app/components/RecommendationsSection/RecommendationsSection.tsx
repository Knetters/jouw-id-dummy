import { Recommendation as RecommendationInterface } from "@/interfaces/Recommendation";
import VectorGraphic from "@/components/VectorGraphic/VectorGraphic";
import Recommendation from "@/app/components/Recommendation/Recommendation";
import styles from "./RecommendationsSection.module.scss";

type RecommendationsSectionProps = {
  recommendations: Promise<RecommendationInterface[]>;
};

const RecommendationsSection = async ({
  recommendations,
}: RecommendationsSectionProps) => {
  const recommendationsList = (await recommendations) || [];

  return (
    <section>
      <div className={styles.RecommendationContent}>
        <VectorGraphic name="logoText" className={styles.Logo} />
        <h3 className={styles.RecommendationHeading}>
          Gebasseerd op jouw intresses
        </h3>
        {recommendationsList && recommendationsList.length > 0 && (
          <ul className={styles.RecommendationsList}>
            {recommendationsList.map(
              (recommendation: RecommendationInterface) => (
                <li
                  key={recommendation.name}
                  className={styles.RecommendationItem}
                >
                  <Recommendation {...recommendation} />
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default RecommendationsSection;
