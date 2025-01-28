import { FaArrowRight } from "react-icons/fa";
function Header() {
  return (
    <header id="header">
      <nav className="nav-bar">
        <a href="#" className="logo">
          EduBridge
        </a>
        <ul>
          <li>
            <a href="#" className="active">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="account">
          <a href="#">Login</a>
          <a href="#" className="join-btn">
            Join Us <FaArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
