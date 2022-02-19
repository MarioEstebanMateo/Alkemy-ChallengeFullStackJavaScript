import React, { useState, useEffect } from 'react'
import axios from 'axios';

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
    
    return (
        <div>
            <div>
                <h2>Movements List</h2>
            </div>
            <div>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        movements.map(item => 
                            <table>
                                <tr>
                                    <th>Concept</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Type of Movement</th>
                                </tr>
                                <tr key={item.id} >
                                        <td>{item.concept}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.date}</td>
                                        <td>{item.type}</td> 
                                </tr>
                            </table>
                            )
                    )}
            </div>
        </div>
    );
}

export default Movements;