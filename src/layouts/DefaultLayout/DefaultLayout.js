import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import PropTypes from "prop-types";
import CustomHeader from "../../components/Header/Header";
import CustomSidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
const css = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={css("wrapper")}>
      <CustomHeader />
      <div className={css("container")}>
        <CustomSidebar />
        <div className={css("content")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
