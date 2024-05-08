<template>
  <v-app dark>
    <v-navigation-drawer
      dark
      v-model="drawer"
      clipped
      fixed
      app
      temporary
    >
      <v-list>
        <v-list-item
          dark
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar absolute
      color="red darken-4"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-avatar size="100">
        <img src="images/Mae-Fah-Luang-University-2.png" alt="Tek" />
      </v-avatar>
    </v-app-bar>
<br><br><br><br><br><br>
    <v-main>
      <v-container >
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="red darken-4">
          <strong class="subheading"
            >Mae Fah Luang University</strong
          >

          <v-spacer></v-spacer>
          <a href="https://www.facebook.com/MFUconnect"  style="text-decoration: none; color: inherit;">
          <v-btn v-for="icon in icons1" :key="icon" class="mx-4" dark icon >
            <v-icon size="24px">
              {{ icon }} 
            </v-icon>
          </v-btn>
          </a>
          <a href="https://twitter.com/MFUconnect"  style="text-decoration: none; color: inherit;">
          <v-btn v-for="icon in icons2" :key="icon" class="mx-4" dark icon >
            <v-icon size="24px">
              {{ icon }} 
            </v-icon>
          </v-btn>
          </a>
          <a href="https://www.instagram.com/mfuconnect/"  style="text-decoration: none; color: inherit;" >
          <v-btn v-for="icon in icons3" :key="icon" class="mx-4" dark icon >
            <v-icon size="24px">
              {{ icon }} 
            </v-icon>
          </v-btn>
          </a>
          <a href="https://www.youtube.com/user/mfuChannel"  style="text-decoration: none; color: inherit;" >
          <v-btn v-for="icon in icons4" :key="icon" class="mx-4" dark icon >
            <v-icon size="24px">
              {{ icon }} 
            </v-icon>
          </v-btn>
          </a>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>MFU</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      icons1: ["mdi-facebook"],
      icons2: ["mdi-twitter"],
      icons3: ["mdi-instagram"],
      icons4: ["mdi-youtube"],
      
      
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-account-details",
          title: "Inter Students",
          to: "/inter_students",
        },
        {
          icon: "mdi-chart-bell-curve",
          title: "Dashboard",
          to: "/dashboard",
        },
        {
          icon: "mdi-account-group",
          title: "About Us",
          to: "/about_us",
        },
      ],
      dotitems: [
        {
          icon: "mdi-apps",
          title: "Another Welcome",
          to: "/",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "MFU Interstudent",
    };
  },
};
</script>