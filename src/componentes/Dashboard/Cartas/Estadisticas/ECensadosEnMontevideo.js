import { useSelector } from "react-redux";

const ECensadosEnBogota = () => {
    const personas = useSelector((state) => state.personas.listaPersonas);

    const listaPersonasFiltradaPorBogota = personas.filter(
        (persona) => persona.departamento === 11001
    );

    return (
        <div className="col-2 card">
            <div className="row card-header text-center">
                <h5 className="card-title col">Censados en Bogotá</h5>
            </div>
            <div className="row card-body text-center">
                <p>{listaPersonasFiltradaPorBogota.length}</p>
            </div>
        </div>
    );
};

export default ECensadosEnBogota;
