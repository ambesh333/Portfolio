import { Crown } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { Mail, MailCheck } from "lucide-react";

const AnimatedSubscribeButtonDemo = () => {
  return (
    <AnimatedSubscribeButton
      buttonColor="#020617"
      buttonTextColor="#FFF"
      buttonColorChange="yellow"
      // buttonTextColorChange="#020617"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center gap-3">
          <Mail className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          Copy Email{" "}
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <MailCheck className="mr-2 h-4 w-4" />
          Email Copied{" "}
        </span>
      }
    />
  );
};

export default function HireMeSection() {
  return (
    <div className="flex items-center justify-center  bg-black h-full">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg w-full h-full">
        <div className="flex items-center justify-center mb-4">
          <div className=" bg-yellow p-2 rounded-full flex items-center justify-center">
            <Crown color="black" />
          </div>
        </div>
        <h2 className="text-white text-2xl font-semibold text-center mb-2">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Let&apos;s Make Magic Happen Together!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <AnimatedSubscribeButtonDemo />
        </div>
      </div>
    </div>
  );
}
