import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const CMapaUsuarioPorDepartamento = () => {
    const personasCensadas = useSelector((state) => state.personas.listaPersonas);
    const departamentos = useSelector((state) => state.departamentos.listaDepartamentos);

    let dataMapa = departamentos.map((d) => ({
        idDepa: d.id,
        latitud: d.latitud,
        longitud: d.longitud,
        cantPersonas: 0,
    }));

    const idDepartamentosPersonasCensadas = personasCensadas.map(
        (persona) => persona.departamento
    );

    idDepartamentosPersonasCensadas.forEach((depaId) => {
        const departamentoEnDataMapa = dataMapa.find((d) => d.idDepa === depaId);
        if (departamentoEnDataMapa) {
            departamentoEnDataMapa.cantPersonas += 1;
        }
    });

    return (
        <article className="card col-5">
            <div className="card-header row">
                <h4 className="card-title col">Mapa Usuario por Departamento</h4>
            </div>
            <div className="card-body row">
                <MapContainer
                    center={[4.5709, -74.2973]} // Coordenadas del centro de Colombia
                    zoom={6}
                    scrollWheelZoom={false}
                    style={{ height: "400px", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {dataMapa.map((departamento) => (
                        <Marker
                            key={departamento.idDepa}
                            position={[departamento.latitud, departamento.longitud]}
                        >
                            <Popup>
                                <div>
                                    <p>Cantidad censados: {departamento.cantPersonas}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </article>
    );
};

export default CMapaUsuarioPorDepartamento;
