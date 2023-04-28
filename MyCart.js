import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  addProductToMyCart,
  deleteMyCartItem,
  removeMyCartItem,
} from './src/features/MyCartslice';
import {increaseQuantity, decreaseQuantity} from './src/features/Showslice';

const MyCart = () => {
  const selectorcart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, backgroundColor: '#ccde'}}>
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
          Redux Toolkit MyCart
        </Text>
      </View>

      <FlatList
        data={selectorcart}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#fffccccc',
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
                {/* {item.quantity == 0 ? (
                  <TouchableOpacity
                    onPress={() => dispatch(addProductToMyCart(item))}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingRight: 10,
                      paddingLeft: 10,
                      height: 27,
                      backgroundColor: 'green',
                      borderRadius: 8,
                    }}>
                    <Text style={{color: '#fff'}}>Add To ffff Cart</Text>
                  </TouchableOpacity>
                ) : null} */}

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
    </View>
  );
};

export default MyCart;
