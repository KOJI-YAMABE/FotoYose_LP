"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
// 画像を使用するため、アイコンのインポートは削除しました

const features = [
  {
    photo: "/images/smart_phone2.jpeg", // 適切な画像パスに変更してください
    title: "スマートフォンから簡単投稿",
    description:
      "QRコードを読み取るだけで、ゲストはすぐにアクセスして写真＆メッセージを投稿できます。",
  },
  {
    photo: "/images/screen.jpeg",
    title: "リアルタイムで大画面に表示",
    description:
      "投稿された写真やメッセージが次々とスクリーンに登場。ゲストが投稿した瞬間に、みんなで一緒に楽しめる演出が可能です。",
  },
  {
    photo: "/images/flexible-settings.jpeg",
    title: "細かな演出設定が可能",
    description:
      "写真・メッセージを新郎側・新婦側ごとに集めて表示したり、アニメーションや表示スピードなど、結婚式の雰囲気に合わせて細かく演出を調整できます。",
  },
  {
    photo: "/images/data-storage.jpeg",
    title: "思い出のデータをきちんと保存",
    description:
      "投稿された写真やテキストはデータベースに保存。式後にも新郎新婦がじっくり見返せるだけでなく、ゲスト同士でも共有できるアルバムとして活用可能です。",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FotoYoseとは</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            「Foto（写真）」と「寄せ書き（Yose）」を組み合わせた言葉で、結婚式という特別な日に、参列者みんなの思い出や祝福の声をひとつの場所に“寄せて”集める。
            <br />
            リアルタイムで作られていくオンラインの“寄せ書きアルバム”です。
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
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <img
                    src={feature.photo}
                    alt={feature.title}
                    className="w-60 h-60 mx-auto mb-4 object-cover"
                  />
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
