import { useState, useEffect } from "react";

export default function Form({ character }) {
    const [nickname, setNickname] = useState("");
    const [favorite, setFavorite] = useState(false);
    const [resumes, setResumes] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("card");
        if (saved) {
            setResumes(JSON.parse(saved));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const card = {
            name: character.name,
            height: character.height,
            birth: character.birth,
            nickname,
            favorite,
        };
        const newcards = [...resumes, card];
        localStorage.setItem("card", JSON.stringify(newcards));
        setResumes(newcards);
        setNickname("");
        setFavorite(false);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>nickname:</label>
                    <input type="text" value={nickname} onChange={(e) =>
                        setNickname(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        ¿Es tu favorito?
                        <input type="checkbox" checked={favorite} onChange={(e) =>
                            setFavorite(e.target.checked)}
                        />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
                <div>
                    <br />
                    <h4>Fichas</h4>
                    {resumes.map((resume, i) => (
                        <div key={i}>
                            <br />
                            <p>Nombre: {resume.name}</p>
                            <p>Altura: {resume.height}</p>
                            <p>Nacimiento: {resume.birth}</p>
                            <p>Apodo: {resume.nickname}</p>
                            <p>Favorito: {resume.favorite ? "Sí" : "No"}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
}