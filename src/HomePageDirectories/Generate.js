import React from "react";

function GeneratePage() {
    return (
        <div>
            <label for="Keyword">
                <span class="keyWord">Keyword</span>
                <input type="text" name="Keyword"></input>
            </label>





            <button className="generateButton">Generate</button>
        </div>
    );
}

export default GeneratePage();

