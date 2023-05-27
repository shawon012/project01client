import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import image from '../../../assets/menu/banner3.jpg';
import dessertimage from '../../../assets/menu/dessert-bg.jpeg';
import pizzaimage from '../../../assets/menu/pizza-bg.jpg';
import saladimage from '../../../assets/menu/salad-bg.jpg';
import soupimage from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const deserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss| Menu</title>
            </Helmet> 
            <Cover image={image} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory
            items={deserts}
            title="Dessert"
            image={dessertimage}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
            items={pizza}
            title="Pizza"
            image={pizzaimage}
            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
            items={salad}
            title="Salad"
            image={saladimage}
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory
            items={pizza}
            title="Pizza"
            image={soupimage}
            ></MenuCategory>
        </div>
    );
};

export default Menu;