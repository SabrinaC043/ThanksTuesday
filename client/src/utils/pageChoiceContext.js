import { useState, createContext, useContext } from "react";

const PageChoiceContext = createContext();

export const usePageChoiceContext = () => useContext(PageChoiceContext);

export default function PageChoiceProvider(props) {
	const [categoryChoice, setCategoryChoice] = useState("");
	const [search, setSearch] = useState("");

	return (
		<PageChoiceContext.Provider
			value={{ categoryChoice, search, setCategoryChoice, setSearch }}
		>
			{props.children}
		</PageChoiceContext.Provider>
	);
}
