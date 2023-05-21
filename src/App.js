import React from "react"
import Header from "./HeaderComponents/Header"
import Meme from "./MemeComponent/Meme"
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}


// git init
// git add -A
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/khushichhonkare/Project02.git
// git push -u origin main