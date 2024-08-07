import React from "react";

import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Mascotas"
        options={{
          title: "Mascotas",
        }}
      />

      <Tabs.Screen
        name="Perfil"
        options={{
          title: "Perfil",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
