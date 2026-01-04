import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiRefreshCcw, FiServer } from 'react-icons/fi';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import body_bg from "../assets/body-bg.png"
const ServerError = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen  z-10 flex items-center justify-center overflow-hidden">
      <img src={body_bg} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
      <div className="text-center p-8 z-10 relative max-w-2xl mx-auto">
        <div className="mb-12">
          <div className="text-primary w-fit mx-auto mb-6">
            <FiServer className="text-9xl" />
          </div>
          <p className="text-4xl font-semibold text-secondary-content mb-6">Server Error</p>
          <p className="text-xl text-base-content opacity-70 mb-8">We're experiencing technical difficulties. Our team is working to fix this issue.</p>
        </div>

        <div className="space-y-6">
          <Button variant='primary' onClick={() => navigate('/')} size='lg' className=" w-full" icon={FiArrowLeft} iconClassName='text-primary-content'>Return Home</Button>

          <div className="flex items-center justify-center gap-4">
            <Button variant='outline' size='lg' icon={FiRefreshCcw} iconClassName='text-secondary-content'>Refresh Page</Button>
            <Button variant='outline' size='lg' icon={FiMail} iconClassName='text-secondary-content'>Contact Support</Button>
          </div>

          <p className="text-sm text-base-content opacity-70 mt-6">We apologize for the inconvenience. Please try again later or contact our support team.</p>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
