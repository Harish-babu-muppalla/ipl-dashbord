import {React, useEffect, useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import { MatchDetailCard } from '../Components/MatchDetailCard';
import { MatchSmallCard } from '../Components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';

import './TeamPage.scss';

export const TeamPage = ()  => {

  

  const [team,setTeam] = useState({matches : []});
  const { teamName } = useParams();
  

  useEffect(
    () => {
      const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      setTeam(data);
      };
      fetchMatches();
    },
    [teamName]

  );
  if(!team || !team.teamName){
    return <h1>Team not found</h1>
  }
  return (
    <div className="TeamPage">
    <div className="teamName"><h1>{team.teamName}</h1></div>
    <div className="winLoss">Winns / Losses
    <PieChart
  data={[
    { title: 'losses', lable:'losses', value: team.totalMatches - team.totalWins, color: 'lightsalmon' },
    { title: 'wins', lable: 'wins', value: team.totalWins, color: 'lightgreen' },
  ]}
/>
</div> 
     <div className="latestMatch">
     <h3>latest match</h3>
     <MatchDetailCard teamName ={team.teamName} match={team.matches[0]}/>
     </div>
      {team.matches.slice(1).map(match => <MatchSmallCard teamName ={team.teamName} match ={match}/>)}
     <div className="more">
     <Link to= {`/teams/${teamName}/matches/${process.env.REACT_APP_END}`} >More ></Link>

    </div>
    </div>
  );
}
