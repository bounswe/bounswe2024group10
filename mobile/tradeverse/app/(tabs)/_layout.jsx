/* eslint-disable react/self-closing-comp */
import { Tabs } from "expo-router";
import { COLORS } from "../../constants/theme";
import { NAV_OPTIONS } from "../../config/navigation";
import AuthGuard from "../../auth/context/auth-guard";

export default function Layout() {
  return (
    <AuthGuard>
      <Tabs initialRouteName="home">
        {NAV_OPTIONS.map((option) => (
          <Tabs.Screen
            key={option.routeValue}
            name={option.name}
            options={{
              ...(option.headerOptions ?? {}),
              title: option.label,
              tabBarIcon: (opt) => {
                return opt.focused ? option.activeIcon : option.icon;
              },
              tabBarActiveTintColor: COLORS.primary,
            }}
          />
        ))}
      </Tabs>
    </AuthGuard>
  );
}
