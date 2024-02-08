import styles from './Header.module.scss';
import curtain from '../../assets/img/curtain.jpg';
import { Image } from '../Image/Image';

export const Header = () => {

    return (
        <header className={styles.HeaderContainer}>
            <Image file={curtain} alt='curtain'/>
      </header>
    )
}

export default Header