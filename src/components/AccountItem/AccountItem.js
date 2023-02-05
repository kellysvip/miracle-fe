import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const css = classNames.bind(styles);
function AcountItem({ className, data }) {
    const src = data.avatar === 'https://files.fullstack.edu.vn/f8-tiktok/' ? 'error' : data.avatar;
    return (
        <Link to={`/@${data.full_name}`}>
            <div className={css('wrapper', className)}>
                <Image className={css('avatar')} src={src} />
                <div className={css('info')}>
                    <h4 className={css('name')}>{data.full_name !== '' ? data.full_name : data.nickname}</h4>
                    {data.tick && (
                        <span className={css('tick-icon')}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
AcountItem.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
};
export default AcountItem;
