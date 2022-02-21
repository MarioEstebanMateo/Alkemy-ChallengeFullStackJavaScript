import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../styles/Movements.css";

const Movements = (props) => {
    
    const [loading, setLoading] = useState(false);
    const [movements, setMovements] = useState([]);

    useEffect(() => {
        const loadMovements = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3050/movements');
            setMovements(response.data);
            setLoading(false);
        };

        loadMovements();
    }, []);

    const handleClickDelete = Id => {
        const requestOptions = {
          method: 'DELETE'
        };
        fetch("http://localhost:3050/delete/" + Id, requestOptions).then((response) => {
          return response.json();
        })
        .then((result) => {

        });
      }

    return (
        <div className='container'>
            <div className='movements_list_title'>
                <h2>Movements List</h2>
            </div>
            <table className="table table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col" col-sm-3>Concept</th>
                        <th scope="col" col-sm-1>Amount</th>
                        <th scope="col" col-sm-2>Date</th>
                        <th scope="col" col-sm-3>Type of Movement</th>
                        <th scope="col" col-sm-3>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        movements.map(item =>
                            <tr key={item.id} >
                                <td>{item.concept}</td>
                                <td>{item.amount}</td>
                                <td>{item.date}</td>
                                <td>{item.type}</td>
                                <td className='movements_buttons'>
                                    <button type="button" className="btn btn-primary" onClick=""><a href=""></a><i class="fas fa-pencil-alt"></i> Edit</button>
                                    <button type="button" className="btn btn-danger" onClick={() => handleClickDelete(item.id)}><a href=""></a><i class="fas fa-trash"></i> Delete</button>
                                </td> 
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Movements;