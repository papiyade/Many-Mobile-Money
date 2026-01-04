import bgVideo from '../../assets/hero_video.mp4'
import { motion } from 'motion/react'
import Button from '../ui/Button'
import { FaArrowRight, FaChartLine, FaClock } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'
import { FaShield } from 'react-icons/fa6'

const HeroSection3 = () => {
    return (
        <>
            <section className='relative py-28 container mx-auto overflow-hidden' id='home'>
                <div className='relative z-10'>
                    <div className='py-5 '>
                        <div className='md:px-20 px-4 text-center'>
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className='text-5xl font-semibold lg:text-6xl text-neutral bg-clip-text bg-gradient-to-r from-primary to-secondary-content'>Discover the Future of Trading</motion.h1>
                            <motion.p className="text-lg text-neutral my-5 max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                                Trade smarter with{' '}
                                <span className='text-primary font-semibold'>Byte X</span>
                                {' '}- the ultimate trading companion. Get real-time market insights, secure transactions, and powerful analytics at your fingertips. Join thousands of traders who have transformed their trading journey with our intuitive app.
                            </motion.p>
                            <Button size='xl' variant='primary' icon={FaArrowRight} iconClassName='text-primary-content' className='w-fit mx-auto'>Start Trading Now</Button>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 mt-16 justify-center items-center px-5 md:px-10'>
                            {/* Left Content */}
                            <div className='relative bg-base-200/50 backdrop-blur-xl lg:ml-34 lg:-mr-34 md:ml-10 md:-mr-28 z-10 rounded-2xl p-8 lg:p-12 shadow-lg  order-2 md:order-1'>
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className='space-y-6 '>
                                    <h2 className='text-3xl font-bold text-primary'>Trading Solutions</h2>
                                    <p className='text-lg '>Transform your trading experience with our advanced platform designed for modern traders.</p>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <motion.div className='bg-base-100/50 rounded-xl p-6 flex items-center  gap-4 hover-card' whileHover={{ scale: 1.05 }}>
                                            <FaShield className='w-8 h-8 text-primary' />
                                            <div>
                                                <h3 className='font-semibold text-secondary-content'>Secure Trading</h3>
                                                <p className='text-sm text-neutral'>Bank-level security for your assets</p>
                                            </div>
                                        </motion.div>

                                        <motion.div className='bg-base-100/50 rounded-xl p-6 flex items-center gap-4 hover-card' whileHover={{ scale: 1.05 }}>
                                            <FaChartLine className='w-8 h-8 text-primary' />
                                            <div>
                                                <h3 className='font-semibold text-secondary-content'>Real-time Insights</h3>
                                                <p className='text-sm text-neutral'>Instant market data access</p>
                                            </div>
                                        </motion.div>

                                        <motion.div className='bg-base-100/50 rounded-xl p-6 flex items-center gap-4 hover-card' whileHover={{ scale: 1.05 }}>
                                            <FaClock className='w-8 h-8 text-primary' />
                                            <div>
                                                <h3 className='font-semibold text-secondary-content'>24/7 Trading</h3>
                                                <p className='text-sm text-neutral'>Trade anytime, anywhere</p>
                                            </div>
                                        </motion.div>

                                        <motion.div className='bg-base-100/50 rounded-xl p-6 flex items-center gap-4 hover-card' whileHover={{ scale: 1.05 }}>
                                            <FiStar className='w-8 h-8 text-primary' />
                                            <div>
                                                <h3 className='font-semibold text-secondary-content'>AI-Powered</h3>
                                                <p className='text-sm text-neutral'>Smart trading recommendations</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Video Content */}
                                <video src={bgVideo} className='w-full h-auto align-middle  object-cover overflow-hidden rounded-2xl order-1 md:order-2 ' autoPlay loop muted playsInline />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection3