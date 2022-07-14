const Page1 = ({ onChange }) => {

  return (
    <div className="App">
      <h1>P2P Game</h1>
      <main>
        <button onClick={onChange}>New Game</button>
        <button disabled><span>Resume</span></button>
        <button disabled>Settings</button>
      </main>
    </div>
  )
}

export default Page1;