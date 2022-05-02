import {Component} from 'react';


class RegistrosSalvos extends Component{

    static medicoes=[];
    static medicaofatorada;



    static medicoesmarcadas(e){
        const formData = new FormData(e?.target)
        const dados = Object.fromEntries(formData);
        

        this.medicoes.push(dados)        


            return this.medicoes;

    }



}

export default RegistrosSalvos;