<template> 
    <div class="sign-in-container">
        <form v-on:submit.prevent="onFormSubmit">
            <div class="form-group">
                <input type="email" required name="email" class="input" placeholder="Please input email" :value="email" v-on:change="onInputValueChange('email', $event.target.value)"/>
            </div>
            <div class="form-group">
                <input type="password" required name="password" class="input" placeholder="Please input password" :value="password" v-on:change="onInputValueChange('password', $event.target.value)"/>
            </div>
            <div class="form-group">
                <input type="submit" value="Sign In" class="submit-button"/>
            </div>
        </form>
    </div>
</template>
<script>
    import Notification from './notification.vue';
    import Vue from 'vue';
    export default {
        name: "SignIn",
        data: function(){
            return {
                email: "",
                password: ""
            };
        },
        methods: {
            addNotification: function(status, message){
                var n = new Vue({
                    render: function(createElement){
                        return createElement(Notification,{props: {status: status, message: message } });
                    }
                }).$mount();
                document.getElementById("notification-container").appendChild(n.$el);
            },
            onInputValueChange: function(attr, value){
                this[attr] = value;
            },
            onFormSubmit: function(){
                if(navigator.credentials) {
                    var cred = new PasswordCredential({
                        id: Date.now(),
                        name: this.email,
                        password: this.password
                    });
                    var  p = navigator.credentials.store(cred).then(()=>{
                        this.addNotification("success", "Login successfully!")
                        this.$router.push("/home");
                    }).catch((error)=>{
                        this.addNotification("error", "Logon fails!");
                    });
                }else{
                    this.$router.push("/home");
                }
            } 
        }
    };
</script>
<style scoped>
    .sign-in-container{
        padding: 100px 50px 0;
        text-align: center;
        box-sizing:border-box;
        min-height: calc( 100% - 44px );
        background: #bfc8dc;
    }
    .form-group{
        margin-bottom: 40px;
        font-size: 14px;
    }
    .form-group .input{
        line-height: 40px;
        box-sizing: border-box;
        padding: 0 10px;
        width: 100%;
        border: 1px solid #818FAF;
    }
    .submit-button{
        border: none;
        background: #4c5475;
        color: #fff;
        font-size: 14px;
        line-height: 40px;
        border-radius: 4px;
        width: 100%;
    }
</stylee>