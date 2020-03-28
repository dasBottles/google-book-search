import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Google Book Search</a>
                <ul class="navbar-nav">
                    <li class="nav-item active" >
                        <a class="nav-link" href="/search">Search<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/saved">Saved Books</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
