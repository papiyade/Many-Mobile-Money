import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion' 
import phone1 from '../../assets/SPLASH.png'
import phone2 from '../../assets/LOGIN.png'
import phone3 from '../../assets/account_type.png'
import Card from '../ui/Card'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import { stat } from '../../data/data'

const About = () => {
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], [0, -50])

return (
  <Section id="about">
    <div
      id="about"
      className="flex flex-col lg:flex-row justify-center items-center relative lg:px-16 px-4 rounded-2xl overflow-hidden p-4 md:p-8 bg-base-200/50 gap-10"
    >
      {/* Effets de gradient subtils */}
      <div className="absolute inset-0 bg-radial from-primary/20 from-40% to-primary/5 to-60%" />
      <div className="absolute inset-0 bg-radial from-secondary/20 from-40% to-secondary/5 to-60%" />

      {/* Gauche : Images téléphone */}
      <div className="relative flex justify-center items-center lg:items-start lg:justify-start">
        <div className="relative max-w-52 mt-6">
          <motion.img
            src={phone1}
            alt="Application MANY - Portefeuille mobile"
            className="smooth-bounce3 z-10 rounded-2xl shadow-glow"
          />
        </div>
        <div className="relative max-w-52 md:block hidden -ml-10 mt-20">
          <motion.img
            src={phone2}
            alt="Transactions MANY"
            className="smooth-bounce2 z-20 rounded-2xl shadow-glow"
          />
        </div>
        <div className="relative max-w-52 md:block hidden -ml-20 mt-40">
          <motion.img
            src={phone3}
            alt="Historique MANY"
            className="smooth-bounce1 z-30 rounded-2xl shadow-glow"
          />
        </div>
      </div>

      {/* Droite : Texte + Statistiques */}
      <div className="relative p-4 md:p-10 my-auto w-full lg:w-1/2">
        {/* Bordure décorative haut-gauche */}
        <span className="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-primary rounded-tl-lg"></span>

        <SectionTitle
          title="À propos de"
          gradientTitle="MANY"
          titleSize="lg"
          subtitle="Votre portefeuille numérique de confiance"
          paragraph="MANY est une application de mobile money conçue pour simplifier la gestion de votre argent au quotidien. Envoyez, recevez, déposez et retirez vos fonds en toute sécurité. Grâce à une interface moderne et intuitive, MANY vous permet de suivre vos transactions, gérer vos comptes et garder le contrôle total sur votre solde, où que vous soyez."
        />

        {/* Statistiques */}
        <div className="mt-5">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6">
            {stat.map((stat, index) => (
              <Card
                key={index}
                variant="primary"
                className="md:p-6 text-center space-y-2"
                bodyClassName="p-4 md:p-6"
                description={stat.label}
                title={stat.value}
              />
            ))}
          </div>
        </div>

        {/* Bordure décorative bas-droite */}
        <span className="absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 border-primary rounded-br-lg"></span>
      </div>
    </div>
  </Section>
);

}

export default About
