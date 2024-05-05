
import React from "react";
import { getProducts } from "@/lib/data";
import styles from "@/components/newproduct/newpro.module.css";
import Link from "next/link";


const DanhSachSanPham = async () => {
    const products = await getProducts();

    const handleTryOn = (productId) => {
        const product = products.find((p) => p.id === productId);
        const url = `/tryonArTest?productId=${productId}&ten=${product.ten}&gia=${product.gia}&maAr=${product.maAr}`;
        window.location.href = url;
    };

    return (
        <div className={styles.newproduct}>
            <div className={styles.productGrid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productItem}>
                        <img src={product.anh} />
                        <a className={styles.name} >{product.ten} </a>
                        <a className={styles.price}>{product.gia}&nbsp;VNĐ</a>
                        {product.coAr && (
                            <div className={styles.tryOnButton}>
                                <Link className={styles.tryOnLink} href={`/tryonArTest?productId=${product.id}&ten=${product.ten}&gia=${product.gia}&maAr=${product.maAr}`} onClick={() => handleTryOn(product.id)}>
                                    THỬ AR
                                </Link>
                                <img className={styles.imgAr} src="aricon.png" />
                            </div>
                        )}
                        <a className={styles.addtocart}>THÊM VÀO GIỎ</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DanhSachSanPham;

