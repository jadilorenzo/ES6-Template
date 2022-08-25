import React, { useState, useEffect } from 'react'

const App = () => {
    const [charIndex, setCharIndex] = useState(0)
    const str = "---------"

    const rippleText = async () => {
        for (let index = 0; index < str.length; index++) {
            setCharIndex(index)
            await new Promise((res) => setTimeout(() => { res() }, 100))
        }
        setCharIndex(0)
        rippleText()
    }

    useEffect(() => {
        rippleText()
    }, [])

    console.log(charIndex)

    return (
        <div class='main'>
            <div className="title">
                <div class='title-text'>Hello World</div>
                {str.split("")
                    .map((char, i) => char !== " " ? <span className={`char ${ charIndex === i ? "char-up" : ""}`}>{char}</span> : " ")}
                <div className="motto">
                    The UNIVERSE is waiting...
                </div>
            </div>
        </div>
    )
}

export default App
