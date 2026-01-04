import phone from '../../assets/phone-1.png'
import GradientText from '../ui/GradientText'
import Button from '../ui/Button'
import { motion } from 'framer-motion'

const HeroSection4 = () => {
    return (
        <motion.section initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="py-28 container px-10 mx-auto" id='home'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="card relative rounded-2xl overflow-hidden min-h-[500px] xl:max-h-[700px] bg-base-200/50">
                <div className="absolute inset-0 bg-radial from-primary/20 from-40% to-primary/10 to-60%" />
                <div className="absolute inset-0 bg-radial from-secondary/20 from-40% to-secondary/10 to-60%" />

                <div className="relative flex items-center justify-center flex-col gap-10 z-20 h-full">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='py-3 flex justify-center'>
                        <span className='px-5 py-2 rounded-full border border-primary/20 bg-base-100/50 backdrop-blur-md'>
                            <i className="fa-solid fa-square-poll-vertical text-primary my-auto"></i> Get Your Trade
                        </span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center px-20">
                        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold text-neutral bg-clip-text bg-gradient-to-r from-primary to-secondary-content">
                            Your Bull Trade with <GradientText title="Byte X" /> App
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-xl mt-5">
                            Experience the future of trading with Byte X - the ultimate trading companion that transforms your trading journey with real-time insights, secure transactions, and powerful analytics.
                        </motion.p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='flex justify-center gap-4 mt-8'>
                            <Button variant='primary' size='lg' className='hover:text-primary-content hover:border-primary-content hover:bg-primary/90 hover:shadow-primary'>Download App</Button>
                            <Button variant='outline' size='lg'>Start Trading</Button>
                        </motion.div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='flex justify-center  relative group'>
                        <img src={phone} alt="Trading App" className='cursor-pointer rotate-45 hover:scale-105 transition duration-300 ease-in-out relative z-10' />
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default HeroSection4
