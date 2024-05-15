import type { Metadata } from "next";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "jouw.id demo - nu.nl",
};

export default function IntegrationExampleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.NuLayout}>
      <header className={styles.Header}>
        <img
          className={styles.desktopHeader}
          src="../img/nu-nl-header.png"
          alt=""
        />
        <img
          className={styles.mobileHeader}
          src="../img/nu-nl-mobile-header.png"
          alt=""
        />
      </header>
      <div className={styles.Content}>
        <div className={styles.MainContent}>
          <p className={styles.HeaderText}>
            Vrijdag 10 mei 2024 | Het laatste nieuws het eerst op NU.nl
          </p>
          <img
            className={styles.MainArticle}
            src="../img/nu-nl-main-article.png"
            alt=""
          />
          {children}
          <ul className={styles.NuNewsList}>
            <li>
              Na een week nog niet met paintballgeweer op niet-schuwe wolf
              geschoten
            </li>
            <li>
              Aantal leerplichtige jongeren dat thuiszit zorgwekkend hard
              gestegen
            </li>
            <li>Menno Geelen komende maanden algemeen directeur van Ajax</li>
            <li>
              <span className={styles.RedText}>Overzicht</span>Duitsland koopt
              raketsystemen, Zelensky ontslaat hoofd bodyguards
            </li>
            <li>
              Halsema noemt ME-acties nodig, betogers met gezichtsbedekking bij
              UvA-rector
            </li>
            <li>
              <span className={styles.RedText}>Video</span>Joost Klein breekt in
              na vraag aan Israëlische zangeres: Waarom niet?
            </li>
            <li>
              Oud-Ajacied Tijjani Babangida zwaargewond na ongeluk, broer
              Ibrahim overleden
            </li>
            <li>
              <span className={styles.RedText}>NU+</span>Nederlandse Laura
              bracht apen tot leven in nieuwe Planet of the Apes-film
            </li>
            <li>
              Gratis wijn verstopt in kleine lettertjes van Britse denktank na 3
              maanden ontdekt
            </li>
            <li>
              Japanners vinden dode rat in gesneden brood, ruim 100.000 zakken
              teruggehaald
            </li>
            <li>Fotograaf Janette Beckman wil begrip voor buitenbeentjes</li>
          </ul>
          <p className={styles.MoreButton}>Meer Algemeen</p>
        </div>
        <div className={styles.SideContent}>
          <img
            className={styles.desktopHeader}
            src="../img/nu-nl-sidebar-header.png"
            alt=""
          />
          <img
            className={styles.MostRead}
            src="../img/nu-nl-most-read.png"
            alt=""
          />
          <img
            className={styles.MostTalked}
            src="../img/nu-nl-most-talked.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
