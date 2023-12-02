import React, { useState } from 'react'
import Moviegenresrow from './Moviegenresrow'
import moviege from '../Lists/moviege'

const MovieGenres = () => {
    const [abc, setabc] = useState([...moviege])
    console.log(abc)

    return (
        <div>
            {abc.map((value, index) =>
                <div key={index}>
                    <h3 className='text-white mt-3 text-start'> {value.name}</h3>

                    <Moviegenresrow id={value.id} index_={index} />

                </div>
            )
            }

        </div>
    )
}

export default MovieGenres