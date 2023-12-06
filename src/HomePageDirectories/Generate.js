import React from "react";

function GeneratePage() {
  return (
    <div>
      <h1 className="text-white text-2x1 font-bold mb-2">Generate Page</h1>
      <label for="Keyword">
        <span class="keyWord">Keyword</span>
        <input type="text" name="Keyword"></input>
      </label>

      <button className="generateButton">Generate</button>
    </div>
  );
}

export default GeneratePage;
