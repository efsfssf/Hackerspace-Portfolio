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
    <div className="inline-flex items-center hover:gap-1 transition-all ease-linear">
      <i className="btn arrow left opacity-10"></i>
      <i className="btn arrow left opacity-30"></i>
      <i className="btn arrow left opacity-50"></i>
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
      <i className="btn arrow right opacity-50"></i>
      <i className="btn arrow right opacity-30"></i>
      <i className="btn arrow right opacity-10"></i>
    </div>
  );
};

export default Button;
