import Wrapper from "../assets/wrappers/StatItem"

const StatItem = ({ title, icon, bcg, color, count }) => {


  return (
    <Wrapper bcg={bcg} color={color}>
        <header>
            <span className="count">{count}</span>
            <span className="icon">{icon}</span>
        </header>
        <h5 className="title">{title}</h5>
    </Wrapper>
  )
}
export default StatItem