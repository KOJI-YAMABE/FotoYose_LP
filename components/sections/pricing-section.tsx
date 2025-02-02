"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle } from 'lucide-react';

export function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    "全機能が利用可能",
    "利用制限なし",
    "24時間サポート対応",
    "最短24時間での納品",
    "修正回数無制限",
    "データ形式の指定可能"
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
            <Sparkles className="h-5 w-5" />
            <span>期間限定ベータ版</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            料金プラン
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ベータ版期間中は全機能を無料でご利用いただけます
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <Card className="relative overflow-hidden border-2 border-primary">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg text-sm font-medium">
              ベータ版限定
            </div>
            
            <CardHeader className="text-center pt-12 pb-8">
              <h3 className="text-2xl font-bold mb-2">無料プラン</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold">¥0</span>
                <span className="text-gray-600">/枚</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </CardContent>
            
            <CardFooter className="flex flex-col gap-4 pb-8">
              <Button className="w-full" size="lg">
                無料で始める
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p className="mt-2">ベータ版期間中のご利用・フィードバックを心よりお待ちしております。</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}