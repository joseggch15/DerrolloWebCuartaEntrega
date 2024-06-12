import { First } from "react-bootstrap/esm/PageItem";
import ContenedorHeader from "./ContenedorHeader";
import ContenedorMain from "./ContenedorMain";
import FirstScreen from "./FirstScreen";
import Dashboard from "./Dashboard";

const ContenedorGlobal = () => {
	return (
		<>
			<ContenedorHeader />
            <FirstScreen />
             <Dashboard />
			<ContenedorMain />
		</>
	);
};

export default ContenedorGlobal;
