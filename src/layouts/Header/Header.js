import { useState } from "react";
import { logos, socialMediaUrl } from "../../data/Data";
import "./Header.scss";
import useIsNotPhone from "../../hooks/useIsNotPhone";

export default function Header() {
  const { linkedin, github } = socialMediaUrl;
  const [isOpen, setIsOpen] = useState(false);
  const isNotPhone = useIsNotPhone(768);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (!isNotPhone) setIsOpen(false);
  };

  const navClass = isNotPhone
    ? "header__nav"
    : isOpen
    ? "header__nav"
    : "header__nav--closed";

  const navItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "A propos", href: "#a-propos" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projets", href: "#projets" },
    { label: "Contact", href: "#contact" },
  ];

const scrollTo = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const offset = 100; 
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: "smooth" });
  }
  handleLinkClick();
};

  return (
    <header className="header">
      <div className="header__container">
        <a
          href="#accueil"
          className="header__logo"
          onClick={(e) => scrollTo(e, "#accueil")}
        >
          <img src={logos.logotransparent} alt="logo" />
        </a>

        <div onClick={toggleClass} className="header__menu-toggle">
          <svg
            className="header__menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>

      <nav className={navClass}>
        <ul className="header__nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="header__nav-item">
              <a
                href={item.href}
                className="header__nav-link"
                onClick={(e) => scrollTo(e, item.href)}
              >
                {item.label}
              </a>
              <span className="header__nav-underline"></span>
            </li>
          ))}
        </ul>

        <ul className="header__socials-list">
          <li className="header__social-item">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="header__social-link"
              aria-label="LinkedIn"
            >
              {/* LinkedIn SVG */}
              <svg className="header__social-icon" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0.6C7.05 0.6 0.6 7.05 0.6 15s6.45 14.4 14.4 14.4 14.4-6.45 14.4-14.4S22.95 0.6 15 0.6ZM11.475 20.97H8.559V11.585h2.916V20.97Zm-1.476-10.537c-.921 0-1.517-.652-1.517-1.46 0-.823.614-1.456 1.555-1.456.94 0 1.516.633 1.534 1.456 0 .807-.594 1.46-1.572 1.46Zm12.126 10.537h-2.916v-5.2c0-1.21-.423-2.032-1.477-2.032-.805 0-1.283.556-1.495 1.092-.078.19-.097.46-.097.728v5.412H13.22v-6.39c0-1.172-.037-2.151-.076-2.994h2.534l.134 1.304h.059c.384-.612 1.324-1.515 2.898-1.515 1.918 0 3.356 1.286 3.356 4.049v5.548Z" />
              </svg>
            </a>
          </li>
          <li className="header__social-item">
            <a
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="header__social-link"
              aria-label="GitHub"
            >
              {/* GitHub SVG */}
              <svg className="header__social-icon" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.713 0 0 6.713 0 15c0 6.638 4.294 12.244 10.256 14.232.75.131 1.031-.319 1.031-.713 0-.356-.02-1.537-.02-2.793-3.769.694-4.744-0.918-5.044-1.762-.169-.431-.9-1.762-1.537-2.118-.525-.281-1.275-.975-.019-.994 1.181-.019 2.025 1.087 2.306 1.537 1.35 2.269 3.506 1.631 4.369 1.238.131-0.975.525-1.631.956-2.006C8.962 21.243 5.475 19.95 5.475 14.213c0-1.631.581-2.981 1.537-4.031-.15-.375-.675-1.912.15-3.975 0 0 1.256-.394 4.125 1.537 1.2-.337 2.475-.506 3.75-.506s2.55.169 3.75.506c2.869-1.95 4.125-1.537 4.125-1.537.825 2.062.3 3.6.15 3.975.956 1.05 1.537 2.4 1.537 4.031 0 5.756-3.506 7.031-6.844 7.406.544.469 1.013 1.369 1.013 2.775 0 2.006-.018 3.619-.018 4.125 0 .394.281.863 1.031.713C25.706 27.244 30 21.638 30 15 30 6.713 23.287 0 15 0Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
