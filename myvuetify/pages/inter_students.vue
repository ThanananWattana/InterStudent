<template>
  <v-data-table
    :headers="headers"
    :items="emplist"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Inter Students</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Students
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.applicant_no"
                      label="Applicant_No"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.type"
                      label="Type"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.subtype"
                      label="Subtype"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.academic_year"
                      label="Academic_Year"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.result"
                      label="Result"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.conditions"
                      label="Condition"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.english_type"
                      label="English Type"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.english_score"
                      label="English Score"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.title"
                      label="Title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.first_name"
                      label="Firstname"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.middle_name"
                      label="Middlename"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.last_name"
                      label="Lastname"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="editedItem.gender" column label="Gender">
                      <v-radio label="Male" value="M"></v-radio>
                      <v-radio label="Female" value="F"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.apply_date"
                      label="Apply Date"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.sent_date"
                      label="Sent Date"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.accepted_date"
                      label="Accepted Date"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.country"
                      label="Country"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.city"
                      label="City"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.school"
                      label="School"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.degree"
                      label="Degree"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.programme"
                      label="Programme"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="editedItem.news_online" column label="News_Online">
                      <v-radio label="TRUE" value="T"></v-radio>
                      <v-radio label="FALSE" value="F"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="editedItem.news_embassy" column label="News_Embassy">
                      <v-radio label="TRUE" value="T"></v-radio>
                      <v-radio label="FALSE" value="F"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="editedItem.news_university" column label="News_University">
                      <v-radio label="TRUE" value="T"></v-radio>
                      <v-radio label="FALSE" value="F"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="editedItem.news_exhibition" column label="News_Exhibition">
                      <v-radio label="TRUE" value="T"></v-radio>
                      <v-radio label="FALSE" value="F"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="editedItem.news_newsletter" column label="News_Newsletter">
                      <v-radio label="TRUE" value="T"></v-radio>
                      <v-radio label="FALSE" value="F"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="editedItem.news_friend" column label="News_Friend">
                      <v-radio label="TRUE" value="T"></v-radio>
                      <v-radio label="FALSE" value="F"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="editedItem.news_agent" column label="News_Agent">
                      <v-radio label="TRUE" value="T"></v-radio>
                      <v-radio label="FALSE" value="F"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.contact_email"
                      label="Contact_Email"
                    ></v-text-field>
                  </v-col>  
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.contact_phone"
                      label="Contact_Phone"
                    ></v-text-field>
                  </v-col>  
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.contact_facebook"
                      label="Contact_Facebook"
                    ></v-text-field>
                  </v-col>  
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.contact_other"
                      label="Contact_Other"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              <v-btn color="red darken-1" text @click="close"> Cancel </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this information?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions ="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
const url = "http://localhost:5000/api/inter_students";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Applicant_No", value: "applicant_no" },
      { text: "Type", value: "type" },
      { text: "Subtype", value: "subtype" },
      { text: "Academic_Year", value: "academic_year" },
      { text: "Result", value: "result" },
      { text: "Condition", value: "conditions" },
      { text: "English Type", value: "english_type" },
      { text: "English Score", value: "english_score" },
      { text: "Title", value: "title" },
      { text: "Firstname", value: "first_name" },
      { text: "Middlename", value: "middle_name" },
      { text: "Lastname", value: "last_name" },
      { text: "Gender", value: "gender" },
      { text: "Apply Date", value: "apply_date" },
      { text: "Sent Date", value: "sent_date" },
      { text: "Accepted Date", value: "accepted_date" },
      { text: "Country", value: "country" },
      { text: "City", value: "city" },
      { text: "School", value: "school" },
      { text: "Degree", value: "degree" },
      { text: "Programme", value: "programme" },
      { text: "News_Online", value: "news_online" },
      { text: "News_Embassy", value: "news_embassy" },
      { text: "News_University", value: "news_university" },
      { text: "News_Exhibition", value: "news_exhibition" },
      { text: "News_Newsletter", value: "news_newsletter" },
      { text: "News_Friend", value: "news_friend" },
      { text: "News_Agent", value: "news_agent" },
      { text: "Contact_Email", value: "contact_email" },
      { text: "Contact_Phone", value: "contact_phone" },
      { text: "Contact_Facebook", value: "contact_facebook" },
      { text: "Contact_Other", value: "contact_other" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    emplist: [],
    editedIndex: -1,
    editedItem: {
      applicant_no: "",
      type: "",
      subtype: "",
      academic_year: "",
      result: "",
      conditions: "",
      english_type: "",
      english_score: "",
      title: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "",
      apply_date: "",
      sent_date: "",
      accepted_date: "",
      country: "",
      city: "",
      school: "",
      degree: "",
      programme: "",
      news_online: "",
      news_embassy: "",
      news_university: "",
      news_exhibition: "",
      news_newsletter: "",
      news_friend: "",
      news_agent: "",
      contact_email: "",
      contact_phone: "",
      contact_facebook: "",
      contact_other: "",
    },
    defaultItem: {
      applicant_no: "",
      type: "",
      subtype: "",
      academic_year: "",
      result: "",
      conditions: "",
      english_type: "",
      english_score: "",
      title: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "",
      apply_date: "",
      sent_date: "",
      accepted_date: "",
      country: "",
      city: "",
      school: "",
      degree: "",
      programme: "",
      news_online: "",
      news_embassy: "",
      news_university: "",
      news_exhibition: "",
      news_newsletter: "",
      news_friend: "",
      news_agent: "",
      contact_email: "",
      contact_phone: "",
      contact_facebook: "",
      contact_other: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New student" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      const res = await this.$axios.get(url);
      this.emplist = res.data.response;
    },

    editItem(item) {
      this.editedIndex = this.emplist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.emplist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      console.log(this.editedItem.applicant_no);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      const delurl = url + "/" + this.editedItem.applicant_no;
      try {
        const res = await this.$axios.delete(delurl);
        this.emplist.splice(this.editedIndex, 1);
      } catch (e) {
        console.log(e);
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        const puturl = url + "/" + this.editedItem.applicant_no;
        Object.assign(this.emplist[this.editedIndex], this.editedItem);
        try {
          const res = await this.$axios.put(puturl, this.editedItem);
        } catch (e) {
          console.log(e);
        }
        //Put API here
      } else {
        this.emplist.push(this.editedItem);
        try {
          const res = await this.$axios.post(url, this.editedItem);
          this.initialize();
        } catch (e) {
          console.log(e);
        }

        //POST API
      }
      this.close();
    },
  },
};
</script>