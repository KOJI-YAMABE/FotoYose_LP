"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "名前は2文字以上で入力してください" }),
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください" }),
  phone: z
    .string()
    .regex(/^[0-9-]{10,}$/, { message: "有効な電話番号を入力してください" }),
  message: z
    .string()
    .min(10, { message: "メッセージは10文字以上で入力してください" }),
});

function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!executeRecaptcha) {
      console.error("reCAPTCHA not initialized");
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");

      // Here you would typically send the form data and reCAPTCHA token to your server
      console.log("Form data:", data);
      console.log("reCAPTCHA token:", token);

      toast({
        title: "送信完了",
        description:
          "お問い合わせありがとうございます。担当者より順次ご連絡させていただきます。",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "エラー",
        description: "送信に失敗しました。時間をおいて再度お試しください。",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お名前</FormLabel>
              <FormControl>
                <Input placeholder="山田 太郎" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@fotoyose.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>電話番号</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="03-1234-5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お問い合わせ内容</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="ご質問・ご要望をご記入ください"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" size="lg">
          送信する
        </Button>
      </form>
    </Form>
  );
}

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "メール",
      content: "fotoyose@gmail.com",
    },
  ];

  return (
    <GoogleReCaptchaProvider reCaptchaKey="YOUR_RECAPTCHA_SITE_KEY">
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              お問い合わせ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              サービスに関するご質問・ご相談は、お気軽にお問い合わせください
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          >
            <div className="space-y-8">
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">営業時間</h3>
                {/* <p className="text-gray-600">
                  平日: 9:00 - 18:00
                  <br />
                  土日祝: 休業
                </p> */}
                <p className="text-sm text-gray-500 mt-2">
                  ※お問い合わせフォームは24時間受付しております
                </p>
              </div>
            </div>

            <Card className="p-6">
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </section>
    </GoogleReCaptchaProvider>
  );
}
