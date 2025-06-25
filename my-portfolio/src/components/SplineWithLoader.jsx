import React,{ useState } from "react";
import Spline from "@splinetool/react-spline";
import CircularText from './CircularText';
import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};



export default function SplineWithLoader({username}) {
  const [isLoaded, setIsLoaded] = useState(false);
  let message = "Hello," + (username ? username : 'World!')
  return (
     <section className="relative w-full h-[125vh] overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 -translate-y-30 ">
        {!isLoaded && <LoadingSpinner />}
        <Spline
          scene="https://prod.spline.design/rRYxxPq4P8BG2Flk/scene.splinecode"
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full"
        />
      </div>

      {/* Content Over Spline */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[10%] text-white text-center">
        <h1 className=" font-bold drop-shadow-md">
            <SplitText
  text={message}
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
            </h1>
        <p className="text-gray-300">Crafting with code, caffeine & curiosity.</p>
      </div>
      <div className="absolute bottom-35 right-2  w-40 h-10 z-10 flex flex-col justify-center align-middle rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-2xs font-bold text-black" >
        <p className="h-6/10 pb-1 px-2 ">BUILT BY A DEV</p>
        <p className="h-6/10 pb-1 px-2 ">BUILT FOR {username?username:'YOU'} </p>
</div>
    </section>
  );
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md z-10">
      <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
