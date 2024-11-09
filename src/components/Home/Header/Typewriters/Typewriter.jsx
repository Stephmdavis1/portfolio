import React from 'react'
import Typewriter from 'typewriter-effect';


function Typewriters() {
    return (

            <h4>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 40,
                        strings: ["Front End Developer","Aspiring Back End Developer","Plant Obsessed", "Fitness Fanatic", "Ice Cream Addicted"]
                    }}
                />
            </h4>
    )
}

export default Typewriters;