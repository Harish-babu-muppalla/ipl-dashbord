import {React} from 'react';


export const MatchDetailCard = ({match})  => {
  return (
    <div className="TeamPage">
    
     <h3>latest match</h3>
     <h4>{match.team1} vs {match.team2}</h4>
    </div>
  );
}