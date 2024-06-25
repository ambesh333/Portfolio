import { Crown } from "lucide-react";

export default function FollowMe() {
  return (
    <div className="flex items-center justify-center w-full bg-black">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg w-full">
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="text-lg">Follow Me</div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="text-lg">Online Presence</div>
        </div>
      </div>
    </div>
  );
}
