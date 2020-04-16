<template>
  <div class="add-user-page">
    <div class="content">
      <a-form
        class="form-row"
        :layout="formLayout"
        :form="form"
        v-bind="formItemLayout"
        @submit="handleSubmit">
        <div class="form-cell">
          <a-form-item
            label="등록 선택"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-radio-group default-value="개인" >
              <a-radio-button value="개인">
                개인
              </a-radio-button>
              <a-radio-button value="법인">
                법인
              </a-radio-button>
              <a-radio-button value="타보증회사">
                타보증회사
              </a-radio-button>
            </a-radio-group>
          </a-form-item>
          <a-form-item
            label="이름"
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
                label="국적"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-input/>
              </a-form-item>
            </div>
          </a-form-item>
          <a-form-item
            label="분류"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-radio-group default-value="학생" >
              <a-radio-button value="학생">
                학생
              </a-radio-button>
              <a-radio-button value="직장인">
                직장인
              </a-radio-button>
              <a-radio-button value="기타">
                기타
              </a-radio-button>
            </a-radio-group>
          </a-form-item>
          <a-form-item
            label="주소"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="TEL">
            <a-input
              v-decorator="[
                'phone',
                {
                  rules: [{ required: true, message: 'Please input your phone number!' }],
                },
              ]"
              style="width: 100%"
            >
              <a-select
                slot="addonBefore"
                v-decorator="['prefix', { initialValue: '81' }]"
                style="width: 80px"
              >
                <a-select-option value="81">
                  +81
                </a-select-option>
                <a-select-option value="82">
                  +82
                </a-select-option>
              </a-select>
            </a-input>
          </a-form-item>
          <a-form-item
            label="직장주소"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="직장 TEL">
            <a-input
              v-decorator="[
                'phone',
                {
                  rules: [{ required: true, message: 'Please input your phone number!' }],
                },
              ]"
              style="width: 100%"
            >
              <a-select
                slot="addonBefore"
                v-decorator="['prefix', { initialValue: '81' }]"
                style="width: 80px"
              >
                <a-select-option value="81">
                  +81
                </a-select-option>
                <a-select-option value="82">
                  +82
                </a-select-option>
              </a-select>
            </a-input>
          </a-form-item>

          <a-form-item
            label="입주예정일"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-date-picker @change="onChangeDate" />
          </a-form-item>
          <a-form-item
            label="이메일"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-auto-complete
              :dataSource="emailDataSource"
              style="width: 200px"
              @change="handleChangeEmail"
              placeholder="Email"
            />
          </a-form-item>
          <a-form-item
            label="SMS ID"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input/>
          </a-form-item>
          
          <a-form-item label="재류자격" has-feedback
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <a-select
              v-decorator="[
                'select',
                { rules: [{ required: true, message: 'Please select your visa!' }] },
              ]"
              placeholder="Please select a visa"
            >
              <a-select-option value="배우자 비자">
                배우자 비자
              </a-select-option>
              <a-select-option value="기술인문비자">
                기술인문비자
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            label="재류자격"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input/>
          </a-form-item>
          
          <a-form-item
            label="직장명"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input/>
          </a-form-item>
          <a-form-item
            label="근속연수"
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
                label="급여"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
              
                <a-input/>
              </a-form-item>
            </div>
          </a-form-item>
        </div>
        <div class="form-cell">
          <a-form-item
            label="관리회사"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            class="search-row"
          >
            <a-radio-group default-value="회사명" v-model="searchCompanyType" class="ant-col-10" style="max-width:180px;">
              <a-radio-button value="회사명">
                회사명
              </a-radio-button>
              <a-radio-button value="코드번호">
                코드번호
              </a-radio-button>
            </a-radio-group>
            <a-auto-complete
              :dataSource="companyTypeDataSource"
              style="width: 200px"
              @change="handleChangeCompanyList"
              placeholder="Search Keyword"
            />
          </a-form-item>

          <a-form-item 
            label="보증형태"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <a-radio-group v-model="paymentType" @change="onChangePaymentPercent" >
              <a-radio-button value="긴급연락처">
                긴급연락처
              </a-radio-button>
              <a-radio-button value="연대보증인">
                연대보증인
              </a-radio-button>
              <a-radio-button value="기타">
                기타
              </a-radio-button>
            </a-radio-group>
          </a-form-item>

          
          <a-form-item 
            label="대리점 수수료"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <b>
              <span class="ant-form-text">
                {{paymentPercent}}%
              </span>
            </b>
          </a-form-item>
          <a-form-item 
            label="멘션명"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <a-input/>
          </a-form-item>
          <a-form-item 
            label="멘션주소"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <a-input/>
          </a-form-item>
          
          <a-form-item
              label="호실"
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
                label="타입"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-auto-complete
                  :dataSource="roomTypeDataSource"
                  style="width: 200px"
                  @change="handleChangeRoomType"
                  placeholder="Type"
                />
              </a-form-item>
            </div>
          </a-form-item>
          <a-form-item
              label="월세"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
            <div class="form-row">
              <a-form-item
                :label-col="{ span: 1 }"
                :wrapper-col="{ span: 24 }"
              >
                <a-input v-model="payment1" @change="onChangePayment"/>
              </a-form-item>
              <a-form-item
                label="관리비"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-input v-model="payment2" @change="onChangePayment"/>
              </a-form-item>
            </div>
          </a-form-item>
          <a-form-item
              label="기타비용"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
            <div class="form-row">
              <a-form-item
                :label-col="{ span: 1 }"
                :wrapper-col="{ span: 24 }"
              >
                <a-input v-model="payment3" @change="onChangePayment"/>
              </a-form-item>
              <a-form-item
                label="수수료"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-input v-model="payment4" @change="onChangePayment"/>
              </a-form-item>
            </div>
          </a-form-item>
          <a-form-item 
            label="총금액"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <b>
              <span class="ant-form-text">
                {{totalPayment}}
              </span>
            </b>
          </a-form-item>
          
          <a-form-item :wrapper-col="formItemLayout.wrapperCol" style="margin-left:16%;">
            <a-button type="primary" html-type="submit">
              등록
            </a-button>
          </a-form-item>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      emailDataSource: [],
      roomTypeDataSource: [],
      companyTypeDataSource: ["A관리회사","B관리회사"],
      searchCompanyType:"회사명",
      paymentType:"긴급연락처",
      payment1:0,
      payment2:0,
      payment3:0,
      payment4:0,
      totalPayment:0,
      paymentPercent:70,
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
    handleChangeRoomType(value) {
      this.roomTypeDataSource = ["1K","1DK","1LDK","2K","2DK","2LDK","3K","3DK","3LDK","4K","4DK","4LDK"].filter(item=>item.indexOf(value)!=-1)
    },
    handleChangeCompanyList(value) {
      let dataList = [];
      if(this.searchCompanyType == "회사명"){
        dataList = ["A관리회사","B관리회사"];
      }
      this.companyTypeDataSource = dataList.filter(item=>item.indexOf(value)!=-1)
    },
    onChangeDate(date, dateString) {
      console.log(date, dateString);
    },
    onChangePayment() {
      this.payment1 = parseInt(this.payment1);
      this.payment2 = parseInt(this.payment2);
      this.payment3 = parseInt(this.payment3);
      this.payment4 = parseInt((this.payment1+this.payment2+this.payment3)*this.paymentPercent/100);
      this.totalPayment = parseInt(this.payment1+this.payment2+this.payment3+this.payment4);
    },
    onChangePaymentPercent() {
      switch (this.paymentType) {
        case "긴급연락처":
          this.paymentPercent = 70;
          break;
        case "연대보증인":
          this.paymentPercent = 40;
          break;
        case "기타":
          this.paymentPercent = 20;
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
    .form-row{
      display: flex;
      .ant-row.ant-form-item{
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
            margin-bottom: 10px;
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
}

#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
