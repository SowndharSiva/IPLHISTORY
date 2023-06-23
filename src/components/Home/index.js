// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.renderTeams()
  }

  renderTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const {teams} = data
    const formattedData = teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  renderTeamList = () => {
    const {teamsList} = this.state
    return (
      <>
        <div className="ipl-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-image"
            alt="ipl logo"
          />
          <h1 className="ipl-title">IPL Dashboard</h1>
        </div>
        <ul className="teamList-container">
          {teamsList.map(eachItem => (
            <TeamCard key={eachItem.id} teamDetails={eachItem} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamList()
        )}
      </div>
    )
  }
}

export default Home
