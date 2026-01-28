import React from 'react'
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import StoreButton from '../components/ui/StoreButton';
import GradientText from '../components/ui/GradientText';
import { FiBookOpen, FiDownload, FiExternalLink, FiInstagram, FiMessageCircle, FiSearch, FiTrendingUp, FiZap } from 'react-icons/fi';
import { FaApple, FaArrowRight, FaLinkedin } from 'react-icons/fa';
import { MdSmartphone } from 'react-icons/md';
import { FiCreditCard, FiDollarSign, FiHeadphones, FiMail, FiSend, FiClock, FiFacebook } from 'react-icons/fi';

// Logo img
import logo from "../assets/logo-light-many.png"
import logo_light from "../assets/logo-light.png"
import logo_dark from "../assets/logo-dark.png"
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const footerLinks = {
    app: [
    { name: 'Transferts', icon: FiSend, href: '#' },         // Pour envoyer de l'argent
    { name: 'Dépôts', icon: FiCreditCard, href: '#' },      // Pour recharger le portefeuille
    { name: 'Paiements', icon: FiDollarSign, href: '#' },   // Pour payer factures ou services
    { name: 'Historique', icon: FiClock, href: '#' }       // Pour suivre les transactions
    ],
    help: [
    { name: 'Assistance', icon: FiHeadphones, href: '#' },  // Support client
    { name: 'FAQ', icon: FiBookOpen, href: '#' },           // Questions fréquentes
    { name: 'Nous contacter', icon: FiMail, href: '#' }     // Email direct
    ],
  community: [
    { name: 'Facebook', icon: FiFacebook, href: '#' },      // Réseaux sociaux pour rester informé
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
    { name: 'Instagram', icon: FiInstagram, href: '#' }
  ]
  };
return (
  <div className="relative bg-base-200/10 overflow-hidden">
    <Section className="pb-6 pt-8 sm:pt-12 lg:pt-24" paddingY={false}>
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 pb-6"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-secondary-content mb-6"
          >
            Simplifiez vos paiements avec{" "}
            <GradientText title="MANY" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base text-secondary-content mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            Envoyez de l’argent, payez vos factures, gérez votre portefeuille
            et effectuez des dépôts ou retraits en toute sécurité, où que vous soyez.
          </motion.p>

          <Button
            className="mt-8 w-fit mx-auto"
            variant="primary"
            size="lg"
            icon={FiDownload}
            iconClassName="text-primary-content"
          >
            TÉLÉCHARGER L’APPLICATION
          </Button>
        </motion.div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6">
          <div className="border-t border-secondary-content/10 pt-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-12"
            >
              {/* Logo Section */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-2 md:col-span-2 flex flex-col gap-6"
              >
                {/* Logo + MANY */}
                <div className="flex items-center gap-4">
                  <img
                    src={logo}
                    alt="MANY Logo"
                    className="h-20 md:block hidden rounded-xl"
                  />

                  <span
                    className="
                      text-3xl font-extrabold tracking-wide
                      text-base-content
                      bg-clip-text
                    "
                  >
                    MANY
                  </span>
                </div>

                <p className="text-base mb-8 leading-relaxed text-base-content">
                  MANY est votre solution de mobile money pour transférer,
                  payer et gérer votre argent simplement, rapidement et en toute confiance.
                </p>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <StoreButton subtitle="App Store" title="Disponible sur" icon={FaApple} />
                  <StoreButton subtitle="Play Store" title="Disponible sur" icon={MdSmartphone} />
                </div>
              </motion.div>

              {/* MANY App Links */}
              <motion.div variants={itemVariants} className="mt-4 lg:mt-0">
                <h3 className="text-xl font-bold text-secondary-content mb-6 uppercase tracking-wide">
                  Application MANY
                </h3>
                <ul className="space-y-4">
                  {footerLinks.app.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.li key={index} variants={linkVariants} className="group">
                        <Link
                          to={link.href}
                          className="flex items-center gap-3 text-base-content hover:text-secondary-content transition-colors duration-300 uppercase tracking-wide"
                        >
                          <IconComponent className="w-4 h-4" />
                          {link.name}
                          <FaArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                        <div className="w-3 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-16 transition-all duration-300 mt-1" />
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Help */}
              <motion.div variants={itemVariants} className="mt-4 lg:mt-0">
                <h3 className="text-xl font-bold text-secondary-content mb-6 uppercase tracking-wide">
                  Assistance
                </h3>
                <ul className="space-y-4">
                  {footerLinks.help.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.li key={index} variants={linkVariants} className="group">
                        <Link
                          to={link.href}
                          className="flex items-center gap-3 text-base-content hover:text-secondary-content transition-colors duration-300 uppercase tracking-wide"
                        >
                          <IconComponent className="w-4 h-4" />
                          {link.name}
                          <FaArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Community */}
              <motion.div variants={itemVariants} className="mt-4 lg:mt-0">
                <h3 className="text-xl font-bold text-secondary-content mb-6 uppercase tracking-wide">
                  Communauté
                </h3>
                <ul className="space-y-4">
                  {footerLinks.community.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.li key={index} variants={linkVariants} className="group">
                        <Link
                          to={link.href}
                          className="flex items-center gap-3 text-base-content hover:text-secondary-content transition-colors duration-300 uppercase tracking-wide"
                        >
                          <IconComponent className="w-4 h-4" />
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row md:justify-between items-center pt-6 mt-4 md:mt-16 border-t border-secondary-content/10"
            >
              <p className="text-center md:text-left">
                © {new Date().getFullYear()} MANY. Tous droits réservés.
              </p>
              <p className="mt-4 md:mt-0">
                <Link to="/terms-and-conditions" className="transition-colors duration-300 hover:text-secondary">
                  Conditions d’utilisation
                </Link>
                {" "} | {" "}
                <Link to="/privacy-policy" className="hover:text-secondary transition-colors duration-300">
                  Politique de confidentialité
                </Link>

              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

}

export default Footer
