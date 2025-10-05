import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./Portfolio.module.scss";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

import portfolio_1 from "../../assets/images/portfolio-1.jpg";
import portfolio_2 from "../../assets/images/portfolio-2.jpg";
import portfolio_3 from "../../assets/images/portfolio-3.jpg";

const Portfolio = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        { id: 1, img: portfolio_1, title: "Project 1", desc: "Web Design" },
        { id: 2, img: portfolio_2, title: "Project 2", desc: "Development" },
        { id: 3, img: portfolio_3, title: "Project 3", desc: "UI/UX" },
        { id: 4, img: portfolio_3, title: "Project 4", desc: "Branding" },
    ];

    return (
        <section className={styles.portfolio}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.portfolioLogo}>
                        <span>03</span> portfolio
                    </div>

                    <ul className={styles.portfolioNav}>
                        <li className={`${styles.navItem} ${styles.active}`}>ALL</li>
                        <li className={styles.navItem}>UI/UX DESIGN</li>
                        <li className={styles.navItem}>PRODUCT DESIGN</li>
                        <li className={styles.navItem}>BRANDING</li>
                        <li className={styles.navItem}>WEB DESIGN</li>
                    </ul>
                    <div className={styles.prevNextBtn}>
                        <div
                            className={styles.btn}
                            onClick={() => swiperRef.current.slidePrev()}
                        >
                            <GrLinkPrevious />
                        </div>
                        <div
                            className={styles.btn}
                            onClick={() => swiperRef.current.slideNext()}
                        >
                            <GrLinkNext />
                        </div>
                    </div>
                </div>

                <div className={styles.main}>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={3}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                    >
                        {slides.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={styles.card}>
                                    <img src={item.img} alt={item.title} />
                                    <div className={styles.desc}>
                                        <h4>{item.title}</h4>
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className={styles.pagination}>
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`${styles.line} ${i === activeIndex ? styles.active : ""
                                    }`}
                                onClick={() => swiperRef.current.slideTo(i)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
