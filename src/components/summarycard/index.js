import CountUp from 'react-countup'
import css from './summarycard.module.css'

const SummaryCard = props => {
  return (
    <div className={css.card} style={{ backgroundColor: props.color }}>
      <div className={css.cardbody}>
        <h2>{props.title1}</h2>
        <h3>
          <CountUp start={0} end={props.count1} duration={2.5} separator="," />
        </h3>
        <h2>{props.title2}</h2>
        <h3>
          <CountUp start={0} end={props.count2} duration={2.5} separator="," />
        </h3>
      </div>
      <div className={css.cardfooter}>
        <small>Last updated {props.date}</small>
      </div>
    </div>
  )
}

export default SummaryCard
