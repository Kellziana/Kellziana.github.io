import React from "react";
import { useLottie } from "lottie-react";
import signupAnimation from "@/public/create-animation.json"

const SignupAnimation = () => {
    const style = {
        height: 800,
    };
    
    const options = {
        animationData: signupAnimation,
        loop: true,
        initialSegment: [0,210],
        autoplay: true,
    };

    const { View } = useLottie(options, style);

    return <>{View}</>;
}

export default SignupAnimation;