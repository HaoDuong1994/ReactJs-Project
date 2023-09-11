import { useRef, useState } from "react";
import "./ProfilePage.css";

function ProfilePage() {
  const [isEdit, setIsEdit] = useState(true);
  const [firstName, setFirstName] = useState("Nguyễn Tấn");
  const [lastName, setLastName] = useState("Dũng");
  const [email, setEmail] = useState("dung@gmail.com");
  const [address, setAddress] = useState("Bình Chánh");
  const [city, setCity] = useState("Thành Phố Hồ Chí Minh");
  const inputFirstNameRef = useRef();
  const handleEditProfile = () => {
    setIsEdit((prev) => !prev);
    inputFirstNameRef.current.focus();
  };

  return (
    <div className="wrap-profile">
      <div className="profile__head">
        <div className="profile__img">
          <img src="https://picsum.photos/500" alt="" />
        </div>
        <div className="profile__info">
          <h4>Dũng</h4>
          <p>dung@gmail.com</p>
        </div>
      </div>
      <div className="profile__body">
        <div className="profile__left">
          <div className="profile__field">
            <label>First Name</label>
            <input
              ref={inputFirstNameRef}
              type="text"
              readOnly={isEdit}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="profile__field">
            <label>Email</label>
            <input
              type="text"
              readOnly={isEdit}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="profile__field">
            <label>City</label>
            <input
              type="text"
              readOnly={isEdit}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="profile__right">
          <div className="profile__field">
            <label>Last Name</label>
            <input
              type="text"
              readOnly={isEdit}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="profile__field">
            <label>Address</label>
            <input
              type="text"
              readOnly={isEdit}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="profile__footer">
        <button
          className="profile__control profile__control--edit"
          onClick={handleEditProfile}>
          {isEdit ? "Chỉnh sửa" : "Lưu"}
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
