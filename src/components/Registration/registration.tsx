"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "./registration.module.css";

interface FormData {
  name: string;
  phone: string;
  email: string;
  attendees: string;
}

export default function Registration() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    attendees: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Đang gửi đăng ký...");

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbyVpZKEwndWS_dHoklD4CJnYF3LhJDZXpr7ig-3iweB8gvDW-yjImMXCKbzcapMRVfgYg/exec";

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("Đăng ký thành công! Hẹn gặp bạn tại sự kiện.");
      setFormData({ name: "", phone: "", email: "", attendees: "" });
    } catch (error) {
      setStatus("Có lỗi xảy ra. Vui lòng thử lại sau!");
    } finally {
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  };

  return (
    <div id="dang-ky" className={styles.registration}>
      <Image
        src="/images/nui1.png"
        alt=""
        width={1440}
        height={959.51}
        className={styles.mountain1}
      />

      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>ĐĂNG KÝ THAM DỰ MIỄN PHÍ</h2>

        <div className={styles.regContainer}>
          <div className={styles.regInfo}>
            <p className={styles.regText}>
              <span className={styles.regBold}>Ngày:</span> Thứ 6, ngày 31/07/2026
            </p>
            <p className={styles.regText}>
              <span className={styles.regBold}>Địa điểm:</span> Phòng Hòa nhạc nhỏ,
              Học viện Âm nhạc Quốc gia, 77 Hào Nam,
              Hà Nội
            </p>
            <p className={styles.regText}>
              <span className={styles.regBold}>Thời gian triển lãm và check-in:</span> từ 18:15
            </p>
            <p className={styles.regText}>
              <span className={styles.regBold}>Thời gian bắt đầu buổi diễn:</span> 19:00
            </p>
          </div>

          <form className={styles.regForm} onSubmit={handleSubmit} id="regForm">
            <div className={styles.formRow}>
              <div className={styles.formLabel}>Họ Tên</div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formLabel}>Số Điện Thoại</div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formLabel}>Email</div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formLabel}>Số Người đi cùng</div>
              <div className={styles.inputWithHint}>
                <input
                  type="number"
                  name="attendees"
                  min="0"
                  value={formData.attendees}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
                <span className={styles.hintText}>(không bao gồm bản thân)</span>
              </div>
            </div>
          </form>
        </div>

        <button type="submit" form="regForm" className={styles.submitBtn}>
          ĐĂNG KÝ
        </button>
        {status && <p className={styles.statusMessage}>{status}</p>}
      </div>
    </div>
  );
}