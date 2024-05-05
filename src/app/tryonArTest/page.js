'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as deepar from 'deepar';
import styles from '@/app/tryonArTest/Lipstick.module.css';
import NoHeaderFooterLayout from '../layoutAr';
import Link from 'next/link';

import { getProduct, getProducts } from '@/lib/data';

const LipstickAdjusterPage = () => {

    const [product, setProduct] = useState(null);

    const [isDeepARInitialized, setIsDeepARInitialized] = useState(false);
    useEffect(() => {
        const fetchProduct = async () => {

            const urlParams = new URLSearchParams(window.location.search);
            const productId = parseInt(urlParams.get('productId'));
            const products = await getProducts();
            const product = await getProduct(productId);
            setProduct(product);

            // setProduct((product) => { // Use callback function for product update
            //     setMaAr(product["maAr"]);
            //     return product; // Return the updated product for state
            // });
        };


        fetchProduct();
    }, []);


    useEffect(() => {
        const initDeepAR = async () => {
            if (!isDeepARInitialized && product) {
                const maAr = `${product["maAr"]}`
                try {
                    const deepARInstance = await deepar.initialize({
                        licenseKey: 'd50ba7700baccdc74a63bc1a8f028903d1c1efaa7287843ae23612941b21d6538128cf24dd89d498',
                        previewElement: document.getElementById('deepar-preview'),
                        effect: maAr,
                    });
                    setIsDeepARInitialized(true);
                } catch (error) {
                    console.log('Error initializing DeepAR:', error);
                }
            }
        };

        initDeepAR();
    }, [product]);


    const handleBackHome = () => {
        if (deepARInstanceRef.current) {
            deepARInstanceRef.current.destroy();
        }
    };
    return (
        <NoHeaderFooterLayout>
            <div className={styles.lipstick_container}>

                <h1 className={styles.logo}>AuraLipstick Try-On</h1>
                <div className={styles.top_bar}>
                    <Link href="/" className={styles.home} onClick={handleBackHome}>

                        &lt;- Trở lại
                    </Link>
                </div>
                <div id="deepar-preview" className={styles.deepar_preview} />
                {product && ( // Check if product exists before accessing properties
                    <a className={styles.information}>
                        {product.ten} - {product.gia}vnđ
                    </a>
                )}
                <h4 className={styles.buy}>THÊM VÀO GIỎ</h4>
            </div>
        </NoHeaderFooterLayout>

    );
};

export default LipstickAdjusterPage;
