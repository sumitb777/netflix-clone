import React, { useEffect, useRef, useState } from 'react'
import Genresapi from '../APIs/Genresapi'
import { useNavigate } from 'react-router-dom'

const Moviegenresrow = ({ id, index_ }) => {

    let Navigate = useNavigate();
    const screenWidth = window.innerWidth;
    const [movieList, setMovieList] = useState([])
    let elementref = useRef();
    const [imgvalue, setimgvalue] = useState([])
    useEffect(() => {
        getgenresmovieslist()
    }, [])

    const getgenresmovieslist = () => {

        Genresapi.MovieByGenreId(id).then(res => {
            console.log(res.data.results)
            const result = res.data.results
            setMovieList(result)
            // setimgvalue(movieList.)

        })
    }

    const rightslide = (ele) => {
        ele.scrollLeft += screenWidth + 60

    }
    const leftslide = (ele) => {
        ele.scrollLeft -= screenWidth - 60

    }


    return (

        <div className=' position-relative '>


            <div className='arrowlm position-absolute d-flex  align-items-center  justify-content-between    z-3 '>
                <p className=' btn h-100 d-flex  align-items-center  justify-content-between  '
                    onClick={() => leftslide(elementref.current)}
                ><i class="fa-solid fa-chevron-left fa-2xl left  " style={{ color: '#c7cdd6', }} ></i></p>
            </div>


            <div className="scrolling-wrapper   d-flex      " ref={elementref}>

                {movieList.map((value, index) => {
                    // console.log(movieinfo.length)
                    // console.log(value)
                    // console.log(typeof (movieinfo))
                    // console.log((index))
                    // let mimg = value[index].known_for[index].poster_path;
                    return (



                        <div
                            className='card w-25 bg-transparent  text-white text-start'
                            onClick={() => { Navigate(`/deatils/${value.id}`) }}
                        >
                            {/* <p className='h6 flex-wrap'>{value.title}</p> */}
                            <img className=' ' src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt='' />


                        </div>

                    )
                })}
            </div>

            <div className='arrowrm position-absolute  d-flex  align-items-center  justify-content-between    z-3 '>
                <p className='btn h-100 d-flex  align-items-center  justify-content-between '
                    onClick={() => rightslide(elementref.current)}><i class="fa-solid fa-chevron-right fa-2xl " style={{ color: '#c7cdd6', }}></i></p>
            </div>
        </div>

    )
}

export default Moviegenresrow