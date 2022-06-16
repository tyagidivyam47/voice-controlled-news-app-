import NewsData from "./components/NewsData"

function App() {

  return (
    <div className="App">
      <div className="border bg-indigo-200 mx-96 mt-11 text-center font-mono ">
        <p>TIP:</p>
        <p>Press the mic button and speak "Get the news from general/sports/heath etc.. category"</p>
      </div>
      <NewsData />
    </div>
  )
}

export default App
