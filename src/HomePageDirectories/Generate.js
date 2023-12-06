import React from "react";

function numberOfBlogs(blogs){
  
}


export default function GeneratePage() {
  return (
    <div>
      <h1 className="text-white text-2x1 font-bold mb-2">Generate Page</h1>
      <label for="Keyword">
        <span className="text-white text-2x1 font-bold mb-2">Keyword: </span>
        <input type="text" name="Keyword"></input>
      </label>
      <label for="propNumber">
        <span className="text-white text-2x1 font-bold mb-2">Enter number of Blogs: </span>
        <input type="number" name="propNumber" min={1} max={200} value={blogs}></input>
        <input type="submit" onClick={numberOfBlogs(blogs)}></input>
      </label>

      
    

      <button className="generateButton">Generate</button>
    </div>
  );
}


