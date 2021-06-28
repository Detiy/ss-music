<template>
  <div class="login">
    <el-container class="_container">
      <el-header>
        <i class="el-icon-arrow-left" @click="back"></i>
        <span>susuMusic</span>
      </el-header>
    </el-container>
    <el-container class="loginBox">
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginFormRef"
        label-width="0px"
        class="loginForm"
      >
        <!-- <img src="../assets/image/backg.jpg" /> -->
        <el-form-item prop="mobile">
          <el-input
            prefix-icon="el-icon-user"
            type="mobile"
            v-model="loginForm.mobile"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-goods"
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="log_fs">
          <div class="forget">
            <i class="el-icon-question"></i>
            <span>忘记密码</span>
          </div>
          <div class="switch">
            <span>自动登录</span>
            <el-switch v-model="flag" active-color="#13ce66"></el-switch>
          </div>
        </el-form-item>
        <el-form-item class="btns">
          <el-button  plain @click="login">登录</el-button>
          <el-button  plain @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </el-container>
  </div>
</template>

<script>
import Cookie from "../utils/docCookie";
export default {
  data() {
    var checkMobile = (rule, value, cb) => {
      var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (reg.test(value)) {
        return cb();
      }
      cb(new Error("请输入正确的手机号"));
    };
    return {
      loginForm: {
        mobile: "",
        password: ""
      },
      flag: false,
      rules: {
        mobile: [
          { required: true, message: "请输入正确的手机号", triggle: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 12, message: "长度在5到12个字符之间", trigger: "blur" }
        ]
      },
      data:
      "tvfe_boss_uuid=9d4e884792d20d77; pgv_pvid=7264789686; pgv_info=ssid=s3267587008; RK=Eh7EUzEiEb; ptcz=5dcefab3ee7d930c7484b52b7581ee0854334e60fb98c0e7da83a28f0ca576b5; yqq_stat=0; pgv_pvi=5677239296; pgv_si=s648057856; ts_uid=4938096794; player_exist=1; qqmusic_fromtag=66; yplayer_open=0; pac_uid=1_1240628554; iip=0; _ga=GA1.2.229864478.1620610295; qm_authimgs_id=1; qm_verifyimagesession=h0199bca46320d249230790c18006ecae291fb46dc516a8798dcca284dbbdad4053600f9eb1bf98275c; fqm_pvqid=fc541835-cece-423f-b775-7948db8940ab; fqm_sessionid=4e03914c-8c2f-4a32-907f-ab77761e9c0e; tmeLoginType=2; euin=oK-PoeCANe4k7n**; ts_refer=ADTAGmyqq; ptui_loginuin=1240628554; login_type=1; wxunionid=; wxopenid=; uin=1240628554; psrf_qqunionid=; psrf_musickey_createtime=1624869639; wxrefresh_token=; psrf_qqrefresh_token=441BD38B31FB91F4F6948A9F47D6A030; qqmusic_key=Q_H_L_2SmYP360eOTmiEW0nRLUOxyAw0pBMBPHmjfANRF7VQQrSmDZ1m2x1_Zl75jP31D; psrf_qqopenid=CAB685F769F30F32CD3C7DFFBD58C0FB; psrf_qqaccess_token=63D681B54B82FA5C352B70DB3759F3FD; psrf_access_token_expiresAt=1632645639; qm_keyst=Q_H_L_2SmYP360eOTmiEW0nRLUOxyAw0pBMBPHmjfANRF7VQQrSmDZ1m2x1_Zl75jP31D; qm_keyst=Q_H_L_2SmYP360eOTmiEW0nRLUOxyAw0pBMBPHmjfANRF7VQQrSmDZ1m2x1_Zl75jP31D; ts_last=y.qq.com/n/ryqq/profile/like/song"
      }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    login() {
      this.$http.getLogin({data:this.data}).then(res=>{
        console.log(res);
        this.$router.push("/main");
      })
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>

<style lang="less"  scoped>
.login{
    height:100%;
    width:100%;
    background: url('../assets/image/loginBg.jpeg') center / 100% no-repeat;
    position: absolute;
    color:#c6c6c6;
}
._container {
  background:#333;
  color:#fff;
}
i {
  font-size: 0.5rem;
}
.loginBox {
//   height: 100%;
  width: 100%;
  border-radius: 3px;
  position: absolute;
  top:200px;
  img {
    height: 8.5rem;
    width: 100%;
  }
}
.loginForm {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
.el-form-item {
  padding: 5px;
}
.forget {
  float: left;
  margin-left: 1rem;
  i {
    font-size: 0.35rem;
  }
}
.switch {
  float: right;
  margin-right: 1rem;
}
.btns {
  display: flex;
  justify-content: space-between;
  .el-button {
    margin: 0 1rem;
  }
}
</style>