import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="ARIA PROJECT"
            width={262}
            height={44}
            priority
          />
        </Link>

        <Link href="#dang-ky" className={styles.button}>
          Đăng Ký Ngay
        </Link>
      </div>
    </nav>
  );
}