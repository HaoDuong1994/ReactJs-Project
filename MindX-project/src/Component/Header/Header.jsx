import "./Header.css";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="header">
        <div>Logo</div>
        <nav className="nav-item">
          <div>
            <NavLink to="/">Trang chủ</NavLink>
          </div>
          <div>
            <NavLink to="/product">Sản Phẩm</NavLink>
          </div>
          <div>
            <NavLink to="/accessory">Phụ kiện</NavLink>
          </div>
          <div>
            <NavLink to="/contact">Liên hệ</NavLink>
          </div>
        </nav>
        <div>
          <input type="text" placeholder="Tìm kiếm sản phẩm" />
        </div>
        <div>
          <button>Sign up</button>
          <button>Sign in</button>
        </div>
        <div>Trang cá nhân</div>
      </header>
    </div>
  );
}

export default Header;
