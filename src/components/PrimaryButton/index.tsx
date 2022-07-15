import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Container } from "./styles";


interface Props {
	label: string
	icon: StaticImageData
	onClick: () => void
}


export function PrimaryButton({ label, icon, onClick }: Props) {
	return (
		<Container onClick={onClick}>
			{ icon && <Image src={icon}/>}
			{label}
		</Container>
	)
}