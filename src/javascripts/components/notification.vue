<template>
    <transition name="notification">
        <div class="notification-block" v-if="show">
                <span class="content" :class="status">{{message}}</span>
        </div>
    </transition >
</template>
<script>
    export default {
        name: "Notification",
        props: ["message", "status"],
        data: function(){
            return {
                show: false
            };
        },
        mounted: function(){
            this.show = true;
            setTimeout(()=>{
                this.removeSelf();
            }, 3000)
        },
        methods: {
            removeSelf: function(){
                this.show = false;
            }
        },
    }
</script>
<style scoped>
    .notification-block{
        position: fixed;
        height: 30px;
        text-align: center;
        height: 26px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .content{
        display: inline-block;
        padding: 0 10px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        border-radius: 15px;
        opacity: 0.8;
    }
    .success{
        background: #5cb85c;
    }
    .error{
        background: #d9534f;
    }
    .notification-enter-active, .notification-leave-active {
      transition: opacity .5s;
    }
    .notification-enter, .notification-leave-to {
      opacity: 0;
    }
</style>