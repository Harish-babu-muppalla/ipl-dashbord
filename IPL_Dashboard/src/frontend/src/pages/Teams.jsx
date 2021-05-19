import {React} from 'react';
import{Link} from 'react-router-dom';

import './Teams.scss'
export const Teams =({teamName}) => {
    return (
        <div className="teams">
            <h1 className="team">
               <Link to={`/teams/${teamName}`}>{teamName}</Link> 
            </h1>
        </div>
    )
}