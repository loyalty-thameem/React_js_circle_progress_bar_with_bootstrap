import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren
} from "react-circular-progressbar";
import "./App.css";
function App() {
  const [percentage, setPercentage] = useState(40);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 5000);
  }, [percentage]);

  return (
    <>
      <div className="p-1">
        <Card border="danger" style={{ width: "26rem" }}>
          <Card.Header>Customers</Card.Header>
          <Card.Body>
            <div className="d-flex">
              <div style={{ width: 150 }}>
                <CircularProgressbar
                  value={percentage}
                  // text={`${percentage}`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "butt",

                    // Text size
                    textSize: "20px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `#cc1f1f`,
                    textColor: "#000",
                    trailColor: "#ffbcb5",
                    backgroundColor: "#3e98c7"
                  })}
                />
              </div>
              <div style={{ position: "absolute", top: 110, left: 95 }}>
                <CircularProgressbarWithChildren value={66}>
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <img
                    style={{ width: 60, marginTop: 0 }}
                    src="https://cdni.iconscout.com/illustration/premium/thumb/online-taxi-booking-4705120-3928858.png?f=webp"
                    alt="doge"
                  />
                  <div
                    style={{
                      fontSize: 12,
                      marginTop: -5,
                      display: "inline-block",
                      paddingTop: "10px"
                    }}
                  >
                    <span className="pl-1">Today</span>
                    <h2>{`${percentage}`}</h2>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="d-flex flex-column justify-content-center pl-4">
                <div className="d-flex" style={{ fontSize: "10px" }}>
                  <div className="text-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    31%
                  </div>
                  <div className="pl-1">
                    <p>Compared to the last 7 to 14 days</p>
                  </div>
                </div>
                <div className="d-flex" style={{ fontSize: "10px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#ffbcb5",
                      marginTop: "2.5px"
                    }}
                  ></div>
                  <div className="pl-1">
                    <p>New Customers</p>
                  </div>
                </div>
                <div className="d-flex" style={{ fontSize: "10px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#cc1f1f",
                      marginTop: "2.5px"
                    }}
                  ></div>
                  <div className="pl-1">
                    <p>Repeated Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-right" style={{ cursor: "pointer" }}>
              View more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
                className="pl-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="p-1">
        <Card border="warning" style={{ width: "26rem" }}>
          <Card.Header>Drivers</Card.Header>
          <Card.Body>
            <div className="d-flex">
              <div style={{ width: 150 }}>
                <CircularProgressbar
                  value={percentage}
                  // text={`${percentage}`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "butt",

                    // Text size
                    textSize: "20px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `#faac0f`,
                    textColor: "#000",
                    trailColor: "#ffcf7d",
                    backgroundColor: "#3e98c7"
                  })}
                />
              </div>
              <div style={{ position: "absolute", top: 110, left: 95 }}>
                <CircularProgressbarWithChildren value={66}>
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <img
                    style={{ width: 60, marginTop: 0 }}
                    src="https://cdni.iconscout.com/illustration/premium/thumb/car-booking-service-4975058-4144419.png"
                    alt="doge"
                  />
                  <div
                    style={{
                      fontSize: 12,
                      marginTop: -5,
                      display: "inline-block",
                      paddingTop: "10px"
                    }}
                  >
                    <span className="pl-1">Today</span>
                    <h2>{`${percentage}`}</h2>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="d-flex flex-column justify-content-center pl-4">
                <div className="d-flex" style={{ fontSize: "10px" }}>
                  <div className="text-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    31%
                  </div>
                  <div className="pl-1">
                    <p>Compared to the last 7 to 14 days</p>
                  </div>
                </div>
                <div className="d-flex" style={{ fontSize: "10px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#f5d595",
                      marginTop: "2.5px"
                    }}
                  ></div>
                  <div className="pl-1">
                    <p>New Drivers</p>
                  </div>
                </div>
                <div className="d-flex" style={{ fontSize: "10px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#faac0f",
                      marginTop: "2.5px"
                    }}
                  ></div>
                  <div className="pl-1">
                    <p>Repeated Drivers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-right" style={{ cursor: "pointer" }}>
              View more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
                className="pl-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
