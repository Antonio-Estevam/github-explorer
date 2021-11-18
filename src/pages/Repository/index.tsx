import React from 'react';
import { useMatch } from 'react-router-dom';

const match = useMatch('/repositories');

console.log(match);


const Repository: React.FC = () => {
    return <h1>Repositorio</h1>
}

export default Repository;
