import styles from "@/components/footer/footer.module.css"
export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><h1>AuraLipstick</h1></div>

            <a className={styles.end} >Copy right 2024 - NCKH Fithou</a>
        </div >
    );
}
