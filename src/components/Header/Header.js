// import classNames from 'classnames/bind';
// import styles from './Header.module.scss';
// import Image from '../Image/Image';
// import { images } from '../../assets/imgs';
// import { routes } from '../../config/index';
// import { Link, NavLink } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faGear, faHome, faSignOut } from '@fortawesome/free-solid-svg-icons';
// import { faTv } from '@fortawesome/fontawesome-free-solid';
// import { faInstagram } from '@fortawesome/fontawesome-free-brands';
// import HeadlessTippy from '@tippyjs/react/headless';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
// import Search from '../Search';
// const css = classNames.bind(styles);

// function CustomHeader() {
//     return (
//         <div className={css('wrapper')}>
//             <Link to={routes.home}>
//                 <Image src={images.logo} alt="logo" className={css('logo')} />
//             </Link>
//             <nav className={css('nav')}>
//                 <Tippy content="Home" placement="bottom">
//                     <NavLink className={(nav) => css('nav-item', { active: nav.isActive })} to={routes.home}>
//                         <span className={css('nav-icon')}>
//                             <FontAwesomeIcon icon={faHome} />
//                         </span>
//                     </NavLink>
//                 </Tippy>
//                 <Tippy content="Watch" placement="bottom">
//                     <NavLink className={(nav) => css('nav-item', { active: nav.isActive })} to={routes.watch}>
//                         <span className={css('nav-icon')}>
//                             <FontAwesomeIcon icon={faTv} />
//                         </span>
//                     </NavLink>
//                 </Tippy>
//                 <Tippy content="Events" placement="bottom">
//                     <NavLink className={(nav) => css('nav-item', { active: nav.isActive })} to={routes.events}>
//                         <span className={css('nav-icon')}>
//                             <FontAwesomeIcon icon={faCalendarAlt} />
//                         </span>
//                     </NavLink>
//                 </Tippy>
//                 <Tippy content="Pictures" placement="bottom">
//                     <NavLink className={(nav) => css('nav-item', { active: nav.isActive })} to={routes.pictures}>
//                         <span className={css('nav-icon')}>
//                             <FontAwesomeIcon icon={faInstagram} />
//                         </span>
//                     </NavLink>
//                 </Tippy>
//             </nav>
//             <Search />
//             <HeadlessTippy
//                 interactive
//                 placement="bottom-start"
//                 render={() => (
//                     <div className={css('log-out-block')}>
//                         <button>
//                             <span className={css('icon-btn')}>
//                                 <FontAwesomeIcon icon={faGear} />
//                             </span>
//                             <span className={css('text-btn')}>Setting</span>
//                         </button>
//                         <button>
//                             <span className={css('icon-btn')}>
//                                 <FontAwesomeIcon icon={faSignOut} />
//                             </span>
//                             <span className={css('text-btn')}>Log out</span>
//                         </button>
//                     </div>
//                 )}
//             >
//                 <Image
//                     className={css('avatar')}
//                     src="https://i.pinimg.com/736x/54/3c/5b/543c5b8a969e15d87928cb60f817eab1.jpg"
//                     alt="Phát Nguyễn"
//                 />
//             </HeadlessTippy>
//         </div>
//     );
// }

// export default CustomHeader;


import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from '../Image/Image';
import { images } from '../../assets/imgs';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { routes } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faGear, faHome, faMusic, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/fontawesome-free-solid';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';
const css = classNames.bind(styles);

function CustomHeader() {
    const navigate = useNavigate()
    return (
        <div className={css('wrapper')}>
            <Link to={routes.home}>
                <Image src={images.logo} alt="logo" className={css('logo')} />
            </Link>
            <nav className={css('nav')}>
                <Tippy content="Home" placement="bottom">
                    <NavLink className={(nav) => css('nav-item', { active: nav.isActive })} to={routes.home}>
                        <span className={css('nav-icon')}>
                            <FontAwesomeIcon icon={faHome} />
                        </span>
                    </NavLink>
                </Tippy>
                <Tippy content="Watch" placement="bottom">
                    <NavLink className={(nav) => css('nav-item', { active: nav.isActive })} to={routes.watch}>
                        <span className={css('nav-icon')}>
                            <FontAwesomeIcon icon={faTv} />
                        </span>
                    </NavLink>
                </Tippy>
                <Tippy content="Events" placement="bottom">
                    <NavLink className={(nav) => css('nav-item', { active: nav.isActive })} to={routes.events}>
                        <span className={css('nav-icon')}>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </span>
                    </NavLink>
                </Tippy>
                <Tippy content="Music" placement="bottom">
                    <NavLink className={(nav) => css('nav-item', { active: nav.isActive })} to={routes.music}>
                        <span className={css('nav-icon')}>
                            <FontAwesomeIcon icon={faMusic} />
                        </span>
                    </NavLink>
                </Tippy>
                <Tippy content="Pictures" placement="bottom">
                    <NavLink className={(nav) => css('nav-item', { active: nav.isActive })} to={routes.pictures}>
                        <span className={css('nav-icon')}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </NavLink>
                </Tippy>
            </nav>
            <Search />
            <HeadlessTippy
                interactive
                placement="bottom-start"
                render={() => (
                    <div className={css('log-out-block')}>
                        <button onClick={()=> {navigate('/')}}>
                            <span className={css('icon-btn')}>
                                <FontAwesomeIcon icon={faGear} />
                            </span>
                            
                            <span className={css('text-btn')}>My Profile</span>
                        </button>
                        <button>
                            <span className={css('icon-btn')}>
                                <FontAwesomeIcon icon={faSignOut} />
                            </span>
                            <span className={css('text-btn')}>Log out</span>
                        </button>
                    </div>
                )}
            >
                <Image
                    className={css('avatar')}
                    src="https://i.pinimg.com/736x/54/3c/5b/543c5b8a969e15d87928cb60f817eab1.jpg"
                    alt="Phát Nguyễn"
                />
            </HeadlessTippy>
        </div>
    );
}

export default CustomHeader;
