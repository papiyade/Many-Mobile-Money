import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import { FiMoon, FiSun, FiStar, FiX, FiMenu, FiDownload } from 'react-icons/fi';
import { nav } from '../data/Navigation';
import logo_light from "../assets/logo-light-many.png"
import logo_dark from "../assets/logo-dark-many.png"
import logo from "../assets/logo-light-many.png"



const navItems = nav.map(item => ({
    ...item,
}));

const Navbar = () => {
    const location = useLocation();
    const { darkMode, toggleDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('home');

    // Helper to check if current route is a home-like route
    const isHomeRoute = () =>
        location.pathname === '/' ||
        location.pathname === '/home2' ||
        location.pathname === '/home3' ||
        location.pathname === '/home4';

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scrollspy for active section
    const handleScroll = () => {
        if (isHomeRoute()) {
            const sections = document.querySelectorAll("section[id]");
            let currentSectionId = "home";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const offset = 100;
                if (window.scrollY >= sectionTop - offset) {
                    currentSectionId = section.getAttribute("id");
                }
            });
            setActiveLink(currentSectionId);
        }
    };

    // Smooth scroll to section
    const scrollToSection = (id) => {
        if (!isHomeRoute()) {
            window.location.href = `/#${id}`;
            return;
        }

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState({}, '', location.pathname);
        }
        setIsMenuOpen(false);
    };

    // Logo click behavior
    const handleLogoClick = () => {
        if (!isHomeRoute()) {
            window.location.href = '/';
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState({}, '', location.pathname);
        }
    };

    // Handle hash navigation when page loads
    useEffect(() => {
        if (isHomeRoute() && location.hash) {
            const sectionId = location.hash.substring(1);
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
                window.history.pushState({}, '', location.pathname);
            }, 500);
        }
    }, [location.pathname, location.hash]);

    // Clean up URL hash when on home-like routes
    useEffect(() => {
        if (isHomeRoute() && location.hash) {
            window.history.pushState({}, '', location.pathname);
        }
    }, [location.pathname, location.hash]);

    // Attach scroll event listener on home-like routes
    useEffect(() => {
        if (isHomeRoute()) {
            window.addEventListener('scroll', handleScroll);
            handleScroll();
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            setActiveLink('');
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Don't render until mounted to avoid hydration issues
    if (!mounted) {
        return (
            <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-background/80 backdrop-blur-sm" />
        );
    }

    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const logoVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
            }
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-base-100/80 backdrop-blur-xl shadow-lg border-b border-secondary-content/10' : 'bg-base-100/80 backdrop-blur-sm'} `} variants={navbarVariants} initial="hidden" animate="visible">
            <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <motion.div className="flex items-center space-x-3 cursor-pointer" variants={itemVariants} onClick={handleLogoClick}>
                        <motion.div variants={logoVariants} whileHover="hover" className="relative flex align-items">
                            <img src={darkMode ? logo_light : logo_dark} alt="Logo" className=" h-8 md:block hidden rounded-xl" />
                            <img src={logo} alt="Logo" className="h-12 md:hidden block rounded-xl" />
                            <p className='text-base-content font-bold text-xl ml-2'>Many</p>
                            {/* Animated Ring */}
                        </motion.div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div className="hidden xl:flex items-center space-x-2" variants={itemVariants}>
                        {navItems.map((item, index) => {
                            const isHashLink = item.link.startsWith('/#');
                            const sectionId = isHashLink ? item.link.substring(2) : null;
                            const isActive = isHomeRoute() && (activeLink === sectionId || (item.name === 'Home' && activeLink === 'home'));
                            return (
                                <Link to={item.link} key={item.name} onClick={(e) => {
                                    if (isHashLink) {
                                        e.preventDefault();
                                        scrollToSection(sectionId);
                                    }
                                }} className={`btn btn-ghost hover:text-secondary-content hover:bg-primary/20 rounded-lg cursor-pointer  ${isActive
                                    ? 'text-primary-content bg-primary shadow-sm'
                                    : 'text-neutral'} `}>
                                    <div className="flex items-center space-x-2">
                                        <span>{item.name}</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </motion.div>

                    {/* Right Section */}
                    <motion.div className="flex items-center space-x-4" variants={itemVariants}>
                        {/* Theme Toggle */}
                        <motion.button className="relative w-14 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center transition-all duration-300 hover:scale-105"
                            onClick={toggleDarkMode}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {/* Background Glow */}
                            <motion.div className="absolute inset-0 rounded-full bg-primary/20 opacity-20"
                                animate={{ opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            {/* Toggle Circle */}
                            <motion.div className="absolute w-6 h-6 bg-primary-content rounded-full shadow-lg flex items-center justify-center"
                                animate={{
                                    x: darkMode ? 24 : 2,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <motion.div
                                    animate={{ rotate: darkMode ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {darkMode ? (
                                        <FiMoon className="w-3 h-3 text-primary" />
                                    ) : (
                                        <FiSun className="w-3 h-3 text-primary" />
                                    )}
                                </motion.div>
                            </motion.div>
                        </motion.button>

                        {/* CTA Button */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() =>
                             navigate('/')}>
                                 {/* Naviguer vers Google Play ou App Store après avoir cliqué */}
                            <Button className="hidden sm:flex text-primary-content" size="lg" iconClassName="text-primary-content ">Télécharger</Button>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button className="xl:hidden relative w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                            onClick={toggleMenu}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <FiX className="w-5 h-5 text-primary" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiMenu className="w-5 h-5 text-primary" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div className="xl:hidden absolute top-full left-0 right-0 bg-base-100 border-b border-base-100/50 shadow-xl"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="container mx-auto px-4 py-6">
                                <motion.div className="space-y-2">
                                    {navItems.map((item, index) => {
                                        return (
                                            <motion.div key={item.name} className="relative" layout>
                                                <Link className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 text-base-content hover:text-primary hover:bg-primary/10`} to={item.link} onClick={() => setIsMenuOpen(false)}>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-lg">{item.icon}</span>
                                                        <span className="font-medium">{item.name}</span>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                    {/* Mobile CTA */}
                                    <motion.div className="pt-4 border-t border-border/30"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Button className="w-full bg-primary hover:shadow-xl transition-all duration-300 font-semibold" onClick={() =>
                                             navigate('/')} size="lg" icon={FiDownload} iconClassName="text-primary-content">Télécharger</Button>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Navbar;