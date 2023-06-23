import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamData: {},
    id: '',
  }

  componentDidMount() {
    this.renderData()
  }

  renderData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const Id = id.length
    const newId = id.slice(1, Id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${newId}`)
    const data = await response.json()
    console.log(data)
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(item => ({
        competingTeam: item.competing_team,
        competingTeamLogo: item.competing_team_logo,
        date: item.date,
        firstInnings: item.first_innings,
        id: item.id,
        manOfTheMatch: item.man_of_the_match,
        matchStatus: item.match_status,
        result: item.result,
        secondInnings: item.second_innings,
        umpires: item.umpires,
        venue: item.venue,
      })),
    }
    this.setState({teamData: formattedData, isLoading: false, id: newId})
  }

  renderPages = () => {
    const {teamData, id} = this.state
    const {teamBannerUrl, recentMatches, latestMatchDetails} = teamData
    return (
      <div className={`all-container ${id}`}>
        <div className="main-container">
          <img
            src={teamBannerUrl}
            className="team-banner-img"
            alt="team banner"
          />
          <div className="text-container">
            <p className="latest-match-text">Latest Matches</p>
          </div>
          <LatestMatch matchDetails={latestMatchDetails} />
          <ul className="recent-container">
            {recentMatches.map(item => (
              <MatchCard key={item.id} matchCardDetails={item} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      this.renderPages()
    )
  }
}
export default TeamMatches
