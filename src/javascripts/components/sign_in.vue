<template> 
    <div class="sign-in-container">
        <div id="notification-container"></div>
        <button v-on:click="addNotification('error')">Add Error Notification</button>
        <button v-on:click="addNotification('success')">Add Success Notification</button>
    </div>
</template>
<script>
    import Notification from './notification.vue';
    import Vue from 'vue';
    export default {
        name: "SignIn",
        methods: {
            addNotification: function(status){
                var n = new Vue({
                    render: function(c){
                        return c(Notification,{props: {status: status, message: status } });
                    }
                }).$mount();
                document.getElementById("notification-container").appendChild(n.$el);
            }
        }
    };
</script>
<style>
</stylee>