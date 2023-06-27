"use client"
import React from 'react'

const page = () => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Searched!")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        console.log(`Post ${id} has been deleted`)
    }

    return (
        <div>
            <form>
                <input type="text" placeholder='Search' onChange={handleChange} />
                <button onClick={handleClick}>Search</button>
            </form>
            <form>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur voluptate repudiandae esse eos consequatur blanditiis molestiae saepe omnis non.</p>
                <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
            </form>
            <form>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur voluptate repudiandae esse eos consequatur blanditiis molestiae saepe omnis non.</p>
                <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
            </form>
        </div>
    )
}

export default page