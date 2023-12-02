import React, { useRef, useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Genresapi from '../APIs/Genresapi'
import MovieGenres from './MovieGenres';


const Movierow = () => {
    let Navigate = useNavigate();
    const [tranding, settranding] = useState([]);
    const [movieinfo, setmovieinfo] = useState([]);
    const [moviepopular, setmoviepopular] = useState([]);
    const [mtoprated, setmtoprated] = useState([]);
    const [tvtoprated, settvtoprated] = useState([]);
    const [tvpopular, settvpopular] = useState([]);
    const screenWidth = window.innerWidth;
    const [detail, deatail] = useState([]);
    const elementref = useRef();
    const elementref2 = useRef();
    const elementref3 = useRef();
    const elementref4 = useRef();
    const elementref5 = useRef();





    const gettranding = async () => {

        await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=c0d670d047a1f673651ed4c9bd561204').
            then(

                (res) => {
                    const result = res.data.results
                    settranding(result)

                })
    }

    const getmovie = async () => {

        await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c0d670d047a1f673651ed4c9bd561204').
            then(

                (res) => {
                    const result = res.data.results
                    setmovieinfo(result)

                })
    }
    const getPopular = async () => {

        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c0d670d047a1f673651ed4c9bd561204').
            then(

                (res) => {
                    const result = res.data.results
                    setmoviepopular(result)

                })
    }

    const getTopRated = async () => {

        await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c0d670d047a1f673651ed4c9bd561204').
            then(

                (res) => {
                    const result = res.data.results
                    setmtoprated(result)

                })
    }
    const gettvpop = async () => {

        await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=c0d670d047a1f673651ed4c9bd561204').
            then(

                (res) => {
                    const result = res.data.results
                    settvpopular(result)

                })
    }
    const gettvTopRated = async () => {

        await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=c0d670d047a1f673651ed4c9bd561204').
            then(

                (res) => {
                    const result = res.data.results
                    settvtoprated(result)

                })
    }



    console.log(movieinfo)


    const rightslide = (ele) => {
        ele.scrollLeft += screenWidth + 60

    }
    const leftslide = (ele) => {
        ele.scrollLeft -= screenWidth - 60

    }

    useEffect(() => {
        gettranding()
        getmovie()
        getPopular()
        getTopRated()
        gettvpop()
        gettvTopRated()
        console.log(movieinfo.length)
        // console.log(detail)
    }, [])

    return (
        <>{tranding && tvtoprated !== null ? (







            <section className=' container-fluid'>
                <div className=" mt-5  bg-black ">


                    <Carousel className='Carouselp'>
                        {tranding.map((value, index) => {

                            return (

                                <Carousel.Item onClick={() => { Navigate(`/deatils/${value.id}`) }} >

                                    <img className='btn ' src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt='' />
                                    <Carousel.Caption>

                                        <p>{value.name}</p>

                                        <p className='h6'>{value.title}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}

                    </Carousel>

                </div>

                <div className=' position-relative '>
                    <div className='text-white text-start'>
                        <h3> Movies now playing</h3>
                    </div>
                    <div className='arrowl position-absolute d-flex  align-items-center  justify-content-between    z-3 '>
                        <p className=' btn h-100 d-flex  align-items-center  justify-content-between  '
                            onClick={() => leftslide(elementref.current)}
                        ><i class="fa-solid fa-chevron-left fa-2xl left  " style={{ color: '#c7cdd6', }} ></i></p>
                    </div>
                    <div className="scrolling-wrapper overflow-x-scroll    m-auto   d-flex  " ref={elementref}>

                        {movieinfo.map((value, index) => {

                            return (

                                <div className='card w-25 bg-transparent  text-white text-start' key={value.id}
                                    onClick={() => { Navigate(`/deatils/${value.id}`) }} >
                                    <img className=' ' src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt='' />
                                    <p>{value.name}</p>
                                </div>

                            )
                        })}
                    </div>
                    <div className='arrowr position-absolute  d-flex  align-items-center  justify-content-between    z-3 '>
                        <p className='btn h-100 d-flex  align-items-center  justify-content-between '
                            onClick={() => rightslide(elementref.current)}><i class="fa-solid fa-chevron-right fa-2xl " style={{ color: '#c7cdd6', }}></i></p>
                    </div>
                </div>
                <div className=" bg-black mt-4 position-relative ">
                    <div className='text-white text-start'>
                        <h3>Most Top Rated Movies</h3>
                    </div>
                    <div className='arrowl position-absolute  d-flex  align-items-center  justify-content-between   z-3 '>
                        <p className='btn h-100 d-flex  align-items-center  justify-content-between  ' onClick={() => leftslide(elementref2.current)}
                        ><i class="fa-solid fa-chevron-left fa-2xl left " style={{ color: '#c7cdd6', }} ></i></p>
                    </div>

                    <div className="scrolling-wrapper overflow-x-scroll  position-relative d-flex gap-2  " ref={elementref2}>
                        {mtoprated.map((value, index) => {

                            console.log(value.id)

                            return (


                                <div className='card w-25 bg-transparent text-white text-start ' key={value.id}
                                    onClick={() => { Navigate(`/deatils/${value.id}`) }}>
                                    {/* <p className='h6 text-white'>{value.title}</p> */}
                                    <img className=' ' src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt='' />
                                    <p>{value.name}</p>

                                </div>

                            )
                        })}
                    </div>
                    <div className='arrowr position-absolute  d-flex  align-items-center  justify-content-between   z-3 '>
                        <p className='btn h-100 d-flex  align-items-center  justify-content-between '
                            onClick={() => rightslide(elementref2.current)}><i class="fa-solid fa-chevron-right fa-2xl left" style={{ color: '#c7cdd6', }}></i></p>
                    </div>
                </div>
                <div className=" mt-4 position-relative ">
                    <div className='text-white text-start'>
                        <h3>Most popular  Movies</h3>
                    </div>
                    <div className='arrowl position-absolute  d-flex  align-items-center  justify-content-between   z-3 '>
                        <p className='btn h-100 d-flex  align-items-center  justify-content-between ' onClick={() => leftslide(elementref3.current)}
                        ><i class="fa-solid fa-chevron-left fa-2xl left " style={{ color: '#c7cdd6', }} ></i></p>
                    </div>

                    <div className="scrolling-wrapper overflow-x-scroll  d-flex " ref={elementref3} >

                        {moviepopular.map((value, index) => {

                            return (
                                <div className='card w-25 bg-transparent text-white text-start ' key={value.id}
                                    onClick={() => { Navigate(`/deatils/${value.id}`) }}>
                                    <img className='h-100 ' src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt='' />
                                </div>
                            )
                        })}
                    </div>
                    <div className='arrowr position-absolute d-flex  align-items-center  justify-content-between    z-3 '>
                        <p className='btn h-100 d-flex  align-items-center  justify-content-between '
                            onClick={() => rightslide(elementref3.current)}><i class="fa-solid fa-chevron-right fa-2xl left" style={{ color: '#c7cdd6', }}></i></p>
                    </div>
                </div>

                {/*                                   tv                          */}
                <div className=" mt-4 position-relative">
                    <div className='text-white text-start'>
                        <h3>Most Popular TV Shows</h3>
                    </div>
                    <div className='arrowl position-absolute d-flex  align-items-center  justify-content-between    z-3 '>
                        <p className='btn h-100 d-flex  align-items-center  justify-content-between ' onClick={() => leftslide(elementref4.current)}
                        ><i class="fa-solid fa-chevron-left fa-2xl left " style={{ color: '#c7cdd6', }} ></i></p>
                    </div>

                    <div className="scrolling-wrapper overflow-x-scroll position-relative d-flex  " ref={elementref4}>

                        {tvpopular.map((value, index) => {

                            return (
                                <div className='card w-25 bg-transparent text-white text-start  '
                                    onClick={() => { Navigate(`/tvdetails/${value.id}`) }} key={value.id}>
                                    <img className='h-100 ' src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt='' />
                                </div>
                            )
                        })}
                    </div>
                    <div className='arrowr position-absolute  d-flex  align-items-center  justify-content-between   z-3 '>
                        <p className='btn h-100 d-flex  align-items-center  justify-content-between '
                            onClick={() => rightslide(elementref4.current)}><i class="fa-solid fa-chevron-right fa-2xl left" style={{ color: '#c7cdd6', }}></i></p>
                    </div>
                </div>
                <div className=" mt-4 position-relative  ">
                    <div className='text-white text-start'>
                        <h3>Most Top Rated TV Shows</h3>
                    </div>
                    <div className='arrowl position-absolute  d-flex  align-items-center  justify-content-between   z-3 '>
                        <p className='btn h-100 d-flex  align-items-center  justify-content-between ' onClick={() => leftslide(elementref5.current)}
                        ><i class="fa-solid fa-chevron-left fa-2xl left " style={{ color: '#c7cdd6', }} ></i></p>
                    </div>

                    <div className="scrolling-wrapper overflow-x-scroll position-relative d-flex  " ref={elementref5}>

                        {tvtoprated.map((value, index) => {

                            return (
                                <div className='card w-25 bg-transparent text-white text-start  ' key={value.id}
                                    onClick={() => { Navigate(`/tvdetails/${value.id}`) }}>
                                    <img className='h-100 ' src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt='' />
                                </div>
                            )
                        })}
                    </div>
                    <div className='arrowr position-absolute d-flex  align-items-center  justify-content-between    z-3 '>
                        <p className='btn h-100 d-flex  align-items-center  justify-content-between '
                            onClick={() => rightslide(elementref5.current)}><i class="fa-solid fa-chevron-right fa-2xl left" style={{ color: '#c7cdd6', }}></i></p>
                    </div>

                </div>


                <MovieGenres />
                <div className='py-5 bg-transparent text-white'>
                    <p className='mt-4'>NetFlix Clone</p>
                    <p>@ Sumit</p>
                </div>



            </section >





        ) : null}
        </>


    )
}

export default Movierow;