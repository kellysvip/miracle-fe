import classNames from 'classnames/bind';
import styles from './Events.module.scss';
import Card from '../../../components/Card'
const css = classNames.bind(styles);
const cards = [
    {
        img: 'https://img.freepik.com/free-photo/merry-christmas-2022-greetings-with-wreath_52683-98158.jpg?w=2000',
        title: 'Christmas 2022',
        time: 'December 24th 2022',
        place: 'Immaculate Conception Cathedral Basilica',
    },
    {
        img: 'https://wallpaperaccess.com/full/8625385.jpg',
        title: 'New Year 2023',
        time: 'January 1st 2023',
        place: 'Nguyen Hue Walking Street',
    },
    {
        img: 'http://cdn.tgdd.vn/Files/2022/11/03/1483009/lich-nghi-tet-nguyen-dan-quy-mao-2023-chinh-thuc-chi-tiet-202211031350010077.jpg',
        title: 'Tet Quy Mao',
        time: 'January 22nd 2023',
        place: 'Nguyen Hue Walking Street',
    },
];
function NewEvents() {
    return (
        <div className={css('wrapper')}>
            {cards.map((card, index) => (<Card key={index} data={card}/>))}
        </div>
    );
}

export default NewEvents;
