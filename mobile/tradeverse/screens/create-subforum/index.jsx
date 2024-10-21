import { View, Text } from "react-native";
import React from "react";
import GlobalScreen from "../../components/ui/global-screen";
import FullScrollView from "../../components/ui/full-scroll-view";
import RHFTextArea from "../../components/inputs/RHFTextArea";
import RHFTextField from "../../components/inputs/RHFTextField";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  COLORS,
  FONT_WEIGHTS,
  SIZE_CONSTANT,
  SIZES,
} from "../../constants/theme";
import ProfileData from "../../mock/user-profile";
import { Stack } from "expo-router";
import {
  IconCaretDown,
  IconCaretDownFilled,
  IconImageInPicture,
  IconPaperclip,
  IconPhotoPlus,
} from "@tabler/icons-react-native";
import MainButton from "../../components/buttons/main-button";
import TextField from "../../components/inputs/TextField";

export default function CreateSubForumScreen() {
  const validationSchema = z.object({
    title: z.string().min(1, { message: "Bu alan gerekli." }),
    content: z.string().min(1, { message: "Bu alan gerekli." }),
  });

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
    resolver: zodResolver(validationSchema),
  });

  return (
    <GlobalScreen>
      <FullScrollView>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: "Create SubForum",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: SIZE_CONSTANT * 0.4,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.medium,
              color: COLORS.primary950,
              fontWeight: FONT_WEIGHTS.medium,
            }}
          >
            Create New Sub Forum Topic
          </Text>
          {/* <IconCaretDownFilled size={SIZES.small} color={COLORS.primary500} /> */}
        </View>
        <FormProvider {...form}>
          <View
            style={{
              marginBottom: SIZE_CONSTANT * 4,
            }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              
            }}
          >
            <RHFTextField
            style={{
                marginBottom:SIZE_CONSTANT * 4
            }}
              placeholder={ProfileData.name}
              label="Title"
              name="name"
              defaultValue={ProfileData.name}
            />

            {/* <TextField multiline={true} style={{}} placeholder="Write your post here..." /> */}
            <RHFTextArea
              style={{
                marginBottom: 0,
              }}
              placeholder={ProfileData.description}
              label="Desciption"
              name="description"
              defaultValue={ProfileData.description}
            />
            {/* <View
              style={{
                backgroundColor: "#F4F4F4",
                paddingHorizontal: SIZES.xSmall,
                paddingVertical: SIZE_CONSTANT * 0.6,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: SIZE_CONSTANT * 1,
                alignItems: "center",
              }}
            >
              <IconPhotoPlus
                strokeWidth={1.5}
                size={SIZES.medium}
                color="#2C3E50"
              />
              <IconPaperclip
                strokeWidth={1.5}
                size={SIZES.medium}
                color="#2C3E50"
              />
            </View> */}
          </View>
          <MainButton
            style={{
              marginTop: SIZE_CONSTANT * 12,
            }}
            text="Create Topic"
          />
        </FormProvider>
      </FullScrollView>
    </GlobalScreen>
  );
}
