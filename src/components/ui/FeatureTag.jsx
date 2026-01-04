import { motion } from 'framer-motion';

export default function FeatureTag({ icon, text }) {
    return (
        <motion.div className="bg-base-content/20 backdrop-blur-sm border border-base-content hover:border-primary-content hover:bg-primary-content/20 rounded-full px-4 py-2 flex items-center space-x-2 "
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
            }}
        >
            <span className="text-lg">{icon}</span>
            <span className="text-secondary-content text-sm font-medium">{text}</span>
        </motion.div>
    );
}