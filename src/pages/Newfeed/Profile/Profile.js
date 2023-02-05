import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const css = classNames.bind(styles);
function Profile() {
    return ( <div className={css('home')}>Profile Page</div> );
}

export default Profile;