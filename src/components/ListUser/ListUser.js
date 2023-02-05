import classNames from 'classnames/bind';
import styles from './ListUser.module.scss';
import AccountItem from '../AccountItem';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Fragment } from 'react';
const css = classNames.bind(styles);
function ListUser({ title = '', data = [] }) {
    const [lengthShow, setLengthShow] = useState(5);
    return (
        <div className={css('wrapper')}>
            <h4 className={css('label')}>{title}</h4>
            {data.map((value, key) => {
                if (key > lengthShow) return <Fragment key={key}></Fragment>;
                return <AccountItem key={key} className="hover-radius" data={value} />;
            })}
            {lengthShow < data.length ? (
                <b
                    className={css('toggler')}
                    onClick={() => {
                        setLengthShow((pre) => pre + 5);
                    }}
                >
                    See More
                </b>
            ) : (
                <b
                    className={css('toggler')}
                    onClick={() => {
                        setLengthShow(5);
                    }}
                >
                    Close More
                </b>
            )}
        </div>
    );
}
ListUser.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
};
export default ListUser;
