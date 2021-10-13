import React  from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect,useState } from 'react';

const News=(props)=> {
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [totalResults,setTotalResults] = useState(0);

   const capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    const updateNews=async()=>{

            props.setProgress(10);
            let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true);
            let data= await fetch(url);
            props.setProgress(30);
            let parseData = await data.json();
            props.setProgress(30);
            setArticles(parseData.articles);
            setTotalResults(parseData.totalResults);
            setLoading(false);
            props.setProgress(100);

    }
    //component lifecycle method it renders after the component is rendered
    
    useEffect(() => {
    document.title=` News360 - ${capitalizeFirstLetter(props.category)} `; 
    updateNews();
    // eslint-disable-next-line 
    }, [])

    // async componentDidMount(){
    
    // }

    // handlePrevClick=async()=>{
    //     setState({
    //         loading:true
    //     })
    //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cbc8e5cee1174e9d8f964515047f7a64&page=${state.page-1}&pagesize=${props.pageSize}`;
    //     let data= await fetch(url);
    //     let parseData = await data.json();
    //     setState({
    //       page:state.page-1,
    //       articles:parseData.articles,
    //       loading:false
    // })
//     setState({page:state.page-1})
//     updateNews();
// }
    // handleNextClick= async ()=>{
    //     if(!(state.page +1 > Math.ceil(state.totalResults/props.pageSize))){    
    //     setState({
    //         loading:true
    //     })
    //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cbc8e5cee1174e9d8f964515047f7a64&page=${state.page+1}&pagesize=${props.pageSize}`;
    //     let data= await fetch(url);
    //     let parseData = await data.json();
    //     setState({
    //       page:state.page+1,
    //       articles:parseData.articles,
    //       loading:false
    //     })
    // }
    // setState({page:state.page+1})
    // updateNews();
    // }
   const fetchMoreData = async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data= await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
    };

        return (
            <>
                <h1 className="text-center" style={{marginTop:"80px"}}>News360-Top {`${capitalizeFirstLetter(props.category)} Headlines`}</h1>
                {loading &&<Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length!==totalResults}
                    loader={<Spinner/>}
                    >
            <div className="container">
            <div className="row ">
                {articles.map((elements)=>{
                   return <div className="col-md-4" key={elements.url}>
                    <NewsItem title={elements.title} desc={elements.description} imageUrl={elements.urlToImage} newsUrl={elements.url} publishedAt={elements.publishedAt} author={elements.author} source={elements.source.name}/>
                    </div> })}
            </div> 
            </div>
                </InfiniteScroll>
            </>
        )
}
News.defaultProps={
    country:"in",
    pageSize:6,
    category:"general"
}

 News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
}

export default News
