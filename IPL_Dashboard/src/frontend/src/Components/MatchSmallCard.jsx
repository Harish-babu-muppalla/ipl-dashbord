import {React} from 'react';
import { Link } from 'react-router-dom';
import './matchSmallCard.scss';
export const MatchSmallCard = ({match, teamName})  => {
  if(!match) return null;
  const otherteam = match.team1 === teamName ? match.team2 : match.team1
  const otherTeamRoute = `/teams/${otherteam}`;
  var result ="wickets";
  if(match.team1 === match.winner){
    result ="runs";
  }
    
  const ismatchWon = teamName === match.winner;
  
  return (
    <div className={ismatchWon ? 'matchSmallCard wonCard' : 'matchSmallCard lostCard'}>
     <h3>vs <Link to={otherTeamRoute}> {otherteam}</Link></h3>
     <p className="matchResult">{match.winner} won by {match.result_margin} {result}</p>
     
    </div>
  );
}