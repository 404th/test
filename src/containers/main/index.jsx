import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectorArticles } from "./selectors";
import { setArticles } from "./actions";
import axios from "axios";
import Card from "../../components/card/index";
import "./main.css";

const stateSelector = createSelector(makeSelectorArticles, (articles) => ({
  myArticles: articles,
}));

function ActionDispatch(dispatch) {
  return {
    setArticles: (users) => dispatch(setArticles(users)),
  };
}

function MainPage() {
  useEffect(() => {
    fetchArticles();
  }, []);

  const { myArticles } = useSelector(stateSelector);
  const { setArticles } = ActionDispatch(useDispatch());

  async function fetchArticles() {
    const response = await axios.get(
      "https://article-api-404th.herokuapp.com/article"
    );
    try {
      if (response) {
        setArticles(response.data.data.value);
      } else {
        throw new Error("Error: response not got");
      }
    } catch (err) {
      if (err) {
        console.log("Error while getting users => ", err);
      }
    }
  }

  useEffect(() => {
    console.log("myArticles");
    console.log(myArticles);
  }, [myArticles]);

  return (
    <div className={"art_container"}>
      {myArticles?.map((item, idx) => {
        return <Card item={item} key={idx} />;
      })}
    </div>
  );
}

export default MainPage;
