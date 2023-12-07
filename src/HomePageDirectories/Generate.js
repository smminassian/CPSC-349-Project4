import React, { useState } from "react";
import OpenAI from "openai";

function GeneratePage() {
  const [keyword, setKeyword] = useState("");
  const [numBlogs, setNumBlogs] = useState(1);
  const [generatedBlogs, setGeneratedBlogs] = useState([]);
  
  const generateBlogs = async () => {
    const openai = new OpenAI({apiKey: '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', dangerouslyAllowBrowser: true});
    
    let blogs = [];
    for (let i = 0; i < numBlogs; i++) {
      try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Write an SEO optimized blog about ${keyword}.`,
          temperature: 0.7,
          max_tokens: 2048,
        });
        blogs.push(response.data.choices[0].text);
      } catch (error) {
        console.error('Error generating blogs:', error);
        // Handle error appropriately
      }
    }
    
    setGeneratedBlogs(blogs);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black p-10"> 
      <h1 className="text-white text-2xl font-bold mb-2">Generate Page</h1> 
      
      <span className="text-white text-base font-bold">Keyword</span>
      <input 
        type="text" 
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="text-black mt-2 mb-2 p-2"
      />

      <span className="text-white text-base font-bold"># of Blogs</span>
      <input 
        type="number" 
        value={numBlogs}
        onChange={(e) => setNumBlogs(parseInt(e.target.value))}
        className="text-black mt-2 mb-2 p-2"
      />
      
      <button 
        onClick={generateBlogs}
        className="text-white px-4 py-2 bg-blue-500 rounded hover:bg-blue-700"
      >
        Generate
      </button>

      
      {generatedBlogs.map((blog, index) => (
        <div key={index} className="text-white mt-4">
          <h2 className="text-xl font-bold">Blog {index + 1}</h2>
          <p>{blog}</p>
        </div>
      ))}
    </div>
  );
}

export default GeneratePage;


