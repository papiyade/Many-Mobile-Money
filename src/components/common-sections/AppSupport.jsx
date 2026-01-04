import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../ui/Button';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { FaHeadphones, FaPhone, FaStar, } from 'react-icons/fa';
import { FiMail, FiMessageCircle } from 'react-icons/fi';
import { conversations, stats } from '../../data/data';

const AppSupport = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const [hoveredConversation, setHoveredConversation] = useState(null);
    const [animatedStats, setAnimatedStats] = useState({ clients: 0, projects: 0, users: 0 });

    // Animated counter effect
    useEffect(() => {
        const animateStats = () => {
            stats.forEach((stat) => {
                let current = 0;
                const increment = stat.value / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= stat.value) {
                        current = stat.value;
                        clearInterval(timer);
                    }
                    setAnimatedStats(prev => ({
                        ...prev,
                        [stat.id]: Math.floor(current)
                    }));
                }, 50);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateStats();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById('stats-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

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
            y: 30,
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

    const conversationVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

return (
  <>
    <Section>
      <SectionTitle
        position="center"
        title="Questions fréquentes"
        badge="Support MANY"
        icon={FaHeadphones}
        gradientTitle="& Assistance"
        paragraph="Notre équipe vous accompagne pour vos transferts, paiements et opérations quotidiennes"
      />

      <motion.div
        className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left side support card */}
        <motion.div className="space-y-6 mt-12 md:mt-20" variants={itemVariants}>
          <div className="relative">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-4 mb-6 md:mb-8"
            >
              <motion.div
                className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary to-secondary p-3 flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FiMessageCircle className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-content">
                  Assistance en temps réel
                </h3>
                <p>Support instantané pour vos opérations MANY</p>
              </div>
            </motion.div>

            {/* Conversations List */}
            <div className="space-y-4 mt-8 md:mt-12">
              {conversations.map((conversation, index) => (
                <motion.div
                  key={conversation.id}
                  variants={conversationVariants}
                  custom={index}
                  className="relative group"
                  onHoverStart={() => setHoveredConversation(conversation.id)}
                  onHoverEnd={() => setHoveredConversation(null)}
                >
                  <Card
                    variant="glass"
                    bodyClassName="p-0 rounded-2xl"
                    className="bg-transparent border-none shadow-none rounded-2xl"
                  >
                    <motion.div
                      className={`backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-base-content/20 transition-all duration-300 ${
                        hoveredConversation === conversation.id ? "scale-[1.02]" : ""
                      }`}
                    >
                      {/* Status */}
                      <motion.div
                        className="absolute top-3 right-4 flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-base-content">
                          {conversation.time}
                        </span>
                      </motion.div>

                      <div className="flex gap-4">
                        {/* Icon */}
                        <motion.div
                          className={`w-12 md:w-14 h-12 md:h-14 rounded-2xl ${conversation.bgColor} p-3 flex items-center justify-center`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <conversation.icon className={`w-7 h-7 text-${conversation.color}`} />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-lg md:text-xl font-semibold text-secondary-content mb-2">
                            {conversation.title}
                          </h4>
                          <p className="text-sm md:text-base text-base-content mb-3 line-clamp-2">
                            {conversation.message}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-semibold text-secondary-content">
                              {conversation.amount}
                            </span>
                            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-300/20 text-green-400">
                              {conversation.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div className="space-y-8" variants={itemVariants}>
          {/* Main Heading */}
          <motion.div className="text-center md:text-left">
            <motion.h3 className="text-3xl md:text-4xl font-bold text-secondary-content mb-4">
              Déjà adoptée par{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                des milliers d’utilisateurs
              </span>
            </motion.h3>
            <motion.p className="text-lg text-base-content mb-6">
              MANY est utilisée chaque jour pour envoyer de l’argent,
              payer des services et gérer des portefeuilles en toute sécurité.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <Card key={stat.id} variant="glass" className="bg-transparent border-none shadow-none">
                <div className="backdrop-blur-sm rounded-2xl p-6 text-center border border-base-content/20">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-${stat.color}/20 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-secondary-content mb-1">
                    {animatedStats[stat.id]}{stat.suffix}
                  </div>
                  <div className="text-sm text-base-content">{stat.label}</div>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Button variant="primary" size="lg" icon={FaPhone} className="w-full">
              Contacter le support
            </Button>
            <Button variant="primary" size="lg" icon={FiMail} className="w-full">
              Écrire au supports
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  </>
);

}

export default AppSupport