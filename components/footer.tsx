import { Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-6 w-6" />
              <span className="font-bold text-xl text-white">FotoYose</span>
            </div>
            <p className="text-sm">
              ～リアルタイムで作る“寄せ書きアルバム”～
              <br />
              みんなの祝福をひとつに。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">サービス</h3>
            <ul className="space-y-2">
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  写真編集
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  レタッチ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  色調補正
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  背景除去
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FotoYoseとは
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">会社情報</h3>
            <ul className="space-y-2">
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  会社概要
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">お問い合わせ</h3>
            <ul className="space-y-2">
              {/* <li>〒100-0001</li>
              <li>東京都千代田区1-1-1</li>
              <li>FotoYoseビル</li>
              <li>TEL: 03-1234-5678</li> */}
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  お問い合わせフォーム
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} FotoYose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
