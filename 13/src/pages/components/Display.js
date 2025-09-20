import { useEffect, useState } from "react";
import Detail from "./Detail";

export default function Display() {
    const [characters, setCharacters] = useState([]);
    const [selectedUrl, setSelectedUrl] = useState(null);
    const [selectedData, setSelectedData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch("https://swapi.dev/api/people/?page=1")
        .then((res) => res.json())
        .then((data) => {
            setCharacters(data.results);
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        fetch(selectedUrl)
        .then((res) => res.json())
        .then((data) => setSelectedData(data));
    }, [selectedUrl]);

    if (loading) return <p>Cargando</p>;

    return (
    <div>
        <label>
            Seleccioná un personaje:
            <select onChange={(e) => setSelectedUrl(e.target.value)}>
                <option value="">Seleccionar</option>
                {characters.map((c, idx) => (
                    <option key={idx} value={c.url}>{c.name}</option>
                ))}
            </select>
        </label>
        {selectedData && <Detail data={selectedData} />}
    </div>
    );
}