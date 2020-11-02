import React from "react"
import "./footer.css"
import { Link } from 'react-router-dom';



function Footer() {
    const footerItems = [
        {
            id: 1,
            name: "Terms of use",
            path: "/Terms_of_use"
        },
        {
            id: 2,
            name: "About",
            path: "/About"
        },
        {
            id: 3,
            name: "Help",
            path: "/Help"
        },
        {
            id: 4,
            name: "Contact",
            path: "/Contact"
        },
    ]
    return (
        <footer>
            {footerItems.map((item) => {
                return <Link to={item.path} key={item.id} >{item.name} </Link>

            })}
        </footer>
    )
}

export default Footer