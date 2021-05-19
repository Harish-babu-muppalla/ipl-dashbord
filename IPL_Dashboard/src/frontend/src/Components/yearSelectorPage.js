import {React} from 'react'
import {Link} from 'react-router-dom'

import './YearSelectorPage.scss'
export const YearSelectorPage = ({teamName})  => {

    let years = [];

    const startYear = process.env.REACT_APP_START;
    const endYear = process.env.REACT_APP_END;

    for(let i =startYear;i<=endYear;i++){
        years.push(i);
    }

    return(
        <ol className="yearsList">
            {years.map(
                year =><li>
                        <Link to= {`/teams/${teamName}/matches/${year}`} >{year}</Link>
                    </li>
                )
            }
        </ol>
        
    )

}