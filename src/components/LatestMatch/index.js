// Write your code hereimport
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    date,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails
  return (
    <div className="latest-match-container">
      <div className="venue-details">
        <div className="match-details">
          <h1 className="competing-team">{competingTeam}</h1>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="competing-team-logo"
          alt="Example response"
        />
      </div>
      <div className="innings-container">
        <p className="innings-title">First Innings</p>
        <p className="innings-name">{firstInnings}</p>
        <p className="innings-title">Second Innings</p>
        <p className="innings-name">{secondInnings}</p>
        <p className="innings-title">Man Of The Match</p>
        <p className="innings-name">{manOfTheMatch}</p>
        <p className="innings-title">Umpires</p>
        <p className="innings-name">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
