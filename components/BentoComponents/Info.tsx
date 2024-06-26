import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { BorderBeam } from "../magicui/border-beam";

const CodeSnippet = () => {
  const code = `
const devProfile = () => {
  const age = 23;
  const location = 'India';
  return new Proxy({}, {
    get: (_, prop) =>
      prop === 'intro' ?
        \`I'm a \${age}-year-old code alchemist, turning caffeine into software in the heart of 
        \${location}.\` : "Oops! You've stumbled upon a feature still compiling in my brain."
  });
};

console.log(devProfile().intro);
  `;

  return (
    <div className=" text-white rounded-lg  mx-auto p-3 max-h-[15rem] overflow-hidden">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-1">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>
      <SyntaxHighlighter
        language="typescript"
        style={atomDark}
        customStyle={{ background: "none", padding: "none" }}
        className="text-xs leading-tight"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default function Info() {
  return (
    <div className="bg-white  max-h-[15rem] bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-0 rounded-lg ">
      {/* <Image src={info} alt="snippet" />
       */}

      <CodeSnippet />

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
