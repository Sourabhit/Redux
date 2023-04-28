import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  addProductToMyCart,
  removeMyCartItem,
  deleteMyCartItem,
} from './src/features/MyCartslice';
import {increaseQuantity, decreaseQuantity} from './src/features/Showslice';
import {useNavigation} from '@react-navigation/native';
import MyCart from './MyCart';

const Myproducts = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.product);
  const selectorcart = useSelector(state => state.cart);
  console.log('add cart to item', selectorcart);
  //   console.log('Add All products', selector);

  const getTotal = () => {
    let total = 0;
    selectorcart.map(item => {
      total = total + item.quantity * item.price;
    });
    return total;
  };

  //   const Items = [
  //     {
  //       id: 0,
  //       image:
  //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpCZXfv7KX1HNoWRW3Ltsez_DApgHLSZ3eieqDAy8KQ&usqp=CAU&ec=48665701',
  //       name: 'Xray Dark shade',
  //       brand: 'PUMA',
  //       price: '2500',
  //       quantity: '0',
  //     },
  //     {
  //       id: 1,
  //       image:
  //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwp3SZm1VTSHryCymbsxCT7WxD2s9g-Btkg4hrACW0iQ&usqp=CAU&ec=48665701',
  //       name: 'Sneaker shoes',
  //       brand: 'Adidas',
  //       price: '999',
  //       quantity: '0',
  //     },
  //     {
  //       id: 2,
  //       image:
  //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVx3XenbMzmjhgNDXra_aaVJ48FHw6EBALs-3KenbuA&usqp=CAU&ec=48665701',
  //       name: 'Casual Shoes ',
  //       brand: 'Nike',
  //       price: '499',
  //       quantity: '0',
  //     },
  //   ];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          alignItems: 'center',
          elevation: 1,
          width: '100%',
          height: 60,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            fontWeight: '700',
            flex: 1,
            textAlign: 'center',
          }}>
          Redux Toolkit Demo
        </Text>
      </View>

      <FlatList
        data={selector}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
              elevation: 1,
              width: '94%',
              height: 120,
              margin: 10,
              borderRadius: 10,
              paddingLeft: 10,
            }}>
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 10,
              }}
              source={{uri: item.image}}
            />
            <View style={{padding: 10, flex: 1}}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000',
                  fontWeight: '900',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000',
                  fontWeight: '600',
                }}>
                {item.brand}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'green',
                  fontWeight: '900',
                }}>
                {'₹' + item.price}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                {item.quantity == 0 ? (
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(addProductToMyCart(item));
                      dispatch(increaseQuantity(item.id));
                    }}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingRight: 10,
                      paddingLeft: 10,
                      height: 27,
                      backgroundColor: 'green',
                      borderRadius: 8,
                    }}>
                    <Text style={{color: '#fff'}}>Add To Cart</Text>
                  </TouchableOpacity>
                ) : null}

                {item.quantity == 0 ? null : (
                  <TouchableOpacity
                    onPress={() => {
                      if (item.quantity > 1) {
                        dispatch(removeMyCartItem(item));
                        dispatch(decreaseQuantity(item.id));
                      } else {
                        dispatch(deleteMyCartItem(item.id));
                        dispatch(decreaseQuantity(item.id));
                      }
                    }}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingRight: 10,
                      paddingLeft: 10,
                      height: 27,
                      backgroundColor: 'green',
                      borderRadius: 8,
                      marginLeft: 10,
                    }}>
                    <Text style={{color: '#fff'}}>-</Text>
                  </TouchableOpacity>
                )}

                {item.quantity == 0 ? null : (
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 15,
                      marginHorizontal: 10,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {item.quantity}
                  </Text>
                )}

                {item.quantity == 0 ? null : (
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(addProductToMyCart(item));
                      dispatch(increaseQuantity(item.id));
                    }}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingRight: 10,
                      paddingLeft: 10,
                      height: 27,
                      backgroundColor: 'green',
                      borderRadius: 8,
                    }}>
                    <Text style={{color: '#fff'}}>+</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
      />
      {selectorcart?.length > 0 ? (
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#cc0',
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {'Added cart' + '(' + selectorcart.length + ')'}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {'Total: ' + getTotal()}
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Mycart')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: 10,
                paddingLeft: 10,
                width: '70%',
                height: 40,
                backgroundColor: 'green',
                borderRadius: 8,
              }}>
              <Text style={{color: '#fff', fontSize: 16}}> View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Myproducts;
