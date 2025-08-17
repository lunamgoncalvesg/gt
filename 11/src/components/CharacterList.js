import React, { useEffect, useState } from 'react';
import { Card, Grid, Input } from 'semantic-ui-react';

const link = 'https://rickandmortyapi.com/api/character';

function CharacterList({ selectCharacter }) {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
    async function fetchCharacters() {
        let allCharacters = [];
        let url = link;
        while (url) {
        const res = await fetch(url);
        const data = await res.json();
        allCharacters = allCharacters.concat(data.results);
        url = data.info.next;
        }
        setCharacters(allCharacters);
    }
    fetchCharacters();
    }, []);

    const filteredCharacters = characters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
    <>
        <Input
        placeholder="Buscá tu personaje..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '20px' }}
        />
        <Grid>
        {filteredCharacters.map(character => (
            <Grid.Column key={character.id} width={4} style={{ marginBottom: '20px', background: '#e8e3d5' }}>
            <Card
                image={character.image}
                header={<h3 style={{ textAlign: 'center', color: 'black' }}>{character.name}</h3>}
                style={{ background: '#e8e3d5', borderRadius: '1% 1% 15% 15%' }}
                onClick={() => selectCharacter(character)}
            />
            </Grid.Column>
        ))}
        </Grid>
    </>
    );
}

export default CharacterList;