import { ButtonStyle } from "./style";

function Button({
	children,
	header,
	width,
	height,
	fontSize,
	fontWeight,
	...rest
}) {
	return (
		<ButtonStyle
			header={header}
			width={width}
			height={height}
			fontSize={fontSize}
			fontWeight={fontWeight}
			{...rest}
		>
			{children}
		</ButtonStyle>
	);
}

export default Button;
