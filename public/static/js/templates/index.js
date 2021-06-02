"use strict";
export const destinationContainer = (  ) => {
    return `
    <div 
        id="custom-overlay" 
    >
        <h1>목적지</h1>
    </div>`;
}

export const placeTitleContainer = ( id, placeName ) => {
    console.log(id);
    return `
    <div 
        id="custom-overlay" 
    > 
        <a>
            <span class="title">${ placeName }</span> 
        </a> 
    </div>`;
}