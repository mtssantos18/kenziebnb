import { ButtonStyle } from "./style";

function Button({ children, header, width, height, fontSize, fontWeight }) {
  return (
    <ButtonStyle
      header={header}
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </ButtonStyle>
  );
}

export default Button;
