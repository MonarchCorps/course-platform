import { IsIPAD } from "@/themes/App";
import { OnboardingSlidesTypes } from "@/types/Onboarding";
import { Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import One from "@/assets/images/onboarding/1.png";
import Two from "@/assets/images/onboarding/2.png";
import Three from "@/assets/images/onboarding/3.png";

export const onBoardingSlides: OnboardingSlidesTypes[] = [
    {
        color: "#40E0D0",
        title: "Explore Our Community",
        image: (
            <Image
                source={One}
                style={{
                    width: IsIPAD ? scale(285) : scale(320),
                    height: IsIPAD ? verticalScale(345) : verticalScale(330),
                }}
            />
        ),
        subTitle:
            "Find the perfect course to enhance your career prospects and skill set",
    },
    {
        color: "#A7F893",
        title: "Set Your Own Goal",
        image: (
            <Image
                source={Two}
                style={{
                    width: IsIPAD ? scale(285) : scale(320),
                    height: IsIPAD ? verticalScale(345) : verticalScale(330),
                }}
            />
        ),
        subTitle:
            "Personalize your study plan with flexible timelines that suit you best",
    },
    {
        color: "#FFC0CB",
        image: (
            <Image
                source={Three}
                style={{
                    width: IsIPAD ? scale(285) : scale(320),
                    height: IsIPAD ? verticalScale(345) : verticalScale(330),
                }}
            />
        ),
        title: "Complete full Course",
        subTitle:
            "Achieve certification by completing courses with dedicated effort",
    },
];