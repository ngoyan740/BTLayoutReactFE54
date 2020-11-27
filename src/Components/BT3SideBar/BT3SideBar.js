import React, { Component } from 'react'

export default class BT3SideBar extends Component {
    render() {
        return (
            
                <div className="bg-light border-right" id="sidebar-wrapper">
                    <h3 className="display-4 mb-2">Shop Name</h3>
                    <ul className="list-group">
                        <li className="list-group-item"><a href="#">Categorie 1</a></li>
                        <li className="list-group-item"><a href="#">Categorie 2</a></li>
                        <li className="list-group-item"><a href="#">Categorie 3</a></li>
                    </ul>

                </div>

        )
    }
}
