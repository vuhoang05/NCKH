import styles from "@/components/navbar/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function Navbar() {
    return (
        <>
            <div className={styles.nav}>
                <h1 className={styles.logo}>AURALIPSTICK</h1>
                <div className={styles.navLink}>
                    <Link href={"/"}>TRANG CHỦ</Link>
                    <Link href={"/products"}>SẢN PHẨM</Link>
                    <Link href={"/"}>GIỚI THIỆU</Link>
                    <Link href={"/"}>LIÊN HỆ</Link>
                    <Link href={"/"}><img className={styles.bagimage} src={"bag.jpg"} /></Link>
                </div>

            </div>
            <div className={styles.gach}></div>
        </>

    );
}

