import type { Metadata } from "next";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "jouw.id demo - De Telegraaf",
};

export default function IntegrationExampleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.TelegraafLayout}>
      <div className={styles.Content}>
        <img src="../img/telegraaf-header.png" alt="" />

        <section className={styles.ArticlesContainer}>
          <div className={styles.FeaturedArticles}>
            <img
              className={styles.MainArticle}
              src="../img/article-image-1.png"
              alt=""
            />
            {children}
            <img src="../img/under-main-article.png" alt="" />
          </div>
          <div className={styles.LatestArticleList}>
            <p className={styles.LatestHeading}>LAATSTE NIEUWS</p>
            <ul>
              <li>
                <span>10:26</span>
                <p>
                  Iraanse apotheken gewaarschuwd: geen hoofddoek betekend geen
                  medicijnen
                </p>
                <img src="https://picsum.photos/350/200" alt="" />
              </li>
              <li>
                <span>10:11</span>
                <p>
                  <span>PREMIUM</span>NAVO-aanstelling Rutte: Daar is geen
                  enkele twijfel over
                </p>
                <img src="https://picsum.photos/350/201" alt="" />
              </li>
              <li>
                <span>09:53</span>
                <p>Gedetineerde gewond door brand gevangenis Veenhuizen</p>
                <img src="https://picsum.photos/350/202" alt="" />
              </li>
              <li>
                <span>09:46</span>
                <p>
                  Vlak voor Songfestivaluitzending komt vakbond met protestactie
                  op...
                </p>
                <img src="https://picsum.photos/350/203" alt="" />
              </li>
              <li>
                <span>09:32</span>
                <p>Nederlandse motorrijder (57) dood door botsing</p>
                <img src="https://picsum.photos/350/204" alt="" />
              </li>
              <li>
                <span>09:28</span>
                <p>
                  Parkeervergunning in twee op drie gemeenten duurder dan in
                  2021
                </p>
                <img src="https://picsum.photos/350/205" alt="" />
              </li>
              <li>
                <span>09:26</span>
                <p>’Heerlijk buitenweer’ verwacht op vrijdag: veel zon</p>
                <img src="https://picsum.photos/350/206" alt="" />
              </li>
              <li>
                <span>09:08</span>
                <p>Gedetineerde gewond door brand gevangenis Veenhuizen</p>
                <img src="https://picsum.photos/350/207" alt="" />
              </li>
              <li>
                <span>08:59</span>
                <p>
                  Vlak voor Songfestivaluitzending komt vakbond met protestactie
                  op...
                </p>
                <img src="https://picsum.photos/350/208" alt="" />
              </li>
              <li>
                <span>08:45</span>
                <p>
                  <span>PREMIUM</span>Nederlandse motorrijder (57) dood door
                  botsing
                </p>
                <img src="https://picsum.photos/350/209" alt="" />
              </li>
              <li>
                <span>08:36</span>
                <p>
                  Parkeervergunning in twee op drie gemeenten duurder dan in
                  2021
                </p>
                <img src="https://picsum.photos/350/210" alt="" />
              </li>
            </ul>
            <p className={styles.LatestHeading}>MEEST GELEZEN</p>
            <ul>
              <li>
                <span className={styles.MostCount}>1</span>
                <p>
                  Iraanse apotheken gewaarschuwd: geen hoofddoek betekend geen
                  medicijnen
                </p>
                <img src="https://picsum.photos/350/200" alt="" />
              </li>
              <li>
                <span className={styles.MostCount}>2</span>
                <p>NAVO-aanstelling Rutte: Daar is geen enkele twijfel over</p>
                <img src="https://picsum.photos/350/201" alt="" />
              </li>
              <li>
                <span className={styles.MostCount}>3</span>
                <p>Gedetineerde gewond door brand gevangenis Veenhuizen</p>
                <img src="https://picsum.photos/350/202" alt="" />
              </li>
            </ul>
          </div>
        </section>
      </div>
      <img className={styles.Footer} src="../img/footer.png" alt="" />
    </div>
  );
}
