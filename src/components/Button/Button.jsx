import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../../css/button.css";

const Button = ({
  children,
  text = "button",
  className = "",
  title = "button",
  link = "#",
  isHashLink = false,
  ...props
}) => {
  return (
    <div className="arrowButton inline-flex items-center transition-all ease-linear">
      <i className="btn arrow left opacity-10"></i>
      <i className="btn arrow left opacity-40"></i>
      <i className="btn arrow left opacity-80"></i>
      <div className="inline-flex items-center btn-container">
        {isHashLink ? (
          <HashLink to={link} className="button" title={title} {...props}>
            <p className="buttonText">{text}</p>
            {children && <i>{children}</i>}
          </HashLink>
        ) : (
          <Link to={link} className="button" title={title} {...props}>
            <p className="buttonText">{text}</p>
            {children && <i>{children}</i>}
          </Link>
        )}
      </div>
      <i className="btn arrow right opacity-80"></i>
      <i className="btn arrow right opacity-40"></i>
      <i className="btn arrow right opacity-10"></i>
    </div>
  );
};

export default Button;
