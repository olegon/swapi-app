import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <ul>
                        <li><Link to="/people">People</Link></li>
                        <li><Link to="/planets">Planets</Link></li>
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
