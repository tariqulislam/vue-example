<template>
  <div>
    <h1>Product List</h1>
   
    <button v-on:click="goToHomePage()">Go To Home</button>
    <table>
        <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
        </thead>
        <tbody>
            <tr v-for="member in members" v-bind:key="member.id">
                <td>{{member.firstName}}</td>
                <td>{{member.lastName}}</td>
                <td>{{member.email}}</td>
                <td>
                    <router-link 
                      :to="{ name: 'details', params: { id: member.id } }">
                    Details
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name: 'Product',
    methods: {
        goToHomePage: function () {
            this.$router.push('/')
        }
    },
    mounted () {
        this.$store.dispatch('loadAllMembers')
    },
    computed: {
        ...mapState([
            'members'
        ])
    }
}
</script>