import { Container, InputContainer } from "./style";

function SelectInput({ label, name, register, error }) {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer>
        <select {...register(name)}>
          <option value="">--Selecione--</option>
          <option value="tenant">Locatário</option>
          <option value="host">Locador</option>
        </select>
      </InputContainer>
      {error && <span>{error}</span>}
    </Container>
  );
}

export default SelectInput;
