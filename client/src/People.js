import React from 'react';
import { Link } from 'react-router-dom';;

export default class PeopleBox extends React.Component {
    constructor() {
        super();
        this.state = {
            people: []
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/v1/people')
            .then(response => response.json())
            .then(people => {
                this.setState({ people });
            })
    }

    render() {
        return (
            <div className="">
                {
                    this.state.people.map(person =>
                        <Person key={person.id} person={person} />
                    )
                }
            </div>
        );
    }
}

export class Person extends React.Component {
    render() {
        return (
            <Link className="col-md-4" to={`/people/${this.props.person.id}`}>
                <div className="text-center">{this.props.person.name}</div>
            </Link>
        );
    }
}