import React from 'react'

const NewsItem =(props)=> {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;   
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
            <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2024/07/04/1600x900/3-0-103769130-iStock-1182812188-0_1679850494801_1720072960769.jpg"}  className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
}
export default NewsItem