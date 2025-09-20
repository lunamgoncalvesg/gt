import Form from "./Form";

export default function Detail({ data }) {
    return (
    <div>
        <br></br>
        <h4>{data.name}</h4>
        <p>Altura: {data.height} cm</p>
        <p>Nacimiento: {data.birth}</p>
        <Form character={data} />
    </div>
    );
}