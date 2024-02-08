import styles from './Main.module.scss';


export const Main = ({ children }) => {

    return (
        <main className={styles.MainContainer}>
            <h2>Main test</h2>
            {children}
        </main>
    )
}

export default Main;