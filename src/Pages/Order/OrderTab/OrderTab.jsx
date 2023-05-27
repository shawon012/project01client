import React from 'react';
import Card from '../../../Components/Card/Card';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    items.map(item => <Card
                        key={item._id}
                        item={item}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default OrderTab;