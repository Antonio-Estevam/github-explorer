import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashbord from '../pages/Dashbord';
import Repository from '../pages/Repository';

const Myroutes: React.FC = () => (
    <Routes>
        <Route path="/"  element={<Dashbord/>} />
        <Route path="/repositories/:repository*" element={<Repository/>} />
    </Routes>
);

export default Myroutes;
