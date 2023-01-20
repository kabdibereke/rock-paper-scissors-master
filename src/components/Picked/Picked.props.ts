import { Dispatch, SetStateAction } from "react";

export interface PickedProps {
	yourVariant: string;
	setCompterVariant: Dispatch<SetStateAction<string>>;
	compterVariant: string;
	arr: string[];
}
