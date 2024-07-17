import React from "react";
import ReactDOM from "react-dom/client";
///import StarRating from "./components/StarRating";
import "./index.css";
import App from "./App";

// function StarRatingAPI() {
//   const [ratingAPI, setRatingAPI] = useState(0);

//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         size={70}
//         onsetAPI={setRatingAPI}
//       />
//       <p>This movie was rated {ratingAPI} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating="5" />
    <StarRating size={50} color="red" />
    <StarRatingAPI /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
