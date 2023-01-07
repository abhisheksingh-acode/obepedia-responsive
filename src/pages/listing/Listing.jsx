import React, { useState, useEffect, useContext } from "react";

import "./listing.css";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import logo from "../../images/white-logo.png";
import Rightside from "../../components/rightside/Rightside";
import Banimg from "../../images/banner2.png";
import Grid from "../../components/grid/Grid";

// import List from '../../components/list/List';
import Filter from "../../components/filter/Filter";
import Footer from "../../components/footer/Footer";
import MobFilter from "../../components/Mobfilter/MobFilter";
import MobList from "../../components/Moblist/MobList";
import axios from "axios";
// import { useParams } from 'react-router-dom';
import SearchContext from "../../context/SearchContext";

const Listing = () => {
  // const {key} = useParams('')

  const [Data, setData] = useState(false);
  const { search, setSearch } = useContext(SearchContext);

  async function fetchData() {
    try {
      if (search.name.length > 0 || search.location.length > 0) {
        console.log("available");
        const searchResponse = await axios.get(
          `https://jellyfish-app-4v5ou.ondigitalocean.app/user/searchinstitute?key=${search.name}&location=${search.location}`
        );
        console.log(searchResponse.data.response);
        setData(searchResponse.data.response);
      } else {
        console.log("not available");
        const response = await axios.get(
          "https://jellyfish-app-4v5ou.ondigitalocean.app/user/institute/getallinstitute"
        );
        // const response = await axios.get(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/search/${key}`)
        console.log(response.data);
        setData(response.data);
      }
    } catch (error) {
      setData(false);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [search]);

  // Data !== null &&
  return (
    Data && (
      <React.Fragment>
        {/* <div className="green-color">
        <Navbar logoimg={logo} />
      </div> */}

        <div className="upsc-background">
          <Navbar logoimg={logo} />
        </div>
        <div className="listing-page">
          <Banner
            bannerimg={Banimg}
            title="Institute Of JEE Advance In delhi"
          />

          <MobFilter />

          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <Filter />
              <div className="row">
                {Data.map((item) => (
                  <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="mob-list">
                      <MobList
                        image={item.image}
                        name={item.name}
                        location={item.location}
                        institute_id={item.institute_id}
                        about={item.about}
                      />
                    </div>
                    <div className="pc-grid">
                      <Grid
                        image={item.image}
                        name={item.name}
                        location={item.location}
                        institute_id={item.institute_id}
                        about={item.about}
                      />
                    </div>
                  </div>
                ))}
                {/* <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="mob-list">
                  <MobList />
                </div>
                <div className="pc-grid">
                  <Grid />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="mob-list">
                  <MobList />
                </div>
                <div className="pc-grid">
                  <Grid />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="mob-list">
                  <MobList />
                </div>
                <div className="pc-grid">
                  <Grid />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="pc-grid">
                  <Grid />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="pc-grid">
                  <Grid />
                </div>
              </div> */}
              </div>

              {/*             

            <List />
            <List />
            <List />   */}
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <div className="rigthside p-0 p-sm-5">
                <Rightside />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    )
  );
};

export default Listing;
