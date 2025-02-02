"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 transition-colors duration-300 bg-white backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Camera className="h-6 w-6" />
          <span className="font-bold text-xl">FotoYose</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm hover:text-primary transition-colors">特徴</a>
          <a href="#services" className="text-sm hover:text-primary transition-colors">サービス</a>
          <a href="#pricing" className="text-sm hover:text-primary transition-colors">料金</a>
          <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
          <div className="space-x-4">
          <Button className='bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-500 rounded-full' variant="default" size="sm">
            ログイン
          </Button>
          <Button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
            無料登録
          </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}