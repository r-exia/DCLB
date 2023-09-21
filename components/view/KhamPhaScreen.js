import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity, Animated, SafeAreaView, StatusBar } from 'react-native'
import React, { useRef, useEffect, useState, } from 'react'

const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;

import { LinearGradient } from 'expo-linear-gradient';

import { PageScrollView } from 'pagescrollview';


import BaiViet from '../App/BaiViet';

const dataChucNangClb = [
    {
        id: '1',
        image: 'https://img.icons8.com/clouds/100/goodnotes.png',
        title: 'Tạo Bài Viết'
    },
    {
        id: '2',
        image: 'https://img.icons8.com/bubbles/100/today.png',
        title: 'Điểm Danh'
    },
    {
        id: '3',
        image: 'https://img.icons8.com/bubbles/100/test-account.png',
        title: 'Thành Viên'
    },
    {
        id: '4',
        image: 'https://img.icons8.com/bubbles/100/task.png',
        title: 'Công Tác'
    },
    {
        id: '5',
        image: 'https://img.icons8.com/bubbles/100/snapseed.png',
        title: 'CTXH'
    },
    {
        id: '6',
        image: 'https://img.icons8.com/bubbles/100/qr-code.png',
        title: 'QR Code'
    },
    {
        id: '7',
        image: 'https://img.icons8.com/bubbles/100/improvement.png',
        title: 'Analytics'
    },
    {
        id: '8',
        image: 'https://img.icons8.com/bubbles/100/gear.png',
        title: 'Tùy Chỉnh'
    },
]

const dataCacCLB = [
    {
        id: '3',
        ten: 'SRC Nghiên Cứu Khoa Học',
        logo: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/309353622_505825148215507_3290572414051209191_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=754033&_nc_ohc=OYUVdiL8By0AX8-F8Md&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDDcanP3WqGizsCPWzboql-_BdjtRe7S07K_Qo7Evw5Sg&oe=65007093',
        backgroundCLB: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/354013341_716060623858624_5573752631328578702_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_ohc=zN5gmLd-BiUAX-o1Voz&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDJsRZWUGJfBkyto8ZKF4Up7KhjONCpKlcaf70VbsQCCw&oe=64FF35B1',
        colorCLB: '#7DB3F8'
    },
    {
        id: '2',
        ten: 'The Scorpion English',
        logo: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/310341780_156856373695651_8233702702275941275_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ZJcCNX7ZQIUAX_jEREV&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCm-xiYtqQ7fBYW_CMgKwdL-83F4auDKURYKSgGXjPD3g&oe=650024D2',
        backgroundCLB: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/345607484_124012633978717_2364316767390175299_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=YY90Z8uE-hYAX8ETXXA&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCf3R-XgyJ_vWWPnQGMUiQBtbVMV5zaie5nmA4Q8R4TGw&oe=6500537B',
        colorCLB: '#E1CDb7'
    },
    {
        id: '1',
        ten: 'Anime Manga',
        logo: 'https://webstatic.hoyoverse.com/upload/event/2023/08/23/03539976e5f6e8a8290f98fd53913df5_1523078752674743827.png?x-oss-process=image/format,webp/quality,Q_90',
        backgroundCLB: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/279220148_737345744091835_5463092989982452799_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=1ac024&_nc_ohc=tHqYkOLiruEAX9XwzRJ&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCehXzZo3nj_r0AdTKZlXRNWQ-ShP8bUSp9wgspfrynTQ&oe=64FF9517',
        colorCLB: '#E1CDb7'
    },
]

const DataPost = [


    {
        id: '2',
        avatar: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/309353622_505825148215507_3290572414051209191_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=754033&_nc_ohc=OYUVdiL8By0AX8-F8Md&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDDcanP3WqGizsCPWzboql-_BdjtRe7S07K_Qo7Evw5Sg&oe=65007093',
        ten: 'DNTU - CLB Nghiên Cứu Khoa Học',
        ho: '',
        mssv: '',
        thoigian: '29 Thg 5 ',
        clb: '',
        role: '',
        nganh: '',
        noiDung: `🎉 Chúc mừng các thành viên CLB SRC đã tham dự giải đấu thành công! 🎉
        Chúng ta hãy cùng chia sẻ niềm vui và tự hào với những thành tích đáng kinh ngạc mà chúng ta đã đạt được tại giải đấu vừa qua. Sự cống hiến, sự nỗ lực và tinh thần đồng độ...`,
        Image1: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/371085612_768825411915478_5897628318589413250_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=813123&_nc_ohc=NvWAFcj9vbQAX9IdIVm&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDXv2UZ2n1Dk5m1pG8Wa8Vmc1RBwoYv2o5QJibBiiPG9g&oe=64FED5A0',
        luotXem: '430',
        luotComment: '2',
        luotLike: '430',
    },
    {
        id: '1',
        avatar: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/309353622_505825148215507_3290572414051209191_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=754033&_nc_ohc=OYUVdiL8By0AX8-F8Md&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDDcanP3WqGizsCPWzboql-_BdjtRe7S07K_Qo7Evw5Sg&oe=65007093',
        ten: 'DNTU - CLB Nghiên Cứu Khoa Học',
        ho: '',
        mssv: '',
        thoigian: '1 giờ trước',
        clb: '',
        role: '',
        nganh: '',
        noiDung: 'Các bạn sinh viên DNTU nhanh chóng đăng kí tham gia nhé. Đây là cơ hội để các bạn thể hiện tài năng...',
        Image1: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/354013341_716060623858624_5573752631328578702_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_ohc=zN5gmLd-BiUAX-o1Voz&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDJsRZWUGJfBkyto8ZKF4Up7KhjONCpKlcaf70VbsQCCw&oe=64FF35B1',
        luotXem: '430',
        luotComment: '2',
        luotLike: '430',
    },


]


const dataCLB = [
    {
        id: '3',
        logo: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/309353622_505825148215507_3290572414051209191_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=754033&_nc_ohc=OYUVdiL8By0AX8-F8Md&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDDcanP3WqGizsCPWzboql-_BdjtRe7S07K_Qo7Evw5Sg&oe=65007093',

    },
    {
        id: '2',
        logo: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/310341780_156856373695651_8233702702275941275_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ZJcCNX7ZQIUAX_jEREV&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCm-xiYtqQ7fBYW_CMgKwdL-83F4auDKURYKSgGXjPD3g&oe=650024D2',

    },
    {
        id: '1',
        logo: 'https://webstatic.hoyoverse.com/upload/event/2023/08/23/03539976e5f6e8a8290f98fd53913df5_1523078752674743827.png?x-oss-process=image/format,webp/quality,Q_90',

    },
]

const DataHoatDongCLB = [


    {
        id: '1',
        avatar: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/309353622_505825148215507_3290572414051209191_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=754033&_nc_ohc=OYUVdiL8By0AX8-F8Md&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDDcanP3WqGizsCPWzboql-_BdjtRe7S07K_Qo7Evw5Sg&oe=65007093',
        ten: 'DNTU - CLB Nghiên Cứu Khoa Học',
        ho: '',
        mssv: '',
        thoigian: '3 Thg 2 23',
        clb: '',
        role: '',
        nganh: '',
        noiDung: `🥳🎉GÓC TÌM ĐỒNG ĐỘI 
        Hê lô mọi người, thời gian vừa qua CLB mình hoạt động rất nhiệt huyết tới nay chúng mình muốn lan tỏa cho nhiều bạn đang có niềm đam mê về công nghệ thì hãy đến với SRC 
  😘 . Các bạn có đam mê sáng tạo , nghiên cứu công nghệ thì hãy đến với CLB SRC nhé
  🎊Mọi thông tin chi tiết xin liên hệ...`,
        Image1: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/375323880_777260651071954_1870442692890490690_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=PgOkFBrNO2AAX-O2PBK&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCB0CmBQk8uOx0M8DUnodLsUTUIYQo7jea1AZex8gq-gA&oe=64FF6C62',
        luotXem: '430',
        luotComment: '2',
        luotLike: '430',
    },



]

const AnimatedView = Animated.createAnimatedComponent(View);



const KhamPhaScreen = () => {



    const [info, setInfo] = useState({
        name: 'Hung Hoang',
        choose: '3',

    })
    const [checkMore, setCheckMore] = useState(false)
    const onOffMore = () => {
        setCheckMore(prevState => !prevState)

    }
    const indexRef = useRef(null);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        indexRef.current?.scrollToIndex({
            index,
            animated: true,
        })
    }, [index])



    const animatedValue = useRef(new Animated.Value(0)).current;
    const logoAnimation = {
        transform: [

            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, windowHeight * 0.1],
                    outputRange: [0, -10],
                    extrapolate: 'clamp',
                })
            },

        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, windowHeight * 0.15],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
    }

    const moveToTopForumAnimation = animatedValue.interpolate({
        inputRange: [0, windowHeight * 0.25],
        outputRange: [windowHeight - windowHeight * 0.2, windowHeight - windowHeight * 0.1],
        extrapolate: 'clamp',
    })

    const checkHeighTab = checkMore ? [windowHeight * 0.43, windowHeight * 0.44] : [windowHeight * 0.31, windowHeight * 0.311];

    const tabClbAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: checkHeighTab,
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })
    }
    const [currentIndex, setCurrentIndex] = useState(0);

    const animatedTabValue = useRef(new Animated.Value(0)).current;



    const chooseIndexRef = useRef(null);
    const [chooseTabCLB, setChooseTabCLB] = useState(0);

    useEffect(() => {
        const checkChoose = chooseTabCLB == 0 ? 0 : chooseTabCLB == 1 ? windowWidht : chooseTabCLB == 2 ? windowWidht * 2 : chooseTabCLB == 3 ? windowWidht * 3 : chooseTabCLB == 4 ? windowWidht * 4 : chooseTabCLB == 5 ? windowWidht * 5 : 0;
        chooseIndexRef.current?.scrollToOffset({ offset: checkChoose, animated: true })
    }, [chooseTabCLB])



    return (

        <View style={{ width: windowWidht, height: windowHeight, backgroundColor: 'white' }}>
            <StatusBar
                animated={true}
                backgroundColor={'black'}
                barStyle={'light-content'}
                translucent={true}
            />
            <View>
                <BackgroundCLB animatedValue={animatedValue} choose={info.choose} />
            </View>
            <AnimatedView style={[{ position: 'absolute', top: windowHeight * 0.045, marginHorizontal: windowWidht * 0.03, }, logoAnimation]} >
                <LogoChooseCLB choose={info.choose} />
            </AnimatedView>

            <AnimatedView style={{ width: windowWidht, height: moveToTopForumAnimation, backgroundColor: 'white', borderTopLeftRadius: windowWidht * 0.06, borderTopRightRadius: windowWidht * 0.06, position: 'absolute', bottom: 0 }}>
                <View style={{ width: windowWidht * 0.1, height: windowHeight * 0.02, alignSelf: 'center' }}>

                </View>
                <PageScrollView
                    onScroll={e => {
                        const y = e.nativeEvent.contentOffset.y;
                        animatedValue.setValue(y);
                    }}
                    scrollEventThrottle={30}
                    showsVerticalScrollIndicator={false} >
                    <View style={{ paddingHorizontal: windowWidht * 0.05, borderBottomWidth: 5, borderColor: '#f7f8f9', paddingBottom: windowHeight * 0.03, borderTopLeftRadius: windowWidht * 0.06, borderTopRightRadius: windowWidht * 0.06, }}>
                        <FlatList
                            numColumns={4}
                            data={dataChucNangClb}
                            horizontal={false}
                            keyExtractor={item => item.id}
                            renderItem={
                                ({ item }) =>
                                    <>
                                        {checkMore ? <ChucNangClb title={item.title} image={item.image} /> : <View style={{ display: item.id > '4' ? 'none' : 'flex' }} ><ChucNangClb title={item.title} image={item.image} /></View>}
                                    </>

                            }
                        />
                        <View style={{ position: 'absolute', bottom: 0, right: windowWidht * 0.01 }}>
                            <TouchableOpacity onPress={() => onOffMore()}>
                                <View style={{ width: windowWidht * 0.07, height: windowWidht * 0.07, justifyContent: 'center', alignItems: 'center' }}>
                                    {checkMore ?
                                        <Image style={{ width: '70%', height: '70%' }} resizeMode='cover' source={{ uri: 'https://img.icons8.com/ios-glyphs/90/sort-down.png' }} />
                                        :
                                        <Image style={{ width: '70%', height: '70%' }} resizeMode='cover' source={{ uri: 'https://img.icons8.com/ios-glyphs/90/sort-up.png' }} />
                                    }


                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: windowWidht * 0.05, paddingTop: windowHeight * 0.01, paddingBottom: windowHeight * 0.02, borderBottomWidth: 5, borderColor: '#f7f8f9', borderTopLeftRadius: windowWidht * 0.06, borderTopRightRadius: windowWidht * 0.06, }}>

                        <FlatList
                            scrollEventThrottle={20}
                            ref={indexRef}
                            onScroll={e => {
                                const x = e.nativeEvent.contentOffset.x;
                                const t = windowWidht * 0.53
                                const nah = Math.floor((x + t / 2) / t)
                                setIndex(nah)

                            }}
                            initialScrollIndex={index}

                            ListFooterComponentStyle={{
                                width: (windowWidht - windowWidht * 0.66)
                            }}
                            ListFooterComponent={
                                <View>
                                </View>
                            }
                            showsHorizontalScrollIndicator={false}
                            data={dataCacCLB}
                            horizontal={true}
                            keyExtractor={item => item.id}
                            renderItem={
                                ({ item }) =>
                                    <DeXuatClb ten={item.ten} colorCLB={item.colorCLB} logo={item.logo} backgroundCLB={item.backgroundCLB} />

                            }
                        />
                    </View>

                    <View>
                        <TabForumCLB onHandleTab={setChooseTabCLB} choose={currentIndex} />
                    </View>

                    <FlatList
                        ref={chooseIndexRef}
                        initialScrollIndex={chooseTabCLB}
                        scrollEventThrottle={30}
                        onScroll={(e) => {
                            const x = e.nativeEvent.contentOffset.x;
                            const t = windowWidht - windowWidht * 0.1
                            const nah = Math.floor((x + t / 2) / t)
                            setCurrentIndex(nah);

                            animatedTabValue.setValue(x)
                        }}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        data={tabData}
                        horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={
                            ({ item }) => <>{
                                item.id == '5' && <View style={{ paddingBottom: windowHeight * 0.05, }} >
                                    < BaiViet data={DataPost} />
                                </View>
                            }
                                {
                                    item.id == '4' && <View style={{ paddingBottom: windowHeight * 0.05, }} >
                                        < BaiViet data={DataHoatDongCLB} />
                                    </View>
                                }
                                {
                                    item.id == '3' && <View style={{ paddingBottom: windowHeight * 0.05, }} >
                                        < BaiViet data={DataHoatDongCLB} />
                                    </View>
                                }
                                {
                                    item.id == '2' && <View style={{ paddingBottom: windowHeight * 0.05, }} >
                                        < BaiViet data={DataHoatDongCLB} />
                                    </View>
                                }
                                {
                                    item.id == '1' && <View style={{ paddingBottom: windowHeight * 0.05, }} >
                                        < BaiViet data={DataHoatDongCLB} />
                                    </View>
                                }
                            </>


                        }
                    />


                </PageScrollView>

            </AnimatedView>

            <AnimatedView style={[{ position: 'absolute', backgroundColor: 'white', borderTopLeftRadius: windowWidht * 0.02, borderTopRightRadius: windowWidht * 0.02, top: windowHeight * 0.12 }, tabClbAnimation]}>
                <TabForumCLB onHandleTab={setChooseTabCLB} choose={currentIndex} />
            </AnimatedView>

        </View>


    )
}


const TabForumCLB = (props) => {

    const tabRef = useRef(null);

    useEffect(() => {

        tabRef.current?.scrollToOffset({ offset: props.choose >= 2 ? windowWidht * 0.28 : 0, animated: true })


    }, [props.choose])

    const [tab, setTab] = useState(0);
    return (

        <FlatList
            ref={tabRef}
            data={tabData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={
                ({ item }) => <>{

                    props.choose == parseInt(item.nah) ?
                        <TouchableOpacity activeOpacity={0.8} onPress={() => props.onHandleTab(parseInt(item.nah))} style={{ paddingHorizontal: windowWidht * 0.05, paddingVertical: windowWidht * 0.02 }}>
                            <View style={{ alignItems: 'center', height: windowWidht * 0.1 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    {item.title}
                                </Text>
                                <View style={{ width: windowWidht * 0.1, height: windowWidht * 0.015, backgroundColor: '#5f7eff', position: 'absolute', borderRadius: 10, bottom: 0 }}></View>
                            </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.8} onPress={() => props.onHandleTab(parseInt(item.nah))} style={{ paddingHorizontal: windowWidht * 0.05, paddingVertical: windowWidht * 0.02, }}>
                            <View style={{ alignItems: 'center', height: windowWidht * 0.1 }}>
                                <Text style={{ fontSize: 18, color: '#a9a9a9' }}>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                }</>


            }
        />



    )
}


const BackgroundCLB = (props) => {

    const backgroundAnimation = {
        transform: [
            {
                translateY: props.animatedValue.interpolate({
                    inputRange: [0, windowHeight * 0.21],
                    outputRange: [0, -windowHeight * 0.09],
                    extrapolate: 'clamp',
                })
            },

        ],
    }
    return (
        <>
            <FlatList


                data={dataCacCLB}
                keyExtractor={item => item.id}
                renderItem={
                    ({ item }) => <>{

                        props.choose == item.id ?
                            <AnimatedView style={[backgroundAnimation, { width: windowWidht, height: windowHeight * 0.22, }]}>
                                <View>
                                    <Image style={[StyleSheet.absoluteFill, { width: windowWidht, height: windowHeight * 0.22, position: 'absolute' }]} source={{ uri: item.backgroundCLB }} />
                                    <View style={{ backgroundColor: item.colorCLB, opacity: 0.45, width: windowWidht, height: windowHeight, position: 'absolute' }}></View>

                                </View>
                                <View style={{ position: 'absolute', bottom: windowHeight * 0.03, paddingHorizontal: windowWidht * 0.05 }}>
                                    <Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>
                                        CLB - {item.ten}
                                    </Text>
                                </View>
                                <LinearGradient
                                    // Background Linear Gradient
                                    colors={['black', 'transparent']}
                                    style={{ width: windowWidht, height: windowHeight * 0.13, alignSelf: 'center', opacity: 0.5, zIndex: 99, position: 'absolute', top: 0 }}
                                />
                            </AnimatedView>
                            :
                            props.choose == '' ?
                                <AnimatedView style={[backgroundAnimation, { width: '100%', height: windowHeight * 0.25, }]}>
                                    <View>
                                        <Image style={[StyleSheet.absoluteFill, { width: '100%', height: '100%' }]} resizeMode='cover' source={require('../../assets/background-khampha.png')} />
                                        <View style={{ backgroundColor: '#F6cba6', opacity: 0.6, width: '100%', height: '100%' }}></View>
                                    </View>
                                    <LinearGradient
                                        // Background Linear Gradient
                                        colors={['#202020', 'transparent']}
                                        style={{ width: windowWidht, height: windowHeight * 0.1, alignSelf: 'center', opacity: 0.5, zIndex: 99, position: 'absolute', top: 0 }}
                                    />
                                </AnimatedView>
                                : <></>
                    }</>


                }
            />


        </>
    )
}

const tabData = [
    {
        id: '5',
        title: 'Diễn Đàn',
        nah: '0',
    },
    {
        id: '4',
        title: 'Hoạt Động',
        nah: '1',
    },
    {
        id: '3',
        title: 'Hình Ảnh',
        nah: '2',
    },
    {
        id: '2',
        title: 'Nội Quy',
        nah: '3',
    },
    {
        id: '1',
        title: 'Guides',
        nah: '4',
    },
]






const LogoChooseCLB = (props) => {
    return (
        <FlatList
            refreshing={true}
            data={dataCLB}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            ListFooterComponentStyle={{

            }}
            ListFooterComponent={
                <TouchableOpacity activeOpacity={0.7}>

                    <View style={{ width: windowWidht * 0.1, height: windowWidht * 0.1, marginRight: windowWidht * 0.04, marginTop: windowHeight * 0.015 }} >
                        <Image style={{ width: '100%', height: '100%', borderRadius: 100, position: 'absolute' }} resizeMode='cover' source={require('../../assets/plus.png')} />
                    </View>
                </TouchableOpacity>
            }
            renderItem={
                ({ item }) =>
                    <>
                        {props.choose == '' ?
                            <></>
                            :
                            <TouchableOpacity activeOpacity={0.9} style={{ marginRight: windowWidht * 0.02, }}>
                                {props.choose == item.id ?
                                    <View style={{ width: windowWidht * 0.22, height: windowWidht * 0.22, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image style={{ width: '75%', height: '75%', position: 'absolute' }} resizeMode='cover' source={require('../../assets/select.png')} />
                                        <Image style={{ width: '60%', height: '60%', borderRadius: 100, position: 'absolute' }} resizeMode='cover' source={{ uri: item.logo }} />
                                    </View>
                                    :
                                    <View style={{ width: windowWidht * 0.1, height: windowWidht * 0.1, marginTop: windowHeight * 0.015 }}>
                                        <Image style={{ width: '100%', height: '100%', borderRadius: 100, position: 'absolute' }} resizeMode='cover' source={{ uri: item.logo }} />
                                    </View>
                                }
                            </TouchableOpacity>
                        }
                    </>

            }
        />
    )
}



const DeXuatClb = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={{ marginRight: windowWidht * 0.02 }}>
            <View style={{ width: windowWidht * 0.52, height: windowWidht * 0.28 }}>
                <Image style={[StyleSheet.absoluteFill, { width: '100%', height: '100%', borderRadius: 10 }]} resizeMode='cover' source={{ uri: props.backgroundCLB }} />

                <View style={[StyleSheet.absoluteFill, { backgroundColor: props.colorCLB, opacity: 0.45, width: '100%', height: '100%', borderRadius: 10 }]}></View>

            </View>
            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', '#383838']}
                style={{ width: '100%', height: '100%', alignSelf: 'center', opacity: 0.5, position: 'absolute', top: 0, borderRadius: 10 }}
            />
            <View style={{ width: windowWidht * 0.1, height: windowWidht * 0.1, position: 'absolute', bottom: windowWidht * 0.01, right: windowWidht * 0.02 }}>
                <Image style={{ width: '100%', height: '100%', borderRadius: 100, }} resizeMode='cover' source={{ uri: props.logo }} />

            </View>
            <View style={{ position: 'absolute', bottom: 0, left: windowWidht * 0.02 }}>
                <Text style={{ color: 'white', fontWeight: '700' }}>CLB</Text>
                <Text style={{ color: 'white', fontWeight: '700' }}>{props.ten}</Text>
            </View>

        </TouchableOpacity>
    )
}

const ChucNangClb = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={{ alignItems: 'center', marginRight: windowWidht * 0.03 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: windowWidht * 0.2, height: windowWidht * 0.2 }}>
                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={{ uri: props.image }} />
                </View>
                <Text style={{ fontWeight: '400' }}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default KhamPhaScreen

const styles = StyleSheet.create({})