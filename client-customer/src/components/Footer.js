import React from 'react';
import styles from './Footer.module.css'; // Import mô-đun CSS

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.fullWidthBackground}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h2>Tiệm Hoa</h2>
            <p><strong>Địa chỉ:</strong> 69/68 Đặng Thùy Trâm, P.13, Q.Bình Thạnh, TP.HCM</p>
            <p><strong>Điện thoại:</strong> 0123456789</p>
            <p><strong>Email:</strong> tiemhoa@gmail.com</p>
          </div>
          <div className={styles.section}>
            <h3>Menu</h3>
            <ul>
              <li><a href="/">Trang chủ</a></li>
              <li><a href="/">Bó Hoa Tươi</a></li>
              <li><a href="/">Hoa Cưới</a></li>
              <li><a href="/">Hoa Sáp</a></li>
              <li><a href="/">Liên Hệ</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>Chính Sách</h3>
            <ul>
              <li><a href="/">Hình Thức Thanh Toán</a></li>
              <li><a href="/">Chính sách giao hàng</a></li>
              <li><a href="/">Chính sách bảo mật thông tin</a></li>
              <li><a href="/">Chính sách bảo hành</a></li>
              <li><a href="/">Điều khoản sử dụng</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>Fanpage</h3>
            <div className={styles.fanpage}>
              {/* Thay thế bằng mã nhúng của Facebook hoặc hình ảnh */}
              <iframe
                title="Facebook Fanpage"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fssstuttershop&tabs=timeline&width=340&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"                width="340"
                height="150"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
            <p>© Bản quyền thuộc về Tiệm Hoa | Cung cấp bởi Tiệm Hoa</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
