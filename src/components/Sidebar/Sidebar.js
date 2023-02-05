import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import AccountItem from "../AccountItem";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faUserGroup,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { routes } from "../../config";
import { useRef } from "react";
import { userData } from "./db";
import ListUser from "../ListUser/ListUser";
const css = classNames.bind(styles);
function CustomSidebar() {
  const friendUsers = userData.filter((value) => value.is_friend);
  const otherUsers = userData.filter((value) => !value.is_friend);

  const sideBarRef = useRef();
  return (
    <div
      className={css("wrapper")}
      ref={sideBarRef}
      onMouseOver={() => {
        sideBarRef.current.style.overflowY = "overlay";
      }}
      onMouseLeave={() => {
        sideBarRef.current.style.overflowY = "hidden";
      }}
    >
      <AccountItem
        className={"hover-radius"}
        data={{
          full_name: "Nguyễn Thành Phát",
          tick: true,
          avatar:
            "https://i.pinimg.com/736x/54/3c/5b/543c5b8a969e15d87928cb60f817eab1.jpg",
        }}
      />
      <nav className={css("nav-list")}>
        <NavLink className={css("nav-item")} to={"/friends"}>
          <span className={css("nav-icon")}>
            <FontAwesomeIcon icon={faUserGroup} />
          </span>
          <span className={css("nav-label")}>Your friends</span>
        </NavLink>
        <NavLink className={css("nav-item")} to={"/files"}>
          <span className={css("nav-icon")}>
            <FontAwesomeIcon icon={faFile} />
          </span>
          <span className={css("nav-label")}>Your files</span>
        </NavLink>
        <NavLink className={css("nav-item")} to={routes.events}>
          <span className={css("nav-icon")}>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
          <span className={css("nav-label")}>Events</span>
        </NavLink>
      </nav>
      <ListUser title="Friends" data={friendUsers} />
      <ListUser title="Other Users" data={otherUsers} />
    </div>
  );
}

export default CustomSidebar;
