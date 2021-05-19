import {React} from 'react';
import { Link } from 'react-router-dom';
import './MatchDetailCard.scss'

export const MatchDetailCard = ({match, teamName})  => {
  if(!match) return null;
  const otherteam = match.team1 === teamName ? match.team2 : match.team1
  const otherTeamRoute = `/teams/${otherteam}`;
  var result ="wickets";
  if(match.team1 === match.winner){
    result ="runs";
  }
  const ismatchWon = teamName === match.winner;
  return (
    <div className={ismatchWon ? 'MatchDetailCard wonCard' : 'MatchDetailCard lostCard'}>
    <div>
      <span className="versus">vs</span>
      <h1><Link to={otherTeamRoute}> {otherteam}</Link></h1>
      <h2 className="matchDate">{match.date}</h2>
      <h3 className="matchVenue">at {match.venue}</h3>
      <h3 className="matchResult">{match.winner} won by {match.result_margin} {result}</h3>
     </div>
     <div className="additionalDetails">
      <h3>First Innings</h3>
      <p>{match.team1}</p>
      <h3>second Innings</h3>
      <p>{match.team2}</p>
      <h3>Man of the match</h3>
      <p>{match.player_of_match}</p>
      <h3>Umpires</h3>
      <p>{match.umpire1}, {match.umpire2}</p>

    </div>
    </div>
  );
}