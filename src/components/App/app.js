import React, {Component} from 'react';
import pool from "./../../assets/img/pool.jpg"


class App extends Component {
    render() {
        return(
            <React.Fragment>
                <h1> React Webpack Starter </h1>
                <p> Select module you want to install </p>
                <img src={pool} alt="pool-name" />
            </React.Fragment>
        )
    }  
}

export default App;