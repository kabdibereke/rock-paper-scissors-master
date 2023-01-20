import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	ReactNode,
	SetStateAction,
} from "react";

export interface RulesProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}
