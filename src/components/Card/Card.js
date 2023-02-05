import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import Image from '../Image';
const css = classNames.bind(styles);
function Card({ data = {} }) {
    return (
        <div className={css('wrapper')}>
            <div className={css('content')}>
                <Image src={data.img} alt={data.title} className={css('image')} />
                <div className={css('box')}>
                    <h4 className={css('title')}>{data.title}</h4>
                    <p  className={css('time')}><b>Time:</b> {data.time}</p>
                    <p  className={css('place')}><b>Place:</b> {data.place}</p>
                    <button className={css('join-btn')}>Join</button>
                </div>
            </div>
        </div>
    );
}
Card.propTypes = {
    data: PropTypes.object,
};
export default Card;
