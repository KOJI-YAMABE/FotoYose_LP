"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* 背景：動画＋黒オーバーレイ */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter blur-sm"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-20 pt-40">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            未来を変えるサービス
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-white mt-4 max-w-2xl"
          >
            あなたのビジネスに革新をもたらす最先端のテクノロジーを体験してください。
          </motion.p>
          
          {/* 特徴リスト：よりデザイン性のあるカード風レイアウト */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4 shadow-lg">
                <Check className="h-8 w-8 text-white" />
              </div>
              <span className="text-white text-lg font-semibold">高品質な映像体験</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4 shadow-lg">
                <Check className="h-8 w-8 text-white" />
              </div>
              <span className="text-white text-lg font-semibold">革新的なデザイン</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4 shadow-lg">
                <Check className="h-8 w-8 text-white" />
              </div>
              <span className="text-white text-lg font-semibold">直感的な操作性</span>
            </div>
          </motion.div>

          {/* CTA ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 text-xl font-bold py-8 rounded-lg" size="lg">
              無料で始める
            </Button>
            <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xl font-bold py-8 rounded-lg" size="lg">
              詳しく見る
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
