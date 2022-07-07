import LoginForm from "../../components/LoginForm";
import {
	Background,
	ImageContainer,
	LoginModal,
	ScreenContainer,
} from "./style";
import ubatubaImg from "../../assets/Ubatuba1.png";

function Login() {
	return (
		<ScreenContainer>
			<LoginModal>
				<img src={ubatubaImg} />

				<LoginForm />
			</LoginModal>
		</ScreenContainer>
	);
}

export default Login;
