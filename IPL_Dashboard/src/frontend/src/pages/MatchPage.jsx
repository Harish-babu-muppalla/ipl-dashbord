import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../Components/MatchDetailCard';
import { MatchSmallCard } from '../Components/MatchSmallCard';


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
    <div className="TeamPage">
     <h1>match page</h1>
     
    {matches.map(match => <MatchDetailCard teamName ={teamName} match ={match}/>)}
     

    </div>
  );
}
