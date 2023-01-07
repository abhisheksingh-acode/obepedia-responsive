import React, { useContext, useState, useEffect } from "react";
import "./rating.css";
import imoji from "../../images/imoji.png";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import RatingContext from "../RatingContext";

const Rating = (props) => {
  // const { ratings, setRatings } =

  const { ratingAverage, setRatingAverage } = useContext(RatingContext);
  const [Loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = user.user._id;
  const token = user.token;

  const [data, setData] = useState(null);

  const [Val1, setVal1] = useState(0);
  const [Val2, setVal2] = useState(0);
  const [Val3, setVal3] = useState(0);
  const [Val4, setVal4] = useState(0);
  const [Val5, setVal5] = useState(0);
  const [Val6, setVal6] = useState(0);
  const [Val7, setVal7] = useState(0);
  const [Val8, setVal8] = useState(0);
  const [Val9, setVal9] = useState(0);
  const [Val10, setVal10] = useState(0);

  const resetSelect = () => {
    setVal1(0);
    setVal2(0);
    setVal3(0);
    setVal4(0);
    setVal5(0);
    setVal6(0);
    setVal7(0);
    setVal8(0);
    setVal9(0);
    setVal10(0);
  };

  const handleSent = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://jellyfish-app-4v5ou.ondigitalocean.app/user/sidebar/sidebarrating`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            val1: Val1,
            val2: Val2,
            val3: Val3,
            val4: Val4,
            val5: Val5,
            val6: Val6,
            val7: Val7,
            val8: Val8,
            val9: Val9,
            val10: Val10,
            obj_id: props.institute_id,
            user_id: user_id,
            overall:
              Number(Val1) +
              Number(Val2) +
              Number(Val3) +
              Number(Val4) +
              Number(Val5) +
              Number(Val6) +
              Number(Val7) +
              Number(Val8) +
              Number(Val9) +
              Number(Val10),
          }),
        }
      );

      const result = await response.json();
      setLoading(false);
      if (result) {
        fetchData();
        resetSelect();
      }
    } catch (error) {
      console.log(error);
      //   resetSelect();

      setLoading(false);
    }
  };

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://jellyfish-app-4v5ou.ondigitalocean.app/user/sidebar/getsidebarrating/${props.institute_id}`
      );
      setData(response.data);

      if (response) {
        setRatingAverage(() => {
          if (response.data.length > 1) {
            const total = response.data.reduce((a, b) => {
              return a.overall + b.overall;
            });

            const avg = total / response.data.length;
            return avg;
          }
          if (response.data.length === 1) {
            return response.data[0].overall;
          }
        });
        return 0;
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="rating-page">
        <div className="review">
          <h6>Reviews</h6>
          <h1></h1>
          <p>Overall Rating (Out of 10)</p>
          <div className="well well-sm">
            <div className="row">
              {/* {data.map(item=>( */}
              <div className="col-xs-12 col-md-6 text-center">
                <h1 className="rating-num">{ratingAverage}</h1>
                <div className="rating">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} className="color" />
                </div>
                <div>
                  <span className=" parah">
                    Based on {data ? data.length : 0} Verified Reviews
                  </span>
                </div>
              </div>
              {/* ))} */}
              <div className="col-xs-12 col-md-6">
                <div className="row rating-desc">
                  <div className="col-8 col-md-9">
                    <span className="sr-only">80%</span>
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3 text-right">
                    10 <AiFillStar />
                  </div>
                  <div className="col-8 col-md-9">
                    <span className="sr-only">80%</span>
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3 text-right">
                    9 <AiFillStar />
                  </div>
                  <div className="col-8 col-md-9">
                    <span className="sr-only">80%</span>
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3 text-right">
                    8 <AiFillStar />
                  </div>
                  <div className="col-8 col-md-9">
                    <span className="sr-only">80%</span>
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3 text-right">
                    7 <AiFillStar />
                  </div>
                  <div className="col-8 col-md-9">
                    <span className="sr-only">80%</span>
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3 text-right">
                    6 <AiFillStar />
                  </div>
                  <div className="col-8 col-md-9">
                    <span className="sr-only">80%</span>
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3 text-right">
                    5 <AiFillStar />
                  </div>
                  {/* <!-- end 5 --> */}
                  <div className="col-8 col-md-9">
                    <span className="sr-only">60%</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3 text-right">
                    4 <AiFillStar />
                  </div>
                  {/* <!-- end 4 --> */}
                  <div className="col-8 col-md-9">
                    <span className="sr-only">40%</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-info"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3 text-right">
                    3 <AiFillStar />
                  </div>
                  {/* <!-- end 3 --> */}
                  <div className="col-8 col-md-9">
                    <span className="sr-only">20%</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3 text-right">
                    2 <AiFillStar />
                  </div>
                  {/* <!-- end 2 --> */}

                  <div className="col-8 col-md-9">
                    <span className="sr-only">15%</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3 text-right">
                    1 <AiFillStar />
                  </div>
                  {/* end 1 */}
                </div>
                {/* end row  */}
              </div>
            </div>
          </div>
        </div>

        <div className="rate">
          <h6>Rate Us</h6>
          {/* <p>How to start UPSC Preparation from Zero Level?</p>
                    <img src={imoji} alt='imoji' />
                    <p>How to start UPSC Preparation from Zero Level?</p>
                    <img src={imoji} alt='imoji' />
                    <p>How to start UPSC Preparation from Zero Level?</p>
                    <img src={imoji} alt='imoji' />
                    <p>How to start UPSC Preparation from Zero Level?</p>
                    <img src={imoji} alt='imoji' /> */}
          <div className="row" style={{ gap: "5px" }}>
            <div onClick={(e) => setVal1(() => (Val1 == 1 ? 0 : 1))} className={`checkbox-container col-md-6 ${Val1 && "active"}`}>
              <input
                id="val1"
                type="checkbox"
                value={Val1}
              />
              <label htmlFor="val1">Faculty</label>
            </div>
            <div onClick={(e) => setVal2(() => (Val2 == 1 ? 0 : 1))} className={`checkbox-container col-md-6 ${Val2 && "active"}`}>
              <input
                id="val2"
                type="checkbox"
                value={Val2}
              />
              <label htmlFor="val2">City </label>
            </div>

            <div onClick={(e) => setVal3(() => (Val3 == 1 ? 0 : 1))} className={`checkbox-container col-md-6 ${Val3 && "active"}`}>
              <input
                id="val3"
                type="checkbox"
                value={Val3}
              />
              <label htmlFor="val3">Infrastructutre</label>
            </div>

            <div onClick={(e) => setVal4(() => (Val4 == 1 ? 0 : 1))} className={`checkbox-container col-md-6 ${Val4 && "active"}`}>
              <input
                id="val4"
                type="checkbox"
                value={Val4}
              />
              <label htmlFor="val4">Outbonding Process</label>
            </div>

            <div onClick={(e) => setVal5(() => (Val5 == 1 ? 0 : 1))} className={`checkbox-container col-md-6 ${Val5 && "active"}`}>
              <input
                id="val5"
                type="checkbox"
                value={Val5}
              />
              <label htmlFor="val5">Fees Stucture</label>
            </div>

            <div onClick={(e) => setVal6(() => (Val6 == 1 ? 0 : 1))} className={`checkbox-container col-md-6 ${Val6 && "active"}`}>
              <input
                id="val6"
                type="checkbox"
                value={Val6}
              />
              <label htmlFor="val6">Counselling </label>
            </div>

            <div onClick={(e) => setVal7(() => (Val7 == 1 ? 0 : 1))} className={`checkbox-container col-md-6 ${Val7 && "active"}`}>
              <input
                id="val7"
                type="checkbox"
                value={Val7}
              />
              <label htmlFor="val7">Course Rating</label>
            </div>

            <div onClick={(e) => setVal8(() => (Val8 == 1 ? 0 : 1))} className={`checkbox-container col-md-6 ${Val8 && "active"}`}>
              <input
                id="val8"
                type="checkbox"
                value={Val8}
              />
              <label htmlFor="val8">Online Faculty</label>
            </div>

            <div onClick={(e) => setVal9(() => (Val9 == 1 ? 0 : 1))} className={`checkbox-container col-md-6 ${Val9 && "active"}`}>
              <input
                id="val9"
                type="checkbox"
                value={Val9}
              />
              <label htmlFor="val9">Job Gaurentee</label>
            </div>

            <div onClick={(e) => setVal10(() => (Val10 == 1 ? 0 : 1))}  className={`checkbox-container col-md-6 ${Val10 && "active"}`}>
              <input
                id="val10"
                type="checkbox"
                value={Val10}
              />
              <label htmlFor="val10">Review</label>
            </div>
          </div>
        </div>
        <button onClick={handleSent}>{Loading ? "loading" : "submit"}</button>
      </div>
    </React.Fragment>
  );
};

export default Rating;
