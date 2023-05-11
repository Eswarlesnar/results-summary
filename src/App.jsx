import "./App.css";
import memoryImage from "./assets/images/icon-memory.svg";
import reactionImage from "./assets/images/icon-reaction.svg";
import verbalImage from "./assets/images/icon-verbal.svg";
import visualImage from "./assets/images/icon-visual.svg";

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: reactionImage
  },
  {
    category: "Memory",
    score: 92,
    icon: memoryImage
  },
  {
    category: "Verbal",
    score: 61,
    icon: verbalImage
  },
  {
    category: "Visual",
    score: 72,
    icon: visualImage
  }
];

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="firstDiv">
          <h3>Your Result</h3>
          <div className="circle">
            <div>
              <p>76</p>
              <p>of 100</p>
            </div>
          </div>
          <div className="firstDiv-footer">
            <h2>Great</h2>
            <p>You scored higher than 65% of</p>
            <p>the people who have taken</p>
            <p>these tests</p>
          </div>
        </div>
        <div className="secondDiv">
          <h3>Summary</h3>
          <div className="results">
            {data.map((item) => {
              return (
                <div className={`${item.category} resultBox`}>
                  <div>
                    <span>
                      <img src={item.icon} alt={item.category} />
                    </span>
                    <span>{item.category}</span>
                  </div>
                  <div className="marks">
                    <span>{item.score}</span>
                    <span className="greyColor">/</span>
                    <span className="greyColor">100</span>
                  </div>
                </div>
              );
            })}
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}


export default App
