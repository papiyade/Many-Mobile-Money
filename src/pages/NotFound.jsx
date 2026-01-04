import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import body_bg from "../assets/body-bg.png"
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen  z-10 flex items-center justify-center overflow-hidden">
            <img src={body_bg} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
            <div className="text-center p-8 z-10 relative max-w-2xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-9xl font-bold text-primary mb-6">404</h1>
                    <p className="text-4xl font-semibold text-secondary-content mb-6">Oops! Page non trouvée</p>
                    <p className="text-xl text-base-content opacity-70 mb-8">                La page demandée n'existe pas ou a été déplacée. Pas de panique, nous sommes là pour vous aider!</p>
                </div>

                <div className="space-y-6">
                    <Button variant='primary' onClick={() => navigate('/')} size='lg' className=" w-full" icon={FaArrowLeft} iconClassName='text-primary-content'>Retour à l'accueil</Button>

                    <div className="flex items-center justify-center gap-4">
                        <Button variant='outline' size='lg' icon={FaSearch} iconClassName='text-secondary-content'>Contacter le support</Button>
                        <Button variant='outline' size='lg' icon={FaSearch} iconClassName='text-secondary-content'>
                            Rechercher sur le site
                        </Button>
                    </div>
                    <p className="text-sm text-base-content opacity-70">Si vous pensez que vous avez atteint cette page par erreur, veuillez contacter notre équipe d'assistance.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
