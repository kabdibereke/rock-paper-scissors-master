import { HTMLMotionProps } from "framer-motion";

export interface StepProps extends HTMLMotionProps<"div"> {
	color1: "rock" | "scissor" | "papper";
	color2?: "rock" | "scissor" | "papper" | null;
}
