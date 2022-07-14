import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Container } from "./styles";


interface Props {
	label: string
	icon: StaticImageData
}


export function PrimaryButton({ label, icon }: Props) {
	return (
		<Container onClick={() => console.log('click')}>
			{ icon && <Image src={icon}/>}
			{label}
		</Container>
	)
}