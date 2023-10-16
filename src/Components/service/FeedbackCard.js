import React, { useState } from "react";
import "./FeedbackCard.css";
import Navbars from "../Nav/Navbar";
function FeedbackCard() {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  };

  return (
    <>
      <Navbars />
      <div className="feedback-card">
        <h2>Feedback Collection</h2>
        <p>
          We value your opinion. Please take a moment to share your feedback
          with us:
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Enter your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="App">
        <br></br>
      </div>
    </>
  );
}

export default FeedbackCard;
