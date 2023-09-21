import { StyleSheet, Text, View, Dimensions, Image, StatusBar } from 'react-native'
import React from 'react'
import { PageScrollView } from 'pagescrollview';


import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';


const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;
const ThongTinScreen = () => {
    return (

        <View style={{ width: windowWidht, height: windowHeight, backgroundColor: '#F5F6FB', }}>
            <PageScrollView>
                <View>

                    <Image resizeMode='cover' style={[StyleSheet.absoluteFill, { width: windowWidht, height: windowHeight * 0.18 }]} source={{ uri: 'https://dntu.edu.vn/images/resized/dntu-Znb.jpg' }} />

                    <View style={{ opacity: 0.5, backgroundColor: 'red', width: windowWidht, height: windowHeight * 0.25, alignSelf: 'center', }}>


                    </View>

                    <View style={{ position: 'absolute', paddingLeft: windowWidht * 0.05, flexDirection: 'row', alignItems: 'center', top: windowHeight * 0.035 }}>
                        <Image resizeMode='cover' style={{ width: windowWidht * 0.05, height: windowWidht * 0.12, marginRight: windowWidht * 0.04 }} source={require('../../assets/logoDntu-stroke.png')} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>TRƯỜNG ĐẠI HỌC</Text>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>CÔNG NGHỆ ĐỘNG NAI</Text>
                        </View>
                    </View>


                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#202020', 'transparent']}
                        style={{ width: windowWidht, height: windowHeight * 0.1, alignSelf: 'center', opacity: 0.5, zIndex: 99, position: 'absolute', top: 0 }}
                    />
                </View>
                <View style={{ width: windowWidht, height: windowHeight, backgroundColor: '#F5F6FB', alignSelf: 'center', position: 'absolute', top: windowHeight * 0.17, borderTopLeftRadius: windowWidht * 0.04, borderTopRightRadius: windowWidht * 0.04, alignItems: 'center' }}>
                    <View style={{ width: windowWidht, height: windowHeight * 0.15, backgroundColor: 'white', borderRadius: windowWidht * 0.04, paddingTop: windowHeight * 0.05, paddingHorizontal: windowWidht * 0.05, flexDirection: 'row', marginBottom: windowHeight * 0.01 }}>
                        <View>
                            <Text style={{ fontSize: 17, fontWeight: '500' }}>Hoàng Phi Hùng <Text style={{ color: '#787878', fontSize: 13 }}>@Sinh Viên Công Nghệ Thông Tin</Text></Text>
                            <View style={{ flexDirection: 'row', marginTop: windowHeight * 0.01 }}>
                                <Image resizeMode='cover' style={{ width: windowWidht * 0.04, height: windowWidht * 0.04, marginRight: windowWidht * 0.01 }} source={{ uri: 'https://img.icons8.com/ios-filled/100/2c97ff/identification-documents.png' }} />
                                <Text>Mã số sinh viên: </Text>
                                <Text>162001532</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: windowHeight * 0.01 }}>
                                <Image resizeMode='cover' style={{ width: windowWidht * 0.04, height: windowWidht * 0.04, marginRight: windowWidht * 0.01 }} source={{ uri: 'https://img.icons8.com/ios-filled/100/737373/courses.png' }} />
                                <Text style={{ color: '#787878' }}>Niên khóa: </Text>
                                <Text style={{ color: '#787878' }}>2020 - 2024</Text>
                            </View>
                        </View>
                        <View style={{ width: windowWidht * 0.08, height: windowHeight * 0.09, position: 'absolute', right: windowWidht * 0.02, top: windowHeight * 0.03, borderWidth: 1, borderRadius: 100, borderColor: '#737373', alignItems: 'center', paddingVertical: windowHeight * 0.007 }}>
                            <TouchableOpacity >
                                <Image style={{ width: windowWidht * 0.05, height: windowWidht * 0.05 }} source={{ uri: 'https://img.icons8.com/glyph-neue/64/737373/cat-profile.png' }} />
                            </TouchableOpacity>
                            <Image style={{ width: windowWidht * 0.03, height: windowWidht * 0.03, marginVertical: windowHeight * 0.004 }} source={{ uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/96/737373/external-Up-arrows-tanah-basah-basic-outline-tanah-basah.png' }} />
                            <TouchableOpacity style={{ width: windowWidht * 0.08, height: windowWidht * 0.08, backgroundColor: '#737373', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }} >
                                <Image style={{ width: '75%', height: '75%' }} source={{ uri: 'https://img.icons8.com/pulsar-line/96/FFFFFF/identification-documents.png' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: windowWidht, height: windowHeight * 0.3, backgroundColor: 'white', borderTopRightRadius: windowWidht * 0.04, borderTopLeftRadius: windowWidht * 0.04, paddingHorizontal: windowWidht * 0.05, paddingVertical: windowHeight * 0.01, alignItems: 'center' }}>
                        <View style={{ alignSelf: 'flex-start', marginBottom: windowHeight * 0.01 }} ><Text style={{ fontSize: 18, fontWeight: '500' }}>Thành tích</Text></View>
                        <View style={{ width: windowWidht * 0.95, height: windowHeight * 0.2, borderRadius: 10, alignItems: 'center', borderRadius: 20 }}>
                            <View style={{ width: windowWidht * 0.95, height: windowHeight * 0.2, backgroundColor: '#404040', borderRadius: 20 }}></View>
                            <View style={{ position: 'absolute', bottom: 0 }}>
                                <Image style={[StyleSheet.absoluteFill, { width: '100%', height: windowHeight * 0.14, opacity: 0.7, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }]} source={require('../../assets/background-clb-thanhtich.png')} />
                                <View style={{ width: windowWidht * 0.95, opacity: 0.7, height: windowHeight * 0.14, backgroundColor: 'black', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', top: windowHeight * 0.01, alignSelf: 'flex-start', left: windowWidht * 0.03, flexDirection: 'row' }}>
                                <Image style={{ width: windowWidht * 0.08, height: windowWidht * 0.08, borderRadius: 100, marginRight: windowWidht * 0.03 }} source={{ uri: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/309353622_505825148215507_3290572414051209191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=OYUVdiL8By0AX8-F8Md&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDDXYWW22c06IGklfWfnzv-SUXjqxOXc0XPEFSOycXEmw&oe=64FF64D5' }} />
                                <View>
                                    <Text style={{ color: 'white' }}>Hoàng Phi Hùng</Text>
                                    <Text style={{ color: '#909090' }}>Đã tham gia được 3 năm</Text>
                                </View>
                            </View>
                            <View style={{ width: windowWidht * 0.95, height: windowHeight * 0.14, position: 'absolute', bottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ alignItems: 'center', width: windowWidht * 0.23 }}>
                                    <Text style={{ color: 'white', fontSize: 22 }}>01</Text>
                                    <Text style={{ color: 'white' }}>Số thành tích</Text>
                                </View>
                                <View style={{ alignItems: 'center', width: windowWidht * 0.23 }}>
                                    <Text style={{ color: 'white', fontSize: 22 }}>01</Text>
                                    <Text style={{ color: 'white' }}>Số sản phẩm</Text>
                                </View>
                                <View style={{ alignItems: 'center', width: windowWidht * 0.23 }}>
                                    <Text style={{ color: 'white', fontSize: 22 }}>1,095</Text>
                                    <Text style={{ color: 'white' }}>Số hoạt động</Text>
                                </View>
                                <View style={{ alignItems: 'center', width: windowWidht * 0.23 }}>
                                    <Text style={{ color: 'white', fontSize: 22 }}>00</Text>
                                    <Text style={{ color: 'white' }}>Số lần vi phạm</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ width: windowWidht * 0.2, height: windowWidht * 0.2, position: 'absolute', top: windowHeight * 0.12, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 100, left: windowWidht * 0.08 }}>
                    <Image resizeMode='cover' style={{ width: '97%', height: '97%', borderRadius: 100 }} source={{ uri: 'https://img-os-static.hoyolab.com/communityWeb/upload/40ae5077094f7c08c5120b489361fb3c.png?x-oss-process=image%2Fresize%2Cs_600%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80' }} />
                </View>
            </PageScrollView>
        </View>

    )
}

export default ThongTinScreen

const styles = StyleSheet.create({})