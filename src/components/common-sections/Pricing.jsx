import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { FaArrowRight, FaCheck, FaStar, FaUser } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import { plans } from '../../data/data';

function Pricing() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [billingTypes, setBillingTypes] = useState(
    plans.map(() => 'Monthly')
  );

  const handleBillingChange = (index, type) => {
    const updated = [...billingTypes];
    updated[index] = type;
    setBillingTypes(updated);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (

    <Section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='relative px-4 md:px-8 xl:px-0' id='pricing'>
      {/* Service section */}
      {[...Array(20)].map((_, i) => (
        <motion.div className="absolute w-2 h-2 bg-primary/20 rounded-full" key={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      <SectionTitle position="center" title="Choose Your" badge="Subscription Plans" gradientTitle="Perfect Plan" paragraph="Unlock the full potential of your trading journey with our premium plans" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {plans.map((plan, index) => (
          <Card className="flex flex-col h-full md:p-6 relative shadow-lg border border-primary/10" key={plan.id}
            variant={plan.recommended ? 'gradient' : 'glass'}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 -right-4 z-20">
                <div className="bg-gradient-to-r from-primary to-secondary text-primary-content px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                  <FaStar className="w-4 h-4 inline mr-1" /> Most Popular
                </div>
              </div>
            )}
            <div className="flex flex-col gap-6 flex-1">
              {/* Plan Header */}
              <div className="flex items-center gap-4 mb-2">
                <Button className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md" variant="gradient" size="lg">
                  <plan.icon className="w-8 h-8 text-primary-content" />
                </Button>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-content mb-1">{plan.title}</h3>
                  <p className="text-sm text-base-content/70">{plan.subtitle}</p>
                </div>
              </div>
              {/* Billing Toggle */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-base-content/60 font-semibold">Billing Cycle</p>
                <div className="flex gap-2">
                  {['Monthly', 'Yearly'].map((type) => (
                    <Button className="flex-1 rounded-xl cursor-pointer font-semibold transition-all duration-300" key={type} size="lg"
                      onClick={() => handleBillingChange(index, type)}
                      variant={billingTypes[index] === type ? 'gradient' : 'ghost'}
                    >
                      {type}
                      {type === 'Yearly' && (
                        <span className="block text-xs opacity-80">Save 17%</span>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
              {/* User Stats */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-base-content flex items-center gap-2 text-xs">
                    <FaUser className="w-4 h-4" /> Active Users: {plan.activeUsers}
                  </span>
                  <span className="text-accent font-semibold text-xs">{plan.userPercentage}%</span>
                </div>
                <div className="w-full bg-primary/10 rounded-full h-2 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full`} style={{ width: `${plan.userPercentage}%`, transition: 'width 1.5s' }} />
                </div>
              </div>
              {/* Features */}
              <div className="flex flex-col gap-4 border-y border-primary/10 py-4 my-2">
                <h4 className="text-lg font-semibold text-secondary-content flex items-center gap-2 mb-2">
                  <MdCheckCircle className="w-5 h-5 text-green-400" /> What's Included
                </h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-base-content">
                      <FaCheck className="w-5 h-5 text-green-400" />
                      <span className="transition-colors duration-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Pricing & CTA */}
              <div className="flex flex-col justify-center text-center lg:text-right gap-4 ">
                <div>
                  <div className="flex items-baseline justify-center lg:justify-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-secondary-content">
                      ${billingTypes[index] === 'Monthly' ? plan.monthPrice : plan.yearPrice}
                    </span>
                    <span className="text-base-content text-sm">
                      / {billingTypes[index].toLowerCase()}
                    </span>
                  </div>
                  {billingTypes[index] === 'Yearly' && (
                    <div className="flex items-center justify-center lg:justify-end gap-2 mt-2">
                      <span className="text-base-content line-through text-sm">
                        ${plan.originalYearPrice}
                      </span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                        Save ${plan.originalYearPrice - plan.yearPrice}
                      </span>
                    </div>
                  )}
                </div>
                <Button variant="gradient" size="lg" className='w-full' icon={FaArrowRight}>Get Started</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Pricing
