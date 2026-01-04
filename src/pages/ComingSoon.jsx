import React, { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import body_bg from "../assets/body-bg.png"
const ComingSoon = () => {
    const navigate = useNavigate();
    // Countdown to a future date (adjust this date as needed)
    const targetDate = new Date('2025-10-01T00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add your subscription logic here
        setIsSubscribed(true);
    };

    return (
        <div className="relative min-h-screen  z-10 flex items-center justify-center overflow-hidden">
            <img src={body_bg} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
            <div className="text-center p-8 z-10 relative max-w-2xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-8xl font-bold text-primary mb-6">Coming Soon</h1>
                    <p className="text-4xl font-semibold text-secondary-content mb-6">New Features Launching Soon</p>
                    <p className="text-xl text-base-content opacity-70 mb-8">We're working hard to bring you amazing new features. Stay tuned!</p>
                </div>

                <div className="space-y-6">
                    <div className="bg-base-100 p-8 rounded-2xl shadow-lg">
                        <div className="grid grid-cols-4 gap-4 text-center">
                            <div>
                                <h2 className="text-4xl font-bold text-primary">{timeLeft.days}</h2>
                                <p className="text-sm text-base-content">Days</p>
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-primary">{timeLeft.hours}</h2>
                                <p className="text-sm text-base-content">Hours</p>
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-primary">{timeLeft.minutes}</h2>
                                <p className="text-sm text-base-content">Minutes</p>
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-primary">{timeLeft.seconds}</h2>
                                <p className="text-sm text-base-content">Seconds</p>
                            </div>
                        </div>
                    </div>

                    {!isSubscribed ? (
                        <form onSubmit={handleSubscribe} className="space-y-4">
                            <div className="relative">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="input input-bordered w-full pr-12" />
                                <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/50" />
                            </div>
                            <Button type="submit" variant='primary' className="w-full">Notify Me When It's Ready</Button>
                        </form>
                    ) : (
                        <div className="text-success">
                            <h3 className="text-lg font-semibold mb-2">Thank you for subscribing!</h3>
                            <p className="text-sm">We'll notify you when we launch.</p>
                        </div>
                    )}

                    <div className="flex items-center justify-center gap-4">
                        <Button onClick={() => navigate('/')} variant='outline' size='lg' icon={FaArrowLeft} iconClassName='text-secondary-content'>Go Back</Button>
                    </div>

                    <p className="text-sm text-base-content opacity-70 mt-6">Get ready for an amazing experience. We can't wait to show you what we've been working on!</p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
