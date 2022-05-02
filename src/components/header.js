import React, {Component} from 'react';
import {AiOutlineArrowLeft} from "react-icons/ai";
import "../styles.css"

class Header extends Component {

    goBack() {
        window.history.back()
    }

    render() {

        return (
            <header>
                <div className={"titulo"}>

                    <AiOutlineArrowLeft className={"tituloIcon"}/>

                    <label inputMode={Headers}> Registrar medição</label>
                </div>
            </header>)
    }
}


export default Header;