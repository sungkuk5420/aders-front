<template>
  <div class="add-user-page">
    <div class="content">
      <a-form
        :layout="formLayout"
        :form="form"
        v-bind="formItemLayout"
        @submit="handleSubmit">
        <div class="form-row">
          <h2>입주자</h2>
        </div>
        <div class="form-row">
          <div class="form-cell">
            <a-form-item
              label="등록 선택"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                
                  <a-radio-group v-model="contractorType" >
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
                  label="입주예정일"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                
                  <a-date-picker @change="onChangeMoveIntoDate" style="width: 100%;"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="이름"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="contractorName"/>
                </a-form-item>
                <a-form-item
                  label="성별"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-radio-group v-model="contractorSex" >
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
              label="국적"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="contractorCountry"/>
                </a-form-item>
                <a-form-item
                  label="생년월일"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-date-picker @change="onChangeContractorBirthday" style="width: 100%;"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <a-input v-model="contractorAdress"/>
            </a-form-item>
            <a-form-item
              label="TEL"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input style="width: 100%" v-model="contractorTel" />
                </a-form-item>
                <a-form-item
                  label="이메일"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-auto-complete
                    :dataSource="emailDataSource"
                    style="width: 100%;"
                    @change="handleChangeEmail"
                    v-model="contractorEmail"
                  />
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="SMS ID"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="contractorSms"/>
                </a-form-item>
                <a-form-item
                  label="재류자격"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-select v-model="contractorResidenceQualification">
                    <a-select-option value="배우자 비자">
                      배우자 비자
                    </a-select-option>
                    <a-select-option value="기술인문비자">
                      기술인문비자
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="분류"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-radio-group v-model="contractorJobType" >
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
              label="학교명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
              v-show="contractorJobType=='학생'"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="contractorSchoolName"/>
                </a-form-item>
                <a-form-item
                  label="학교TEL"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="contractorSchoolTel"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="학교주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
              v-show="contractorJobType=='학생'"
            >
              <a-input v-model="contractorSchoolAddress"/>
            </a-form-item>
            <a-form-item
              label="직장명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
              v-show="contractorJobType=='직장인'"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="contractorCompanyName"/>
                </a-form-item>
                <a-form-item
                  label="직장주소"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                <a-input v-model="contractorCompanyAddress"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="직장TEL"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
              v-show="contractorJobType=='직장인'"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="contractorCompanyTel"/>
                </a-form-item>
                <a-form-item
                  label="근속연수"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <div class="form-row">
                    <a-form-item
                      :label-col="{ span: 1 }"
                      :wrapper-col="{ span: 24 }"
                    >
                    
                      <a-input v-model="contractorLengthOfService"/>
                    </a-form-item>
                    <a-form-item
                      label="급여"
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                    >
                    
                      <a-input v-model="contractorSalary"/>
                    </a-form-item>
                  </div>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="기타 이름"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
              v-show="contractorJobType=='기타'"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="contractorOtherName"/>
                </a-form-item>
                <a-form-item
                  label="기타TEL"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                <a-input v-model="contractorOtherTel"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="기타 주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
              v-show="contractorJobType=='기타'"
            >
              <a-input v-model="contractorOtherAddress"/>
            </a-form-item>
            <a-form-item
              label="기타 내용"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
              v-show="contractorJobType=='기타'"
            >
              <a-input v-model="contractorOtherContent"/>
            </a-form-item>
            <a-form-item
              label="증빙서류"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
              v-show="contractorJobType=='기타'"
            >
              <ImageUpload></ImageUpload>
            </a-form-item>
          </div>
          <div class="form-cell">
            <a-form-item
              label="관리회사"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              class="search-row"
            >
              <a-radio-group default-value="회사명" v-model="propertyManagermentCompanySearchType" class="ant-col-10" style="max-width:180px;">
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
              <a-radio-group v-model="guaranteeType" @change="onChangePaymentPercent" >
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
                  {{propertyManagermentCompanyFeePercentage}}%
                </span>
              </b>
            </a-form-item>
            <a-form-item 
              label="멘션명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <a-input v-model="propertyName"/>
            </a-form-item>
            <a-form-item 
              label="멘션주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <a-input v-model="propertyAdress"/>
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
                  <a-input v-model="roomNumber"/>
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
                    v-model="roomType"
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
                  <a-input v-model="rent" @change="onChangePayment"/>
                </a-form-item>
                <a-form-item
                  label="관리비"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="managementCost" @change="onChangePayment"/>
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
                  <a-input v-model="otherCosts" @change="onChangePayment"/>
                </a-form-item>
                <a-form-item
                  label="수수료"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="propertyManagermentCompanyFee" @change="onChangePayment"/>
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
          </div>
        </div>
        <div class="form-row">
          <h2>동반 입주자</h2>
        </div>
        <div class="form-row">
          <div class="form-cell">
            <a-form-item
              label="동반 입주자"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                
                  <a-switch checkedChildren="유" unCheckedChildren="무" v-model="roomMate" />
                </a-form-item>
                <a-form-item
                  label="인원"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                  v-show="roomMate"
                >
                  <a-input-number v-model="roomMateHeadCount" />
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="입주자 이름"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                
                  <a-input v-model="roomMateName"/>
                </a-form-item>
                <a-form-item
                  label="생년월일"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-date-picker @change="onChangeRoomMateBirthday" />
                </a-form-item>
              </div>
            </a-form-item>
            <div class="ant-row ant-form-item">
              <div class="ant-col-4 ant-form-item-label">
                <div class="form-col">
                  <label title="TEL" class="">TEL</label>
                  <label title="TEL" class="">국적</label>
                </div>
              </div>
              <div class="ant-col-16 ant-form-item-control-wrapper">
                <div class="form-row">
                  <a-form-item
                    :label-col="{ span: 1 }"
                    :wrapper-col="{ span: 24 }"
                  >
                    <div class="form-col">
                      <a-input style="width: 100%;" v-model="roomMateTel"/>
                      <a-auto-complete
                        :dataSource="countryDataSource"
                        style="width: 100%;"
                        v-model="roomMateCountry"
                        @change="handleChangeRoomMateCountry"
                      />
                    </div>
                  </a-form-item>
                  <a-form-item
                    label="신분증"
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 16 }"
                  >
                    <ImageUpload></ImageUpload>
                  </a-form-item>
                </div>
              </div>
            </div>
          </div>
          <div class="form-cell">
          </div>
        </div>
        <div class="form-row">
          <h2>긴급연락처 / 연대보증인</h2>
        </div>
        <div class="form-row">
          <div class="form-cell">
            <a-form-item
              label="보증인"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-select v-model="guarantorType">
                <a-select-option value="연대보증인">
                  연대보증인
                </a-select-option>
                <a-select-option value="긴급연락처">
                  긴급연락처
                </a-select-option>
              </a-select>
            </a-form-item>
          </div>
          <div class="form-cell"></div>
        </div>
        <VueSlideUpDown :active="guarantorType=='연대보증인'" :duration="500" class="form-row">
          <div class="form-cell">
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
                  <a-input v-model="guarantorName"/>
                </a-form-item>
                <a-form-item
                  label="국적"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-auto-complete
                    :dataSource="countryDataSource"
                    style="width: 100%;"
                    v-model="guarantorCountry"
                    @change="handleChangeGuarantorCountry"
                  />
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="생년월일"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-date-picker @change="onChangeGuarantorBirthday" style="width:100%;" />
                </a-form-item>
                <a-form-item
                  label="관계"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="relationship"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="TEL-1"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="guarantorTel1"/>
                </a-form-item>
                <a-form-item
                  label="TEL-2"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="guarantorTel2"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
                <a-input v-model="guarantorAdress"/>
            </a-form-item>
            <a-form-item
              label="직장명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="guarantorCompanyName"/>
                </a-form-item>
                <a-form-item
                  label="직장 TEL"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="guarantorCompanyTel"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="직장주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="guarantorCompanyAddress"/>
            </a-form-item>
          </div>
          <div class="form-cell">
            <a-form-item
              label="신분증(앞)"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <ImageUpload></ImageUpload>
                </a-form-item>
                <a-form-item
                  label="신분증(뒤)"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <ImageUpload></ImageUpload>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="연대보증인 계약서"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <ImageUpload></ImageUpload>
            </a-form-item>
          </div>
        </VueSlideUpDown>
        <VueSlideUpDown :active="guarantorType=='긴급연락처'" :duration="500" class="form-row">
          <div class="form-cell">
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
                  <a-input v-model="guarantorName"/>
                </a-form-item>
                <a-form-item
                  label="국적"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-auto-complete
                    :dataSource="countryDataSource"
                    style="width: 100%;"
                    v-model="guarantorCountry"
                    @change="handleChangeGuarantorCountry"
                  />
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="생년월일"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-date-picker @change="onChangeGuarantorBirthday" style="width:100%;" />
                </a-form-item>
                <a-form-item
                  label="관계"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="relationship"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="TEL-1"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="guarantorTel1"/>
                </a-form-item>
                <a-form-item
                  label="TEL-2"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input v-model="guarantorTel2"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="{ span: 16 }"
            >
                <a-input v-model="guarantorAdress"/>
            </a-form-item>

            
          </div>
          <div class="form-cell">
          </div>
        </VueSlideUpDown>
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
      contractorType: "개인", // 등록선택
      contractorName: "", // 계약자이름
      contractorCountry: "", // 계약자국적
      contractorJobType: "학생", // 계약자 분류
      contractorAdress: "", // 계약자 주소
      contractorTel: "", // 계약자 전화번호
      moveIntoDate: "", // 입주예정일
      contractorSex: "남", // 계약자 성별
      contractorBirthday: "", // 계약자 생년월일
      contractorEmail: "", // 계약자 이메일
      contractorSms: "", // 계약자 sms
      contractorResidenceQualification: "", // 계약자 재류자격
      //학생 start
      contractorSchoolName: "", // 계약자 학교명
      contractorSchoolTel: "", // 계약자 학교 TEL
      contractorSchoolAddress: "", // 계약자 학교주소
      //학생 end
      //직장인 start
      contractorCompanyName: "", // 계약자 회사이름
      contractorCompanyTel: "", // 계약자 직장 전화번호
      contractorCompanyAddress: "", // 계약자 직장주소
      contractorLengthOfService: "", // 계약자 근속연수
      contractorSalary : "", // 계약자 급여
      // 직장인 end
      // 기타 start
      contractorOtherName: "", // 기타 이름
      contractorOtherTel: "", // 기타 전화번호
      contractorOtherAddress: "", // 기타 주소
      contractorOtherContent: "", // 기타내용
      contractorOtherFile : "", // 증빙서류
      // 기타 end
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
      guarantorBirthday: "", // 보증인 생년월일
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
    handleChangeRoomMateCountry(value) {
      this.countryDataSource = ["대한민국","일본"].filter(item=>item.indexOf(value)!=-1)
    },
    handleChangeGuarantorCountry(value) {
      this.countryDataSource = ["대한민국","일본"].filter(item=>item.indexOf(value)!=-1)
    },
    handleChangeRoomType(value) {
      this.roomTypeDataSource = ["1K","1DK","1LDK","2K","2DK","2LDK","3K","3DK","3LDK","4K","4DK","4LDK"].filter(item=>item.indexOf(value)!=-1)
    },
    handleChangeCompanyList(value) {
      let dataList = [];
      if(this.propertyManagermentCompanySearchType == "회사명"){
        dataList = ["A관리회사","B관리회사"];
      }
      this.companyTypeDataSource = dataList.filter(item=>item.indexOf(value)!=-1)
    },
    onChangeGuarantorBirthday(date, dateString) {
      this.guarantorBirthday = dateString;
    },
    onChangeContractorBirthday(date, dateString) {
      this.contractorBirthday = dateString;
    },
    onChangeMoveIntoDate(date, dateString) {
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
