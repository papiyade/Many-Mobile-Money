import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Map from "../../assets/map.png"
import { FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { contacts } from '../../data/data';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
    };

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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };
    return (
        <Section container={false} padding={false} id='contact' className='relative overflow-hidden'>
            <div className='absolute inset-0' >
                <div className='absolute inset-0  backdrop-blur-3xl bg-base-100/50'></div>
                <div className='absolute inset-0 bg-base-100/50'></div>
                <img src={Map} alt="" className='absolute inset-0 w-full h-full object-cover' />
            </div>

            <div className='mx-auto container'>
                <div className='relative p-2 md:p-10'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center mb-16'>
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className='inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/30'>
                            <i className="fa-solid fa-envelope" /> <span className='text-secondary-content'>Contactez nous</span>
                        </motion.div>

                        <h2 className='text-4xl text-secondary-content font-bold mb-4'>Contact</h2>
                        <p className='text-lg max-w-2xl mx-auto text-secondary-content/80'>Nous sommes là pour vous aider! Que vous ayez des questions, souhaitiez collaborer ou simplement dire bonjour, notre équipe est prête à vous assister.</p>
                    </motion.div>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Cards */}
                        <motion.div className="lg:col-span-2"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                {contacts.map((contact, index) => {
                                    const IconComponent = contact.icon;
                                    return (
                                        <Card className="group overflow-hidden relative border border-primary/10"
                                            key={index} variant="glass" whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`w-14 h-14 rounded-xl bg-${contact.color} ${contact.hoverColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                                    <IconComponent className="w-7 h-7 text-primary-content" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-secondary-content mb-2 group-hover:text-primary transition-colors">{contact.tag}</h3>
                                                    <p className="text-sm mb-3 transition-colors">{contact.info}</p>
                                                    <p className="font-medium transition-colors">{contact.value}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="lg:col-span-1">
                            <Card variant="glass" className="relative border border-primary/10">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-secondary-content mb-2">Envoyez-nous un Message</h3>
                                    <p className="">Nous vous répondrons dans les 24 heures</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="relative">
                                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-content" />
                                        <input type="text" placeholder="Votre Nom" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-primary/10 border border-primary/20 rounded-xl text-secondary-content placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" required />
                                    </div>

                                    <div className="relative">
                                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-content" />
                                        <input type="email" placeholder="Votre Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-primary/10 border border-primary/20 rounded-xl text-secondary-content placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" required />
                                    </div>

                                    <div className="relative">
                                        <FiMessageSquare className="absolute left-4 top-4 w-5 h-5 text-secondary-content" />
                                        <textarea placeholder="Votre Message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-primary/10 border border-primary/20 rounded-xl text-secondary-content placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none" required />
                                    </div>

                                    <Button variant='primary' className='w-full' onClick={handleSubmit} icon={FiSend} iconClassName='w-5 h-5 text-primary-content'>Envoyer Message</Button>
                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ContactUs