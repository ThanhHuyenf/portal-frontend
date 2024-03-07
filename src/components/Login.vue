<template>
  <div class="main_content_iner">
    <div class="container-fluid p-0">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="white_box mb_30">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <!-- sign_in  -->
                <div class="modal-content cs_modal">
                  <div class="modal-header justify-content-center theme_bg_1">
                    <h5 class="modal-title text_white">Log in</h5>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="">
                        <input type="text" class="form-control" placeholder="Nhập tài khoản hoặc địa chỉ email" name="user">
                      </div>
                      <div class="">
                        <input type="password" class="form-control" placeholder="Nhập mật khẩu" name="password">
                      </div>
<!--                      <a href="index.html" class="btn_1 full_width text-center">Đăng nhập</a>-->
                      <button type="submit" @click="login()">Đăng nhập</button>
                      <p>Cần một tài khoản? <a data-bs-toggle="modal" data-bs-target="#sing_up" data-bs-dismiss="modal"  href="#"> Liên hệ administrator</a></p>
                      <div class="text-center">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#forgot_password" data-bs-dismiss="modal" class="pass_forget_btn">Quên mật khẩu?</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  data(){
    return{
      username:'',
      password:''
    }
  },
  computed:{
    ...mapGetters('auth',{
      getterLoginStatus:'getLoginStatus'
    })
  },
  methods:{
    ...mapActions('auth',{
      actionLogin:'login'
    }),
    async login(){
      await this.actionLogin({username: this.username, password:this.password});
      if(this.getterLoginStatus !== 'success'){
        alert('login sucess');
      }else{
        alert('failed to login')
      }
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
