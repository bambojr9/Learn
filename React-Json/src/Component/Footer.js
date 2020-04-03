import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container  text-center">
                    <p>@Your Website 2020. All Right Reversed</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="footer.html">Privacy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="footer.html">Terms</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="footer.html">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
