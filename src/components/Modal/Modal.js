import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
const css = classNames.bind(styles);
function Modal({ children }) {
    return <div className={css('modal')}>{children}</div>;
}
Modal.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Modal;
