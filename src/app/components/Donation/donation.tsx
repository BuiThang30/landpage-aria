// components/Donation/donation.tsx
import Image from "next/image";
import styles from "./donation.module.css";

export default function Donation() {
  return (
    <div className={styles.donationSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>QUYÊN GÓP TỰ NGUYỆN</h2>
        
        <p className={styles.description}>
          Toàn bộ số tiền quyên góp sẽ được{" "}
          {/* <a href="" target="_blank" rel="noopener noreferrer" className={styles.boldLink}> */}
          <strong>Aria Project</strong>
          {/* </a>{" "} */}
          {" "}kết hợp với{" "}
          <a href="https://www.facebook.com/IHope.Foundation" target="_blank" rel="noopener noreferrer" className={styles.boldLink}>
            <strong>I-Hope Foundation</strong>
          </a>{" "}
          gửi cho tổ chức{" "}
          <a href="https://www.facebook.com/wvivietnam" target="_blank" rel="noopener noreferrer" className={styles.boldLink}>
            World Vision International Vietnam
          </a>{" "}
          để hỗ trợ cải thiện chất lượng an sinh trẻ em và góp phần lan tỏa những giá trị tốt đẹp.
        </p>
        
        <div className={styles.shortLine}></div>
        
        <div className={styles.qrWrapper}>
          <Image
            src="/images/qr.jpg"
            alt="Mã QR Quyên góp"
            width={442}
            height={442}
            className={styles.qrImage}
            unoptimized
          />
        </div>
        
        <div className={styles.bankDetails}>
          <p className={styles.bankName}>VIETCOMBANK</p>
          <p className={styles.accountName}>DO NGOC LINH</p>
          <p className={styles.transferNote}>
            <strong>Nội dung chuyển khoản:</strong> Tên người quyên góp + số điện thoại
          </p>
        </div>
        
      </div>
    </div>
  );
}