// components/Donation/donation.tsx
import Image from "next/image";
import styles from "./donation.module.css";

export default function Donation() {
  return (
    <div className={styles.donationSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>ĐỒNG HÀNH CÙNG ARIA PROJECT</h2>

        <p className={styles.description}>
          Toàn bộ sự đồng hành dành cho{" "}
          <strong>Aria Project</strong>{" "}
          sẽ được công bố tại buổi hòa nhạc, sau đó được trao tới hai tổ chức đối tác là{" "}
          <a href="https://www.facebook.com/wvivietnam" target="_blank" rel="noopener noreferrer" className={styles.boldLink}>
            <strong>World Vision International Vietnam</strong>
          </a>{" "}
          và{" "}
          <a href="https://msdvietnam.org/" target="_blank" rel="noopener noreferrer" className={styles.boldLink}>
            <strong>MSD Vietnam</strong>
          </a>{" "}
          để triển khai các dự án hỗ trợ trẻ em. Quá trình trao tặng sẽ được công khai trên trang Facebook của {" "}<strong>Aria Project</strong>{" "} sau khi chương trình kết thúc nhằm đảm bảo tính minh bạch và lan tỏa những giá trị tốt đẹp đến cộng đồng.
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