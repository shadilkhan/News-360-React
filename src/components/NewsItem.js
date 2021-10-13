import React from 'react'

const NewsItem=(props)=>{
        let {title,desc,imageUrl,newsUrl,author,publishedAt,source}=props;
        return (
            <div>
                <div className="row my-3"></div>
                <div className="card"><div>
                <span className=" badge rounded-pill bg-danger" style={{display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    right: '0'}}>
                    {source}</span></div>
                    <img src={!imageUrl?"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/05/0/0/Bitcoin-markets.jpg?ve=1&tl=1":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a  href={newsUrl} target="_blank" rel="noreferrer"className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
            </div>
        )
}
export default  NewsItem