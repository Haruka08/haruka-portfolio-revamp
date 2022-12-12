import React from 'react';
import "../css/about.css"

export default function About() {
  return (
        <div id="about">
            <img id="aboutImg" src={require("../images/haruka-photo.jpg")} alt="Haruka"></img>
            <p id="aboutText">
                Hi! Welcome to my portfolio, my name is Haruka.
                I'm from Japan but spend over 20 years in the UK studying and working in automotive industry.
                Since having a taste of programming through work using Microsoft Excel and VBA etc. I found myself enjoying the process and feeling exhilarated when the program worked as I intended!
                This inspired me to enroll myself onto a coding bootcamp to learn the trade in detail!
                I'm new to web development but I love problem solving and I will tackle any bugs with enthusiasm!
            </p>
        </div>
    );
}


// const styles = {
//   imgStyle: {
//     width: 370,
//     height: 500,
//   },
//   paragraphStyle: {
//     color: 'black',
//     padding: 10,
//   },
// };

// style={styles.imgStyle}