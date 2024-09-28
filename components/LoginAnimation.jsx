import React from "react";
import { useLottie } from "lottie-react";
import loginAnimation from "@/public/login-animation.json"

const LoginAnimation = () => {
    const options = {
        animationData: loginAnimation,
        loop: true
    };

    const { View } = useLottie(options);

    return <>{View}</>;
}

export default LoginAnimation;