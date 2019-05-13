import React from 'react';
import {NavLink} from 'react-router-dom';

const VariantAll = (ShowAllTask,props) => {
    return (
        <div>
          <NavLink onClick={ShowAllTask} to={`/All`}>All</NavLink>
        </div>
    );
};

export default VariantAll;