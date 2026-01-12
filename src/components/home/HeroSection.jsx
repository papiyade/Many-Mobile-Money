import React from 'react'
import { motion } from 'framer-motion'
import bg from '../../assets/background.png'
import StoreButton from '../ui/StoreButton'
import Phone3D from '../ui/Phone3D'
import GradientText from '../ui/GradientText'
import { FaApple } from 'react-icons/fa'
import { MdSmartphone } from 'react-icons/md'


const HeroSection = () => {
    return (
        <>
<div
  className="sm:px-5 px-2 overflow-hidden container mx-auto"
  id="home"
>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="lg:pt-36 pt-24 pb-24 overflow-hidden"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden z-20 grid grid-cols xl:grid-cols-2 gap-5 p-5 xl:p-12 justify-center items-center rounded-2xl card bg-base-200 backdrop-blur-md border border-white/5"
    >
      {/* Effets lumineux subtils */}
      <div className="absolute inset-0 bg-radial from-primary/15 from-40% to-primary/5 to-60%" />
      <div className="absolute inset-0 bg-radial from-secondary/10 from-40% to-secondary/5 to-60%" />

      {/* Image de fond */}
      <div
        className="rounded-lg p-5 z-0 absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Contenu texte */}
      <div className="py-5 z-20 relative space-y-6 lg:order-1 order-2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl font-semibold lg:text-5xl xl:text-7xl text-base-content"
        >
          Votre argent,
          <br />
          <GradientText title="simple et sécurisé" />
        </motion.h1>

        <motion.p
          className="lg:text-lg text-sm text-base-content/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GradientText title="Many" /> est un portefeuille numérique qui vous
          permet d’envoyer, de recevoir et de gérer votre argent en toute
          sécurité. Transferts instantanés, paiements de services, suivi du
          solde — tout dans une seule application.
        </motion.p>

        {/* Mise en avant solde */}
        <div className="flex gap-8 mt-6">
          <div>
            <p className="text-sm text-base-content/60">
              Solde disponible
            </p>
            <p className="text-3xl font-bold text-base-content">
              125 400 FCFA
            </p>
          </div>
          <div>
            <p className="text-sm text-base-content/60">
              Portefeuille
            </p>
            <p className="text-sm text-base-content">
              MANY
            </p>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 space-y-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl font-semibold text-base-content"
          >
            Commencez en quelques secondes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col items-center w-full sm:flex-row gap-4"
          >
            <StoreButton
              subtitle="App Store"
              title="Disponible sur"
              icon={FaApple}
            />
            <StoreButton
              subtitle="Play Store"
              title="Disponible sur"
              icon={MdSmartphone}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Téléphone */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-center items-center md:order-2 order-1"
      >
        <Phone3D />
      </motion.div>
    </motion.div>
  </motion.div>
</div>

        </>
    )
}

export default HeroSection
