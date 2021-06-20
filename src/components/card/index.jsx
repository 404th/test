import { Card } from "antd";
import { NavLink } from "react-router-dom";
import "./main.css";

function CardPage(props) {
  return (
    <div>
      <Card
        className={"card_container"}
        title={props.item.title}
        extra={<NavLink to={`/article/${props.item._id}`}>More...</NavLink>}
        style={{ width: 300 }}
      >
        <p className={"truncate"}>{props.item.body}</p>
      </Card>
    </div>
  );
}

export default CardPage;
