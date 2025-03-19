import Slide from "@/components/onboarding/Slide";
import Slider from "@/components/onboarding/Slider";
import { onBoardingSlides } from "@/configs/onboarding";
import { fontSizes, windowHeight, windowWidth } from "@/themes/App";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import { Animated, Modal, Platform, Pressable, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { AndroidAuthModal, IOSAuthModal } from "@/components/auth/AuthModal";

function OnboardingScreen() {
    const [index, setIndex] = useState(0);
    const prev = onBoardingSlides[index - 1];
    const next = onBoardingSlides[index + 1];
    const [modalVisible, setModalVisible] = useState(false)
    const [isModalMounted, setIsModalMounted] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    const handlePress = () => {
        if (index === 2) {
            setModalVisible(true)
        } else {
            setIndex(index + 1)
        }
    }
    useEffect(() => {
        if (modalVisible) {
            setIsModalMounted(true);
            Animated.parallel([
                Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
                Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }),
            ]).start();
        } else if (isModalMounted) {
            Animated.parallel([
                Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
                Animated.timing(scaleAnim, { toValue: 0.5, duration: 200, useNativeDriver: true }),
            ]).start(({ finished }) => {
                if (finished) setIsModalMounted(false);
            });
        }
    }, [modalVisible]);

    return (
        <GestureHandlerRootView className={`flex-1`}>
            <Slider
                key={index}
                index={index}
                setIndex={setIndex}
                prev={
                    prev && (
                        <Slide
                            slide={prev}
                        />
                    )
                }
                next={
                    next && (
                        <Slide
                            slide={next}
                        />
                    )
                }
            >
                <Slide
                    slide={onBoardingSlides[index]}
                />
            </Slider>

            <View
                className={`absolute`}
                style={{
                    flexDirection: "row",
                    marginTop: verticalScale(35),
                    bottom: verticalScale(55),
                    left: scale(22),
                }}>
                {Array.from({ length: onBoardingSlides.length }).map((_, i) => (
                    <TouchableOpacity
                        key={i}
                        style={{
                            height: verticalScale(7),
                            width: i === index ? scale(35) : scale(18),
                            backgroundColor: i === index ? "white" : "rgba(255, 255, 255, 0.5)",
                            marginHorizontal: scale(4),
                            borderRadius: scale(4),
                        }}
                    />
                ))}
            </View>

            {index <= onBoardingSlides.length - 1 && (
                <LinearGradient
                    colors={["#6D55FE", "#8976FC"]}
                    style={{
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center",
                        right: windowWidth(25),
                        bottom: windowHeight(50),
                        marginTop: windowHeight(30),
                        width: windowWidth(140),
                        height: windowHeight(37),
                        borderRadius: windowWidth(20),
                    }}
                >
                    <Pressable
                        className={`flex-row items-center justify-center size-full`}
                        onPress={handlePress}
                    >
                        <Text
                            className={`text-white font-bold`}
                            style={{ fontSize: fontSizes.FONT22 }}>Next</Text>
                    </Pressable>
                </LinearGradient>
            )}

            {index < onBoardingSlides.length - 1 && (
                <TouchableOpacity
                    className='absolute items-center justify-center z-[1000]'
                    style={{
                        width: scale(30),
                        height: scale(30),
                        borderRadius: scale(20),
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        right: moderateScale(5),
                        top: Platform.OS === "ios" ? verticalScale(345) : verticalScale(385),
                        transform: [{ translateY: -30 }],
                    }}
                    onPress={handlePress}
                >
                    <Ionicons name="chevron-forward-outline" size={scale(18)} color="black" />
                </TouchableOpacity>
            )}

            {isModalMounted && Platform.OS === 'android' && (
                <Pressable
                    className="flex-1"
                    onPress={() => setModalVisible(false)}
                >
                    <AndroidAuthModal fadeAnim={fadeAnim} />
                </Pressable>
            )}

            {Platform.OS === 'ios' && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <Pressable
                        className="flex-1"
                        onPress={() => setModalVisible(false)}
                    >
                        <IOSAuthModal />
                    </Pressable>
                </Modal>
            )}
            <StatusBar backgroundColor='#161622' />
        </GestureHandlerRootView>
    );
}

export default OnboardingScreen