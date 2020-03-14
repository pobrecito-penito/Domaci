import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';



function App () {

    return (
        <Card img={'https://cdn.shopify.com/s/files/1/1061/1924/products/Nerd_Emoji_Icon_4ab932f8-9ec9-4180-8420-c74b84546f57.png?v=1485573468'}
            string={'Nerd'}></Card>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));


