import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Appnavigation from './Appnavigation';
import {useDispatch} from 'react-redux';
import {addMyProducts} from './src/features/Showslice';

const Main = () => {
  const dispatch = useDispatch();
  const Items = [
    {
      id: 0,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpCZXfv7KX1HNoWRW3Ltsez_DApgHLSZ3eieqDAy8KQ&usqp=CAU&ec=48665701',
      name: 'Xray Dark shade',
      brand: 'PUMA',
      price: 2500,
      quantity: 0,
    },
    {
      id: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwp3SZm1VTSHryCymbsxCT7WxD2s9g-Btkg4hrACW0iQ&usqp=CAU&ec=48665701',
      name: 'Sneaker shoes',
      brand: 'Adidas',
      price: 1000,
      quantity: 0,
    },
    {
      id: 2,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVx3XenbMzmjhgNDXra_aaVJ48FHw6EBALs-3KenbuA&usqp=CAU&ec=48665701',
      name: 'Casual Shoes ',
      brand: 'Nike',
      price: 500,
      quantity: 0,
    },
  ];

  useEffect(() => {
    Items.map(item => {
      dispatch(addMyProducts(item));
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <Appnavigation />
    </View>
  );
};

export default Main;
