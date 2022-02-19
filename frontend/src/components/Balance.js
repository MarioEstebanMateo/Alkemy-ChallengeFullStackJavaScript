import React from "react";

class Balance extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            item: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://localhost:3050/balance")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    item: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, item } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
        return (
        <div>
            <div>
                <h1> Balance </h1>
            </div>
            <div>
                <h3>item</h3>
            </div>
        </div>
    );
}
}
   
export default Balance;