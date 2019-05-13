import React from 'react';
import {NavLink} from 'react-router-dom';

const VariantUnComplite = (ShowUnCompliteTask) => {
    return (
        <div>
            <li><NavLink onClick={ShowUnCompliteTask} to={`/UnComplite`}>UnComplite</NavLink></li>
        </div>
    );
};

export default VariantUnComplite;