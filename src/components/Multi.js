import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';

const Multi = () => {

    const { id } = useParams();
    let [info, setinfo] = useState([]);
    // let { tvorm, settvorm } = useState(false)

    const movied = async () => {

        let { data } = await axios.get(`https://api.themoviedb.org/3/find/${id}?api_key=c0d670d047a1f673651ed4c9bd561204&query=${id}`)
        let result = await data.results
        setinfo([...result])
        console.log(data)
    }
    // const tvdeails = async () => {

    //     let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=c0d670d047a1f673651ed4c9bd561204`)
    //     setinfo(data)
    //     console.log(data)
    // } 



    useEffect(() => {

        movied()
        // tvdeails()
    }, [])

    return (
        <div className=' container-fluid text-white bg-black'>
            <Header />
            <div className='col-12 col-md-11 m-auto text-white'>


                <div className='col-10 mt-4 text-white  '>
                    <img className=' moviedeailsimg '
                        src={`https://image.tmdb.org/t/p/w500/${info.backdrop_path}`} alt='' />
                    <div className='d-flex col-7 gap-5 justify-content-between'>
                        <div className='col-2'>
                            <p className='btn btn-danger  text-start justify-content-start'>PlayMovie</p>
                        </div>
                        <div>
                            <h3  >{info.title}</h3>
                            <p>{info.release_date}</p>
                        </div >
                    </div>


                </div>

                <div className=' text-start '>
                    <p className=''>{info.title} </p>
                    <p> Original Language = {info.original_language}</p>

                    <p></p>

                </div>
                <div className='col-11 col-md-7 mb-4' >
                    <p className='text-start mb-4'>{info.overview}</p>
                </div>

            </div>
            <div className='py-5 mt-3 bg-transparent text-white'>
                <p className='mt-4'>NetFlix Clone</p>
                <p>@ Sumit</p>
            </div>
        </div>
    )
}

export default Multi