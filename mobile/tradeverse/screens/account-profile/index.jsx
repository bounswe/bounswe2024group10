import { View, Text } from "react-native";
import React from "react";
import GlobalScreen from "../../components/ui/global-screen";
import FullScrollView from "../../components/ui/full-scroll-view";
import RHFTextArea from "../../components/inputs/RHFTextArea";
import RHFTextField from "../../components/inputs/RHFTextField";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SIZE_CONSTANT } from "../../constants/theme";
import ProfileImage from "../../components/images/profile-image";
import { IconPencil } from "@tabler/icons-react-native";

export default function AccountProfileScreen() {
  const validationSchema = z.object({
    name: z.string().min(1, { message: "Bu alan gerekli." }),
    description: z.string().min(1, { message: "Bu alan gerekli." }),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      surname: "",
      description: "",
    },
    resolver: zodResolver(validationSchema),
  });

  return (
    <GlobalScreen>
      <FullScrollView>
        <FormProvider {...form}>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              position: "relative",
              marginBottom: SIZE_CONSTANT * 4,
            }}
          >
            <View
              style={{
                width: SIZE_CONSTANT * 7.2,
                height: SIZE_CONSTANT * 7.2,
                borderRadius: SIZE_CONSTANT * 3.6,
                backgroundColor: "rgba(0,0,0,0.1)",
                position: "absolute",
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconPencil size={SIZE_CONSTANT * 2.4} color="white" />
            </View>
            <ProfileImage
              style={{
                width: SIZE_CONSTANT * 7.2,
                height: SIZE_CONSTANT * 7.2,
                borderRadius: 50,
              }}
              deviceReference={true}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: SIZE_CONSTANT * 2,
            }}
          >
            <RHFTextField label="Name" name="name" />
            <RHFTextField label="Surname" name="surname" />
            <RHFTextArea label="Description" name="description" />
          </View>
        </FormProvider>
      </FullScrollView>
    </GlobalScreen>
  );
}
