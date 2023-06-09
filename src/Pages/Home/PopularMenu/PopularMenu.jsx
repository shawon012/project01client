import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className='mb-12'>
            <SectionTitle
                heading={"from Our Menu"}
                subHeading={"Popular Item"}
            ></SectionTitle>
            <div className='grid  md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-around'>
                <button className="btn btn-outline border-0 border-b-4 mt-4">View full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;