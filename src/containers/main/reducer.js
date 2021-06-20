import { ActionTypes } from "./consts";

const defaultState = {
  articles: ["No articles"],
};

export function mainPageReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.ARTICLE_TYPE:
      return { ...state, articles: action.payload };
    default:
      return state;
  }
}
