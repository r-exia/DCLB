import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Image, StatusBar } from 'react-native'
import React from 'react'
import { PageScrollView } from 'pagescrollview';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;

const tabData = [
    {
        id: '2',
        title: 'Tất cả'
    },
    {
        id: '1',
        title: 'Quan trọng'
    }
]

const ThongBaoScreen = () => {
    return (
        <View style={{ width: windowHeight, height: windowHeight, backgroundColor: '#F5F6FB' }}>
            <PageScrollView>
                <View>
                    <ScrollView horizontal style={{ paddingHorizontal: windowWidht * 0.05, paddingTop: windowHeight * 0.02 }}>
                        <TouchableOpacity style={{ marginRight: windowWidht * 0.03, backgroundColor: '#5f7eff', paddingHorizontal: windowWidht * 0.03, paddingVertical: windowWidht * 0.01, borderRadius: 8 }}>
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Tất Cả</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: windowWidht * 0.03, backgroundColor: '#D0D0D0', paddingHorizontal: windowWidht * 0.03, paddingVertical: windowWidht * 0.01, borderRadius: 8 }}>
                            <View>
                                <Text style={{ fontSize: 17, color: 'white' }}>Hệ Thống</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View>
                    <ScrollView style={{ paddingHorizontal: windowWidht * 0.04, paddingTop: windowHeight * 0.02 }}>
                        <TouchableOpacity style={{ marginBottom: windowHeight * 0.01 }} >
                            <View style={{ backgroundColor: 'white', width: windowWidht * 0.92, height: windowHeight * 0.1, flexDirection: 'row', paddingVertical: windowHeight * 0.01 }}>
                                <View style={{ paddingHorizontal: windowWidht * 0.03, height: windowHeight * 0.05, alignSelf: 'center' }}>
                                    <View style={{ backgroundColor: '#5f7eff', borderRadius: 100, width: windowWidht * 0.015, height: windowWidht * 0.015, }}></View>
                                </View>
                                <View style={{ marginRight: windowWidht * 0.02 }} ><Image style={{ width: windowWidht * 0.1, height: windowWidht * 0.1, borderRadius: 100 }} resizeMode='cover' source={{ uri: 'https://img-os-static.hoyolab.com/communityWeb/upload/40ae5077094f7c08c5120b489361fb3c.png?x-oss-process=image%2Fresize%2Cs_600%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80' }} /></View>
                                <View style={{ flexDirection: 'column', width: windowWidht * 0.47, }}>
                                    <View style={{ maxHeight: windowHeight * 0.06 }}>
                                        <Text><Text style={{ fontWeight: '600' }}>Hùng Hoàng</Text> đã đăng trong CLB SRC Nghiên Cứu Khoa Học: Nah....</Text>
                                    </View>
                                    <Text style={{ color: '#787878' }}>5 phút trước</Text>
                                </View>
                                <TouchableOpacity style={{ paddingHorizontal: windowWidht * 0.028, paddingVertical: windowWidht * 0.03, marginLeft: windowWidht * 0.18, marginTop: -windowHeight * 0.01 }}>
                                    <IconSimpleLineIcons color={'#808080'} size={windowWidht * 0.03} name='options-vertical' />
                                </TouchableOpacity>
                                <View style={{ position: 'absolute', right: windowWidht * 0.05 }}>
                                    <Image style={{ width: windowWidht * 0.18, height: windowWidht * 0.18, opacity: 0.3 }} source={{ uri: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/309353622_505825148215507_3290572414051209191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=OYUVdiL8By0AX8-F8Md&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDDXYWW22c06IGklfWfnzv-SUXjqxOXc0XPEFSOycXEmw&oe=64FF64D5' }} />
                                </View>


                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginBottom: windowHeight * 0.01 }} >
                            <View style={{ backgroundColor: 'white', width: windowWidht * 0.92, height: windowHeight * 0.1, flexDirection: 'row', paddingVertical: windowHeight * 0.01 }}>
                                <View style={{ paddingHorizontal: windowWidht * 0.03, height: windowHeight * 0.05, alignSelf: 'center' }}>
                                    <View style={{ backgroundColor: '#5f7eff', borderRadius: 100, width: windowWidht * 0.015, height: windowWidht * 0.015, }}></View>
                                </View>
                                <View style={{ marginRight: windowWidht * 0.02 }} ><Image style={{ width: windowWidht * 0.1, height: windowWidht * 0.1, borderRadius: 100 }} resizeMode='cover' source={{ uri: 'https://img-os-static.hoyolab.com/communityWeb/upload/40ae5077094f7c08c5120b489361fb3c.png?x-oss-process=image%2Fresize%2Cs_600%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80' }} /></View>
                                <View style={{ flexDirection: 'column', width: windowWidht * 0.47, }}>
                                    <View style={{ maxHeight: windowHeight * 0.06 }}>
                                        <Text><Text style={{ fontWeight: '600' }}>Hùng Hoàng</Text> đã viết bài viết mới: Nah....</Text>
                                    </View>
                                    <Text style={{ color: '#787878' }}>5 phút trước</Text>
                                </View>
                                <TouchableOpacity style={{ paddingHorizontal: windowWidht * 0.028, paddingVertical: windowWidht * 0.03, marginLeft: windowWidht * 0.18, marginTop: -windowHeight * 0.01 }}>
                                    <IconSimpleLineIcons color={'#808080'} size={windowWidht * 0.03} name='options-vertical' />
                                </TouchableOpacity>
                                <View style={{ position: 'absolute', right: windowWidht * 0.05 }}>
                                    <Image style={{ width: windowWidht * 0.18, height: windowWidht * 0.18, opacity: 0.3, }} source={{ uri: 'https://img.icons8.com/external-outline-andi-nur-abdillah/64/external-education-stationary-outline-outline-andi-nur-abdillah-5.png' }} />
                                </View>

                            </View>

                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </PageScrollView>

        </View>
    )
}

export default ThongBaoScreen

const styles = StyleSheet.create({})