"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ImageDown, Paintbrush, ShipWheelIcon as ColorWheelIcon, Eraser, Clock, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: "photo-editing",
    title: "写真編集",
    icon: ImageDown,
    description: "プロフェッショナルな写真編集サービス",
    features: [
      "明るさ・コントラストの最適化",
      "色調補正とカラーグレーディング",
      "不要な要素の除去",
      "構図の改善とトリミング",
      "画質の向上とノイズ除去"
    ],
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb",
    price: "¥3,000〜"
  },
  {
    id: "retouching",
    title: "レタッチ",
    icon: Paintbrush,
    description: "人物写真を美しく仕上げるレタッチサービス",
    features: [
      "肌の質感改善",
      "しわやシミの除去",
      "顔の輪郭補正",
      "髪の毛の補正",
      "目元・口元の強調"
    ],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    price: "¥5,000〜"
  },
  {
    id: "color-correction",
    title: "色調補正",
    icon: ColorWheelIcon,
    description: "色彩の専門家による高度な色調補正",
    features: [
      "カラーバランスの最適化",
      "色温度の調整",
      "彩度・明度の調整",
      "トーンカーブの調整",
      "カラーグレーディング"
    ],
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81",
    price: "¥4,000〜"
  },
  {
    id: "background-removal",
    title: "背景除去",
    icon: Eraser,
    description: "商品写真に最適な背景除去サービス",
    features: [
      "高精度な背景除去",
      "自然な輪郭処理",
      "影の調整",
      "新規背景の合成",
      "複数アイテムの統一感"
    ],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: "¥2,000〜"
  }
];

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            サービス内容
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            お客様のニーズに合わせた最適な編集サービスをご提供します
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue={services[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex items-center gap-2"
                >
                  <service.icon className="h-4 w-4" />
                  <span>{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>最短24時間でお届け</span>
                      </div>
                      <p className="text-xl font-bold">
                        料金: {service.price}
                      </p>
                      <Button size="lg">
                        無料相談を予約する
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}