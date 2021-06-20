import { createSelector } from "reselect";

const mainPageState = (state) => state.mainPage;

export const makeSelectorArticles = createSelector(
  mainPageState,
  (mainPage) => mainPage.articles
);
