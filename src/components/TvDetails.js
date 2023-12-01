import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TvDetails = () => {
    let { id } = useParams();
    let [info, setinfo] = useState([]);
    let [genere, setgenere] = useState([])

    const tvdeails = async () => {

        let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=c0d670d047a1f673651ed4c9bd561204`)
        setinfo(data)
        console.log(data)
        setgenere([...data.genres])
    }

    useEffect(() => {


        tvdeails()
    }, [])



    return (

        <div className=' container-fluid text-white bg-black'>
            <Header />
            <div className='col-12 col-md-12 m-auto text-white position-relative '>


                <div className='col-12 mt-4 text-white  '>
                    <img className=' moviedeailsimg '
                        src={`https://image.tmdb.org/t/p/w1280/${info.backdrop_path}`} alt='' />



                </div>
                <div className=' position-absolute  imgdetails col-5     '>
                    <div className=' text-start '>
                        <p className='h2'>{info.name} </p>

                        <p className='t'>seasons :{` ${info.number_of_seasons}`}</p>

                        <p className='text-plot'>Genres :{genere.map((v) => {
                            return <span>{` ${v.name} `}</span>
                        })}</p>

                        {/* <p> Original Language = {info.spoken_languages[0].english_name}</p> */}

                        <p></p>

                    </div>
                    <div className=' d-none  d-md-block col-md-7 mb-4' >
                        <p className='text-start h6  '>Plot </p>
                        <p className='text-start mb-4 text-plot'> {info.overview}</p>
                    </div>

                </div>



            </div>


            <div className=' d-flex  d-flex col-10 col-md-7  gap-5 justify-content-between'>
                <a href={info.homepage} rel="noreferrer" target='_blank'>

                    <p className='btn btn-danger btn-outline-light btn-lg   text-start justify-content-start'>PlayMovie</p>
                </a>
                <div>
                    <h3  >{info.name}</h3>
                    <p>{info.first_air_date}</p>
                </div>


            </div>
            <div className='col-11  d-md-none  mb-4' >
                <p className='text-start h6 '>Plot </p>
                <p className='text-start mb-4'> {info.overview}</p>
            </div>


            <div className='py-5 bg-transparent text-white'>
                <p className='mt-4'>NetFlix Clone</p>
                <p>@ Sumit</p>
            </div>
        </div>




    )
}

export default TvDetails