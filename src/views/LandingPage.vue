<template>
  <div>
    <b-container fluid>
      <b-row>
        <div class="main" :style="mainBG">
          <b-col cols="12" class="main-bg">
            <b-row>
              <b-col cols="12" lg="6" md="6">
                <vue-aos animation-class="fadeIn animated">
                  <img src="@/assets/logoSales.png" class="mainLogo" />
                  <p class="textBlue">Simple.</p>
                  <p class="textBlue">Scalable.</p>
                  <p class="textBlue">Affordable.</p>
                </vue-aos>
              </b-col>
              <b-col cols="12" lg="6" md="6" class="contentMobile">
                <img src="@/assets/logoMobile.png" alt="" class="logoMobile" />
                <p class="textNow">Get Early access NOW!</p>
                <router-link to="/register" class="btn-regis">
                  <b-button pill variant="primary btn-register">
                    Register
                  </b-button>
                </router-link>
              </b-col>
            </b-row>
          </b-col>
        </div>
      </b-row>
      <b-row class="sectionTwo">
        <b-col cols="12">
          <p>
            Dari pembuat Salesmart. <br />
            <span
              >Sekarang hadir dalam sistem yang lebih terjangkau dan dengan
              kemudahan penggunaan yang sama. Dengan fitur yang on point sangat
              bermanfaat bagi pengelolaan bisnis Anda.</span
            >
          </p>
          <div class="listFitur">
            <p>1.Implementasi Cepat</p>
            <p>2.Mudah digunakan</p>
            <p>3.Upgradeable untuk fitur yang lebih lengkap</p>
          </div>
        </b-col>
      </b-row>
      <b-row class="sectionThree">
        <b-col cols="12" md="2" sm="2">
          <p class="textFitur">Fitur Kami</p>
        </b-col>
        <b-col cols="12" md="10" sm="10">
          <b-row>
            <b-col cols="12">
              <b-row class="detailFitur">
                <b-col cols="3">
                  <img
                    src="@/assets/logoAbsensi.png"
                    alt=""
                    class="logoFitur"
                  />
                </b-col>
                <b-col cols="9">
                  <h6>Absensi</h6>
                  <p>
                    Pantau absensi karyawan anda. Tentukan lokasi yang berbeda
                    untuk karyawan anda.
                  </p>
                </b-col>
              </b-row>
              <b-row class="detailFitur">
                <b-col cols="3">
                  <img
                    src="@/assets/logoPengaturan.png"
                    alt=""
                    class="logoFitur"
                  />
                </b-col>
                <b-col cols="9">
                  <h6>Pengaturan Tipe Karyawan</h6>
                  <p>
                    Atur waktu absensi, lokasi, serta pengaturan spesifik
                    lainnya untuk karyawan anda secara fleksible. Cocok bagi
                    anda yang memiliki berbagai kelompok karyawan.
                  </p>
                </b-col>
              </b-row>
              <b-row class="detailFitur">
                <b-col cols="3">
                  <img src="@/assets/logoCuti.png" alt="" class="logoFitur" />
                </b-col>
                <b-col cols="9">
                  <h6>Pengajuan Cuti</h6>
                  <p>
                    Ajukan cuti secara online dan anda dapat melakukan approval
                    dimanapun dan kapanpun.
                  </p>
                </b-col>
              </b-row>
              <b-row class="detailFitur">
                <b-col cols="3">
                  <img
                    src="@/assets/logoReimburse.png"
                    alt=""
                    class="logoFitur"
                  />
                </b-col>
                <b-col cols="9">
                  <h6>Pengajuan Reimburse</h6>
                  <p>
                    Reimbursement lebih mudah dilakukan dengan Salesmart. Ajukan
                    cukup melalui aplikasi, Anda dapat melihat pengajuan secara
                    instant dan lebih aman dengan pencatatan secara digital.
                  </p>
                </b-col>
              </b-row>
              <b-row class="detailFitur">
                <b-col cols="3">
                  <img
                    src="@/assets/logoLaporan.png"
                    alt=""
                    class="logoFitur"
                  />
                </b-col>
                <b-col cols="9">
                  <h6>Pencatatan Laporan Kerja</h6>
                  <p>
                    Ketahui pekerjaan harian sekaligus monitor efekifitas waktu
                    bekerja karyawan anda. Tingkatkan efisiensi penggunaan jam
                    kerja tim anda untuk mencapai produktivitas yang maksimal.
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="sectionClient">
        <b-col cols="12">
          <h2 class="text-center">Feel the benefit by Using Salesmart</h2>
          <hr class="borderClient" />
          <img src="@/assets/client.png" alt="" srcset="" class="imgClient" />
        </b-col>
      </b-row>
      <b-row class="sectionContact">
        <b-col cols="12 text-center">
          <h2 class="text-center">Kontak Kami</h2>
          <img src="@/assets/map.png" alt="" srcset="" class="mb-4 imgClient" />
          <p>Ruko Corner Stone</p>
          <p>Jl.Muara Karang No 18 A</p>
          <p>Pluit - Jakarta Utara DKI Jakarta 14450</p>
          <p>Phone : 0878-76759600 / 0813-17799778</p>
          <div class="footer">
            <p>www.salesmart.co.id</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueAos from 'vue-aos'
export default {
  data() {
    return {
      mainBG: {
        backgroundImage: `url(${require('@/assets/mainBg.png')})`
      }
    }
  },
  components: { VueAos }
}
</script>

<style scoped>
.main {
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
}
.sectionTwo {
  padding: 50px;
  width: 50%;
}
.sectionThree {
  padding: 50px;
}
.sectionClient {
  padding: 50px;
}
.sectionContact {
  padding: 50px;
}
.mainLogo {
  width: 50%;
  margin-bottom: 15%;
}
.logoMobile {
  width: 45%;
}
.textBlue {
  font-size: 68px;
  font-weight: bold;
  color: #1b6fba;
}
.contentMobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.textNow {
  font-size: 24px;
}
.btn-regis {
  width: 50%;
}
.btn-register {
  width: 100%;
  background-color: #1b6fba;
}
.logoFitur {
  width: 75%;
}
.listFitur p {
  font-size: 32px;
  color: #1b6fba;
  font-weight: bold;
}
.detailFitur {
  margin: 15px 0;
}
.detailFitur h6 {
  color: #1b6fba;
}
p.textFitur {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #1b6fba;
  border-right: 1px solid #1b6fba;
  font-size: 32px;
  font-weight: bold;
}
.sectionClient h2 {
  color: #1b6fba;
  font-weight: bold;
}
.sectionClient img {
  margin: 5% 0 10% 0;
}
.borderClient {
  width: 25%;
  background-color: #1b6fba;
  height: 5px;
}
.sectionContact h2 {
  color: #1b6fba;
  font-weight: bold;
  margin: 0 0 25px 0;
}
.sectionContact p {
  color: #1b6fba;
  font-weight: bold;
  margin: -5px 0;
}
.footer p {
  color: #000;
  margin-top: 25px;
}
a {
  color: #fff;
}
a:hover {
  color: rgb(206, 206, 206);
  text-decoration: none;
}
.imgClient {
  width: 100%;
}
@media (max-width: 768px) {
  .textBlue {
    font-size: 48px;
  }
  .sectionTwo {
    width: 75%;
  }
  .listFitur p {
    font-size: 28px;
  }
  p.textFitur {
    padding-right: 15px;
  }
}

@media (max-width: 576px) {
  .main {
    background-repeat: no-repeat;
    background-size: cover;
    padding: 25px 15px;
  }
  .sectionTwo {
    padding: 25px 15px;
    width: 100%;
  }
  .sectionThree {
    padding: 25px 15px;
  }
  .sectionClient {
    padding: 25px 15px;
  }
  .sectionContact {
    padding: 25px 15px;
  }
  img.mainLogo {
    margin-bottom: 10%;
  }
  .textBlue {
    font-size: 42px;
  }
  .sectionTwo {
    width: 100%;
  }
  .listFitur p {
    font-size: 18px;
  }
  p.textFitur {
    position: relative;
    text-align: center;
  }
  .logoFitur {
    width: 100%;
  }
}

@media (max-width: 320px) {
  .textBlue {
    font-size: 38px;
  }
  .textNow {
    font-size: 20px;
  }
  .sectionTwo {
    padding: 50px 10px;
  }
  .sectionTwo p {
    font-size: 14px;
  }
  p.textFitur {
    font-size: 24px;
  }
  .sectionClient h2 {
    font-size: 24px;
  }
  .sectionContact h2 {
    font-size: 24px;
  }
}
</style>
