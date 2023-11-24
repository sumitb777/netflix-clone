import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TvDetails = () => {
    let { id } = useParams();
    let [info, setinfo] = useState([]);

    const tvdeails = async () => {

        let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=c0d670d047a1f673651ed4c9bd561204`)
        setinfo(data)
        console.log(data)
    }

    useEffect(() => {


        tvdeails()
    }, [])



    return (

        <div className=' container-fluid text-white bg-black'>
            <Header />
            <div className='col-12 col-md-11 m-auto text-white'>


                <div className='col-10 mt-4 text-white  '>
                    <img className=' moviedeailsimg '
                        src={`https://image.tmdb.org/t/p/w500/${info.backdrop_path}`} alt='' />
                    <h3  >{info.name}</h3>
                    <p>{info.first_air_date}</p>

                </div>
                <div className='col-1'>
                    <p className='btn btn-danger  text-start justify-content-start'>PlayMovie</p>
                </div>
                <div className=' text-start '>
                    <p className=''>{info.name} </p>
                    <p> Original Language = {info.original_language}</p>

                    <p></p>

                </div>
                <div className='col-11 col-md-7 mb-4' >
                    <p className='text-start h6 '>Plot </p>
                    <p className='text-start mb-4'> {info.overview}</p>
                </div>

            </div>
            <div className='py-5 bg-transparent text-white'>
                <p className='mt-4'>NetFlix Clone</p>
                <p>@ Sumit</p>
            </div>
        </div>




    )
}

export default TvDetails