import React from 'react'
import dateformat from 'dateformat';


function Bigcard(props) {
    
    
    return (
        <div>
            <div style={{width:'unset'}} class="card mb-3">
                <img style={{width:600+'px',height:600+'px',borderRadius:50+'%'}} class="card-img-top bs mx-auto" src={props.image} alt="Card image cap" />
                <div className="card-body">
                        <h2 className="card-title text-center">{props.name}</h2>
                        <p className="card-text text-center"><span className='fs'>Language: </span>{props.language}</p>
                        <p className="card-text text-center"><span className='fs'>Genres: </span>{props.genres}</p>
                        <p className="card-text text-center"><span className='fs'>Runtime: </span>{props.runtime}</p>
                        <p className="card-text text-center"><span className='fs'>Weight: </span>{props.weight}</p>
                        <p className="card-text text-center"><span className='fs'>Status: </span>{props.status}</p>
                        <p className="card-text text-center"><span className='fs'>Type: </span>{props.type}</p>
                        <p className="card-text text-center"><span className='fs'>Rating: </span>{props.rating}</p>
                        <p className="card-text text-center"><span className='fs'>country: </span>{props.country_name}</p>
                        {props.summary?
                        <p className="card-text text-center text-justify"><span className='fs'>Detail: </span>{props.summary.replace(/(<([^>]+)>)/ig,'')}</p>:null
                    }
                    </div>
            </div>
        </div>
    )
}

export default Bigcard
