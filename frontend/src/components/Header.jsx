
import React from "react"

const Header = () => {
    return (
        <header className='flex justify-between items-center px-8 py-4 bg-white shadow-md'>

            <h1 className='font-bold text-2xl'>Brand</h1>

            <nav>
                <ul className='flex gap-6 list-none'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>

        </header>
    )
}
