import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
        
        <div className="home__row">
        <Product id="12345" title="The learn startup" price={29.99} image="https://m.media-amazon.com/images/I/41CBY19J0eL._AC_SY240_.jpg" rating={5}/>
        <Product id="12346" title="The learn startup" price={29.99} image="https://m.media-amazon.com/images/I/41CBY19J0eL._AC_SY240_.jpg" rating={4}/>
        </div>

        <div className="home__row">
        <Product id="12347" title="The learn startup" price={29.99} image="https://m.media-amazon.com/images/I/41CBY19J0eL._AC_SY240_.jpg" rating={3}/>
        <Product id="12348" title="The learn startup" price={29.99} image="https://m.media-amazon.com/images/I/41CBY19J0eL._AC_SY240_.jpg" rating={5}/>
        <Product id="12349" title="The learn startup" price={29.99} image="https://m.media-amazon.com/images/I/41CBY19J0eL._AC_SY240_.jpg" rating={5}/>
                
        </div>

        <div className="home__row">
        <Product title="The learn startup" price={29.99} image="https://m.media-amazon.com/images/I/41CBY19J0eL._AC_SY240_.jpg" rating={5}/>
        
        </div>                
    
      </div>
    </div>
  );
}

export default Home;
