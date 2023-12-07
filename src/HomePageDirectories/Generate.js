import React from "react";

function GeneratePage() {
  return (
    // Add 'items-center justify-center min-h-screen' for centering
    <div className="flex flex-col  min-h-screen bg-black p-10"> 
      <h1 className="text-white text-2xl font-bold mb-2">Generate Page</h1> 
        <span className="text-white text-base font-bold">Keyword</span>
        <input type="text" name="Keyword" className="text-black mt-2 mb-2 p-2"/>

        <span className="text-white text-base font-bold"># of Blogs</span>
        <input type="number" name="Keyword" className="text-black mt-2 mb-2 p-2"/>
      
      <button className="text-white px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">Generate</button> // Add styles for the button
    </div>
  );
}

export default GeneratePage;


