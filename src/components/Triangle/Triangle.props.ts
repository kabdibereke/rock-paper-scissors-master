import { Dispatch, SetStateAction } from "react";

export interface TriangleProps {
	arr: string[];
	setYourVariant: Dispatch<SetStateAction<string>>;
}
