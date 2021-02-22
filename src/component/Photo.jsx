import React from 'react'

function Photo({photos}) { 
    console.log(photos);
    return (
        <div>
            <div className="row">
                {photos.map((photo,index)=>
                    <div className="col-md-4 col-sm-5" key={index}>
                        <div className="card" style={{width: '18rem'}}>
                        <img src={photo.thumbnailUrl}className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{photo.title}</h5>
                        <a href={photo.url} target="_blank" rel="noopener noreferrer">Link</a>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Photo
