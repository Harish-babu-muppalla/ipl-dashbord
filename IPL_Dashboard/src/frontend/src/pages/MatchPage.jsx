import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { MatchDetailCard } from '../Components/MatchDetailCard';
import { YearSelectorPage } from '../Components/yearSelectorPage';

import './MatchPage.scss'

export const MatchPage = ()  => {

    const [matches,setMatches] =useState([]);
    const { teamName,year } = useParams();
    useEffect(
        () => {
          const fetchMatches = async () => {
          const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
          const data = await response.json();
          setMatches(data);
          };
          fetchMatches();
        },
        [teamName,year]
    
      );
 
  return (
    <div className="matchPage">
     <div className="years">
       <h4>Select Year</h4>
       <YearSelectorPage teamName ={teamName}/>
     </div>
     <div> 
     <h1 style={{marginBottom: "20px"}}>{teamName} Matches in {year}</h1>
    
     {matches.map(match => <MatchDetailCard teamName ={teamName} match ={match}/>)}
     </div>
    
     

    </div>
  );
}
