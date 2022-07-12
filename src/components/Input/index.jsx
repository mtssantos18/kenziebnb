import { Container, InputContainer } from "./style";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { InputContext } from "../../providers/Input/Input.js";

function Input({ label, name, type, placeholder, register, error, ...rest }) {
  const { showPassword, inputType, onClickShowPassword } =
    useContext(InputContext);

  return (
    <Container error={error}>
      <label>{label}</label>
      <InputContainer error={error}>
        <input
          {...rest}
          placeholder={placeholder}
          {...register(name)}
          type={type === "password" ? inputType : type}
        />
        {name === "password" &&
          (showPassword ? (
            <button className="EyeIcon" onClick={onClickShowPassword}>
              <AiFillEyeInvisible size={20} />
            </button>
          ) : (
            <button className="EyeIcon" onClick={onClickShowPassword}>
              <AiFillEye size={20} />
            </button>
          ))}
      </InputContainer>
      {error && <span>{error}</span>}
    </Container>
  );
}

export default Input;
