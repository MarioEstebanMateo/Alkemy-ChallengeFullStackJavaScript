import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "../styles/Balance.css";

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
        <div className='container-fluid balance'>
            <div>
                <h2>Balance</h2>
            </div>
            <div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        balance.map(item => 
                            <div className='balance_display'>
                                ${item.balance}
                            </div>
                            )
                    )}
            </div>
        </div>
    );
}

export default Balance;