import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();
    const [searchinfo, setSearchinfo] = useState([]);
    const [id, setid] = useState('')

    const moviedeails = async () => {

        let { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=c0d670d047a1f673651ed4c9bd561204&query=${id}`)
        let result = await data.results
        setSearchinfo([...result])
        console.log(data)
    }


    const getname = (e) => {
        setid(e.target.value)
        console.log(id)

    }
    return (

        <section class=" col-lg-11 col-12  m-auto pt-3  mb-4 headerh  d-flex justify-content-lg-between justify-content-between align-content-center    ">

            <img class="img-l p-0 img-fluid  " onClick={() => { navigate('/') }} src="/images/logo.png" alt="" />

            <div class="d-flex position-relative mb-3" role="search">
                <input class="  form-control " type="search" placeholder="Search" aria-label="Search" value={id}
                    onChange={getname}
                />
                <button class="btn btn-danger px-2" type="submit" onClick={moviedeails}>Search</button>
                <ul className='ulheader list-group position-absolute top-100 text-dark z-3 bg-white text-decoration-none'>
                    {searchinfo.map((value, index) => {

                        return (
                            <li className=' list-group-item  text-decoration-none' valu={value.name} key={value.id}>{value.name}  </li>
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