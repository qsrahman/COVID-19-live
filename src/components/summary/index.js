import SummaryCard from '../summarycard'
import css from './summary.module.css'

const Summary = ({ latest }) => {
  const date = new Date(parseInt(latest.updated, 10))
  const lastUpdated = date.toDateString()

  return (
    <div className={css.cards}>
      <SummaryCard
        color="#f0ad4e"
        count1={latest.cases}
        count2={latest.todayCases}
        title1="Cases"
        title2="Today Cases"
        date={lastUpdated}
      />
      <SummaryCard
        color="#d9534f"
        count1={latest.deaths}
        count2={latest.todayDeaths}
        title1="Deaths"
        title2="Today Deaths"
        date={lastUpdated}
      />
      <SummaryCard
        color="#5cb85c"
        count1={latest.recovered}
        count2={latest.todayRecovered}
        title1="Recovered"
        title2="Today Recovered"
        date={lastUpdated}
      />
      <SummaryCard
        color="#5bc0de"
        count1={latest.active}
        count2={latest.critical}
        title1="Active Cases"
        title2="Critical Cases"
        date={lastUpdated}
      />
    </div>
  )
}

export default Summary
