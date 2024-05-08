<template>
  <div>

    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-row class="fill-height" align="center" justify="center"> </v-row>
      </v-carousel-item>
    </v-carousel>
    <div>
      <h3 class="red--text">Inbound Student</h3>
      <p>
        Students whose home university is one of MFU’s partner institutions can
        study at MFU as exchange students (non-degree) for one or two semesters.
        These students participate in bilateral or international student
        exchange programmes.
      </p>
      <br />
      <h3 class="red--text">Outbound Student</h3>
      <p>
        MFU students can study abroad for one semester or up to one year at a
        foreign university.
      </p>
      <h3 class="red--text">Study Abroad Programme</h3>
      <p>
        Students whose home university is not one of MFU’s partner institutions
        can study as visiting students under the study abroad programme for one
        trimester or up to one academic year. Credits earned can be transferred
        to an ongoing degree programme at their institutions.
      </p>
      <h3 class="red--text">AIMS Programme</h3>
      <p>
        AIMS (Asian International Mobility for Students) Programme, formally
        known as M-I-T (Malaysia-Indonesia-Thailand), aims to create a vibrant
        student mobility programme for citizens of all SEAMEO member countries.
        In MFU, we offer 2 types of programme under AIMS which are Food Science
        and Technology, and Biodiversity. All courses are taught in English.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "images/THE_World_University_Ranking_2022_-_Banner-01.jpg",
        },
        {
          src: "images/Admission_Banner_2-2021_-_Bachelor-01.jpg",
        },
        {
          src: "images/Admission_Banner_2-2021_-_Doctoral-01.jpg",
        },
        {
          src: "images/Admission_Banner_2-2021_-_Master-01.jpg",
        },
        {
          src: "images/Young-University-Ranking-2021---Banner.jpg",
        },
      ],
    };
  },
};
</script>
