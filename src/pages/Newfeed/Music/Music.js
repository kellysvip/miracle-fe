import classNames from 'classnames/bind';
import styles from './Music.module.scss';
// import { images } from '../../assets/audio';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBackwardStep,
    faForwardStep,
    faPauseCircle,
    faPlayCircle,
    faRepeat,
    faShuffle,
    faVolumeMute,
    faForward,
    faBackward,
} from '@fortawesome/free-solid-svg-icons';
import { images } from '../../../assets/imgs';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import H5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss';

const css = classNames.bind(styles);
const audios = images.audios;
function NewMusic() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imgRef = useRef();
    const playListRef = useRef();
    const timeId = useRef();
    useEffect(() => {
        timeId.current = setTimeout(() => {    
            document.querySelector(`tr.${css('active')}`).scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
        }, 500);
        return clearTimeout(timeId)
    }, [currentIndex]);

    return (
        <div className={css('wrapper')}>
            <div className={css('header')}>
                <div className={css('info')}>
                    <div className={css('info-wrapper')}>
                        <h4>Now playing</h4>
                        <img
                            ref={imgRef}
                            src={audios[currentIndex].img}
                            alt={audios[currentIndex].name}
                            className="rotate"
                        />
                        <h2 style={{ textAlign: 'center' }}>{audios[currentIndex].name}</h2>
                    </div>
                </div>
                <div ref={playListRef} className={css('play-list')}>
                    <table
                        onMouseOver={() => {
                            playListRef.current.style.overflowY = 'overlay';
                        }}
                        onMouseLeave={() => {
                            playListRef.current.style.overflowY = 'hidden';
                        }}
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Singer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {audios.map((audio, index) => (
                                <tr key={index} className={css({
                                    active: index === currentIndex
                                })} onClick={() => {
                                    setCurrentIndex(index);
                                }}>
                                    <td>{index + 1}</td>
                                    <td>{audio.name}</td>
                                    <td>{audio.singer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={css('body')}>
                <H5AudioPlayer
                    customIcons={{
                        play: <FontAwesomeIcon className={css('play')} icon={faPlayCircle} />,
                        pause: <FontAwesomeIcon className={css('pause')} icon={faPauseCircle} />,
                        rewind: <FontAwesomeIcon className={css('rewind', 'ctrl-btn')} icon={faBackward} />,
                        forward: <FontAwesomeIcon className={css('forward', 'ctrl-btn')} icon={faForward} />,
                        previous: <FontAwesomeIcon className={css('previous', 'ctrl-btn')} icon={faBackwardStep} />,
                        next: <FontAwesomeIcon className={css('next', 'ctrl-btn')} icon={faForwardStep} />,
                        volume: <FontAwesomeIcon className={css('volume', 'volume-btn')} icon={faVolumeUp} />,
                        volumeMute: (
                            <FontAwesomeIcon className={css('volume-mute', 'volume-btn')} icon={faVolumeMute} />
                        ),
                        loop: <FontAwesomeIcon className={css('volume-loop', 'loop-btn', 'active')} icon={faRepeat} />,
                        loopOff: <FontAwesomeIcon className={css('volume-loop-off', 'loop-btn')} icon={faRepeat} />,
                    }}
                    customAdditionalControls={[
                        RHAP_UI.LOOP,
                        <button
                            className={css('shuffle-btn')}
                            onClick={() => {
                                setCurrentIndex((pre) => {
                                    let newIndex = 0;
                                    do {
                                        newIndex = Math.floor(Math.random() * audios.length);
                                    } while (newIndex === currentIndex);
                                    return newIndex;
                                });
                            }}
                        >
                            <FontAwesomeIcon icon={faShuffle} />
                        </button>,
                    ]}
                    className={css('controls')}
                    src={audios[currentIndex].path}
                    showSkipControls={true}
                    showJumpControls={true}
                    onClickPrevious={() => {
                        setCurrentIndex((pre) => (pre === 0 ? audios.length - 1 : pre - 1));
                    }}
                    onClickNext={() => {
                        setCurrentIndex((pre) => (pre === audios.length - 1 ? 0 : pre + 1));
                    }}
                    onEnded={() => {
                        setCurrentIndex((pre) => (pre === audios.length - 1 ? 0 : pre + 1));
                    }}
                />
            </div>
        </div>
    );
}

export default NewMusic;
