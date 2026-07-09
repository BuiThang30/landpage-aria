import styles from "./page.module.css";
import Navbar from "@/components/Nav/nav";
import Image from "next/image";
import { dfvnGldDisplay, beVietnamPro } from "./fonts"; 
import Slider from "@/components/Slider/slider";
import Donation from "@/components/Donation/donation";
import Footer from "@/components/Footer/Footer";
import Registration from "@/components/Registration/registration"; 

export default function Home() {
  return (
    <main className={`${styles.page} ${dfvnGldDisplay.variable} ${beVietnamPro.variable}`}>
    <Navbar />

      {/* Hero section */}
      <section className={styles.hero}>
        <Image
          src="/images/background.png"
          alt="Buổi Hòa Nhạc Việt Nam Tinh Hoa"
          width={1440}
          height={565}
          className={styles.heroImage}
          priority
        />
      </section>

      {/* Main Content */}
      <section className={styles.about}>
        <Image
          src="/images/trongdong.png"
          alt="Trống đồng"
          width={1440}
          height={1071.464}
          className={styles.trongdong}
        />

        <Image
          src="/images/nui.png"
          alt=""
          width={1440}
          height={959.51}
          className={styles.mountain}
        />

        <div className={styles.top}>
          <div className={styles.contentWrapper}>
            <div className={styles.line}></div>
            <p className={styles.event}>Một sự kiện của</p>
            <Image
              src="/images/logo.png"
              alt="ARIA PROJECT"
              width={548}
              height={92}
              className={styles.logo}
            />
            <div className={styles.smallLine}></div>
            <p className={styles.info}>
              <strong>Địa điểm:</strong> Phòng Hòa nhạc nhỏ, Học viện Âm nhạc Quốc gia, 77 Hào Nam, Hà Nội
              <br />
              <strong>Thời gian:</strong> 19:00, Thứ 6, ngày 31/07/2026
            </p>
          </div>
        </div>

        <div className={styles.profile}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>GIỚI THIỆU</h2>
            <p className={styles.description}>
              Aria Project là dự án âm nhạc được thành lập bởi các bạn học sinh cấp 3 tại Hà Nội, nhằm gây quỹ từ thiện và lan tỏa các giá trị văn hóa - nghệ thuật. Trong mùa 1, Aria Project đã tổ chức thành công Concert{' '} <strong>Thanh sắc Việt - Giao hưởng năm châu</strong>, thu hút gần{' '} <strong>200 khán giả</strong> và quyên góp được{' '} <strong>60,000,000</strong> VND cho Hội Gia đình Trẻ em Bại não Việt Nam. Tiếp nối hành trình ấy, Aria Project chính thức trở lại với mùa 2 –{' '} <strong>Việt Nam Tinh Hoa</strong>, mang theo khát vọng kết nối truyền thống với hiện đại, để những giá trị văn hóa Việt được tái hiện bằng ngôn ngữ nghệ thuật mới mẻ và gần gũi hơn với cộng đồng hôm nay. 
            </p>
          </div>
          <Slider />
        </div>

        <div className={styles.exhibition}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>Triển lãm “Việt Nam Gấm Hoa”</h2>
            <div className={styles.exhibitionLine}></div>
              <p className={styles.description}>
                <strong>Triển lãm Việt Nam Gấm Hoa</strong> là dự án nghệ thuật trưng bày các tác phẩm tranh làm từ thủy tinh tái chế, được thực hiện bởi tổ chức thiện nguyện <strong>Eco Wander</strong> nhằm nâng cao nhận thức bảo vệ môi trường.
                <br />
                <br />
                Trong khuôn khổ sự kiện năm nay, <strong>Eco Wander</strong> hợp tác cùng{' '} <strong>Aria Project</strong> tổ chức không gian triển lãm trực tiếp tại sảnh hòa nhạc. Khách tham quan sẽ được thưởng lãm chuỗi tác phẩm đa dạng chủ đề, khắc họa chân thực vẻ đẹp con người và phong cảnh Việt Nam.
              </p>
          </div>
        </div>
      </section>
      <Registration/>
      <Donation/>
      <Footer/>
    </main>
  );
}