import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Bigcard from './Bigcard';


function Detail() {
    const [data, setdata] = useState([])
    console.log(useParams())
    const { id } = useParams()
    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows/'+id)
            .then(res => {
                console.log('resssss', res)
                setdata(res.data)
                console.log(data)
            }
            )
            .catch(e => console.log(e))

    }, [])
    return (
        <div>
            <Bigcard country_name={data.network?data.network.country.name:'none'} image={data.image?data.image.original:'none'} name={data.name} language={data.language} name={data.name} premiered={data.premiered} rating={data.rating?data.rating.average:'none'} runtime={data.runtime} status={data.status} summary={data.summary} type={data.type} name={data.name} weight={data.weight} />
        </div>
    )
}

export default Detail
