<template>
  <div class="add-user-page">
    <div class="content">
      <a-form
        :layout="formLayout"
        :form="form"
        v-bind="formItemLayout"
        @submit="handleSubmit">
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
              :wrapper-col="{ span: 16 }"
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
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
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
              :wrapper-col="{ span: 16 }"
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
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="systemManager"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="시스템관리자 Email"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
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
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
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
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="propertyName" addonAfter="개"/>
                </a-form-item>
                <a-form-item
                  label="종업원 수"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="propertyAdress" addonAfter="명"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item 
              label="상품 종류"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <a-select v-model="guarantorType">
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
              <a-input-number :max="999" :formatter="value => `긴급연락처 ${value}%`" style="width:140px; margin-right:10px;"/>
              <a-input-number :max="999" :formatter="value => `연대보증인 ${value}%`" style="width:140px; margin-right:10px;"/>
              <a-input-number :max="999" :formatter="value => `기타 ${value}%`" style="width:100px;"/>
            </a-form-item>
            <a-form-item
                label="갱신료"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="{ span: 16 }"
              >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="rent"/>
                </a-form-item>
                <a-form-item
                  label="대리점 수수료"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="managementCost"/>
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
              <a-input/>
            </a-form-item>
            <a-form-item
              label="수취인명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input/>
                </a-form-item>
                <a-form-item
                  label="カナ）"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="계좌번호"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input/>
                </a-form-item>
                <a-form-item
                  label="송금타입"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="지점명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input/>
                </a-form-item>
                <a-form-item
                  label=""
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                </a-form-item>
              </div>
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
              :wrapper-col="{ span: 16 }"
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
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
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
              <a-button type="primary" html-type="submit">
                등록
              </a-button>
            </div>
          </div>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import ImageUpload from "../components/ImageUpload"
import VueSlideUpDown from 'vue-slide-up-down'
export default {
  components:{
    ImageUpload,
    VueSlideUpDown
  },
  data() {
    return {
      companyType: "부동산", // 등록선택
      companyName: "", // 회사이름
      companyAdress: "", // 회사 주소
      companyOnwer: "", // 회사 대표자
      companyOnwerTel: "", // 대표자 전화번호
      systemManager: "", // 시스템관리자
      fax: "", // FAX
      systemManagerEmail: "", // 시스템관리자 이메일
      notes: "", // 비고
      joinDate: "", // 등록날짜
      companyOnwerSex: "남", // 회사 대표자 성별
      companyBirthday: "", // 회사 생년월일
      companySms: "", // 회사 sms
      companyResidenceQualification: "", // 회사 재류자격
      companyCompanyName: "", // 회사 회사이름
      companyLengthOfService: "", // 회사 근속연수
      companySalary : "", // 회사 급여
      propertyManagermentCompanySearchType: "회사명", // 회사 검색 타입
      guaranteeType: "긴급연락처", // 보증형태
      propertyManagermentCompanyFeePercentage: 70, // 대리점 수수료 퍼센트
      propertyName: "", // 멘션명 
      propertyAdress: "", // 멘션 주소
      roomNumber: "", // 호실
      roomType: "", // 방 타입
      rent: 0, // 월세
      managementCost: 0, // 관리비
      otherCosts: 0, // 기타비용
      propertyManagermentCompanyFee:0, // 대리점 수수료
      totalPayment:0, // 총 비용
      roomMate: false, // 동반 입주자 여부
      roomMateHeadCount: 1, // 동반 입주자 인수
      roomMateName: "", // 동반 입주자 이름
      roomMateBirthday: "", // 동반 입주자 생년월일
      roomMateTel: "", // 동반 입주자 전화번호
      roomMateCountry: "", // 동반 입주자 국적
      roomMateIdCard: "", // 동반 입주자 신분증
      guarantorType: "연대보증인", // 보증 타입 연대 보증인 or 긴급연락처
      guarantorName: "", // 보증인 이름
      guarantorCountry: "", // 보증인 국적
      guarantorAdress: "", // 보증인 주소
      relationship: "", // 관계
      guarantorTel1: "", // 보증인TEL-1
      guarantorTel2: "", // 보증인TEL-2
      guarantorCompanyName: "", // 보증인 회사명
      guarantorCompanyTel: "", // 보증인 회사 전화번호
      guarantorCompanyAddress: "", // 보증인 회사 주소
      guarantorIdCard: "", // 보증인 신분증
      comfirmPerson: "", // 확인담당자
      approvalPerson: "", // 상관승인자
      // jointGuarantor: "", // 연대 보증인
      // emergencyContact: "", // 긴급 연락처
      formLayout: 'horizontal',
      emailDataSource: [],
      roomTypeDataSource: [],
      companyTypeDataSource: ["A관리회사","B관리회사"],
      countryDataSource: ["대한민국","일본"],
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return {
            labelCol: { span: 4 },
            wrapperCol: { span: 16 },
          };
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return {
            wrapperCol: { span: 16, offset: 4 },
          };
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
  },
  methods: {
    handleChangeEmail(value) {
      this.emailDataSource =
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@yahoo.com`, `${value}@other.com`];
    },
    onChangeJoinDate(date, dateString) {
      this.moveIntoDate = dateString;
    },
    onChangeRoomMateBirthday(date, dateString) {
      this.roomMateBirthday = dateString;
    },
    onChangePayment() {
      this.rent = parseInt(this.rent);
      this.managementCost = parseInt(this.managementCost);
      this.otherCosts = parseInt(this.otherCosts);
      this.propertyManagermentCompanyFee = parseInt((this.rent+this.managementCost+this.otherCosts)*this.propertyManagermentCompanyFeePercentage/100);
      this.totalPayment = parseInt(this.rent+this.managementCost+this.otherCosts+this.propertyManagermentCompanyFee);
    },
    onChangePaymentPercent() {
      switch (this.guaranteeType) {
        case "긴급연락처":
          this.propertyManagermentCompanyFeePercentage = 70;
          break;
        case "연대보증인":
          this.propertyManagermentCompanyFeePercentage = 40;
          break;
        case "기타":
          this.propertyManagermentCompanyFeePercentage = 20;
          break;
      
        default:
          break;
      }
      this.onChangePayment();
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
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
