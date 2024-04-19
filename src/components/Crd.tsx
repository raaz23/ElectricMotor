"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";



interface TextProps {
  words: string,
  title:string,
  
}

const TextGenerateEffectDemo: React.FC<TextProps> = ({ words,title }) => {
  return (

    <div className="mt-10 md:mt-20 max-h-72 lg:max-h-80 sm:max-w-96 px-2">
      <div className=" cursor-pointer hover:scale-105 transition-all relative dark:bg-[#152039] h-72 w-full md:h-80 md:w-full rounded-3xl p-3 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between">
        <div className="font-normal text-neutral-700 dark:text-white">
        <h1 className="flex justify-center font-2xl tracking-widest font-bold dark:text-white underline">{title}</h1>
          <p ><TextGenerateEffect words={words} /></p>
        </div>
        <div>
        </div>
      </div>
     
    </div>
  );
};

export default TextGenerateEffectDemo;
