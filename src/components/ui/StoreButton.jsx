
import { motion } from 'framer-motion';
import { MdSmartphone } from 'react-icons/md';

export default function StoreButton({ subtitle, title, icon: Icon = MdSmartphone, iconSize = 'w-6 h-6' }) {

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group cursor-pointer">
        <div className="bg-primary/10 backdrop-blur-md border border-secondary-content/20 rounded-xl p-4 hover:bg-primary/15 transition-all duration-300 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon className={`${iconSize} text-primary-content`} />
          </div>
          <div>
            <p className="text-xs">{subtitle}</p>
            <p className="font-semibold">{title}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}