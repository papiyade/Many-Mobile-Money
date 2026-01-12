import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import phone1 from "../../assets/SPLASH.png"
import phone2 from "../../assets/USER_WELCOME.png"
import phone3 from "../../assets/transfert_page.png"
import phone4 from "../../assets/secret_code.png"
import phone5 from "../../assets/account_type.png"
import phone6 from "../../assets/balance.png"
import phone7 from "../../assets/sendMoney.png"
import phone8 from "../../assets/QR.png"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { MdSmartphone } from 'react-icons/md';
import { FiSend, FiBarChart2, FiLock } from 'react-icons/fi';
const partners = [
  {
    id: 'banks',
    name: "Banques partenaires",
    description: "Connexion sécurisée aux institutions financières"
  },
  {
    id: 'merchants',
    name: "Commerçants agréés",
    description: "Paiement de factures et services"
  },
  {
    id: 'agents',
    name: "Réseau d’agents",
    description: "Dépôt et retrait partout"
  },
  {
    id: 'security',
    name: "Fournisseurs de sécurité",
    description: "Protection avancée des transactions"
  }
];


// Mock phone images - replace with your actual images
const phoneImages = [phone1, phone2, phone3, phone4, phone5, phone6, phone7, phone8, phone1, phone2, phone3, phone4, phone5, phone6, phone1, phone2, phone3, phone4, phone5, phone6,
];

const AppPartner = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const [activeImg, setActiveImg] = useState(2);
    const [hoveredPartner, setHoveredPartner] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const partnerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const updateSlideOpacity = (swiper) => {
        swiper.slides.forEach((slide) => {
            const slideIndex = parseInt(slide.getAttribute('data-swiper-slide-index'));
            const activeIndex = swiper.realIndex;

            let distance = Math.abs(slideIndex - activeIndex);

            // Handle looping difference (e.g. slide 0 and 6 in looped 7 total)
            const total = swiper.slides.length;
            if (swiper.params.loop) {
                const maxIndex = swiper.slides.length / swiper.loopedSlides - 1;
                const diff = Math.abs(slideIndex - activeIndex);
                distance = Math.min(diff, maxIndex + 1 - diff); // wrap-around fix
            }

            if (distance === 0) {
                slide.style.opacity = '1';
            } else if (distance === 1) {
                slide.style.opacity = '0.6';
            } else if (distance === 2) {
                slide.style.opacity = '0.3';
            } else {
                slide.style.opacity = '0.1';
            }
        });
    };


    return (
        <Section id="features">
            {/* Background Elements */}
            {/* App Showcase Section */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-12">
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mb-12"
>
  <motion.div
    className="text-center mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <SectionTitle
      position="center"
      title="Découvrez notre"
      badge="Fonctionnalités"
      icon={MdSmartphone}
      gradientTitle="App Many"
      paragraph="Parcourez les écrans de notre application et explorez ses fonctionnalités puissantes"
    />

    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      <motion.div
        className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-sm font-semibold flex items-center gap-2"
        variants={itemVariants}
      >
        <FiSend className="w-4 h-4" />
        Transferts instantanés
      </motion.div>

      <motion.div
        className="px-4 py-2 bg-gradient-to-r from-secondary to-secondary rounded-full text-white text-sm font-semibold flex items-center gap-2"
        variants={itemVariants}
      >
        <FiBarChart2 className="w-4 h-4" />
        Suivi en temps réel
      </motion.div>

      <motion.div
        className="px-4 py-2 bg-gradient-to-r from-secondary to-primary rounded-full text-white text-sm font-semibold flex items-center gap-2"
        variants={itemVariants}
      >
        <FiLock className="w-4 h-4" />
        Paiements sécurisés
      </motion.div>
    </div>
  </motion.div>
</motion.div>

                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4  gap-8 mx-auto my-10">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="border-x p-6 text-base-content  hover:text-primary transform hover:scale-105 transition duration-300">
                            <p className='text-3xl text-center font-semibold'>{partner.name}</p>
                        </div>
                    ))}
                </div>

                {/* Enhanced Swiper */}
                <motion.div className="relative " initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    {/* Swiper Container */}
                    <div className="relative px-4">
                        <Swiper loop={true} effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            onSlideChange={(swiper) => {
                                setActiveImg(swiper.realIndex);
                                updateSlideOpacity(swiper);
                            }}
                            onSwiper={(swiper) => {
                                setActiveImg(swiper.realIndex);
                                updateSlideOpacity(swiper);
                            }}

                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 40,
                                },
                            }}
                            className="mySwiper pb-16"
                        >
                            {phoneImages.map((imgSrc, index) => (
                                <SwiperSlide key={index} className="cursor-pointer py-8">
                                    <motion.div className="relative group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                        {/* Phone Frame */}
                                        <div className="relative w-full max-w-[250px] mx-auto">
                                            <div className="">
                                                <div className="relative overflow-hidden rounded-[2rem]">
                                                    <img src={imgSrc} alt={`App Screen ${index + 1}`} className="w-full object-cover rounded-[2rem]" />

                                                    {index === activeImg && (
                                                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full shadow-lg">
                                                            <div className="w-full h-full bg-green-400 rounded-full animate-ping" />
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>

                                            {index === activeImg && (
                                                <>
                                                    <motion.div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm" animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
                                                    <motion.div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/30 rounded-full blur-sm" animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>
            </motion.div>
        </Section >
    );
};

export default AppPartner;