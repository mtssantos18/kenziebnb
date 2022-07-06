import { Container, InputContainer } from "./style";

function SelectInput({ label, name, register }) {
	return (
		<Container>
			<label>{label}</label>
			<InputContainer>
				<select
				// {...register(name)}
				>
					<option value="tenant">Locatário</option>
					<option value="host">Locador</option>
				</select>
			</InputContainer>
		</Container>
	);
}

export default SelectInput;
