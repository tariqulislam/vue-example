<!-- Home.vue -->
<template>
   <div>
      <h1>Home Page {{totalRank}}</h1>
      <div v-if="successMsg !== null">{{successMsg}}</div>
      <form id="memberForm" @submit="checkForm" method="post">
          <p v-if="errors.length">
              <b>Please correct the following error</b>
              <ul>
                  <li v-for="error in errors" v-bind:key="error">{{error}}</li>
              </ul>
          </p>
          <p><label>First Name</label>
            <input id="firstName" type="text" v-model="firstName" name="firstName" />
          </p>
           <p><label>Last Name</label>
            <input id="lastName" type="text" v-model="lastName" name="lastName" />
          </p>
           <p><label>Email</label>
            <input id="email" type="email" v-model="email" name="email" />
          </p>
          <p>
              <input type="submit" value="submit" />
          </p>
      </form>
   </div> 
</template>
<script>
import {mapGetters, mapState} from 'vuex'
export default {
    name:'Home',
    computed: {
        ...mapGetters([
            'totalRank'
        ]),
        ...mapState([
            'successMsg'
        ])
    },
    data: function () {
        return {
            errors: [],
            firstName: null,
            lastName: null,
            email: null,
        }
    },
    methods: {
        checkForm: function (e) {
            if(this.firstName && this.lastName && this.email) {
                console.log(this.firstName)
                let formData = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email
                }
                this.$store.dispatch('saveMembers', formData)
                e.preventDefault();
                
            }
            
            this.errors = [];

            if(!this.firstName) {
                this.errors.push('First Name is Required');
            }

            if(!this.lastName) {
                this.errors.push('Last Name is Required');
            }

            if(!this.email) {
                this.errors.push('Email is Required');
            }

            e.preventDefault();
        }
    }
    
}
</script>