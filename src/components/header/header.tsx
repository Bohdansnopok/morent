import "./header.scss";
import Image from "next/image";
import searchIcon from "../../public/search.svg";
import filter from "../../public/filter.svg";
import heart from "../../public/heart.svg";
import notification from "../../public/notification.svg";
import setting from "../../public/setting.svg";
import avatar from "../../public/avatar.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">morent</h1>
        <form className="header__form">
          <button className="header__form__searchButton">
            <Image
              src={searchIcon}
              alt=""
              className="header__form__searchButton__icon"
            />
          </button>
          <input
            type="text"
            placeholder="Search something here"
            className="header__form__input"
          />
          <button className="header__form__filterButton">
            <Image
              src={filter}
              alt=""
              className="header__form__filterButton__icon"
            />
          </button>
        </form>

        <div className="header__iconsLinks">
          <button className="header__iconsLinks__icon">
            <Image src={heart} alt="" />
          </button>
          <button className="header__iconsLinks__icon">
            <Image src={notification} alt="" />
          </button>
          <button className="header__iconsLinks__icon">
            <Image src={setting} alt="" />
          </button>
          <button className="header__iconsLinks__icon">
            <Image src={avatar} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}
