import React from 'react';
import {render} from 'react-dom';

function HelloWorld () {
    return (
        <div>
            <h1>
                Hello World
            </h1>
        </div>
    )   
}


function Article () {

    return (
        <div>
            <h2>Title</h2>
            <section>body</section>
        </div>
    )
}

render(<HelloWorld/>, document.querySelector('#root'))