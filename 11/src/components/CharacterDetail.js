import React from 'react';
import { Segment, Image, List, Button } from 'semantic-ui-react';

function CharacterDetail({ character, goBack }) {
    return (
    <Segment style={{background: '#e8e3d5'}}>
        <Button onClick={goBack} style={{ marginBottom: '20px' }}>Volver</Button>
        <Image src={character.image} size="medium" circular />
        <h2>{character.name}</h2>
        <List>
        <List.Item>
            <strong>Estado:</strong> {character.status}
        </List.Item>
        <List.Item>
            <strong>Espcie:</strong> {character.species}
        </List.Item>
        <List.Item>
            <strong>Género:</strong> {character.gender}
        </List.Item>
        <List.Item>
            <strong>Origen:</strong> {character.origin.name}
        </List.Item>
        <List.Item>
            <strong>Locación:</strong> {character.location.name}
        </List.Item>
        </List>
    </Segment>
    );
}

export default CharacterDetail;