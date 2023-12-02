import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHref, useParams } from 'react-router-dom'
import Header from './Header';

const Details = () => {

    const { id } = useParams();
    let [info, setinfo] = useState([]);
    let { tvorm, settvorm } = useState(false)
    let [genere, setgenere] = useState([])

    const moviedeails = async () => {

        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c0d670d047a1f673651ed4c9bd561204`)
        setinfo(data)
        console.log(data)
        setgenere([...data.genres])
    }
    // const tvdeails = async () => {

    //     let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=c0d670d047a1f673651ed4c9bd561204`)
    //     setinfo(data)
    //     console.log(data)
    // } 



    useEffect(() => {

        moviedeails()
        // tvdeails()
    }, [id])
    console.log(genere)

    return (
        <div className=' container-fluid text-white bg-black'>
            <Header />
            <div className='col-12  m-auto text-white position-relative '>


                <div className='col-12 mt-4 text-white moviedeails '>
                    <img className=' moviedeailsimg '
                        src={`https://image.tmdb.org/t/p/w1280/${info.backdrop_path}`} alt='no  img found' />



                </div>
                <div className=' position-absolute  imgdetails col-5     '>
                    <div className=' text-start '>
                        <p className='h1'>{info.title} </p>

                        <p className='text-plot'>Runtime :{info.runtime}m </p>

                        <p>Genres :{genere.map((v) => {
                            return <span>{` ${v.name} `}</span>
                        })}</p>

                        {/* <p> Original Language = {info.spoken_languages[0].english_name}</p> */}

                        <p></p>

                    </div>
                    <div className=' d-none  d-md-block  mb-4 col-10' >

                        <p className='text-start mb-4 text-plot'>{info.overview}</p>
                    </div>

                </div>


            </div>
            <div className='d-flex col-10 col-md-7  gap-5 justify-content-between'>
                <div className='col-3 mt-3   '
                >
                    <a href={info.homepage} rel="noreferrer" target='_blank'>

                        <p className='btn btn-danger btn-outline-light btn-lg   text-start justify-content-start'>PlayMovie</p>
                    </a>

                </div>
                <div className=' mt-3 '>
                    <h3  >{info.title}</h3>
                    <p>{info.release_date}</p>
                </div >
            </div>
            <div className='   d-md-none  mb-4' >
                <p>Plot</p>
                <p className='text-start mb-4 '>{info.overview}</p>
            </div>
            <div className='py-5 mt-3 bg-transparent text-white'>
                <p className='mt-4'>NetFlix Clone</p>
                <p>@ Sumit</p>
            </div>
        </div>
    )
}

export default Details