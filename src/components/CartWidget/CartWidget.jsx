import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "../Counter/styles.css";
import { Link } from "react-router-dom";

const CartWidget = ({ value }) => {
  return (
    <>
      <div className="order-resume">
        <h4>total: {value}</h4>
        <Link to={"/order-resume"} className="chevron-style">
          <FontAwesomeIcon icon={faAngleDoubleRight} className="chevron-up" />
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
