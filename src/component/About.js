import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className=''>
                {/* <main class="px-3" id="topHeader">
                    <h1>About US</h1>
                    <p class="lead">Cover is a one-page template for building simple and beautiful home pages. 
                    Cover is a one-page template for buCover is a one-page template for buCover is a one-page template for buDownload, 
                    edit the text, and add your own fullscreen background photo to make it your own.</p>
                </main> */}
                
                <div className="bott">
                    <img src= 'https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg'
                    width="100%" height="655px" alt='' />
                    <div className="centered"> Cover is a one-page template for building simple and beautiful home pages. 
                    Cover is a one-page template for buCover is a one-page template for buCover is a one-page template for buDownload, 
                    edit the text, and add your own fullscreen background photo to make it your own. </div>
                </div>
            </div>

        )
    }
}
