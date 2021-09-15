
import product1 from './images/product-1.jpg';
import product2 from './images/product-2.jpg';
import product3 from './images/product-3.jpg';
import sweet1 from './images/sweet3.jpg';
import sweet2 from './images/sweet-2.jpg';
import sweet3 from './images/sweet-3.jpg';

const data = {
  products: [
    {
      id: '1',
      name: 'Supreme Pizza',
      desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: 140.00,
      image: product1,
    },
    {
      id: '2',
      name: 'Hawaiian Paradise',
      desc:' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: 175.00,
      image: product2,
    },
    {
      id: '3',
      name: 'Veggie Overload',
      desc: ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: 300.00,
      image: product3,
    },
    {
      id: '4',
      name: 'Brownie Bunch',
      price: 200,
      image: sweet1,
      desc: 'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
    },
    {
      id: '5',
      name: 'Doughlicious',
      price: 350,
      image: sweet2,
      desc: 'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
    },
    {
      id: '6',
      name: 'Caramel Wonder',
      price: 300,
      image: sweet3,
      desc: 'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
    },
  ],
};
export default data;

  