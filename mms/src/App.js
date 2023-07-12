import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  document.body.style = "background: white";
  return (
<div className="App-Main">
      <div className="Div-Test">
        MMS
      <div className='aka'>
        a.k.a. 
      </div>
      <div className='aka1'>
        Miért mérges Simon?
      </div>
      <img className='img' src="./Simon.png"  />
      <figcaption className='FBI'> Egy az FBI által szerzett képek közül Váradi Simonról </figcaption>
      <div className='description'> 
      Önt is foglalkoztatja az az évtizedek óta keringő kérdés miszerint miért mérges Váradi Simon 1. kerületi lakos?
      A tudósok feljegyzések alapján már az 1800-as évek óta kutatják erre a világot lázban tartó kérdésre a választ.
      Viszont a tudomány végre kiemelkedő áttörést ért el és sikerült megalkotnunk az alkalmazást ami képes megmondani miért mérges Váradi Simon és mit fog tenni dühében.
      Amennyiben önt is foglalkoztatja ez a kérdés csak ma teljesen ingyen használhatja az <span className='bold'>MMS</span> (Miért mérges Simon?) alkalmazást amin kollégáink hónapokat dolgoztak. 
      <br></br><span className='center'>Világosodjon fel ön is ma!</span>
      </div>
      <button className="Button1" onClick={randomize}>
        Miért mérges Simon?
      </button>
      <div id="result">
      </div>
      <div id="w"></div>
      <div id="whathappens">

      </div>
    </div>
    </div>
  );
}

  function randomize()
  {
    console.log("works");
    const whm = 
    [
      "kifagyott a gépe",
      "nincs igaza",
      "mert nő és nőket néz (based)",
      "megölték R6-ban",
      "kifagyott a gépe megint",
      "ráesett a polc",
      "a testvérei faszságokat kérdezgetnek tőle játék közben",
      "a testvérei faszságokat kérdezgetnek általánosságban",
      "apukája megverte",
      "Berni megverte",
      "elvesztette a LOL matchet és a gépe is kifagyott",
      "szotyizik",
      "Barni fasza óriási",
      "no ass",
      "bekakilt órán"  
    ];
    document.getElementById("result").innerHTML = "Mert " + whm[(Math.floor(Math.random() * whm.length))];
    document.getElementById("w").innerHTML = "Mit tesz:";  
    const wh = 
    [
      "Megüti Barnit",
      "Megüti apukáját",
      "Beveri a falat",
      "Leszidja a falat",
      "Leszidja Barnit", 
      "Leszidja Bernit",
      "Megüti Katát",
      "Leugrik a padról",
      "Beveri a képernyőt Máté telefonján",
      "Megveri Bencét",
      "Rászarik Bencére",
      "Elkezd szotyizni",
      "Lepisili a falat",
      "Megveri Csabit",
      "Benyom egy protein shaket",
      "Megeszi a cipőjét",
      "Goofy lesz",
      "Bealszik",
      "Megveri a gépét",
      "Megveri a betont"
    ]
    document.getElementById("whathappens").innerHTML = wh[(Math.floor(Math.random() * wh.length))];
  }
export default App;
