import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Balance = (props) => {
    
    const [loading, setLoading] = useState(false);
    const [balance, setBalance] = useState([]);

    useEffect(() => {
        const loadBalance = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3050/balance');
            setBalance(response.data);
            setLoading(false);
        };

        loadBalance();
    }, []);
    
    return (
        <div>
            <div>
                <h2>Balance</h2>
            </div>
            <div>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        balance.map(item => 
                            <div>
                                ${item.balance}
                            </div>
                            )
                    )}
            </div>
        </div>
    );
}

export default Balance;