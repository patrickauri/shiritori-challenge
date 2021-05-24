import { useState } from "react"
import Landing from "./components/Landing"
import { ComputerMatch } from "./components/Match"
import "./style.css"

const App = () => {
  const LoadingState = {
    PRE: 0,
    LOADING: 1,
    POST: 2,
  }
  Object.freeze(LoadingState)

  const [loading, setLoading] = useState(LoadingState.PRE)
  const [currentPage, setCurrentPage] = useState(1)

  const changePage = (newPage) => {
    setLoading(LoadingState.PRE)
    setLoading(LoadingState.LOADING)
    setTimeout(() => {
      setCurrentPage(newPage)
      setLoading(LoadingState.POST)
    }, 2000)
  }

  const RenderPage = () => {
    switch (currentPage) {
      case 0:
        // Landing Page
        return <Landing changePage={changePage} />
      case 1:
        // Player vs Computer
        return <ComputerMatch />
      default:
        return
    }
  }

  const GetLoadingStyle = () => {
    switch (loading) {
      case LoadingState.PRE:
        return "pre"
      case LoadingState.LOADING:
        return "during"
      case LoadingState.POST:
        return "post"
      default:
        return "NULL"
    }
  }

  return (
    <>
      <div className={"fade-" + GetLoadingStyle()}>
        <div className="loading-text">
          <h1>Loading</h1>
        </div>
      </div>
      <RenderPage />
    </>
  )
}

export default App
