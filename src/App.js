import React, {Component} from 'react';
// import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import {Menubar} from 'primereact/menubar';
import {withRouter} from 'react-router-dom';

class App extends Component {
    render() {
        const menuitems = [
            {
                icon: 'pi pi-fw pi-home',
                command: () => this.props.history.push('./')
            },
            {
                icon: 'pi pi-fw pi-plus',
                command: () => this.props.history.push('/RegistroMedicao')
            },
            {
                icon: 'pi pi-fw pi-user',
                command: () => this.props.history.push('/sobre')
            }
        ];
        return (
            <div className="App">

                <div id="main">
                    <main>
                        <div className="content" id="content">
                            {this.props.children}
                        </div>
                    </main>
                </div>
                <footer>
                    <div className='margemb'>
                <Menubar style={{marginTop: '10px'}} model={menuitems}/>
                </div>

                </footer>
            </div>
        );
    }
}

export default withRouter(App);