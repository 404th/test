import { ActionTypes } from "./consts";

export function setArticles(articles) {
  return {
    type: ActionTypes.ARTICLE_TYPE,
    payload: articles,
  };
}
