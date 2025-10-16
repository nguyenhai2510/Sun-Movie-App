import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="mb-4 text-2xl font-bold text-red-500">SunMovie</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Khám phá thế giới điện ảnh với hàng ngàn bộ phim chất lượng cao.
              Trải nghiệm giải trí tuyệt vời cùng SunMovie.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-red-500"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-red-500"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-sm" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-red-500"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-sm" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-red-500"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-sm" />
              </a>
              <a
                href="https://github.com/nguyenhai2510"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-red-500"
              >
                <FontAwesomeIcon icon={faGithub} className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="mb-4 text-lg font-semibold">Liên kết nhanh</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/home"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-red-500"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-red-500"
                >
                  Tìm kiếm
                </Link>
              </li>
              <li>
                <Link
                  to="/people"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-red-500"
                >
                  Diễn viên
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-red-500"
                >
                  Thể loại
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-red-500"
                >
                  Phim mới
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="mb-4 text-lg font-semibold">Thể loại phim</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-red-500"
                >
                  Hành động
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-red-500"
                >
                  Hài kịch
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-red-500"
                >
                  Kinh dị
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-red-500"
                >
                  Lãng mạn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-red-500"
                >
                  Khoa học viễn tưởng
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="mb-4 text-lg font-semibold">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-sm text-red-500"
                />
                <span className="text-sm text-gray-300">info@sunmovie.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-sm text-red-500"
                />
                <span className="text-sm text-gray-300">+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-sm text-red-500"
                />
                <span className="text-sm text-gray-300">Hà Nội, Việt Nam</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="mb-3 text-sm font-semibold">Đăng ký nhận tin</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 rounded-l-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-red-500 focus:outline-none"
                />
                <button className="rounded-r-md bg-red-500 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-red-600">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between md:flex-row">
            <div className="mb-4 mr-72 text-sm text-gray-400 md:mb-0">
              © {currentYear} SunMovie.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-red-500"
              >
                Điều khoản sử dụng
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-red-500"
              >
                Chính sách bảo mật
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-red-500"
              >
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
