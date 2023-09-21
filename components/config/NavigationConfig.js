
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react'
const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TrangChuScreen from '../view/TrangChuScreen';
import TruongHocScreen from '../view/TruongHocScreen';
import KhamPhaScreen from '../view/KhamPhaScreen';
import ThongBaoScreen from '../view/ThongBaoScreen';
import ThongTinScreen from '../view/ThongTinScreen';

import IconFeather from 'react-native-vector-icons/Feather'
import IconEvilIcons from 'react-native-vector-icons/EvilIcons'

import TheoDoiScreen from '../view/TheoDoiScreen';
import SuKienScreen from '../view/SuKienScreen';
import SVGImgSearch from '../../assets/search-svgrepo-com.svg';

//const TopTab = createMaterialTopTabNavigator();
//const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();


import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'



const BottomTabNavigation = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            title: '',
            tabBarLabelStyle: { height: windowWidht * 0.01, }
        }} >
            <BottomTab.Screen name="Dntu" component={TrangChuStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused ?
                                <Image style={{ width: windowWidht * 0.082, height: windowWidht * 0.082 }} source={require('../../assets/home-active.png')} />
                                :
                                <Image style={{ width: windowWidht * 0.062, height: windowWidht * 0.062 }} source={require('../../assets/home.png')} />
                            }
                        </>
                    ),


                }}
            />
            <BottomTab.Screen name="Khám Phá" component={KhamPhaScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused ?
                                <Image style={{ width: windowWidht * 0.082, height: windowWidht * 0.082 }} source={require('../../assets/khampha-active.png')} />
                                :
                                <Image style={{ width: windowWidht * 0.068, height: windowWidht * 0.068 }} source={require('../../assets/khampha.png')} />
                            }
                        </>
                    ),


                }}
            />
            <BottomTab.Screen name="Add" component={AddPlus}
                options={{
                    tabBarIcon: () => (
                        <TouchableOpacity activeOpacity={0.9} style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingBottom: windowHeight * 0.01 }}>
                            <View style={{ width: windowWidht * 0.1, height: windowWidht * 0.1, backgroundColor: '#2c97ff', justifyContent: 'center', alignItems: 'center', borderRadius: windowWidht * 0.03 }}>
                                <Image style={{ width: windowWidht * 0.09, height: windowWidht * 0.09 }} source={require('../../assets/plus-v2.png')} />
                            </View>
                        </TouchableOpacity>
                    ),


                }}
            />
            <BottomTab.Screen name="Thông Báo" component={ThongBaoScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused ?
                                <Image style={{ width: windowWidht * 0.082, height: windowWidht * 0.082 }} source={require('../../assets/thongbao-active.png')} />
                                :
                                <Image style={{ width: windowWidht * 0.06, height: windowWidht * 0.06 }} source={require('../../assets/thongbao.png')} />
                            }
                        </>
                    ),
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTitle: () => (<View><Text style={{ fontWeight: 'bold', fontSize: 18 }}>Thông Báo</Text></View>),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.7} style={{ marginRight: windowWidht * 0.05 }}>
                            <View >

                                <IconFeather name='settings' size={22} />

                            </View>
                        </TouchableOpacity>
                    ),
                    animation: 'none'


                }}
            />
            <BottomTab.Screen name="Thông Tin" component={ThongTinScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused ?
                                <Image style={{ width: windowWidht * 0.082, height: windowWidht * 0.082 }} source={require('../../assets/hoctap-active.png')} />
                                :
                                <Image style={{ width: windowWidht * 0.068, height: windowWidht * 0.068 }} source={require('../../assets/hoctap.png')} />
                            }
                        </>
                    ),
                    headerShown: true,
                    headerShadowVisible: false,
                    headerRight: () => (
                        <View style={{ marginRight: windowWidht * 0.01, top: -windowHeight * 0.02, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.7} style={{ paddingHorizontal: windowWidht * 0.02 }}>
                                <View >
                                    <Image style={{ width: windowWidht * 0.05, height: windowWidht * 0.05 }} source={{ uri: 'https://img.icons8.com/pastel-glyph/64/FFFFFF/create-new--v3.png' }} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={{ paddingHorizontal: windowWidht * 0.02 }}>
                                <View >
                                    <IconFeather name='settings' color={'white'} size={22} />
                                </View>
                            </TouchableOpacity>
                        </View>

                    ),
                    animation: 'none',
                    headerTransparent: true

                }}
            />
        </BottomTab.Navigator>
    )
}

const AddPlus = () => {

}

import AnimateBox from '../view/AnimateBox';



const TopTabNavigation = () => {


    return (
        <TopTab.Navigator

            initialRouteName='Trang Chủ'
            initialLayout={{ width: Dimensions.get('window').width }}
            screenOptions={({ route }) => ({
                tabBarLabel: ({ tintColor, focused, item }) => {
                    return focused
                        ? (<Text style={{ fontWeight: 'bold', fontSize: 18, width: windowWidht * 0.6 }} >{route.name}</Text>)
                        : (<Text style={{ fontWeight: '400', fontSize: 18, color: '#C0C0C0', }} >{route.name}</Text>)
                },
                tabBarStyle: { elevation: 0, },
                tabBarLabelStyle: { textTransform: 'none' },
                tabBarItemStyle: { width: windowWidht * 0.28 },
                animationEnabled: false,
                tabBarPressColor: 'white',
                tabBarIndicatorStyle: { backgroundColor: '#F01921', width: windowWidht * 0.08, position: 'absolute', bottom: 0, left: windowWidht * 0.1, height: windowWidht * 0.01, borderRadius: 50, },

            })}
        >
            <TopTab.Screen name='Trường Học' component={TruongHocScreen}


                options={{}} />
            <TopTab.Screen name='Trang Chủ' component={TrangChuScreen} />
            <TopTab.Screen name='Sự Kiện' component={SuKienScreen} />
        </TopTab.Navigator>
    )
}

const TrangChuStack = () => {

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerShadowVisible: false,
            headerTitle: () => (<View></View>),
            headerRight: () => (


                <TouchableOpacity activeOpacity={0.7}>
                    <View style={{ width: windowWidht * 0.09, height: windowWidht * 0.09, }}>
                        <Image
                            style={{ width: '100%', height: '100%', borderRadius: 100 }}
                            source={{ uri: 'https://img-os-static.hoyolab.com/communityWeb/upload/40ae5077094f7c08c5120b489361fb3c.png?x-oss-process=image%2Fresize%2Cs_600%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80', }} />
                    </View>
                </TouchableOpacity>

            ),
            headerLeft: () =>
            (
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={{ width: windowWidht * 0.3, height: windowWidht * 0.07 }}>
                        <Image style={{ width: '100%', height: '100%', }} source={require('../../assets/LogoV2.png')} />
                    </View>

                </TouchableOpacity>
            ), animation: 'none'
        }} >
            <Stack.Screen name='Home' component={TopTabNavigation} options={{




            }} />
        </Stack.Navigator>
    )
}


const NavigationConfig = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <NavigationContainer>
                    <BottomTabNavigation />
                </NavigationContainer>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )

}
export default NavigationConfig