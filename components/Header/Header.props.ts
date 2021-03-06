import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface Navi {
	title: string,
	link: string,
	anchor: string,
}

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
	children?: ReactNode,
	navi: Navi[],
}