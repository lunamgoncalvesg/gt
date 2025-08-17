import React, { useState } from 'react';
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail';

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div style={{ padding: '20px', background: '#e8e3d5' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img
          src="https://store.theory11.com/cdn/shop/files/Layer_1.png?v=1698156171&width=1024"
          alt="logo"
          style={{ maxWidth: '300px', width: '100%', cursor: 'pointer'}}
          onClick={() => {
            window.open('https://play.max.com/show/ab553cdc-e15d-4597-b65f-bec9201fd2dd')
            
          }}
        />
      </div>
      {selectedCharacter ? (
        <CharacterDetail
          character={selectedCharacter}
          goBack={() => setSelectedCharacter(null)}
        />
      ) : (
        <CharacterList selectCharacter={setSelectedCharacter} />
      )}
    </div>
  );
}
