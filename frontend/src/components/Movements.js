import React from "react";

class Movements extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://localhost:3050/movements")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return 
        <div>
            <h1> Pleses wait some time.... </h1> 
        </div>;
        return (
        <div className = "movements">
            <h1> Listado de Movimientos </h1>  {
                items.map((item) => ( 
                <ul key = { item.id } >
                    concept: { item.concept }, 
                    amount: { item.amount }, 
                    date: { item.date },
                    type: { item.type } 
                </ul>
                ))
            }
        </div>
    );
}
}
   
export default Movements;