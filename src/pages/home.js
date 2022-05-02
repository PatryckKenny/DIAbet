import React from 'react';
import RegistrosSalvos from "../registrosSalvos.js"

export default function Home() {
    const med = RegistrosSalvos.medicoes

    const medAlt = med.map(
        (c) =>

            <div className={"header-body"} style={{ background: '#D4FFCD' }}>
                <div class="row">
                    <div class="col-xl-3 col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div className='ladoesquerdo'>
                                        <div>
                                            <label className={"datalocal"}>{c.dataagora}</label>
                                        </div>
                                        <div>
                                            <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                <i class="fas fa-chart-bar"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <label className={"indice"}> {c.indice}</label>

                                    <div>
                                        <label className={"refeicao"}> {c.refeicao}</label>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );


    return (
        <>
            <header>
                <div className={"titulo"}>

                    <h4 style={{ marginTop: '10px' }}> Tela inicial</h4>
                </div>
            </header>
            <div class="main-content">
                <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
                    <div class="container-fluid">
                        {medAlt}

                    </div>
                </div>
            </div>
        </>
    )
}