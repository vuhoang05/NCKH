import Link from "next/link";
import styles from "@/components/tryonRoom/arroom.module.css";
export default function ArRoom() {
    return (
        <>
            <hr />
            <div className={styles.container}>
                <div className={styles.gioithieu} >
                    <img className={styles.image1} src={"banner3.png"} />
                    <div className={styles.text_container}>
                        <a className={styles.text}>GIỚI THIỆU VỀ AURALIPSTICK</a>
                        <a className={styles.text2}>Học cách trang điểm với AURALIPSTICK </a>
                        <a className={styles.text}>TÌM HIỂU</a>
                    </div>
                </div>
                <div className={styles.arroom_container}>
                    <img className={styles.image} src={"banner4.png"} />
                    <div className={styles.text_container}>
                        <a className={styles.text}>TRẢI NGHIỆM PHÒNG SON AR </a>
                        <a className={styles.text2}>Tìm hiểu màu son phù hợp với bạn </a>
                        <a className={styles.text}><Link className={styles.text} href={"/tryonLipRoom"}>TRY-ON</Link> </a>
                    </div>
                </div>
            </div>
        </>
    );
}

