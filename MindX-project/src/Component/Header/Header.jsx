import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header(props) {
  return (
    <div>
      <header className="header">
        <div className="menu-link">Logo</div>
        <nav className="nav-item">
          <div>
            <NavLink className="menu-link" to="/">
              Giới thiệu
            </NavLink>
          </div>
          <div>
            <NavLink className="menu-link" to="/product">
              Sản Phẩm
            </NavLink>
          </div>
          <div>
            <NavLink className="menu-link" to="/accessory">
              Phụ kiện
            </NavLink>
          </div>
          <div>
            <NavLink className="menu-link" to="/contact">
              Liên hệ
            </NavLink>
          </div>
        </nav>
        <div className="input-wrapper">
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm sản phẩm"
          />
          <button className="btn btn-success color" type="submit">
            Nhập
          </button>
        </div>
        {/* <div>
          <button>Sign up</button>
          <button>Sign in</button>
        </div> */}
        <div className="menu-cart">
          <p className="menu-link" style={{ marginTop: "12px" }}>
            Trang cá nhân
          </p>
          <div className="cart-wrapper">
            <Link to="/cartProduct">
              <div className="cart-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
            </Link>
            <span style={{ color: "white" }}>{props.productInCart.length}</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
