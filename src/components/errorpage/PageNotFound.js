import "./pagenotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Page not found!</p>
      <br />
      <Link to="/">
        <button>Return to Homepage</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
