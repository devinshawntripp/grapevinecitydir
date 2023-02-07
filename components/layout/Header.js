import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isSearchToggled, setSearchToggled] = useState(false);
  const [isLanguageToggled, setLanguageToggled] = useState(false);
  const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
  const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={`${
          scroll ? "header sticky-bar stick" : "header sticky-bar"
        } ${addClass}`}
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              {/* <div className="header-logo"> */}
              <Link className="d-flex" href="/">
                {/* <img alt="Ecom" src="assets/imgs/template/logo-2.svg" /> */}
                {/* <p>G</p> */}
                <p className="">Grapevine City</p>
              </Link>
              {/* </div> */}
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    {/* <li className="has-children">
                      <Link className="active" href="/"> */}
                    {/* Home */}
                    {/* </Link> */}
                    {/* <div className="sub-menu two-col"> */}
                    {/* <Link className="btn-homepage" href="#"> */}
                    {/* <span>
                            <svg
                              className="w-6 h-6 icon-16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                          </span> */}
                    {/* Homepage */}
                    {/* </Link> */}
                    {/* </div> */}
                    {/* </li> */}
                    <li className="has-children">
                      <Link href="#">Company</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/service">Our Services</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Pricing Plan</Link>
                        </li>
                        <li>
                          <Link href="/team">Meet Our Team</Link>
                        </li>
                        <li>
                          <Link href="/help">Help Center</Link>
                        </li>
                        <li>
                          <Link href="/term-conditions">
                            Term and Conditions
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="#">Career</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/career">Jobs Listing</Link>
                        </li>
                        <li>
                          <Link href="/job-detail">Job Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="#">Blog</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/blog">Blog Listing 1</Link>
                        </li>
                        <li>
                          <Link href="/blog-2">Blog Listing 2</Link>
                        </li>
                        <li>
                          <Link href="/blog-detail">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li className="has-children">
                      <Link href="#">Shop</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/shop-grid">Products Listing 1</Link>
                        </li>
                        <li>
                          <Link href="/shop-list">Products Listing 2</Link>
                        </li>
                        <li>
                          <Link href="/product-detail">Product Details</Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="has-children">
                      <Link href="#">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/register">Register</Link>
                        </li>
                        <li>
                          <Link href="/login">Login</Link>
                        </li>
                        <li>
                          <Link href="/coming-soon">Coming soon</Link>
                        </li>
                        <li>
                          <Link href="/404">Error 404</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className={`burger-icon burger-icon-white ${
                    openClass && "burger-close"
                  }`}
                  onClick={() => {
                    handleOpen();
                    handleRemove();
                  }}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
              <div className="header-right">
                <div className="d-inline-block box-search-top">
                  <div
                    className={
                      isSearchToggled
                        ? "form-search-top d-block"
                        : " form-search-top d-none"
                    }
                  >
                    <form action="#">
                      <input
                        className="input-search"
                        type="text"
                        placeholder="Search..."
                      />
                      <button className="btn btn-search">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                  <span
                    className="font-lg icon-list search-post"
                    onClick={toggleSearchTrueFalse}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className="d-inline-block box-dropdown-cart"
                  onClick={toggleLanguageTrueFalse}
                >
                  <span className="font-lg icon-list icon-account">
                    <span className="font-lg color-grey-900 arrow-down">
                      EN
                    </span>
                  </span>
                  <div
                    className={
                      isLanguageToggled
                        ? "dropdown-account dropdown-open"
                        : "dropdown-account"
                    }
                  >
                    <ul>
                      <li>
                        <Link className="font-md" href="#">
                          <img
                            src="assets/imgs/template/icons/en.png"
                            alt="iori"
                          />
                          English
                        </Link>
                      </li>
                      <li>
                        <Link className="font-md" href="#">
                          <img
                            src="assets/imgs/template/icons/fr.png"
                            alt="iori"
                          />
                          French
                        </Link>
                      </li>
                      <li>
                        <Link className="font-md" href="#">
                          <img
                            src="assets/imgs/template/icons/cn.png"
                            alt="iori"
                          />
                          Chiness
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-none d-sm-inline-block">
                  <Link className="btn btn-brand-1 hover-up" href="register">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
