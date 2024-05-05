
"use client"
import Navbar from "@/components/navbar/page";
import DanhSachSanPham from "@/components/newproduct/page";
import styles from "@/app/page.module.css"
import Footer from "@/components/footer/page";
import ArRoom from "@/components/tryonRoom/page";

export default function Home() {
  return (
    <div>
      <img className={styles.banner_image} src={"banner2.png"} />

      <div className={styles.homepage}>
        <div className={styles.texthomepage} >
          <a>Hãy tô điểm cho đôi môi của bạn với những màu son môi rực rỡ từ AuraLipStick
            Bộ sưu tập son môi của chúng tôi:
            Son lì: Cung cấp màu sắc lâu trôi và hoàn hảo cho mọi phong cách.
            Son dưỡng: Giữ cho đôi môi của bạn mềm mại và căng mọng với các thành phần dưỡng ẩm.
            Son bóng: Mang đến vẻ ngoài bóng mượt và quyến rũ cho đôi môi.</a>

        </div>
        <a className={styles.spbanchaytext}>Sản phẩm bán chạy</a>

      </div>
      <hr />
      <DanhSachSanPham />
      <img className={styles.banner_image2} src={"Banner.jpg"} />
      <DanhSachSanPham />
      <ArRoom />
    </div>
  );
}
