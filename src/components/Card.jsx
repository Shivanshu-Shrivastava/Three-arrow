import React from 'react'
import dateformat from 'dateformat'
import { Link } from 'react-router-dom'

function Card(props) {
    function cahD(date){
        return dateformat(date,"dS mmmm yyyy")
    }
    return (
        <>
        <Link to={'details/'+props.id}  className="card p-4 m-4 container mx-auto mb-3" style={{width:'unset',maxWidth:713+'px'}}>
            <div className="row g-0">
                <div className="col-md-4 my-auto">
                    <img classNameName="card-img-top mx-auto" src={props.image} alt="Card image cap" />

                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{props.name}</h2>
                        <p className="card-text"><span className='fs'>Language: </span>{props.language}</p>
                        <p className="card-text"><span className='fs'>Genres: </span>{props.genres}</p>
                        <p className="card-text"><span className='fs'>Runtime: </span>{props.runtime}</p>
                        <p className="card-text"><span className='fs'>Premiered: </span>{cahD(new Date(props.premiered))}</p>
                        <p className="card-text"><span className='fs'>Rating: </span>{props.rating}</p>
                        <p className="card-text"><span className='fs'>country: </span>{props.country_name}</p>
                    </div>
                </div>
            </div>
        </Link>
        </>

    )
}

export default Card
