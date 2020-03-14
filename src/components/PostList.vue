<template>
   <div>
     <h2>{{wellcomemsg}}</h2>
     <table>
         <tr>
             <th>Title</th>
             <th>UserID</th>
         </tr>
         <tr v-for="item in listOfPosts" v-bind:key="item.id">
             <td>{{item.title}}</td>
             <td>{{item.userId}}</td>
         </tr>
     </table>
     <div v-for="(value, key) in book" v-bind:key="key">
         {{key}}: {{value}}
     </div>
     <div>
         <button  v-on:click="showParagraph = !showParagraph">Toggle Paragraph</button>
         <p v-if="showParagraph">
             The school fair is right around the corner, and tickets have just gone on sale.
              Even though you may be busy, you will still want to reserve just one day out of 
              an entire year to relax and have fun with us. 
         </p>
     </div>
     <button v-on:click="showWarningMsg()">Show Alert</button>
     <button v-on:click="logButtonOneMsg()">Button one</button>
     <button v-on:click="logButtonTwoMsg()">Button Two</button>
   </div>
</template>

<script>
export default {
    name: 'PostList',
    props: {
        listOfPosts: {
            type: Array,
            validator: value => value.length >=1
        }
    },
    data: function () {
        return {
            wellcomemsg: 'wellcome to post list',
            book: {
                title: 'How to do',
                author: 'Anthony',
                publishAt: '2016-04-02'
            },
            showParagraph: false,
            warningMsg: "this is warning msg",
            buttonOneMsg: "this is button one msg",
            buttonTwoMsg: "this is button two msg"

        }
    },
    methods: {
        showWarningMsg: function () {
            console.log("method Executed")
            alert(`Warning! ${this.warningMsg}`)
        },
        logButtonOneMsg: function () {
            console.log(`${this.buttonOneMsg}`)
        },
        logButtonTwoMsg: function () {
            console.log(`${this.buttonTwoMsg}`)
        }
    },
    computed: {

    }
}
</script>