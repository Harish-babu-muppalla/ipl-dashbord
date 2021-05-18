import {React} from 'react';
import { Link } from 'react-router-dom';


export const MatchDetailCard = ({match, teamName})  => {
  if(!match) return null;
  const otherteam = match.team1 === teamName ? match.team2 : match.team1
  const otherTeamRoute = `/teams/${otherteam}`;
  var result ="wickets";
  if(match.team1 === match.winner){
    result ="runs";
  }
  return (
    <div className="TeamPage">
    
     <h3>latest match</h3>
     <h1>vs <Link to={otherTeamRoute}> {otherteam}</Link></h1>
     <h2>{match.date}</h2>
     <h3>{match.venue}</h3>
     <h3>{match.winner} won by {match.result_margin} {result}</h3>

    </div>
  );
}