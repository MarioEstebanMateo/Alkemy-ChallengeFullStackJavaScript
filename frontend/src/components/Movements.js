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
                            <div key={item.id} >
                                    concept={item.concept} 
                                    amount={item.amount} 
                                    date={item.date}
                                    type={item.type}
                            </div>
                            )
                    )}
            </div>
        </div>
    );
}

export default Movements;