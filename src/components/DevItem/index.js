import React from 'react';

import './styles.css';

function DevItem({ dev } /*unstructed props*/) {
    // const { dev } = props /*structed props*/
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Access Github Profile</a>
        </li>
    );
}

export default DevItem;
