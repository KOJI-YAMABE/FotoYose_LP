"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Wand2, Image as ImageIcon, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'プロフェッショナルな編集',
    description: '経験豊富な編集者による高品質な仕上がり',
  },
  {
    icon: ImageIcon,
    title: '豊富な編集オプション',
    description: 'カラー調整から高度なレタッチまで幅広く対応',
  },
  {
    icon: Clock,
    title: '迅速な納品',
    description: '最短24時間以内の納品で、急ぎのご要望にも対応',
  },
  {
    icon: Shield,
    title: '安心の品質保証',
    description: '満足いただけない場合は無料で再編集',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FotoYoseの特徴
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            プロフェッショナルな技術と、きめ細やかなサービスで
            あなたの写真を最高の1枚に
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}