import React from 'react';
import { Link } from 'react-router-dom';;

export default class PlanetsBox extends React.Component {
    constructor() {
        super();
        this.state = {
            planets: []
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/v1/planets')
            .then(response => response.json())
            .then(planets => {
                this.setState({ planets });
            })
    }

    render() {
        return (
            <div className="">
                {
                    this.state.planets.map(planet =>
                        <Planet key={planet.id} planet={planet} />
                    )
                }
            </div>
        );
    }
}

export class Planet extends React.Component {
    render() {
        return (
            <Link className="col-md-4" to={`/people/${this.props.planet.id}`}>
                <div className="text-center">{this.props.planet.name}</div>
            </Link>
        );
    }
}