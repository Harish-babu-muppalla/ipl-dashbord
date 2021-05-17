import {React} from 'react';
import { MatchDetailCard } from '../Components/MatchDetailCard';
import { MatchSmaillCard } from '../Components/MatchSmallCard';


export const TeamPage = ()  => {
  return (
    <div className="TeamPage">
     <h1>Team Name</h1>
     <MatchDetailCard/>
     <MatchSmaillCard/>
    </div>
  );
}
