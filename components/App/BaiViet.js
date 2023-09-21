import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native'
import React from 'react'
import SVGImgEye from '../../assets/eye-open-svgrepo-com.svg';
import SVGImgComment from '../../assets/comment-dots-svgrepo-com.svg';
import SVGImgLike from '../../assets/like-svgrepo-com.svg';
import SVGImgLikeActive from '../../assets/duotone-like-svgrepo-com.svg';

import { PageScrollView } from 'pagescrollview';

import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;

const FlatListBaiViet = (props) => {
    const checkRole = props.role == 'Giảng Viên' ? '#F01921' : '#5f7eff';
    return (
        <View style={{ backgroundColor: 'white', }}>
            <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: windowHeight * 0.018, paddingHorizontal: windowWidht * 0.032, width: windowWidht }}>
                {/*Phần trên 1/3 post */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/*avatar */}
                    <TouchableOpacity activeOpacity={1}>
                        <View style={{ width: windowWidht * 0.13, height: windowHeight * 0.06, marginRight: windowWidht * 0.02, marginTop: windowHeight * 0.01 }}>
                            <Image
                                resizeMode='cover'
                                style={{ width: '100%', height: '100%', borderRadius: 100 }}
                                source={{ uri: props.avatar, }} />
                        </View>
                    </TouchableOpacity>


                    <View style={{ flexDirection: 'column' }}>
                        {/*Họ và tên*/}
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, fontWeight: '500' }}>{props.ten}</Text>
                                <Text> </Text>
                                <Text style={{ fontSize: 15, fontWeight: '500' }}>{props.ho}</Text>
                                <Text style={{ color: '#787878', fontSize: 12 }}> @{props.role} {props.nganh}</Text>

                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#787878', fontSize: 13, }}>{props.thoigian}</Text>

                            <Text style={{ color: '#787878', fontSize: 13, }}>{props.clb}</Text>
                        </View>
                    </View>


                    <View style={{ alignItems: 'center', right: 0, position: 'absolute', }} >

                        <TouchableOpacity style={{ paddingHorizontal: windowWidht * 0.028, paddingVertical: windowWidht * 0.03 }}>
                            <IconSimpleLineIcons color={'gray'} size={windowWidht * 0.035} name='options-vertical' />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
            {/*Phần trên 2/3 post */}
            {/*Phần mô tả */}
            <TouchableOpacity style={{ marginBottom: windowHeight * 0.018, paddingHorizontal: windowWidht * 0.032, width: windowWidht }}>
                <View >
                    <Text>
                        {props.noiDung}
                        <Text style={{ color: '#787878' }}>
                            Xem thêm
                        </Text>
                    </Text>
                </View>
            </TouchableOpacity>
            {/*Ảnh post */}
            <TouchableOpacity activeOpacity={0.9}>
                <View style={{ width: windowWidht, height: windowHeight * 0.24, paddingHorizontal: windowWidht * 0.02, }}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 8 }} source={{ uri: props.Image1 }} />
                </View>
            </TouchableOpacity>

            {/*Phần trên 3/3 post */}
            <TouchableOpacity activeOpacity={0.6} style={{ width: windowWidht, paddingHorizontal: windowWidht * 0.032, paddingVertical: windowHeight * 0.015, borderBottomWidth: 6, borderColor: '#f7f8f9', }}>
                <View style={{ flexDirection: 'row' }}  >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <SVGImgEye width={windowWidht * 0.065} height={windowWidht * 0.065} />
                        <Text style={{ color: '#A9A9A9' }}> {props.luotXem}</Text>
                    </View>
                    <View style={{ position: 'absolute', right: 0, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', right: windowWidht * 0.08, }}>
                            <SVGImgComment width={windowWidht * 0.065} height={windowWidht * 0.065} />
                            <Text style={{ color: '#A9A9A9' }}> {props.luotComment}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SVGImgLike width={windowWidht * 0.065} height={windowWidht * 0.065} />
                            <Text style={{ color: '#A9A9A9' }}> {props.luotLike}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}



const BaiViet = (props) => {

    return (

        <FlatList
            refreshing={true}
            data={props.data}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={
                ({ item }) =>
                    <FlatListBaiViet
                        avatar={item.avatar}
                        ten={item.ten}
                        ho={item.ho}
                        mssv={item.mssv}
                        thoigian={item.thoigian}
                        clb={item.clb}
                        role={item.role}
                        nganh={item.nganh}
                        noiDung={item.noiDung}
                        Image1={item.Image1}
                        luotXem={item.luotXem}
                        luotComment={item.luotComment}
                        luotLike={item.luotLike}


                    />
            }
        />


    )
}

export default BaiViet

const styles = StyleSheet.create({})