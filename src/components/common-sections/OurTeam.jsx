import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Section from '../ui/Section';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";
import { members } from '../../data/data';

const OurTeam = () => {
  return (
    <Section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase mb-4">Meet the Team</p>
          <h2 className="text-2xl md:text-5xl font-bold text-primary">Byte<span className="text-accent">×</span>Contributors</h2>
        </div>
        <Swiper className="mySwiper"
          modules={[EffectCoverflow, Autoplay]}
          spaceBetween={60}
          slidesPerView={1}
          slidesPerGroup={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 60,
            }
          }}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index} className='py-4'>
              <div className="bg-base-100/10 backdrop-blur-xl rounded-xl p-6  hover:shadow-lg transition-all duration-300 border border-primary/20">
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-primary to-secondary shadow-xl">
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-sm font-medium">{member.role}</p>
                  <p className="text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-3">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 text-xs rounded-full bg-accent/10 text-secondary-content font-medium border border-accent/20">{skill}</span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3 pt-2">
                    {member.social.email && (
                      <Link to={`mailto:${member.social.email}`} className="w-8 h-8 rounded-full bg-base-100 flex items-center justify-center hover:bg-primary/60 hover:text-primary-content transition-colors duration-300 border border-base-200/20">
                        <FiMail className="w-4 h-4" />
                      </Link>
                    )}
                    {member.social.github && (
                      <Link to={`https://github.com/${member.social.github}`} target="_blank" className="w-8 h-8 rounded-full bg-base-100 flex items-center justify-center hover:bg-primary/60 hover:text-primary-content transition-colors duration-300 border border-base-200/20" rel="noopener noreferrer">
                        <FaGithub className="w-4 h-4" />
                      </Link>
                    )}
                    {member.social.linkedin && (
                      <Link to={`https://linkedin.com/in/${member.social.linkedin}`} target="_blank" className="w-8 h-8 rounded-full bg-base-100 flex items-center justify-center hover:bg-primary/60 hover:text-primary-content transition-colors duration-300 border border-base-200/20" rel="noopener noreferrer">
                        <FaLinkedin className="w-4 h-4" />
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link to={`https://twitter.com/${member.social.twitter}`} target="_blank" className="w-8 h-8 rounded-full bg-base-100 flex items-center justify-center hover:bg-primary/60 hover:text-primary-content transition-colors duration-300 border border-base-200/20" rel="noopener noreferrer">
                        <FaXTwitter className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "6+", label: "Team Members" },
            { number: "150+", label: "Projects Completed" },
            { number: "24/7", label: "Support Available" },
            { number: "99%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div className="group hover:scale-105 transition-all duration-300" key={index}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-base-content/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default OurTeam