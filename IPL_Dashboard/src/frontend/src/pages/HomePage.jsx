import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';
import { Teams } from './Teams';

export const HomePage = ()  => {

  

  const [team,setTeam] = useState([]);
  

  useEffect(
    () => {
      const fetchTeams = async () => {
      const response = await fetch(`http://localhost:8080/team`);
      const data = await response.json();
      setTeam(data);
      };
      fetchTeams();
    },
    []

  );

  return (
    <div className="HomePage">
    <div className="AppName">
        <h1>Ipl-Dashboard</h1>
    </div>
    <div className="teams">
        {team.map(team => <Teams teamName ={team.teamName}/>)}
    </div>

    
    </div>
    
  );
}
