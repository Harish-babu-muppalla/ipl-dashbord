import {React, useEffect, useState} from 'react';
import { MatchDetailCard } from '../Components/MatchDetailCard';
import { MatchSmallCard } from '../Components/MatchSmallCard';


export const TeamPage = ()  => {

  const [team,setTeam] = useState({matches : []});
  

  useEffect(
    () => {
      const fetchMatches = async () => {
        await fetch('http://localhost:8080/team/Royal Challengers Bangalore').then(
           (response) => response.json()
          
         
        ).then((data) =>{
          setTeam(data);
        })
        
      };
      fetchMatches();
    },
    []

  );
  return (
    <div className="TeamPage">
     <h1>{team.teamName}</h1>
     <MatchDetailCard match={team.matches[0]}/>
    {team.matches.slice(1).map(match => <MatchSmallCard match ={match}/>)}

    </div>
  );
}
