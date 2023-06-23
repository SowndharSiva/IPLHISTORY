// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    result,
    matchStatus,
    competingTeam,
    competingTeamLogo,
  } = matchCardDetails
  const status = matchStatus === 'Won' ? 'Won' : 'Lost'
  return (
    <li className="list-container">
      <img
        src={competingTeamLogo}
        className="competing-team-image"
        alt="Example response"
      />
      <h1 className="team-name">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
