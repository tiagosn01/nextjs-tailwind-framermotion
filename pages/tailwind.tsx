import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
// import { Container } from './styles';

const TailwindPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">

    <motion.img src="/img/tailwind.svg" layoutId="tailwind-logo" initial={{opacity: 0}}  animate={{opacity: 1}} transition={{repeat: Infinity, duration: 2}}/>

    <motion.div
      initial={{opacity: 0, y: -200}}
      animate={{opacity: 2, y: 0}}
      transition={{delay: 0.5, duration: 1}}
      className="mt-24"
    >
      <Link href="/">
        <a className="bg-gray-900 rounded-xl px-6 py-3  text-white">
          Voltar para Home
        </a>
      </Link>
    </motion.div>

    </div>
  );
}

export default TailwindPage;