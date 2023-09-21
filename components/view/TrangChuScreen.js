import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import React, { useEffect, useLayoutEffect } from 'react'

import BaiViet from '../App/BaiViet';

const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;

const DataPost = [
    {
        id: '1',
        avatar: 'https://img-os-static.hoyolab.com/communityWeb/upload/40ae5077094f7c08c5120b489361fb3c.png?x-oss-process=image%2Fresize%2Cs_600%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80',
        ten: 'Hùng',
        ho: 'Hoàng',
        mssv: '162001532',
        thoigian: '1 giờ trước',
        clb: ' · CLB SRC',
        role: 'Sinh Viên',
        nganh: 'Công Nghê Thông Tin',
        noiDung: 'Trình bao bọc để làm cho chế độ xem phản hồi chính xác khi chạm. Khi nhấn xuống, độ mờ của chế độ...',
        Image1: 'https://attackofthefanboy.com/wp-content/uploads/2023/07/The-Masterful-Cat-is-Depressed-Again-Today-Episode-1-Review-Yukichi-Verdict.jpg?w=1280',
        luotXem: '430',
        luotComment: '2',
        luotLike: '430',
    },
    {
        id: '2',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/274332004_345406637475460_507550964993957940_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=fe8171&_nc_ohc=vZHl0w2YULAAX8z6HNA&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAoKwW8-lZyXOh_WpPeR1Kh3hZDA94Sm53lE817NeOa0w&oe=64FF3193',
        ten: 'Alex',
        ho: 'Thanh Lanh',
        mssv: '',
        thoigian: '2 giờ trước',
        clb: '',
        role: 'Giảng Viên',
        nganh: 'Kỹ Thuật Điện Tử',
        noiDung: `DNTU Open Day 2022
Chào mừng các bạn ghé thăm Khoa Công Nghệ....`,
        Image1: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/279155561_382759480406842_1726622169976377122_n.jpg?stp=dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=4fkI8YyuAy4AX-eSyLp&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfA7oPnVv2mkqlcmTHtE33Q88rn_P2b986sc-KEweYEsZA&oe=64FF26DC',
        luotXem: '750',
        luotComment: '11',
        luotLike: '620',
    },


]


const TrangChuScreen = (props) => {
    useLayoutEffect(() => {
        props.navigation.setOptions({ headerShow: false });
    }, [props.navigation])
    return (

        <View style={{ width: windowWidht, height: windowHeight, backgroundColor: 'white', }}>
            <View style={{ width: windowWidht, height: windowHeight * 0.01 }}>
            </View>
            <View style={{ backgroundColor: 'white', paddingBottom: windowHeight * 0.22 }}>
                <BaiViet data={DataPost} />

            </View>
            <StatusBar
                animated={true}
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
        </View>

    )
}




export default TrangChuScreen

const styles = StyleSheet.create({})