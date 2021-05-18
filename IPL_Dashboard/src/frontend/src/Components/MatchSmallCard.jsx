import {React} from 'react';


export const MatchSmallCard = ({match})  => {
  return (
    <div className="TeamPage">
     <p>{match.team1} vs {match.team2}</p>
     
    </div>
  );
}