import React from 'react'
import Emoji from './emoji'
import Description from './description'

const Card = ({img,string}) => {

    return (
        <>
            <Emoji src={img}></Emoji>
            <Description desc={string}></Description>
        </>
    )

}

export default Card