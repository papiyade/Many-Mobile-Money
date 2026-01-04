import { useState } from 'react';
import authentication from '../assets/authentication.jpg';
import Card from '../components/ui/Card';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import body_bg from "../assets/body-bg.png"
const Authentication = () => {
  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('123456');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const [authComponent, setAuthComponent] = useState(true);
  const showComponent = () => {
    if (authComponent == true) {
      setAuthComponent(false);
    } else {
      setAuthComponent(true);
    }
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='relative min-h-screen  flex items-center justify-center overflow-hidden'>
      <img src={body_bg} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
      <Card className='w-full max-w-screen-2xl mx-4' variant='glass' bodyClassName='p-0'>
        <div className='grid grid-cols-1  lg:grid-cols-12 gap-4'>
          {/* Login components */}
          <div className={`relative overflow-hidden ${authComponent ? "lg:col-span-5 xl:col-span-4" : "lg:col-span-7 xl:col-span-8"}`}>
            <div className={`absolute inset-0 transition-all lg:block hidden overflow-hidden duration-1000 ease-in-out ${authComponent ? "translate-x-full" : "translate-x-0"}`}>
              <img src={authentication} alt="Authentication" className='w-full h-full object-cover rounded-lg' />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={`p-8 md:p-12 h-full rounded-lg ${authComponent ? "" : "hidden"}`}>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-8 text-secondary-content text-center">Welcome Back!</motion.h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor='loginEmail' className="block mb-2 text-sm font-medium">Email address</label>
                  <input id='loginEmail' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg input input-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="name@company.com" />
                </div>
                <div>
                  <label htmlFor='loginPassword' className="block mb-2 text-sm font-medium">Password</label>
                  <input id='loginPassword' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-lg input input-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="••••••••" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm ">
                    <input id='rememberMe' name='rememberMe' type="checkbox" className="mr-2 accent-primary" />
                    <span>Remember me</span>
                  </label>
                </div>
                <Button type="submit" className="w-full hover:text-secondary-content hover:border-secondary-content hover:bg-secondary/90 hover:shadow-secondary">Sign In</Button>
              </form>

              <div className="flex items-center justify-center gap-4 my-6">
                <hr className="w-full border border-secondary-content/20" />
                <p className="">or</p>
                <hr className="w-full border border-secondary-content/20" />
              </div>

              <div className="mt-6">
                <div className="grid grid-cols-1 gap-4 mt-4">
                  <button className="flex items-center  cursor-pointer justify-center w-full p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors">
                    <FaGoogle className="mr-2" /> Continue with Google
                  </button>
                  <button className="flex items-center cursor-pointer justify-center w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                    <FaFacebook className="mr-2" /> Continue with Facebook
                  </button>
                </div>
              </div>

              <p className="mt-6 text-center text-sm ">
                Don’t have an account?
                <button className="ml-1 cursor-pointer text-secondary-content underline" onClick={showComponent}>Sign up</button>
              </p>
            </motion.div>
          </div>

          {/* Registration components */}
          <div className={` relative overflow-hidden ${authComponent ? "lg:col-span-7 xl:col-span-8" : "lg:col-span-5 xl:col-span-4"}`}>
            <div className={`absolute hidden lg:flex lg:item-center h-full w-full transition-all duration-1000 ease-in-out ${authComponent ? "" : " hidden -translate-x-full"}`}>
              <motion.img initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={authentication} alt="" className='md:rounded-r-lg object-cover' />
            </div>

            <div className={`p-8 md:p-12 h-full rounded-lg ${authComponent ? "hidden" : ""}`}>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-8 text-secondary-content text-center">Get Started</motion.h2>

              <div className="mt-6">
                <div className="flex items-center justify-center gap-4">
                  <hr className="w-full border border-secondary-content/20" />
                  <span className="">or</span>
                  <hr className="w-full border border-secondary-content/20" />
                </div>

                <div className="grid grid-cols-1 gap-4 mt-4">
                  <button className="flex items-center cursor-pointer text-primary-content justify-center w-full p-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors">
                    <FaGoogle className="mr-2" /> <span className="">Continue with Google</span>
                  </button>
                  <button className="flex items-center cursor-pointer text-primary-content justify-center w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
                    <FaFacebook className="mr-2" /> <span className="">Continue with Facebook</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 my-6">
                <hr className="w-full border border-secondary-content/20" />
                <p className="">or</p>
                <hr className="w-full border border-secondary-content/20" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor='email' className="block mb-2 text-sm font-medium">Email address</label>
                  <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg input input-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="name@company.com" />
                </div>
                <div>
                  <label htmlFor='password' className="block mb-2 text-sm font-medium">Password</label>
                  <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-lg input input-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="••••••••" />
                </div>
                <Button type="submit" variant="primary" className="w-full hover:text-secondary-content hover:border-secondary-content hover:bg-secondary/90 hover:shadow-secondary">Create Account</Button>
              </form>

              <p className="mt-6 text-sm">Start your 30 days trial with AppLiyo</p>

              <p className="mt-6 text-center text-sm">
                Already have an account?
                <button className="ml-1 text-secondary-content underline cursor-pointer" onClick={showComponent}>Sign in</button>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default Authentication