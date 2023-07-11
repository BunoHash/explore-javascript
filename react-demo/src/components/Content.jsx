import { useState } from "react";

const Content = () => {
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');
    const handleClick = () => {
      setDisplayText(text);
    };
  
    return (
      <div>
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter some text"
          />
        </div>
        
        <button onClick={handleClick}>Display Text</button>
        <p>{displayText}</p>
      </div>
    );
  };

  export default Content;