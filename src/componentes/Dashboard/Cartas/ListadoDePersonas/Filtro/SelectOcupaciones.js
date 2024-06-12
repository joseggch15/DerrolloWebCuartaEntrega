import { useDispatch, useSelector } from "react-redux";
import { guardarPersonasFiltradas } from "../../../../../features/listadoPersonasSlice";
import Ocupaciones from "../Ocupaciones";
import { useEffect } from "react";

const SelectOcupaciones = () => {
	const dispatch = useDispatch();

	// NOS GUARDAMOS LA LISTA DE PERSONAS (QUE ESTA EN EL STORE) EN ESTA CONSTANTE
	const per = useSelector((state) => state.personas.listaPersonas);
	// NOS GUARDAMOS LA LISTA DE OCUPACIONES (QUE ESTA EN EL STORE) EN ESTA CONSTANTE
	const ocu = useSelector((state) => state.ocupaciones.listaOcupaciones);

	useEffect(() => {
		dispatch(guardarPersonasFiltradas(per));
	}, [per]);

	// FUNCION QUE FILTRA LAS PERSONAS POR OCUPACION Y LAS GUARDA EN EL STORE
	const filtrarPersonasPorOcupacion = (evento) => {
		let ocupacionSeleccionada = Number(evento.target.value);
		console.log(`Ocupacion seleccionada: ${ocupacionSeleccionada}`);

		//console.log(per);

		const listaPerFiltradaPorOcupacion = per.filter(
			(p) => p.ocupacion === ocupacionSeleccionada
		);
		console.log(listaPerFiltradaPorOcupacion);

		if (ocupacionSeleccionada !== 0) {
			dispatch(guardarPersonasFiltradas(listaPerFiltradaPorOcupacion));
		} else {
			dispatch(guardarPersonasFiltradas(per));
			//console.log("no selecciono ocupacion");
		}

		// if (ocupacionSeleccionada !== 0) {
		// 	dispatch(guardarPersonas(listaPerFiltradaPorOcupacion));
		// } else {
		// 	console.log("no selecciono ocupacion");
		// }
	};

	return (
		<select
			className="form-select"
			onChange={filtrarPersonasPorOcupacion}
			defaultValue="0"
		>
			<option value="0">Filtrar por ocupación (Ver todas)</option>
			{ocu.map((o) => (
				<Ocupaciones key={o.id} {...o} />
			))}
		</select>
	);
};

export default SelectOcupaciones;
