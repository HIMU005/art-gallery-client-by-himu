import { useLottie, useLottieInteractivity } from "lottie-react";
import hamsterAnimation from "./hamsterAnimation.json";

const style = {
    height: 300,
    border: 3,
    borderStyle: "solid",
    borderRadius: 7,
};

const options = {
    animationData: hamsterAnimation,
};
const LottieReact = () => {
    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
        lottieObj,
        mode: "cursor",
        actions: [
            {
                position: { x: [0, 1], y: [-1, 2] },
                type: "seek",
                frames: [0, 179],
            },
            {
                position: { x: -1, y: -1 },
                type: "stop",
                frames: [0],
            },
        ],
    });
    return Animation;
};

export default LottieReact;