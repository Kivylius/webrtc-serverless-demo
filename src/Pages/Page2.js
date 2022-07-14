import { useState, useEffect } from 'react';

const Page1 = ({ onChange }) => {
  const [url, setUrl] = useState("loading...");
  const [copy, setCopy] = useState("Copy");
  useEffect(() => {
    setUrl('http://testing.com/?id=123123213');
  }, [])
  const copyOnClick = () => {
    setCopy("✓ Copied");
    setTimeout(function() {
      onChange();
    }, 3000);
  }
  return (
    <div className="App">
      <h1>P2P Game - Loby</h1>
      <code>
        <h3>
          Send this url to you friend to join. <br />
        </h3>
        <div style={{ display:"flex"}}><input style={{ paddingLeft: 5, paddingRight: 5, width: "500px", textTransform: "lowercase" }} value={url}></input>
        {"-"}<button onClick={copyOnClick}><span>{copy}</span></button></div>
      </code>
      {/* <h2>Loby:</h2>
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">Id</div>
          <div class="col col-2">Name</div>
          <div class="col col-3">Ping</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">42235</div>
          <div class="col col-2" data-label="Customer Name">John Doe</div>
          <div class="col col-3" data-label="Amount">350</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">42442</div>
          <div class="col col-2" data-label="Customer Name">Jennifer Smith</div>
          <div class="col col-3" data-label="Amount">220</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">42257</div>
          <div class="col col-2" data-label="Customer Name">John Smith</div>
          <div class="col col-3" data-label="Amount">341</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">42311</div>
          <div class="col col-2" data-label="Customer Name">John Carpenter</div>
          <div class="col col-3" data-label="Amount">115</div>
        </li>
      </ul> */}
    </div>
  )
}

export default Page1;