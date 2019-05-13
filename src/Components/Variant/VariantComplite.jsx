import React from 'react';
import {NavLink} from 'react-router-dom';

const VariantComplite = (ShowCompliteTask,props) => {
    return (
        <div>
             <NavLink onClick={ShowCompliteTask} to={`/Complite`}>All</NavLink>
        </div>
    );
};

export default VariantComplite;