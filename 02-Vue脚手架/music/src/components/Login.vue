<template>
    <div id="loginbody">
        <div id="index-div">
            <span id="login-title">asedrfa Music</span>
            <div id="index-form">
                <form id="index-form-data">
                    <input id="usr" style="margin-bottom: 5px;" type="text" name="usr" placeholder="手机号或账户">
                    <br>
                    <input id="pwd" style="margin-bottom: 5px;" type="password" name="pwd" placeholder="密码">
                    <br>

                </form>
                <div style="margin-top: 10px;">
                    <button id="form-submit" @click="login">登录</button>
                    <br>

                    <div style="text-align: left;margin-top: 20px; ">
                        <a style="margin-left: 25px;" href="forget.html">忘记密码？</a>
                        <a style=" margin-left: 185px;" href="register.html" @click.prevent.stop="toRegister">去注册</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        login() {
            this.$router.push({
                name: 'search'
            })
        },
        toRegister() {
            this.$router.push({
                name: 'register'
            })

        }
    },


}
</script>

<style scoped>
#loginbody {
    background: url(../assets/login.jpg) no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}

#index-div {
    position: relative;
    float: right;
    margin-right: 18%;
    top: 24%;
    /*border: 1px solid blue;*/
    width: 340px;
    text-align: center;
}

#login-title {
    font: 2em sans-serif;
    font-weight: 700;
    color: rgb(120, 120, 120);
}

#index-form {
    margin-top: 25px;
    margin-bottom: 25px;
    padding-bottom: 20px;
    padding-top: 15px;
    background-color: white;
    /* border: 1px solid red; */
    border-radius: 8px;
    width: 100%;
    text-align: center;
    opacity: 0.95;
}

input {
    border-top: white;
    border-left: white;
    border-right: white;
    border-color: rgb(214, 216, 218);
    /* border: 1px solid red; */
    margin-top: 16px;
    padding-left: 5px;
    width: 85%;
    height: 3em;
    font-size: 1em;
    outline: none;
}

button {
    background-color: rgb(65, 65, 65);
    border: 1px solid rgb(49, 50, 51);
    border-radius: 3px;
    margin-top: 30px;
    color: white;
    width: 90%;
    height: 3em;
}

a {
    color: rgb(0, 102, 255);
    font-size: 0.8em;
    text-decoration: none;
}

@media screen and (max-width: 900px) {
    #index-div {
        float: none;
        margin: auto;
        margin-top: 0%;
        top: 18%;
        transition: 0.4s linear;
    }
}
</style>