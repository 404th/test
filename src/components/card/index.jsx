import { Card } from "antd";
import { NavLink } from "react-router-dom";

function CardPage() {
  return (
    <div>
      <Card
        title="Default size card"
        extra={<NavLink to="/">More...</NavLink>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default CardPage;
