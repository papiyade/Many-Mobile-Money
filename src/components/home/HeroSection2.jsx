import React from 'react'
import { motion } from 'motion/react'
import phone1 from '../../assets/phone-1.png'
import phone2 from '../../assets/phone-2.png'
import phone3 from '../../assets/phone-3.png'
import GradientText from '../ui/GradientText'
import hero_bg from "../../assets/hero-bg_01.png"
import Button from '../ui/Button'
import { FaArrowRight } from 'react-icons/fa'
const HeroSection2 = () => {
    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, 0, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    return (
        <div className='px-5 overflow-hidden  container mx-auto' id='home'>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='pt-36 pb-24 overflow-hidden'>
                <div className="rounded-xl shadow-xl relative  overflow-hidden bg-base-100/50 border border-base-200" >
                    <div className="absolute inset-0 bg-radial from-primary/10 from-40% to-primary/10 to-60%" />
                    <div className="absolute inset-0 bg-radial from-secondary/10 from-40% to-secondary/10 to-60%" />
                    <img src={hero_bg} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
                    <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-8 p-4">
                        <div className="m-7 order-2 lg:order-1" >
                            <div>
                                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className='text-5xl font-semibold lg:text-5xl text-neutral'>Your Bull Trade with <GradientText title="Byte X" /> App</motion.h1>
                                <motion.p className="text-lg text-neutral my-5 " initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                                    Trade smarter with{' '}
                                    <GradientText title="Byte X" />
                                    {' '}- the ultimate trading companion. Get real-time market insights, secure transactions, and powerful analytics at your fingertips. Join thousands of traders who have transformed their trading journey with our intuitive app.
                                </motion.p>
                            </div>
                            <div className="space-y-6">
                                <div className="text-base-content">
                                    <p>Experience the future of trading with Byte X - your ultimate trading companion.</p>
                                    <ul className="list-disc list-inside mt-4">
                                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Manage user accounts</li>
                                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Approve/reject KYC</li>
                                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> View app statistics</li>
                                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Monitor trades and usage</li>
                                    </ul>
                                </div>
                                <Button className='w-fit' variant='primary' size='lg' icon={FaArrowRight} iconClassName='text-primary-content'>Download Now</Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-3  gap-4 xl:gap-6 order-1 lg:order-2">
                            <motion.div variants={floatingVariants} animate="animate" className="relative ">
                                <img src={phone3} alt="App screenshot" className="" />
                            </motion.div>
                            <motion.div initial={{ y: 50, scale: 0.9 }} animate={{ y: 0, scale: 1 }} transition={{ delay: 0.7, type: "spring", stiffness: 100 }} className="relative z-10" >
                                <img src={phone2} alt="App screenshot" className="" />
                            </motion.div>
                            <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: '2s' }} className="relative">
                                <img src={phone1} alt="App screenshot" className="" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroSection2
