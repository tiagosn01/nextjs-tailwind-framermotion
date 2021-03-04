import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
// import { Container } from './styles';

const NextPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">

    <motion.img 
      src="/img/framermotion.svg" 
      layoutId="framermotion-logo" 
      initial={{opacity: 0, x: 350}}
      animate={{opacity: 1, x: 0 }}
      transition={{ duration: 2}}
      />

    <motion.div
      initial={{opacity: 0, x: -350}}
      animate={{opacity: 2, rotate: [0, 360], x: 0 }}
      transition={{delay: 0.5, duration: 2}}
      className="mt-24"
    >
      <Link href="/">
        <a className="bg-gray-900 rounded-xl px-6 py-3 text-white">
          Voltar para Home
        </a>
      </Link>
    </motion.div>

    </div>
  );
}

export default NextPage;