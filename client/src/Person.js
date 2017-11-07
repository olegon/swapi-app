import React from 'react';

class PersonBox extends React.Component {
    constructor() {
        super();
        this.state = {
            person: {}
        };
    }

    componentDidMount() {
        const { id }= this.props.match.params;

        fetch(`http://localhost:8000/api/v1/people/${id}`)
            .then(response => response.json())
            .then(person => {
                this.setState({ person });
            })
    }

    render() {
        return (
            <div>
                {
                    JSON.stringify(this.state.person, null, 4)
                }
            </div>
        );
    }
}

export default PersonBox;