import React from 'react';

function AlbumList({albums}) {
    console.log(albums);
    return (
        <div className="row">
            {
                albums.map((album,index)=>(
                    <div className="col-md-4" key={index}>
                        <div className="card" style={{padding: '20px', margin:'10px'}}>
                        <a href="/photo" target="_blank" rel="noopener noreferrer">
                        <h5 className="card-title">{album.title}</h5>
                        </a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AlbumList
