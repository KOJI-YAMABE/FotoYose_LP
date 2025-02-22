"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
            className="text-4xl font-bold text-white max-w-4xl mb-8"
          >
            「ふたりのもてなし」
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white max-w-4xl mb-8"
          >
            から
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white max-w-4xl mb-4"
          >
            「みんなが創る祝福のカタチ」
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-white mt-2 max-w-2xl"
          >
            リアルタイム型自動スライドショー生成サービス
          </motion.p>

          {/* CTA ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 text-xl font-bold py-8 px-16 rounded-lg" size="lg">
              無料で試してみる
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
