import { HEIGHT, WIDTH } from '@/constants'
import { fontSizes, SCREEN_WIDTH } from '@/themes/App'
import { SlideProps } from '@/types/Slider'
import { View, Text } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'

function Slide({ slide }: SlideProps) {
    return (
        <>
            <Svg className={`absolute inset-0`}>
                <Defs>
                    <RadialGradient id='gradient' cx="50%" cy="35%">
                        <Stop offset="0%" stopColor={slide.color} />
                        <Stop offset="100%" stopColor={slide.color} />
                    </RadialGradient>
                </Defs>
                <Rect x={0} y={0} width={WIDTH} height={HEIGHT} fill={"url(#gradient)"} />
            </Svg>

            <View className="absolute inset-0 items-center"
                style={{
                    padding: scale(60),
                    paddingTop: verticalScale(100),
                }}
            >
                <View>{slide.image}</View>
                <View>
                    <View style={{
                        width: SCREEN_WIDTH * 1,
                        paddingHorizontal: verticalScale(25),
                        paddingTop: scale(10)
                    }}>
                        <Text
                            className={`font-psemibold text-[#05030D]`}
                            style={{
                                fontSize: fontSizes.FONT30,
                                fontWeight: "600"
                            }}>
                            {slide.title}
                        </Text>

                        <Text
                            className={`font-plight text-[#3E3B54]`}
                            style={{
                                paddingVertical: verticalScale(4),
                                fontSize: fontSizes.FONT18,
                            }}>
                            {slide.subTitle}
                        </Text>
                    </View>
                </View>
            </View>

        </>
    )
}

export default Slide;