// components/Footer/footer.tsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Thông tin liên hệ:</h2>
        
        <div className={styles.contactGrid}>
          {/* Cột 1 */}
          <div className={styles.contactItem}>
            <p>
              <span className={styles.contactName}>Trương Nam Anh</span> - 0868819542
            </p>
            <p>(Trưởng BTC Hòa nhạc)</p>
          </div>

          {/* Cột 2 */}
          <div className={styles.contactItem}>
            <p>
              <span className={styles.contactName}>Đỗ Ngọc Linh</span> - 0867197423
            </p>
            <p>(Ban Tài chính)</p>
          </div>

          {/* Cột 3 */}
          <div className={styles.contactItem}>
            <p>
              <span className={styles.contactName}>Trần Cẩm Linh</span> - 0869939838
            </p>
            <p>(Trưởng BTC Triển lãm)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}