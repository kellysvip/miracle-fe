import Header from '~/components/Header';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './HeaderOnly.module.scss';
const css = classNames.bind(styles);
function HeaderOnly({ children }) {
    return (
        <div className={css('wrapper')}>
            <Header />
            <div className={css('container')}>
                <div className={css('content')}>{children}</div>
            </div>
        </div>
    );
}
HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};
export default HeaderOnly;
