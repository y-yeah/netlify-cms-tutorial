import React from "react";
// import { translate, Trans } from "react-i18next";
// import "./i18n";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation("PageHeader");

  const changeLang = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>{t("heading")}</div>
      <div>{t("description")}</div>
      <button onClick={() => changeLang("sy")}>sy</button>
      <button onClick={() => changeLang("en")}>en</button>
    </div>
  );
}
