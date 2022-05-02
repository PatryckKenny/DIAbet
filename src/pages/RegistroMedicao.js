import React from "react";
import "../styles.css"
import RegistrosSalvos from "../registrosSalvos.js"

import { useHistory } from "react-router-dom";



export default function RegistroMedicao() {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('***test', RegistrosSalvos.medicoesmarcadas(e))

    };
    return (
        <div>
            <header>
                <div className={"titulo"}>

                    <label style={{ marginTop: '10px' }}> Registrar medição</label>
                </div>
            </header>


            <div class="form-container" >


                <form class="register-form" onSubmit={handleSubmit}>
                    {/* Uncomment the next line to show the success message */}
                    {/* <div class="success-message">Success! Thank you for registering</div> */}
                    <input
                        id="refeicao"
                        class="form-field"
                        type="text"
                        placeholder="Refeição"
                        name="refeicao"
                    />
                    {/* Uncomment the next line to show the error message */}
                    {/* <span id="first-name-error">Please enter a first name</span> */}
                    <input
                        id="dataagora"
                        class="form-field"
                        type="date"
                        placeholder= "dd-mm-yyyy"
                        name="dataagora"        
                    />
                    {/* Uncomment the next line to show the error message */}
                    {/* <span id="last-name-error">Please enter a last name</span> */}
                    <input
                        id="horas"
                        class="form-field"
                        type="time"
                        placeholder="Horas"
                        name="horas"
                    />

                    <input
                        id="condicao"
                        className="form-field"
                        type="text"
                        placeholder="Condição"
                        name="condicao"
                    />

                    <input
                        id="indice"
                        className="form-field"
                        type="number"
                        placeholder="Índice Glicêmico"
                        name="indice"
                    />
                    <button class="form-field" type="submit" onClick={() => history.goBack()}>
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    );
}