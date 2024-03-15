import React from "react";

export function MovieTitle ({emoji}){
    
    return(
        <>
            <div>
                <h1 role="img" aria-label="emoji">{emoji}</h1>
            </div>
        </>
    )
}
