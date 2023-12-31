import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();
    const [searchinfo, setSearchinfo] = useState([]);
    const [name, setname] = useState('')

    const moviedeails = async () => {

        let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c0d670d047a1f673651ed4c9bd561204&query=${name}`)
        let result = await data.results.slice(0, 8);
        setSearchinfo([...result])
        console.log(data)
    }


    const getname = (e) => {
        setname(e.target.value)
        console.log(name)

    }
    const removeserch = () => {
        setSearchinfo([])
    }
    return (

        <section class=" col-lg-11 col-12  m-auto pt-3  mb-4 headerh
          d-flex justify-content-lg-between justify-content-between align-content-center " onClick={removeserch}
        >

            <img class="img-l col-2 col-md-1  p-0 img-fluid  " onClick={() => { navigate('/') }} src="/images/logo.png" alt="" />

            <div class="d-flex position-relative col-8 col-md-5 gap-1  " role="search">
                <input class="  form-control  header-input  text-light    "
                    type="search" placeholder="Search Movies" aria-label="Search" value={name}
                    onChange={getname}
                />
                <button class="btn btn-dark   text-white px-2" type="submit" onClick={moviedeails}>Search</button>
                <ul className='ulheader list-group position-absolute top-100  w-100  text-dark z-3 bg-white text-decoration-none'>
                    {searchinfo.map((value, index) => {

                        return (
                            <li className=' list-group-item btn text-decoration-none h4 '
                                onClick={() => navigate(`/deatils/${value.id}`)} valu={value.name}
                                key={value.id}>{value.original_title} {value.release_date} </li>
                        )

                    })}

                </ul>

            </div>
            <div class="d-flex gap-4   ">
                <div class="dropdown p-0 d-none d-md-block">
                    <button class="btn btn-secondary dropdown-toggle bg-transparent " type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <img class="img-2 " src="/images/language-svgrepo-com.png" alt="" />
                        <p class="d-none d-md-inline">English</p></button>
                    <ul class="dropdown-menu ">
                        <li class="dropdown-item ">Hindi</li>
                    </ul>

                </div>
                <div className='userlogo  p-0'>
                    <img className='userlogoimg' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
                </div>
            </div>
        </section>




    )
}

export default Header