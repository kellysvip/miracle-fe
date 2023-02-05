import PropTypes from 'prop-types';
import './GlobalStyles.scss';
function GlobalStyles({ children }) {
    return <div>{children}</div>;
}
GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
