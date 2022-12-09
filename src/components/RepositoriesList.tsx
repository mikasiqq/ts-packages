import { FC, useState } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const { data, error, loading } = useTypedSelector(state => state.repositories)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    searchRepositories(term)
  }

  return (
    <div>
      <form onSubmit={submitHandler} action="">
        <input type="text" onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>{loading!}</h3>}
      {!error && !loading && data.map(name => (
        <p key={name}>{name}</p>
      ))}
    </div>
  )
}

export default RepositoriesList