import { Recommendation as RecommendationInterface } from "@/interfaces/Recommendation";
import RichText from "@/components/RichText/RichText";
import styles from "./Recommendation.module.scss";

const Recommendation = async ({
  about,
  abstract,
  category,
  image,
  name,
}: RecommendationInterface) => {
  const getCategoryLabel = (categoryURI: string) => {
    const parts = categoryURI.split("/");
    return parts[parts.length - 1];
  };

  const limitedAbstract =
    abstract.length > 200 ? `${abstract.slice(0, 200)}...` : abstract;
  const limitedTitle = name.length > 50 ? `${name.slice(0, 50)}...` : name;

  return (
    <a href={about} className={styles.Recommendation}>
      <figure className={styles.Figure}>
        <img src={image} alt={name} />
      </figure>
      <div className={styles.RecommendationContent}>
        <p className={styles.RecommendationHeader}>
          <span>{getCategoryLabel(category)}</span>
        </p>
        <h2>{limitedTitle}</h2>
        <RichText content={limitedAbstract} className={styles.Abstract} />
      </div>
    </a>
  );
};

export default Recommendation;
