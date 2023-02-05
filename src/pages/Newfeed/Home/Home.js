import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Post from '../../../components/Post'
const css = classNames.bind(styles);
function NewfeedHome() {
    const posts = [
        {
            avatar: 'https://i.pinimg.com/736x/54/3c/5b/543c5b8a969e15d87928cb60f817eab1.jpg',
            full_name: 'Nguyễn Thành Phát',
            tick: true,
            post_image:
                'https://cdn.sforum.vn/sforum/wp-content/uploads/2022/03/Download-wallpaper-1920x1080-girl-twilight-clouds-anime-full-hd-hdtv-fhd-1080p-hd-background.png',
            number_heart: 1969,
            number_comment: 169,
            paragraph:
                'Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.',
        },
    ];
    return (
        <>
            <div className={css('wrapper')}>
                <Post data={posts[0]} />
                <Post data={posts[0]} />
                <Post data={posts[0]} />
                <Post data={posts[0]} />
                <Post data={posts[0]} />
                <Post data={posts[0]} />
                <Post data={posts[0]} />
                <Post data={posts[0]} />
            </div>
        </>
    );
}

export default NewfeedHome;
