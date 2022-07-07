import { Container, InputContainer } from "./style";

function SelectInput({ label, name, register, error }) {
	return (
		<Container error={error}>
			<label>{label}</label>
			<InputContainer error={error}>
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
