import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const HomesContext = createContext([]);

export const HomesProvider = ({ children }) => {
	const [homeList, setHomeList] = useState([]);
	const [showFilterModal, setShowFilterModal] = useState(false);

	async function getHomeList() {
		const response = await api.get("/homes");

		setHomeList(response.data);
	}

	useEffect(() => {
		getHomeList();
	}, []);

	async function addHome(home) {
		try {
			const response = await api.post("/homes", home);

			toast.success("Casa adicionada com sucesso!");
		} catch (error) {
			toast.error("Informação insuficente para adicionar nova casa");
		}
	}

	async function removeHome(id) {
		try {
			const token = JSON.parse(localStorage.getItem("@Kenziebnb:token"));

			const response = api.delete(`/homes/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			toast.success("Casa removida com sucesso!");
		} catch {
			toast.error("Algo deu errado!");
		}
	}

	return (
		<HomesContext.Provider
			value={{
				homeList,
				setHomeList,
				addHome,
				removeHome,
				showFilterModal,
				setShowFilterModal,
			}}
		>
			{children}
		</HomesContext.Provider>
	);
};
