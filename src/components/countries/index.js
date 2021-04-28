import css from './countries.module.css'

const Countries = ({ countries }) => {
  return (
    <div className={css.card}>
      {countries.map((data, i) => (
        <div className={css.cardbody} key={i}>
          <img src={data.countryInfo.flag} alt={data.country} />
          <div className={css.info}>
            <h3>{data.country}</h3>
            <h4>
              Cases <span>{numberWithCommas(data.cases)}</span>
            </h4>
            <h4>
              Deaths <span>{numberWithCommas(data.deaths)}</span>
            </h4>
            <h4>
              Recovered <span>{numberWithCommas(data.recovered)}</span>
            </h4>
            <h4>
              Today's cases <span>{numberWithCommas(data.todayCases)}</span>
            </h4>
            <h4>
              Today's deaths <span>{numberWithCommas(data.todayDeaths)}</span>
            </h4>
            <h4>
              Active <span>{numberWithCommas(data.active)}</span>
            </h4>
            <h4>
              Critical <span>{numberWithCommas(data.critical)}</span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  )
}

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default Countries
