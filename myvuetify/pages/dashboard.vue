<template>
  <div>
    <h1>Dashboard</h1>
    <div class="container">
      <v-row>
        <v-col cols="12" md="6" >
          <v-card>
            <doughnut-chart
              v-if="sumsal_loaded"
              :doughnutchartdata="sumsal_apidata"
              :doughnutchartoptions="chartoptions"
            />
          </v-card>
        </v-col>
        <v-col cols="12" md="6" >
          <v-card>
            <doughnut-chart
              v-if="sumsal_loaded4"
              :doughnutchartdata="sumsal_apidata4"
              :doughnutchartoptions="chartoptions4"
            />
          </v-card>
        </v-col>
        <v-col cols="12" md="6" >
          <v-card>
            <bar-chart
              v-if="sumsal_loaded2"
              :chartdata="sumsal_apidata2"
              :options="chartoptions2"
            />
          </v-card>
        </v-col>
        <v-col cols="12" md="6" >
          <v-card>
            <bar-chart
              v-if="sumsal_loaded3"
              :chartdata="sumsal_apidata3"
              :options="chartoptions3"
            />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>

const sumsal_url = "http://localhost:5000/api/sumapplicant";
const sumcountry_url = "http://localhost:5000/api/sumcountry";
const sumschool_url = "http://localhost:5000/api/sumschool";
const sumprogramme_url = "http://localhost:5000/api/sumprogramme";
export default {
  data() {
    return {
      sumsal_loaded: false,
      sumsal_apidata: {
        labels: [],
        datasets: [],
      },
      sumsal_loaded2: false,
      sumsal_apidata2: {
        labels: [],
        datasets: [],
      },
      sumsal_loaded3: false,
      sumsal_apidata3: {
        labels: [],
        datasets: [],
      },
      sumsal_loaded4: false,
      sumsal_apidata4: {
        labels: [],
        datasets: [],
      },
   
      chartoptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
    chartoptions2: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    chartoptions3: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    chartoptions4: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  },
  methods: {
     async getSumSalary() {
        this.sumsal_loaded = false;
       try{
        const res = await this.$axios.get(sumsal_url);
        //console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.gender);
          tempdata.push(x.sum_applicant);
        });
         //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets:
               [
              {
                label: "Salary by Gender",
                backgroundColor: ['Lightgreen','DarkSlateBlue'],
                data: tempdata,
              }
            ],
        };
        this.sumsal_apidata = tempAPIdata;
        this.sumsal_loaded = true;
           }catch(e){
               console.error(e);
      }
    },
    async getProgramme() {
        this.sumsal_loaded4 = false;
       try{
        const res = await this.$axios.get(sumprogramme_url);
        //console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.programme);
          tempdata.push(x.sum_applicant);
        });
         //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets:
               [
              {
                label: "Salary by Gender",
                backgroundColor: ['Lightgreen','DarkSlateBlue','Lightyellow','DarkSlateRed','Lightpink','DarkSlateorange'],
                data: tempdata,
              }
            ],
        };
        this.sumsal_apidata4 = tempAPIdata;
        this.sumsal_loaded4 = true;
           }catch(e){
               console.error(e);
      }
    },
    async getCountry() {
        this.sumsal_loaded2 = false;
       try{
        const res = await this.$axios.get(sumcountry_url);
        //console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.country);
        });
        results.forEach(function (y) {
          tempdata.push(y.sum_applicant);
        });
         //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets:
               [
              {
                label: "Country",
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
                data: tempdata,
              }
            ],
        };
        this.sumsal_apidata2 = tempAPIdata;
        this.sumsal_loaded2 = true;
           }catch(e){
               console.error(e);
      }
    },
    async getSchool() {
        this.sumsal_loaded3 = false;
       try{
        const res = await this.$axios.get(sumschool_url);
        //console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.school);
        });
        results.forEach(function (y) {
          tempdata.push(y.sum_applicant);
        });
         //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets:
               [
              {
                label: "school",
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
                data: tempdata,
              }
            ],
        };
        this.sumsal_apidata3 = tempAPIdata;
        this.sumsal_loaded3 = true;
           }catch(e){
               console.error(e);
      }
    },
  },
  mounted() {
    this.getSumSalary();
    this.getCountry();
    this.getSchool();
    this.getProgramme();
  },
};
</script>