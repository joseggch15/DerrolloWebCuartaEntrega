import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./componentes/Dashboard";
import ContenedorGlobal from "./componentes/ContenedorGlobal";

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ContenedorGlobal />}>
						<Route path="/dashboard" element={<Dashboard />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
