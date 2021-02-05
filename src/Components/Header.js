import {Component} from 'react'


class Header extends Component {
    constructor(){
        super()
        this.state = {
            toggleShow: false
        }
    }

    toggleShowFunc = () => {
        this.setState((prev) => {
            return {
                toggleShow: !prev.toggleShow
            }
        })
    }

    render(){
        return <header>
            <div className="bootstrap">Start Bootstrap</div>
            <nav className={`nav-bar ${this.state.toggleShow ? "show" : "no"}`}>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
            <input onClick={this.toggleShowFunc} alt='menu' type='image' 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' id='hamburger'/>
        </header>
    }
}

export default Header