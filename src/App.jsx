import React, { useState } from "react";
import "./App.css"
const initialInfo = [
  {
    id: 1,
    images: "src/img/img-1.jpg",
    title: "Ibrahim",
    age: "20 years",
  },
  {
    id: 2,
    images: "src/img/img-2.jpg",
    title: "Hester Hogan",
    age: "25 years",
  },
  {
    id: 3,
    images: "src/img/img-3.jpg",
    title: "Larry Little",
    age: "36 years",
  },
  {
    id: 4,
    images: "src/img/img-8.jpg",
    title: "Sean Walsh",
    age: "28 years",
  },
  {
    id: 5,
    images: "src/img/img-7.jpg",
    title: "Lola Gardner",
    age: "29 years",
  },
];

function App() {
  const [index, setIndex] = useState(initialInfo);

  const clearData = () => {
    setIndex([]);
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="title">{index.length} Birthday today</h1>
        <div className="content-container">
          <div className="content-container">
            {index.map(({ id, images, title, age }) => {
              return (
                <li key={id}>
                  <div className="person">
                    <img src={images} alt={title} />
                    <div className="name">
                      <h4 className="name">{title}</h4>
                      <p className="name">{age}</p>
                    </div>
                  </div>
                </li>
              );
            })}
            <button onClick={clearData} className="btn-clear" id="btn-clear">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
