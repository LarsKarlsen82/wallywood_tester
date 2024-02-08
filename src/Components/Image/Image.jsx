import styles from './Image.module.scss';

export const Image = (props) => {
    return(
        <img className={styles.ImgContainer}src={props.file} alt={props.alt} />
    )
}

export default Image;