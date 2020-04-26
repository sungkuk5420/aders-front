<template>
  <div class="add-user-page">
    <div class="content">
      <a-form
        :layout="formLayout"
        :form="form"
        v-bind="formItemLayout">
        <div class="form-row">
          <h2>대리점 등록</h2>
        </div>
        <div class="form-row">
          <div class="form-cell">
            <a-form-item
              label="등록 선택"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-radio-group v-model="companyType" >
                <a-radio-button value="부동산">
                  부동산
                </a-radio-button>
                <a-radio-button value="관리회사">
                  관리회사
                </a-radio-button>
                <a-radio-button value="기타">
                  기타
                </a-radio-button>
              </a-radio-group>
            </a-form-item>

            <a-form-item
              label="회사명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="companyName"/>
            </a-form-item>
            <a-form-item
              label="회사주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="companyAdress"/>
            </a-form-item>
            <a-form-item
              label="대표자"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >

                  <a-input v-model="companyOnwer"/>
                </a-form-item>
                <a-form-item
                  label="성별"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                
                  <a-radio-group v-model="companyOnwerSex" >
                    <a-radio-button value="남">
                      남
                    </a-radio-button>
                    <a-radio-button value="여">
                      여
                    </a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="대표자 TEL"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="companyOnwerTel"/>
                </a-form-item>
                <a-form-item
                  label="시스템관리자"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="systemManager"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="시스템관리자 Email"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-auto-complete
                    :dataSource="emailDataSource"
                    style="width: 100%;"
                    @change="handleChangeEmail"
                    v-model="systemManagerEmail"
                  />
                </a-form-item>
                <a-form-item
                  label="FAX"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="fax"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="비고"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="notes"/>
            </a-form-item>
          </div>
          <div class="form-cell">
            <a-form-item 
              label="등록날짜"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <a-date-picker @change="onChangeJoinDate" />
            </a-form-item>
            <a-form-item
              label="보유물건 수"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="buildingCount" addonAfter="개"/>
                </a-form-item>
                <a-form-item
                  label="종업원 수"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="employeeCount" addonAfter="명"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item 
              label="상품 종류"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <a-select v-model="productType">
                <a-select-option value="A">
                  A
                </a-select-option>
                <a-select-option value="B">
                  B
                </a-select-option>
                <a-select-option value="C">
                  C
                </a-select-option>
                <a-select-option value="D">
                  D
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item 
              label="보증 수수료"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <a-input-number :max="999" v-model="fee1" :formatter="value => `긴급연락처 ${value}%`" style="width:140px; margin-right:10px;"/>
              <a-input-number :max="999" v-model="fee2" :formatter="value => `연대보증인 ${value}%`" style="width:140px; margin-right:10px;"/>
              <a-input-number :max="999" v-model="fee3" :formatter="value => `기타 ${value}%`" style="width:100px;"/>
            </a-form-item>
            <a-form-item
                label="갱신료"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
              >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="novationFee"/>
                </a-form-item>
                <a-form-item
                  label="대리점 수수료"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="propertyManagermentCompanyFee"/>
                </a-form-item>
              </div>
            </a-form-item>
          </div>
        </div>
        <div class="form-row">
          <h2>등록은행정보</h2>
        </div>
        <div class="form-row">
          <div class="form-cell">
            <a-form-item
              label="은행명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="bankName"/>
            </a-form-item>
            <a-form-item
              label="수취인명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="recipientName"/>
                </a-form-item>
                <a-form-item
                  label="カナ）"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="recipientNameKana"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="계좌번호"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="bankAccountNumber"/>
                </a-form-item>
                <a-form-item
                  label="송금타입"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="remitType"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="지점명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="branchOfficeName"/>
                </a-form-item>
                <a-form-item
                  label=""
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              v-for="(k, index) in form.getFieldValue('keys')"
              :key="k"
              v-bind="index === 0 ? formItemLayoutWithOutLabel : formItemLayoutWithOutLabel"
              :label="index === 0 ? '사용자 지정1' : '사용자 지정'+(index+1)"
              :required="false"
            >
              <a-input
                style="width: 60%; margin-right: 8px"
              />
              <a-icon
                v-if="form.getFieldValue('keys').length > 1"
                class="dynamic-delete-button"
                type="minus-circle-o"
                :disabled="form.getFieldValue('keys').length === 1"
                @click="() => remove(k)"
              />
            </a-form-item>
            <a-form-item v-bind="{wrapperCol:{ span: 16, offset: 4 }}" v-if="form.getFieldValue('keys').length < 5">
              <a-button type="dashed" style="width: 60%" @click="add">
                <a-icon type="plus" /> Add field
              </a-button>
            </a-form-item>
          </div>
          <div class="form-cell">
          </div>
        </div>
        <div class="form-row">
          <div class="form-cell"></div>
          <div class="form-cell">
            <a-form-item
              label="확인 담당자"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                
                  <a-input v-model="comfirmPerson"/>
                </a-form-item>
                <a-form-item
                  label="상관 승인자"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="approvalPerson"/>
                </a-form-item>
              </div>
            </a-form-item>
          </div>
        </div>
        <div class="form-row--center" style="margin:30px 0;">
          <div class="ant-row ant-form-item">
            <div class="ant-col-4 ant-form-item-label">
              
            </div>
            <div class="ant-col-16 ant-form-item-control-wrapper">
              <div class="form-row">
                <a-button type="primary" v-show="!companyDataForUpdate" @click="handleSubmit" :loading="loading">
                  등록
                </a-button>
                <a-button type="primary" v-show="companyDataForUpdate" @click="handleUpdate" :loading="loading">
                  수정
                </a-button>
                <a-button type="default" @click="cancel" style="margin-left:10px;">
                  취소
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
let id = 0;
import ImageUpload from "../components/ImageUpload"
import VueSlideUpDown from 'vue-slide-up-down'
export default {
  components:{
    ImageUpload,
    VueSlideUpDown
  },
  data() {
    return {
      loading:false,
      db:"", // firebase
      companyType: "부동산", // 등록선택
      companyName: "", // 회사이름
      companyAdress: "", // 회사 주소
      companyOnwer: "", // 회사 대표자
      companyOnwerSex: "남", // 회사 대표자 성별
      companyOnwerTel: "", // 대표자 전화번호
      systemManager: "", // 시스템관리자
      systemManagerEmail: "", // 시스템관리자 이메일
      fax: "", // FAX
      notes: "", // 비고
      joinDate: "", // 등록날짜
      buildingCount: 0, // 보유물건 수
      employeeCount: 0, // 종업원 수
      productType: 0, // 상품 종류
      fee1: 0, // 보증 수수료 긴급연락처
      fee2: 0, // 보증 수수료 연대보증인
      fee3: 0, // 보증 수수료 기타
      novationFee:0, // 갱신료
      propertyManagermentCompanyFee:0, // 대리점 수수료
      bankName: "", // 은행명
      recipientName: "", // 수취인명
      recipientNameKana: "", // 카나
      bankAccountNumber: "", // 계좌번호
      remitType: "", // 송금타입
      branchOfficeName: "", // 지점명
      comfirmPerson: "", // 확인담당자
      approvalPerson: "", // 상관승인자
      createdDate: Date.now(), // 생성날짜
      // companyType: "부동산", // 등록선택
      // companyName: "회사이름", // 회사이름
      // companyAdress: "회사 주소", // 회사 주소
      // companyOnwer: "회사 대표자", // 회사 대표자
      // companyOnwerSex: "남", // 회사 대표자 성별
      // companyOnwerTel: "대표자 전화번호", // 대표자 전화번호
      // systemManager: "시스템관리자", // 시스템관리자
      // systemManagerEmail: "시스템관리자 이메일", // 시스템관리자 이메일
      // fax: "FAX", // FAX
      // notes: "비고", // 비고
      // joinDate: "등록날짜", // 등록날짜
      // buildingCount: 0, // 보유물건 수
      // employeeCount: 0, // 종업원 수
      // productType: 0, // 상품 종류
      // fee1: 0, // 보증 수수료 긴급연락처
      // fee2: 0, // 보증 수수료 연대보증인
      // fee3: 0, // 보증 수수료 기타
      // novationFee:0, // 갱신료
      // propertyManagermentCompanyFee:0, // 대리점 수수료
      // bankName: "은행명", // 은행명
      // recipientName: "수취인명", // 수취인명
      // recipientNameKana: "카나", // 카나
      // bankAccountNumber: "계좌번호", // 계좌번호
      // remitType: "송금타입", // 송금타입
      // branchOfficeName: "지점명", // 지점명
      // comfirmPerson: "확인담당자", // 확인담당자
      // approvalPerson: "상관승인자", // 상관승인자
      formLayout: 'horizontal',
      emailDataSource: [],
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 16, offset: 0 },
          sm: { span: 16, offset: 0 },
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      companyDataForUpdate:"getCompanyDataForUpdate"
    }),
    formItemLayout() {
      const { formLayout } = this;
      return {
            labelCol: { span: 4 },
            labelCol2: { span: 10 },
            wrapperCol: { span: 20 },
            wrapperCol2: { span: 14 },
          };
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return {
            wrapperCol: { span: 14, offset: 4 },
          };
    },
  },

  watch: {
    companyDataForUpdate: {
      handler(companyData) {
        console.log("companyData",companyData)
          if (companyData) {
              this.companyType = companyData.companyType;
              this.companyName = companyData.companyName;
              this.companyAdress = companyData.companyAdress;
              this.companyOnwer = companyData.companyOnwer;
              this.companyOnwerSex = companyData.companyOnwerSex;
              this.companyOnwerTel = companyData.companyOnwerTel;
              this.systemManager = companyData.systemManager;
              this.systemManagerEmail = companyData.systemManagerEmail;
              this.fax = companyData.fax;
              this.notes = companyData.notes;
              this.joinDate = companyData.joinDate;
              this.buildingCount = companyData.buildingCount;
              this.employeeCount = companyData.employeeCount;
              this.productType = companyData.productType;
              this.fee1 = companyData.fee1;
              this.fee2 = companyData.fee2;
              this.fee3 = companyData.fee3;
              this.novationFee = companyData.novationFee;
              this.propertyManagermentCompanyFee = companyData.propertyManagermentCompanyFee;
              this.bankName = companyData.bankName;
              this.recipientName = companyData.recipientName;
              this.recipientNameKana = companyData.recipientNameKana;
              this.bankAccountNumber = companyData.bankAccountNumber;
              this.remitType = companyData.remitType;
              this.branchOfficeName = companyData.branchOfficeName;
              this.comfirmPerson = companyData.comfirmPerson;
              this.approvalPerson = companyData.approvalPerson;
              this.createdDate = companyData.createdDate;
          }else{
              this.clearDatas()
          }
      },
      immediate: true
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
  mounted(){
    this.db = firebase.firestore();
  },
  methods: {
    remove(k) {
      const { form } = this;
      const keys = form.getFieldValue('keys');
      if (keys.length === 1) {
        return;
      }
      form.setFieldsValue({
        keys: keys.filter(key => key !== k),
      });
    },

    add() {
      const { form } = this;
      const keys = form.getFieldValue('keys');
      if(keys.length > 4){
        return false;
      }
      const nextKeys = keys.concat(id++);
      form.setFieldsValue({
        keys: nextKeys,
      });
      console.log(nextKeys)
    },
    handleChangeEmail(value) {
      this.emailDataSource =
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@yahoo.com`, `${value}@other.com`];
    },
    onChangeJoinDate(date, dateString) {
      this.joinDate = dateString;
    },
    onChangeRoomMateBirthday(date, dateString) {
      this.roomMateBirthday = dateString;
    },
    getCompanyInputValues(){
      const companyType = this.companyType;
      const companyName = this.companyName;
      const companyAdress = this.companyAdress;
      const companyOnwer = this.companyOnwer;
      const companyOnwerSex = this.companyOnwerSex;
      const companyOnwerTel = this.companyOnwerTel;
      const systemManager = this.systemManager;
      const systemManagerEmail = this.systemManagerEmail;
      const fax = this.fax;
      const notes = this.notes;
      const joinDate = this.joinDate;
      const buildingCount = this.buildingCount;
      const employeeCount = this.employeeCount;
      const productType = this.productType;
      const fee1 = this.fee1;
      const fee2 = this.fee2;
      const fee3 = this.fee3;
      const novationFee = this.novationFee;
      const propertyManagermentCompanyFee = this.propertyManagermentCompanyFee;
      const bankName = this.bankName;
      const recipientName = this.recipientName;
      const recipientNameKana = this.recipientNameKana;
      const bankAccountNumber = this.bankAccountNumber;
      const remitType = this.remitType;
      const branchOfficeName = this.branchOfficeName;
      const comfirmPerson = this.comfirmPerson;
      const approvalPerson = this.approvalPerson;
      const createdDate = this.createdDate;
      return {
        companyType,
        companyName,
        companyAdress,
        companyOnwer,
        companyOnwerSex,
        companyOnwerTel,
        systemManager,
        systemManagerEmail,
        fax,
        notes,
        joinDate,
        buildingCount,
        employeeCount,
        productType,
        fee1,
        fee2,
        fee3,
        novationFee,
        propertyManagermentCompanyFee,
        bankName,
        recipientName,
        recipientNameKana,
        bankAccountNumber,
        remitType,
        branchOfficeName,
        comfirmPerson,
        approvalPerson,
        createdDate,
      }
    },
    handleSubmit(e) {
      this.loading = true;
      const thisObj = this;
      const companyValues = this.getCompanyInputValues();
      this.db.collection("companys").add({
        ...companyValues
      })
      .then(function(docRef) {
        thisObj.getCompanyList(()=>{
          thisObj.clearDatas()
          thisObj.loading = false;
          thisObj.alertMsg({type:"success",msg:"등록 완료"});
          thisObj.moveCompanyListPage();
        })
      })
      .catch(function(error) {
        thisObj.loading = false;
        thisObj.alertMsg({type:"error",msg:"등록 실패"});
        console.error("Error adding document: ", error);
      });
    },
    handleUpdate(e) {
      this.loading = true;
      const thisObj = this;
      const companyValues = this.getCompanyInputValues();
      this.db.collection("companys").doc(this.companyDataForUpdate.id).update({
        ...companyValues
      })
      .then(function(docRef) {
        thisObj.getCompanyList(()=>{
          thisObj.clearDatas()
          thisObj.loading = false;
          thisObj.alertMsg({type:"success",msg:"수정 완료"});
          thisObj.moveCompanyListPage();
        })
      })
      .catch(function(error) {
        thisObj.loading = false;
        thisObj.alertMsg({type:"error",msg:"수정 실패"});
      });
    },
    cancel(){
      this.moveCompanyListPage();
    },
    clearDatas(){
      this.companyType = "부동산";
      this.companyName = "";
      this.companyAdress = "";
      this.companyOnwer = "";
      this.companyOnwerSex = "남";
      this.companyOnwerTel = "";
      this.systemManager = "";
      this.systemManagerEmail = "";
      this.fax = "";
      this.notes = "";
      this.joinDate = "";
      this.buildingCount = 0;
      this.employeeCount = 0;
      this.productType ="A";
      this.fee1 = 0;
      this.fee2 = 0;
      this.fee3 = 0;
      this.novationFee = 0;
      this.propertyManagermentCompanyFee = 0;
      this.bankName = "";
      this.recipientName = "";
      this.recipientNameKana = "";
      this.bankAccountNumber = "";
      this.remitType = "";
      this.branchOfficeName = "";
      this.comfirmPerson = "";
      this.approvalPerson = "";
      this.createdDate = "";
    },
    getCompanyList(cb){
      this.$store.dispatch(T.GET_COMPANY_LIST,{cb});
    },
    alertMsg({type="info",msg=""}) {
      switch (type) {
        case "info":
          this.$message.info(msg);
          break;
        case "error":
          this.$message.error(msg);
          break;
        case "success":
          this.$message.success(msg);
          break;
        default:
          break;
      }
    },
    moveCompanyListPage() {
      this.$store.dispatch(T.CHANGE_TAB_INDEX,3);
      this.$store.dispatch(T.CHANGE_UPDATE_COMPNAY_ID,"");
    },
  },
};
</script>

<style lang="scss">
.add-user-page{
  display: flex;
  flex-direction: column;
  height: 100% ;
  .content{
    flex:1;
    height: calc(100% - 50px);
    overflow: auto;
    .title{
      display: block;
      width: 16.66666667%;
      min-height: 32px;
      text-align: right;
      margin-bottom: 0;
      padding-right: 12px;
      color: rgba(0,0,0,.85);
      font-weight: 600;
      font-size: 20px;
      line-height: 32px;
    }
    .form-col{
      display: flex;
      flex-direction: column;
      &>*{
        min-height: 39px;
        margin-bottom: 5px;
      }
    }
    .form-row{
      display: flex;
      &--center{
        @extend .form-row;
        justify-content: center;
      }
      .ant-row.ant-form-item{
        margin-bottom: 10px;
        &.search-row{
          .ant-form-item-control,
          .ant-form-item-children{
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
          }
        }
        .form-row{
          width: 100%;
          .ant-row.ant-form-item{
            flex: 1;
            &:nth-child(2){
              flex: 1.5;
            }
            margin-bottom: 0;
          }
        }
      }
      .form-cell{
        flex:1;
      }
    }
  }
  h2{
    font-size: 24px;
    line-height: 32px;
    color: #0d1a26;
    font-family: Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-variant: tabular-nums;
    font-weight: 500;
    clear: both;
  }
}

#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
