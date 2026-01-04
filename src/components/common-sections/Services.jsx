import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import serviceBg from "../../assets/Sprinkle.jpg";
import cards from "../../data/data";
import phoneImg from "../../assets/USER_WELCOME.png";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { MdCheckCircle } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

const Services = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const leftServices = cards.flatMap((group, index) => group.card1);
  const rightServices = cards.flatMap((group, index) => group.card2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative px-4 md:px-8 xl:px-0"
      id="services"
    >
      {/* Service section */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="">
        <SectionTitle
          position="center"
          title="Services"
          gradientTitle="MANY"
          paragraph="Tous les services essentiels pour gérer votre argent au quotidien, en toute simplicité et en toute sécurité."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 mt-20 gap-8 items-center mb-20"
        >
          {/* Left Services */}
          <motion.div className="space-y-8 order-2 lg:order-1">
            {leftServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group"
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Connection Line */}
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-l from-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />
                <Card variant="gradient" className="">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className={`w-32 h-auto rounded-full overflow-hidden flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={service.image}
                        alt=""
                        className="rounded-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-content">
                        {service.cardTag}
                      </h3>
                      <p className="text-sm">{service.shortText}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      service.firstSkill,
                      service.SecondSkill,
                      service.ThirdSkill,
                    ]
                      .filter(Boolean)
                      .map((skill, idx) => (
                        <motion.div
                          className="flex items-center gap-3 text-secondary-content"
                          key={`skill-${idx}`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * idx }}
                        >
                          <i className="fa-solid fa-circle-check my-auto text-primary"></i>{" "}
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            variants={phoneVariants}
          >
            <div className="relative">
              {/* Phone Mockup */}
              <motion.div
                className=" bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-lg rounded-3xl p-3 shadow-2xl border border-primary/20"
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={phoneImg}
                  alt="App Preview"
                  className="h-[400px] md:h-[500px] lg:h-[600px] drop-shadow-2xl rounded-3xl hover:shadow-xl  transition-transform duration-300 z-30 bg-white/10"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>

              {/* Floating Elements Around Phone */}
              <motion.div
                className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              />
            </div>
          </motion.div>
          <motion.div className="space-y-8 order-3">
            {rightServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group"
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Connection Line */}
                <motion.div
                  className="hidden lg:block absolute top-1/2 -left-8 w-16 h-0.5 bg-gradient-to-r from-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />
                <Card variant="gradient">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className={`w-32 h-auto rounded-full overflow-hidden flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={service.image}
                        alt=""
                        className="rounded-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-content">
                        {service.cardTag}
                      </h3>
                      <p className="text-sm">{service.shortText}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      service.firstSkill,
                      service.SecondSkill,
                      service.ThirdSkill,
                    ]
                      .filter(Boolean)
                      .map((skill, idx) => (
                        <motion.div
                          className="flex items-center gap-3 text-secondary-content"
                          key={`skill-${idx}`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * idx }}
                        >
                          <MdCheckCircle className="my-auto text-primary" />
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* Service section end */}

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-lg p-4 md:p-8 bg-cover bg-center bg-no-repeat mt-8"
        style={{ backgroundImage: `url(${serviceBg})` }}
      >
        <div className="relative grid grid-cols lg:grid-cols-3 m-auto shadow-lg rounded-lg p-8 md:p-14 lg:p-24 lg:gap-5 bg-base-200/5 text-primary-content backdrop-blur-xs">
          {/* Corder border top left */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-0 left-0 w-14 h-14 border-t-8 border-l-8 border-primary-content rounded-tl-lg"
          ></motion.span>
          {/* Corder border bottom left */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-0 left-0 w-14 h-14 border-b-8 border-l-8 border-primary-content rounded-bl-lg"
          ></motion.span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="my-auto lg:col-span-2 text-center md:text-left"
          >
<h3 className="sm:text-4xl text-xl lg:text-6xl font-bold">
  Créez votre portefeuille
  <span className="text-secondary"> MANY dès maintenant</span>
</h3>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-5 text-center mx-auto lg:my-auto "
          >
<Button size="lg" variant="accent" icon={FaWallet}>
  Ouvrir un compte
</Button>

          </motion.div>

          {/* Corder border top left */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-0 right-0 w-14 h-14 border-b-8 border-r-8 border-primary-content rounded-br-lg"
          ></motion.span>
          {/* Corder border top left */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute top-0 right-0 w-14 h-14 border-t-8 border-r-8 border-primary-content rounded-tr-lg"
          ></motion.span>
        </div>
      </motion.div>
    </Section>
  );
};

export default Services;
