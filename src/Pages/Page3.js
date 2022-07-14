const Page1 = ({ onChange }) => {

  return (
    <div className="App">
      <h1>P2P Game - Waiting</h1>
      <h3>Waiting for you freind to generate passkey...</h3>
      <br />
      <br />
      <div style={{ display:"flex"}}><input style={{ paddingLeft: 15, paddingRight: 15, width: "300px", textTransform: "lowercase" }} placeholder="Enter Frends Passkey"></input>
        {"-"}<button onClick={() => alert("connected")}><span>GO</span></button></div>
    </div>
  )
}

export default Page1;