import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { FaArrowLeft, FaHammer, FaWrench } from 'react-icons/fa';
import { MdConstruction } from "react-icons/md";
import body_bg from "../assets/body-bg.png"

const UnderMaintenance = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen  z-10 flex items-center justify-center overflow-hidden">
      <img src={body_bg} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
      <div className="text-center p-8 z-10 relative max-w-2xl mx-auto">
        <div className="mb-12">
          <div className="text-primary w-fit mx-auto mb-6">
            <MdConstruction className="text-9xl" />
          </div>
          <p className="text-4xl font-semibold text-secondary-content mb-6">Under Maintenance</p>
          <p className="text-xl text-base-content opacity-70 mb-8">We're currently improving our services. We'll be back soon with a better experience!</p>
        </div>

        <div className="space-y-6">
          <Button variant='primary' onClick={() => navigate('/')} size='lg' className=" w-full" icon={FaArrowLeft} iconClassName='text-primary-content'>Return Home</Button>

          <div className="flex items-center justify-center gap-4">
            <Button variant='outline' size='lg' icon={FaHammer} iconClassName='text-secondary-content'>Check Status</Button>
            <Button variant='outline' size='lg' icon={FaWrench} iconClassName='text-secondary-content'>Contact Support</Button>
          </div>

          <p className="text-sm text-base-content opacity-70 mt-6">
            We appreciate your patience. Please check back later or contact our support team for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance; 
