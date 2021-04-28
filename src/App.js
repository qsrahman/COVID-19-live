import axios from 'axios'
import { useEffect, useState } from 'react'
import Countries from './components/countries'
import Summary from './components/summary'

function App() {
  const [latest, setLatest] = useState({})
  const [results, setResults] = useState([])
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .all([
        axios.get('https://disease.sh/v3/covid-19/all'),
        axios.get(
          'https://disease.sh/v3/covid-19/countries?sort=cases&allowNull=false'
        ),
      ])
      .then(response => {
        setLatest(response[0].data)
        setResults(response[1].data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    const filteredCountries = results.filter(item => {
      return searchTerm !== ''
        ? item.country.toLowerCase().includes(searchTerm.toLowerCase())
        : item
    })
    setCountries(filteredCountries)
  }, [searchTerm, results])

  return (
    <>
      <header>
        <h2>COVID-19 Live</h2>
      </header>
      <div className="container">
        {loading ? (
          <div className="loading">Loading....</div>
        ) : (
          <>
            <Summary latest={latest} />
            <form>
              <input
                type="text"
                placeholder="Filter by country name..."
                onChange={e => setSearchTerm(e.target.value)}
              />
            </form>
            <Countries countries={countries} />
          </>
        )}
        <footer>
          Copyright &copy; 2020 COVID-19 Live. All Rights Reserved.
        </footer>
      </div>
    </>
  )
}

export default App
