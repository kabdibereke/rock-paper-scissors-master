import { Dispatch, SetStateAction } from "react";

export interface ResultProps {
	setYourVariant: Dispatch<SetStateAction<string>>;
	setCompterVariant: Dispatch<React.SetStateAction<string>>;
}
