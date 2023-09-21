import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import WebView from 'react-native-webview';
import { LinkPreview } from '@flyerhq/react-native-link-preview'
import React from 'react'
const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;

const DataPostDntu = [
    {
        id: '7',
        noiDung: 'Thông báo về việc tiếp nhận hồ sơ xét tốt nghiệp online đợt 2 năm 2023 ',
        thoiGian: '11 / 8 / 2023',
    },
    {
        id: '6',
        noiDung: 'Thông báo về thời gian nghỉ hè năm học 2022-2023 ',
        thoiGian: '11 / 8 / 2023',
    },
    {
        id: '5',
        noiDung: 'Thông báo về việc mở lớp Thi - Tiếng Anh chuẩn đầu ra tháng 8/2023 ',
        thoiGian: '9 / 8 / 2023',
    },
    {
        id: '4',
        noiDung: 'PHIẾU KHẢO SÁT MỨC ĐỘ HÀI LÒNG SINH VIÊN TỐT NGHIỆP NĂM 2023  ',
        thoiGian: '9 / 8 / 2023',
    },
    {
        id: '3',
        noiDung: 'Thông báo về việc tiếp sinh viên từ ngày 04/8/2023 và ngày 05/8/2023  ',
        thoiGian: '3 / 8 / 2023',
    },
    {
        id: '2',
        noiDung: 'Thông báo về việc tổ chức chương trình học bổng VNS năm 2023',
        thoiGian: '28 / 7 / 2023',
    },
    {
        id: '1',
        noiDung: 'PHIẾU KHẢO Ý KIẾN CỦA SINH VIÊN VỀ HỆ THỐNG GIẢNG DẠY CANVAS DNTU',
        thoiGian: '26 / 7 / 2023',
    },





]


const TruongHocScreen = () => {

    return (

        <View style={{ width: windowWidht, height: windowHeight, backgroundColor: 'white' }}>

            <View style={{ width: windowWidht, height: windowHeight * 0.02 }}>

            </View>
            <View style={{ paddingBottom: windowHeight * 0.23 }}>
                <FlatList
                    refreshing={true}
                    data={DataPostDntu}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}

                    keyExtractor={item => item.id}
                    renderItem={
                        ({ item }) =>
                            <BaiVietDntu noidung={item.noiDung} thoigian={item.thoiGian} />
                    }
                />
            </View>




        </View>

    )
}

const BaiVietDntu = (props) => {
    return (
        <View >
            <TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: windowWidht * 0.032, borderBottomWidth: 6, borderColor: '#f7f8f9', paddingBottom: windowHeight * 0.01, marginTop: windowHeight * 0.01 }}>
                    <View style={{ width: windowWidht * 0.12, height: windowWidht * 0.12, borderWidth: 1.5, borderRadius: 100, alignItems: 'center', borderColor: '#F01921', justifyContent: 'center', marginRight: windowWidht * 0.02 }}>
                        <Image style={{ width: '90%', height: '90%' }} resizeMode='cover' source={require('../../assets/logoDntu.png')} />
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#F01921', marginRight: windowWidht * 0.03 }}>Trường Đại Học Công Nghệ Đồng Nai</Text>


                        </View>
                        <View style={{ width: windowWidht * 0.8, marginBottom: windowHeight * 0.01 }}>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>
                                {props.noidung}
                            </Text>
                        </View>

                        <View style={{ width: windowWidht * 0.8, height: windowHeight * 0.2 }}>
                            <Image resizeMode='cover' style={{ width: '100', height: '100%', borderRadius: 20 }} source={require('../../assets/ImagePostDntu.jpg')} />
                        </View>
                        <View style={{ position: 'absolute', bottom: windowWidht * 0.06, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 40, fontWeight: '600', color: 'white' }}>
                                {props.thoigian}
                            </Text>
                        </View>

                    </View>


                </View>

            </TouchableOpacity>
        </View>
    )
}



export default TruongHocScreen

const styles = StyleSheet.create({})