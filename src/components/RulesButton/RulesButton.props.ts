import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface RulesButtonProps
	extends Omit<
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		"onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
	> {
	children: ReactNode;
	types: "rules" | "again";
}
