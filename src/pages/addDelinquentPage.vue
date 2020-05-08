<template>
  <div class="add-user-page">
    <div class="content">
      <a-form
        :layout="formLayout"
        :form="form"
        v-bind="formItemLayout"
        @submit="handleSubmit">
        <div class="form-row ">
          <h2>검색</h2>
        </div>
        <div class="form-row" :class="delinquentDataForUpdate?'read-only-form-data':''">
          <div v-if="delinquentDataForUpdate" class="overlay"></div>
          <div class="form-cell">
            <a-form-item
              label="입주자 검색"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-auto-complete
                  v-model="userSearchKeyword"
                  :dataSource="userTypeDataSource"
                  style="width: 200px; margin-right:10px;"
                  @change="handleChangeDelinquentList"
                  placeholder="Search Keyword"
                />
              </div>
            </a-form-item>
            <a-form-item 
              label="검색된 입주자"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <span>{{searchedUserName}}</span>
            </a-form-item>
          </div>
          <div class="form-cell">
          </div>
        </div>
        <div class="form-row read-only-form-data">
          <div class="overlay"></div>
          <h2>연체자 등록</h2>
        </div>
        <div class="form-row read-only-form-data">
          <div class="overlay"></div>
          <div class="form-cell">
            <a-form-item
              label="등록 선택"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-date-picker :value="moveIntoDate!=''?moment(moveIntoDate, dateFormat):''" :format="dateFormat"  @change="onChangeMoveIntoDate" style="width: 100%;"/>
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
                  label="이름(영문)"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-input v-model="contractorNameEnglish"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="성별"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
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
            <a-form-item
              label="국적"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-date-picker :value="contractorBirthday!=''?moment(contractorBirthday, dateFormat):''" :format="dateFormat" @change="onChangeContractorBirthday" style="width: 100%;"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="contractorAdress"/>
            </a-form-item>
            <a-form-item
              label="TEL"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
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
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
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
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-input v-model="contractorSchoolTel"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="학교주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              v-show="contractorJobType=='학생'"
            >
              <a-input v-model="contractorSchoolAddress"/>
            </a-form-item>
            <a-form-item
              label="직장명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                <a-input v-model="contractorCompanyAddress"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="직장TEL"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
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
                      :label-col="formItemLayout.labelCol2"
                      :wrapper-col="formItemLayout.wrapperCol"
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
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                <a-input v-model="contractorOtherTel"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="기타 주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              v-show="contractorJobType=='기타'"
            >
              <a-input v-model="contractorOtherAddress"/>
            </a-form-item>
            <a-form-item
              label="기타 내용"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              v-show="contractorJobType=='기타'"
            >
              <a-input v-model="contractorOtherContent"/>
            </a-form-item>
            <a-form-item
              label="증빙서류"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              v-show="contractorJobType=='기타'"
            >
              <ImageUpload ref="contractorOtherFile" :imageData="contractorOtherFile" :imageCbFunc="contractorOtherFileFunc"></ImageUpload>
            </a-form-item>
          </div>
          <div class="form-cell">
            <a-form-item
              label="관리회사"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              class="search-row"
            >
              <a-radio-group default-value="회사명" @change="onChangeSearchCompanyType" v-model="propertyManagermentCompanySearchType" class="ant-col-10" style="max-width:180px;">
                <a-radio-button value="회사명">
                  회사명
                </a-radio-button>
                <a-radio-button value="대표자명">
                  대표자명
                </a-radio-button>
              </a-radio-group>
              <a-auto-complete
                v-model="propertyManagermentCompanySearchKeyword"
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
              label="검색된 회사"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <span>{{searchedCompanyName}}</span>
            </a-form-item>
            <a-form-item
                label="대리점 수수료"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
              >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <b>
                    <span class="ant-form-text">
                      {{propertyManagermentCompanyFeePercentage? propertyManagermentCompanyFeePercentage+"%" : ""}}
                    </span>
                  </b>
                </a-form-item>
                <a-form-item
                  label="보증 수수료"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <b>
                    <span class="ant-form-text">
                      <a-input-number :max="999" 
                      v-show="guaranteeFeePercentage"
                      v-model="guaranteeFeePercentage" 
                      :formatter="value => `${value}% = ${guaranteeFee}円`" style="width:100%;" readonly 
                      />
                      <a-input-number :max="999" 
                      v-show="!guaranteeFeePercentage"
                      value="" 
                       style="width:100%;" readonly 
                       />
                    </span>
                  </b>
                </a-form-item>
              </div>
            </a-form-item>

            <a-form-item
            class="read-only-form-data"
              label="추심구분"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
            <div class="overlay" style="height:50px;"></div>
              <a-radio-group v-model="searchedCompany.debtCollectionType" >
                <a-radio-button value="보고형">
                  보고형
                </a-radio-button>
                <a-radio-button value="수금대행형">
                  수금대행형
                </a-radio-button>
              </a-radio-group>
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
                :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
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
                :wrapper-col="formItemLayout.wrapperCol"
              >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input-number style="width:100%" :formatter="value => `${value}円`" v-model="rent" @change="onChangePayment"/>
                </a-form-item>
                <a-form-item
                  label="관리비"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-input-number style="width:100%" :formatter="value => `${value}円`" v-model="managementCost" @change="onChangePayment"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
                label="기타비용"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
              >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input-number style="width:100%" :formatter="value => `${value}円`" v-model="otherCosts" @change="onChangePayment"/>
                </a-form-item>
                <a-form-item
                  label=""
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item 
              label="총금액"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <b>
                <span class="ant-form-text" v-show="totalPayment">
                  {{totalPayment}}円
                </span>
                <span class="ant-form-text" v-show="!totalPayment">
                  {{totalPayment}}円
                </span>
              </b>
            </a-form-item>
          </div>
        </div>
        <div class="form-row read-only-form-data">
          <div class="overlay"></div>
          <h2>동반 입주자</h2>
        </div>
        <div class="form-row read-only-form-data">
          <div class="overlay"></div>
          <div class="form-cell">
            <a-form-item
              label="동반 입주자"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                  v-show="roomMate"
                >
                  <a-input-number v-model="roomMateHeadCount" />
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="입주자 이름"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
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
              <div class="ant-col-18 ant-form-item-control-wrapper">
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
                    :label-col="formItemLayout.labelCol2"
                    :wrapper-col="formItemLayout.wrapperCol"
                  >
                    <ImageUpload ref="roomMateIdCard" :imageData="roomMateIdCard" :imageCbFunc="roomMateIdCardFunc"></ImageUpload>
                  </a-form-item>
                </div>
              </div>
            </div>
          </div>
          <div class="form-cell">
          </div>
        </div>
        <div class="form-row read-only-form-data">
          <div class="overlay"></div>
          <h2>긴급연락처 / 연대보증인</h2>
        </div>
        <div class="form-row read-only-form-data">
          <div class="overlay"></div>
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
        <VueSlideUpDown :active="guarantorType=='연대보증인'" :duration="500" class="form-row read-only-form-data">
          <div class="overlay"></div>
          <div class="form-cell">
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
                  <a-input v-model="guarantorName"/>
                </a-form-item>
                <a-form-item
                  label="국적"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
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
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-date-picker :value="guarantorBirthday!=''?moment(guarantorBirthday, dateFormat):''" :format="dateFormat"  @change="onChangeGuarantorBirthday" style="width:100%;" />
                </a-form-item>
                <a-form-item
                  label="관계"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-input v-model="guarantorRelationship"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="TEL-1"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-input v-model="guarantorTel2"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
                <a-input v-model="guarantorAdress"/>
            </a-form-item>
            <a-form-item
              label="직장명"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
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
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
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
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <ImageUpload ref="guarantorIdCardFront" :imageData="guarantorIdCardFront" :imageCbFunc="guarantorIdCardFrontFunc"></ImageUpload>
                </a-form-item>
                <a-form-item
                  label="신분증(뒤)"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <ImageUpload ref="guarantorIdCardBack" :imageData="guarantorIdCardBack" :imageCbFunc="guarantorIdCardBackFunc"></ImageUpload>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="연대보증인 계약서"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <ImageUpload ref="guarantorContract" :imageData="guarantorContract" :imageCbFunc="guarantorContractFunc"></ImageUpload>
            </a-form-item>
          </div>
        </VueSlideUpDown>
        <VueSlideUpDown :active="guarantorType=='긴급연락처'" :duration="500" class="form-row read-only-form-data">
          <div class="overlay"></div>
          <div class="form-cell">
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
                  <a-input v-model="emergencyName"/>
                </a-form-item>
                <a-form-item
                  label="국적"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-auto-complete
                    :dataSource="countryDataSource"
                    style="width: 100%;"
                    v-model="emergencyCountry"
                    @change="handleChangeEmergencyCountry"
                  />
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="생년월일"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-date-picker :value="emergencyBirthday!=''?moment(emergencyBirthday, dateFormat):''" :format="dateFormat" @change="onChangeEmergencyBirthday" style="width:100%;" />
                </a-form-item>
                <a-form-item
                  label="관계"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-input v-model="emergencyRelationship"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="TEL-1"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input v-model="emergencyTel1"/>
                </a-form-item>
                <a-form-item
                  label="TEL-2"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-input v-model="emergencyTel2"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="주소"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
                <a-input v-model="emergencyAdress"/>
            </a-form-item>

            
          </div>
          <div class="form-cell">
          </div>
        </VueSlideUpDown>
        <div class="form-row">
          <div class="form-cell">
            <div class="form-row read-only-form-data">
              <div class="overlay"></div>
              <h2>연체내용</h2>
            </div>
            <a-form-item
                label="월세 미납분"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
              >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input style="width:100%" :formatter="value => `${value}円`" v-model="nonPayMonthly"  />
                </a-form-item>
                <a-form-item
                  label="수수료"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-input-number style="width:100%" :formatter="value => `${value}円`" v-model="delinquentFee" />
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
                label="청구액"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
              >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-input-number style="width:100%" :formatter="value => `${value}円`" v-model="charges" />
                </a-form-item>
                <a-form-item 
                  label="체납발생"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"> 
                    <a-input v-model="arrears" />
                </a-form-item>
              </div>
            </a-form-item>
          </div>
          <div class="form-cell">
            <a-form-item
              label="블랙리스트"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item
                  :label-col="{ span: 1 }"
                  :wrapper-col="{ span: 24 }"
                >
                  <a-button type="default" v-if="searchedUser.blackList === true" @click="deleteBlackList" :loading="loading">
                    삭제
                  </a-button>
                  <a-button type="default" v-else @click="setBlackList" :loading="loading">
                    추가
                  </a-button>
                </a-form-item>
                <a-form-item
                  label="회심추심"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-button type="default" v-if="searchedUser.collectionList === true" @click="deleteCollectionList" :loading="loading">
                    해제
                  </a-button>
                  <a-button type="default" v-else @click="setCollectionList" :loading="loading">
                    지정
                  </a-button>
                </a-form-item>
              </div>
            </a-form-item>
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
                  :wrapper-col="formItemLayout.wrapperCol"
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
                 <a-button type="primary" v-show="!delinquentDataForUpdate" @click="handleRegister" :loading="loading">
                  등록
                </a-button>
                
                <a-button type="primary" v-show="delinquentDataForUpdate" @click="handleUpdate" :loading="loading">
                  수정
                </a-button>
                
                <a-button type="default"  style="margin-left:10px;" @click="moveDelinquentPage" :loading="loading">
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

import ImageUpload from "../components/ImageUpload"
import VueSlideUpDown from 'vue-slide-up-down'
import moment from 'moment';
export default {
  components:{
    ImageUpload,
    VueSlideUpDown
  },
  data() {
    return {
      loading:false,
      db:"", // firebase
      dateFormat: 'YYYY-MM-DD',
      contractorType: "개인", // 등록선택
      contractorName: "", // 계약자이름
      contractorNameEnglish: "", // 계약자이름
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
      contractorSchoolName: "", // 계약자 학교명
      contractorSchoolTel: "", // 계약자 학교 TEL
      contractorSchoolAddress: "", // 계약자 학교주소
      contractorCompanyName: "", // 계약자 회사이름
      contractorCompanyTel: "", // 계약자 직장 전화번호
      contractorCompanyAddress: "", // 계약자 직장주소
      contractorLengthOfService: "", // 계약자 근속연수
      contractorSalary : "", // 계약자 급여
      contractorOtherName: "", // 기타 이름
      contractorOtherTel: "", // 기타 전화번호
      contractorOtherAddress: "", // 기타 주소
      contractorOtherContent: "", // 기타내용
      contractorOtherFile : "", // 증빙서류
      companyId: "", // 회사Id
      guaranteeType: "긴급연락처", // 보증형태
      guaranteeFee:0, // 심사 수수료
      propertyName: "", // 멘션명 
      propertyAdress: "", // 멘션 주소
      roomNumber: "", // 호실
      roomType: "", // 방 타입
      rent: 0, // 월세
      managementCost: 0, // 관리비
      otherCosts: 0, // 기타비용
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
      guarantorRelationship: "", // 보증인 관계
      guarantorTel1: "", // 보증인TEL-1
      guarantorTel2: "", // 보증인TEL-2
      guarantorCompanyName: "", // 보증인 회사명
      guarantorCompanyTel: "", // 보증인 회사 전화번호
      guarantorCompanyAddress: "", // 보증인 회사 주소
      guarantorIdCardFront:"", // 보증인 신분증 앞
      guarantorIdCardBack:"", // 보증인 신분증 뒤
      guarantorContract:"", // 보증인 계약서
      guarantorBirthday: "", // 보증인 생년월일
      //
      emergencyName: "", // 긴급연락처 이름
      emergencyCountry: "", // 긴급연락처 국적
      emergencyBirthday: "", // 긴급연락처 생년월일
      emergencyRelationship: "", // 긴급연락처 관계
      emergencyTel1: "", // 긴급연락처TEL-1
      emergencyTel2: "", // 긴급연락처TEL-2
      emergencyAdress: "", // 긴급연락처 주소
      comfirmPerson: "", // 확인담당자
      approvalPerson: "", // 상관승인자
      createdDate: Date.now(), // 작성시간
      nonPayMonthly: "", //월세 미납분
      delinquentFee: "",//수수료
      charges: "",//청구액
      arrears: "",//체납발생
      searchedCompanyName: "", // 회사 검색 이름
      searchedCompany: {
        debtCollectionType:"보고형"
      }, // 회사 검색 오브젝트
      searchedUserName: "", // 연체자 검색 이름
      searchedUser: { // 연체자 검색 오브젝트
        blackList: false,
        collectionList: false
      }, 
      guaranteeFeePercentage:0, // 심사 수수료 퍼센트
      propertyManagermentCompanyFeePercentage: "", // 대리점 수수료 퍼센트
      propertyManagermentCompanySearchType: "회사명", // 회사 검색 타입
      propertyManagermentCompanySearchKeyword: "", // 회사 검색 키워드
      userSearchKeyword: "", // 회사 검색 키워드
      formLayout: 'horizontal',
      emailDataSource: [],
      roomTypeDataSource: [],
      companyTypeDataSource: [],
      userTypeDataSource: [],
      countryDataSource: ["대한민국","일본"],
    };
  },
  computed: {
    ...mapGetters({
      companyList:"getAllCompanyList",
      userList:"getAllUserList",
      userDataForUpdate:"getUserDataForUpdate",
      delinquentDataForUpdate:"getDelinquentDataForUpdate"
    }),
    formItemLayout() {
      const { formLayout } = this;
      return {
            labelCol: { span: 4 },
            labelCol2: { span: 6 },
            wrapperCol: { span: 18 },
          };
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return {
            wrapperCol: { span: 18, offset: 4 },
          };
    },
  },
  watch: {
    companyList: {
        handler(companys) {
            if (companys) {
                const dataList = this.updateCompanyListDataSource(companys);
                this.companyTypeDataSource = dataList;
            }
        },
        immediate: true
    },
    userList: {
      handler(users) {
        if (users) {
          const dataList = this.updateUserListDataSource(users);
          this.userTypeDataSource = dataList;
        }
      },
      immediate: true
    },
    userDataForUpdate: {
      handler(userData) {
        console.log("userDatauserDatauserDatauserDatauserDatauserDatauserDatauserData",userData)
          if (userData) {
            const companyId = userData.companyId
            let companyOfuser = this.companyList.filter(item=>item.id == companyId)[0];
            console.log(companyOfuser)
            this.contractorType = userData.contractorType;
            this.contractorName = userData.contractorName;
            this.contractorNameEnglish = userData.contractorNameEnglish;
            this.contractorCountry = userData.contractorCountry;
            this.contractorJobType = userData.contractorJobType;
            this.contractorAdress = userData.contractorAdress;
            this.contractorTel = userData.contractorTel;
            this.moveIntoDate = userData.moveIntoDate;
            this.contractorSex = userData.contractorSex;
            this.contractorBirthday = userData.contractorBirthday;
            this.contractorEmail = userData.contractorEmail;
            this.contractorSms = userData.contractorSms;
            this.contractorResidenceQualification = userData.contractorResidenceQualification;
            this.contractorSchoolName = userData.contractorSchoolName;
            this.contractorSchoolTel = userData.contractorSchoolTel;
            this.contractorSchoolAddress = userData.contractorSchoolAddress;
            this.contractorCompanyName = userData.contractorCompanyName;
            this.contractorCompanyTel = userData.contractorCompanyTel;
            this.contractorCompanyAddress = userData.contractorCompanyAddress;
            this.contractorLengthOfService = userData.contractorLengthOfService;
            this.contractorSalary = userData.contractorSalary;
            this.contractorOtherName = userData.contractorOtherName;
            this.contractorOtherTel = userData.contractorOtherTel;
            this.contractorOtherAddress = userData.contractorOtherAddress;
            this.contractorOtherContent = userData.contractorOtherContent;
            this.contractorOtherFile = userData.contractorOtherFile;
            this.companyId = userData.companyId;
            this.guaranteeType = userData.guaranteeType;
            this.propertyManagermentCompanyFeePercentage = userData.propertyManagermentCompanyFeePercentage;
            this.guaranteeFee = userData.guaranteeFee;
            this.propertyName = userData.propertyName;
            this.propertyAdress = userData.propertyAdress;
            this.roomNumber = userData.roomNumber;
            this.roomType = userData.roomType;
            this.rent = userData.rent;
            this.managementCost = userData.managementCost;
            this.otherCosts = userData.otherCosts;
            this.totalPayment = userData.totalPayment;
            this.roomMate = userData.roomMate;
            this.roomMateHeadCount = userData.roomMateHeadCount;
            this.roomMateName = userData.roomMateName;
            this.roomMateBirthday = userData.roomMateBirthday;
            this.roomMateTel = userData.roomMateTel;
            this.roomMateCountry = userData.roomMateCountry;
            this.roomMateIdCard = userData.roomMateIdCard;
            this.guarantorType = userData.guarantorType;
            this.guarantorName = userData.guarantorName;
            this.guarantorCountry = userData.guarantorCountry;
            this.guarantorAdress = userData.guarantorAdress;
            this.guarantorRelationship = userData.guarantorRelationship;
            this.guarantorTel1 = userData.guarantorTel1;
            this.guarantorTel2 = userData.guarantorTel2;
            this.guarantorCompanyName = userData.guarantorCompanyName;
            this.guarantorCompanyTel = userData.guarantorCompanyTel;
            this.guarantorCompanyAddress = userData.guarantorCompanyAddress;
            this.guarantorIdCardFront = userData.guarantorIdCardFront;
            this.guarantorIdCardBack = userData.guarantorIdCardBack;
            this.guarantorContract = userData.guarantorContract;
            this.guarantorBirthday = userData.guarantorBirthday;
            this.emergencyName = userData.emergencyName;
            this.emergencyCountry = userData.emergencyCountry;
            this.emergencyBirthday = userData.emergencyBirthday;
            this.emergencyRelationship = userData.emergencyRelationship;
            this.emergencyTel1 = userData.emergencyTel1;
            this.emergencyTel2 = userData.emergencyTel2;
            this.emergencyAdress = userData.emergencyAdress;
            this.comfirmPerson = userData.comfirmPerson;
            this.approvalPerson = userData.approvalPerson;
            this.createdDate = userData.createdDate;
            if(companyOfuser){
              this.searchedCompanyName = companyOfuser.companyName;
              this.searchedCompany = companyOfuser;
              switch (this.guaranteeType) {
                case "긴급연락처":
                  this.guaranteeFeePercentage = this.searchedCompany.fee1;
                  break;
                case "연대보증인":
                  this.guaranteeFeePercentage = this.searchedCompany.fee2;
                  break;
                case "기타":
                  this.guaranteeFeePercentage = this.searchedCompany.fee3;
                  break;
              
                default:
                  break;
              }
            }
          }else{
              this.clearDatas()
          }
      },
      immediate: true
    },
    delinquentDataForUpdate: {
      handler(delinquentData) {
        console.log("delinquentDatadelinquentDatadelinquentDatadelinquentDatadelinquentDatadelinquentDatadelinquentDatadelinquentData",delinquentData)
          if (delinquentData) {
            const userData = delinquentData.user;
            console.log(userData)
            const companyId = delinquentData.user.companyId;
            let companyOfuser = this.companyList.filter(item=>item.id == companyId)[0];
            this.contractorType = userData.contractorType;
            this.contractorName = userData.contractorName;
            this.contractorNameEnglish = userData.contractorNameEnglish;
            this.contractorCountry = userData.contractorCountry;
            this.contractorJobType = userData.contractorJobType;
            this.contractorAdress = userData.contractorAdress;
            this.contractorTel = userData.contractorTel;
            this.moveIntoDate = userData.moveIntoDate;
            this.contractorSex = userData.contractorSex;
            this.contractorBirthday = userData.contractorBirthday;
            this.contractorEmail = userData.contractorEmail;
            this.contractorSms = userData.contractorSms;
            this.contractorResidenceQualification = userData.contractorResidenceQualification;
            this.contractorSchoolName = userData.contractorSchoolName;
            this.contractorSchoolTel = userData.contractorSchoolTel;
            this.contractorSchoolAddress = userData.contractorSchoolAddress;
            this.contractorCompanyName = userData.contractorCompanyName;
            this.contractorCompanyTel = userData.contractorCompanyTel;
            this.contractorCompanyAddress = userData.contractorCompanyAddress;
            this.contractorLengthOfService = userData.contractorLengthOfService;
            this.contractorSalary = userData.contractorSalary;
            this.contractorOtherName = userData.contractorOtherName;
            this.contractorOtherTel = userData.contractorOtherTel;
            this.contractorOtherAddress = userData.contractorOtherAddress;
            this.contractorOtherContent = userData.contractorOtherContent;
            this.contractorOtherFile = userData.contractorOtherFile;
            this.companyId = userData.companyId;
            this.guaranteeType = userData.guaranteeType;
            this.propertyManagermentCompanyFeePercentage = userData.propertyManagermentCompanyFeePercentage;
            this.guaranteeFee = userData.guaranteeFee;
            this.propertyName = userData.propertyName;
            this.propertyAdress = userData.propertyAdress;
            this.roomNumber = userData.roomNumber;
            this.roomType = userData.roomType;
            this.rent = userData.rent;
            this.managementCost = userData.managementCost;
            this.otherCosts = userData.otherCosts;
            this.totalPayment = userData.totalPayment;
            this.roomMate = userData.roomMate;
            this.roomMateHeadCount = userData.roomMateHeadCount;
            this.roomMateName = userData.roomMateName;
            this.roomMateBirthday = userData.roomMateBirthday;
            this.roomMateTel = userData.roomMateTel;
            this.roomMateCountry = userData.roomMateCountry;
            this.roomMateIdCard = userData.roomMateIdCard;
            this.guarantorType = userData.guarantorType;
            this.guarantorName = userData.guarantorName;
            this.guarantorCountry = userData.guarantorCountry;
            this.guarantorAdress = userData.guarantorAdress;
            this.guarantorRelationship = userData.guarantorRelationship;
            this.guarantorTel1 = userData.guarantorTel1;
            this.guarantorTel2 = userData.guarantorTel2;
            this.guarantorCompanyName = userData.guarantorCompanyName;
            this.guarantorCompanyTel = userData.guarantorCompanyTel;
            this.guarantorCompanyAddress = userData.guarantorCompanyAddress;
            this.guarantorIdCardFront = userData.guarantorIdCardFront;
            this.guarantorIdCardBack = userData.guarantorIdCardBack;
            this.guarantorContract = userData.guarantorContract;
            this.guarantorBirthday = userData.guarantorBirthday;
            this.emergencyName = userData.emergencyName;
            this.emergencyCountry = userData.emergencyCountry;
            this.emergencyBirthday = userData.emergencyBirthday;
            this.emergencyRelationship = userData.emergencyRelationship;
            this.emergencyTel1 = userData.emergencyTel1;
            this.emergencyTel2 = userData.emergencyTel2;
            this.emergencyAdress = userData.emergencyAdress;
            this.comfirmPerson = userData.comfirmPerson;
            this.approvalPerson = userData.approvalPerson;
            this.createdDate = userData.createdDate;
            this.searchedUserName = userData.contractorName;
            this.userId = userData.id;
            console.log(companyOfuser)
            if(companyOfuser){
              this.searchedCompanyName = companyOfuser.companyName;
              this.searchedCompany = companyOfuser;
              switch (this.guaranteeType) {
                case "긴급연락처":
                  this.guaranteeFeePercentage = this.searchedCompany.fee1;
                  break;
                case "연대보증인":
                  this.guaranteeFeePercentage = this.searchedCompany.fee2;
                  break;
                case "기타":
                  this.guaranteeFeePercentage = this.searchedCompany.fee3;
                  break;
              
                default:
                  break;
              }
            }
          }else{
              this.clearDatas()
          }
      },
      immediate: true
    }
  },
  mounted(){
    this.db = firebase.firestore();
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
  },
  methods: {
    contractorOtherFileFunc(imageData){
      this.contractorOtherFile = imageData;
    },
    roomMateIdCardFunc(imageData){
      this.roomMateIdCard = imageData;
    },
    guarantorIdCardFrontFunc(imageData){
      this.guarantorIdCardFront = imageData;
    },
    guarantorIdCardBackFunc(imageData){
      this.guarantorIdCardBack = imageData;
    },
    guarantorContractFunc(imageData){
      this.guarantorContract = imageData;
    },
    moment,
    moveUserListPage(){
      this.$store.dispatch(T.CHANGE_TAB_INDEX,1);
      this.$store.dispatch(T.CHANGE_UPDATE_USER_ID,"");
    },
    moveDelinquentPage(){
      this.handleChangeDelinquentList("");
      this.$store.dispatch(T.CHANGE_TAB_INDEX,3);
      this.$store.dispatch(T.CHANGE_UPDATE_DELINQUENT_ID,"");
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
    clearDatas(){
      this.contractorType = "개인";
      this.contractorName = "";
      this.contractorNameEnglish = "";
      this.contractorCountry = "";
      this.contractorJobType = "학생";
      this.contractorAdress = "";
      this.contractorTel = "";
      this.moveIntoDate = "";
      this.contractorSex = "남";
      this.contractorBirthday = "";
      this.contractorEmail = "";
      this.contractorSms = "";
      this.contractorResidenceQualification = "";
      this.contractorSchoolName = "";
      this.contractorSchoolTel = "";
      this.contractorSchoolAddress = "";
      this.contractorCompanyName = "";
      this.contractorCompanyTel = "";
      this.contractorCompanyAddress = "";
      this.contractorLengthOfService = "";
      this.contractorSalary  = "";
      this.contractorOtherName = "";
      this.contractorOtherTel = "";
      this.contractorOtherAddress = "";
      this.contractorOtherContent = "";
      this.contractorOtherFile  = "";
      this.companyId  = "";
      this.propertyManagermentCompanySearchType = "회사명";
      this.guaranteeType = "긴급연락처";
      this.propertyManagermentCompanyFeePercentage = "";
      this.guaranteeFee =0;
      this.propertyName = "";
      this.propertyAdress = "";
      this.roomNumber = "";
      this.roomType = "";
      this.rent = 0;
      this.managementCost = 0;
      this.otherCosts = 0;
      this.totalPayment =0;
      this.roomMate = false;
      this.roomMateHeadCount = 1;
      this.roomMateName = "";
      this.roomMateBirthday = "";
      this.roomMateTel = "";
      this.roomMateCountry = "";
      this.roomMateIdCard = "";
      this.guarantorType = "연대보증인";
      this.guarantorName = "";
      this.guarantorCountry = "";
      this.guarantorAdress = "";
      this.guarantorRelationship = "";
      this.guarantorTel1 = "";
      this.guarantorTel2 = "";
      this.guarantorCompanyName = "";
      this.guarantorCompanyTel = "";
      this.guarantorCompanyAddress = "";
      this.guarantorIdCardFront = "";
      this.guarantorIdCardBack = "";
      this.guarantorContract = "";
      this.guarantorBirthday = "";
      this.emergencyName = "";
      this.emergencyCountry = "";
      this.emergencyBirthday = "";
      this.emergencyRelationship = "";
      this.emergencyTel1 = "";
      this.emergencyTel2 = "";
      this.emergencyAdress = "";
      this.comfirmPerson = "";
      this.approvalPerson = "";
      this.createdDate = "";            
      this.searchedUserName = "";
      this.userId = "";
      
      this.searchedCompany = {
        debtCollectionType:"보고형"
      };
      this.guaranteeFeePercentage = 0;
      this.propertyManagermentCompanyFeePercentage = 0;
      this.searchedCompanyName = "";
      this.companyId = "";
      this.userSearchKeyword = "";
      this.nonPayMonthly = "",  //월세 미납분
      this.delinquentFee = "",  //수수료
      this.charges = "",  //청구액
      this.arrears = ""  //체납발생
      
      if(this.$refs.contractorOtherFile){
        this.$refs.contractorOtherFile.clearImageData();
      }
      if(this.$refs.roomMateIdCard){
        this.$refs.roomMateIdCard.clearImageData();
      }
      if(this.$refs.guarantorIdCardFront){
        this.$refs.guarantorIdCardFront.clearImageData();
      }
      if(this.$refs.guarantorIdCardBack){
        this.$refs.guarantorIdCardBack.clearImageData();
      }
      if(this.$refs.guarantorContract){
        this.$refs.guarantorContract.clearImageData();
      }
    },
    getUserInputValues(){
      const contractorType = this.contractorType;
      const contractorName = this.contractorName;
      const contractorNameEnglish = this.contractorNameEnglish;
      const contractorCountry = this.contractorCountry;
      const contractorJobType = this.contractorJobType;
      const contractorAdress = this.contractorAdress;
      const contractorTel = this.contractorTel;
      const moveIntoDate = this.moveIntoDate;
      const contractorSex = this.contractorSex;
      const contractorBirthday = this.contractorBirthday;
      const contractorEmail = this.contractorEmail;
      const contractorSms = this.contractorSms;
      const contractorResidenceQualification = this.contractorResidenceQualification;
      const contractorSchoolName = this.contractorSchoolName;
      const contractorSchoolTel = this.contractorSchoolTel;
      const contractorSchoolAddress = this.contractorSchoolAddress;
      const contractorCompanyName = this.contractorCompanyName;
      const contractorCompanyTel = this.contractorCompanyTel;
      const contractorCompanyAddress = this.contractorCompanyAddress;
      const contractorLengthOfService = this.contractorLengthOfService;
      const contractorSalary = this.contractorSalary;
      const contractorOtherName = this.contractorOtherName;
      const contractorOtherTel = this.contractorOtherTel;
      const contractorOtherAddress = this.contractorOtherAddress;
      const contractorOtherContent = this.contractorOtherContent;
      const contractorOtherFile = this.contractorOtherFile;
      const companyId = this.companyId;
      const guaranteeType = this.guaranteeType;
      const propertyManagermentCompanyFeePercentage = this.propertyManagermentCompanyFeePercentage;
      const guaranteeFee = this.guaranteeFee;
      const propertyName = this.propertyName;
      const propertyAdress = this.propertyAdress;
      const roomNumber = this.roomNumber;
      const roomType = this.roomType;
      const rent = this.rent;
      const managementCost = this.managementCost;
      const otherCosts = this.otherCosts;
      const totalPayment = this.totalPayment;
      const roomMate = this.roomMate;
      const roomMateHeadCount = this.roomMateHeadCount;
      const roomMateName = this.roomMateName;
      const roomMateBirthday = this.roomMateBirthday;
      const roomMateTel = this.roomMateTel;
      const roomMateCountry = this.roomMateCountry;
      const roomMateIdCard = this.roomMateIdCard;
      const guarantorType = this.guarantorType;
      const guarantorName = this.guarantorName;
      const guarantorCountry = this.guarantorCountry;
      const guarantorAdress = this.guarantorAdress;
      const guarantorRelationship = this.guarantorRelationship;
      const guarantorTel1 = this.guarantorTel1;
      const guarantorTel2 = this.guarantorTel2;
      const guarantorCompanyName = this.guarantorCompanyName;
      const guarantorCompanyTel = this.guarantorCompanyTel;
      const guarantorCompanyAddress = this.guarantorCompanyAddress;
      const guarantorIdCardFront = this.guarantorIdCardFront;
      const guarantorIdCardBack = this.guarantorIdCardBack;
      const guarantorContract = this.guarantorContract;
      const guarantorBirthday = this.guarantorBirthday;
      const emergencyName = this.emergencyName;
      const emergencyCountry = this.emergencyCountry;
      const emergencyBirthday = this.emergencyBirthday;
      const emergencyRelationship = this.emergencyRelationship;
      const emergencyTel1 = this.emergencyTel1;
      const emergencyTel2 = this.emergencyTel2;
      const emergencyAdress = this.emergencyAdress;
      const comfirmPerson = this.comfirmPerson;
      const approvalPerson = this.approvalPerson;
      const createdDate = this.createdDate;
      return {
        contractorType,
        contractorName,
        contractorNameEnglish,
        contractorCountry,
        contractorJobType,
        contractorAdress,
        contractorTel,
        moveIntoDate,
        contractorSex,
        contractorBirthday,
        contractorEmail,
        contractorSms,
        contractorResidenceQualification,
        contractorSchoolName,
        contractorSchoolTel,
        contractorSchoolAddress,
        contractorCompanyName,
        contractorCompanyTel,
        contractorCompanyAddress,
        contractorLengthOfService,
        contractorSalary,
        contractorOtherName,
        contractorOtherTel,
        contractorOtherAddress,
        contractorOtherContent,
        contractorOtherFile,
        companyId,
        guaranteeType,
        propertyManagermentCompanyFeePercentage,
        guaranteeFee,
        propertyName,
        propertyAdress,
        roomNumber,
        roomType,
        rent,
        managementCost,
        otherCosts,
        totalPayment,
        roomMate,
        roomMateHeadCount,
        roomMateName,
        roomMateBirthday,
        roomMateTel,
        roomMateCountry,
        roomMateIdCard,
        guarantorType,
        guarantorName,
        guarantorCountry,
        guarantorAdress,
        guarantorRelationship,
        guarantorTel1,
        guarantorTel2,
        guarantorCompanyName,
        guarantorCompanyTel,
        guarantorCompanyAddress,
        guarantorIdCardFront,
        guarantorIdCardBack,
        guarantorContract,
        guarantorBirthday,
        emergencyName,
        emergencyCountry,
        emergencyBirthday,
        emergencyRelationship,
        emergencyTel1,
        emergencyTel2,
        emergencyAdress,
        comfirmPerson,
        approvalPerson,
        createdDate
      }
    },
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
    handleChangeEmergencyCountry(value) {
      this.countryDataSource = ["대한민국","일본"].filter(item=>item.indexOf(value)!=-1)
    },
    handleChangeRoomType(value) {
      this.roomTypeDataSource = ["1K","1DK","1LDK","2K","2DK","2LDK","3K","3DK","3LDK","4K","4DK","4LDK"].filter(item=>item.indexOf(value)!=-1)
    },
    onChangeSearchCompanyType(){
      this.handleChangeCompanyList(this.propertyManagermentCompanySearchKeyword)
    },
    updateCompanyListDataSource(companyList){
      let dataList = [];
      if(this.propertyManagermentCompanySearchType == "회사명"){
        dataList = companyList.map(item=>item.companyName);
      }else if(this.propertyManagermentCompanySearchType == "대표자명"){
        dataList = companyList.map(item=>item.companyOnwer);
      }
      return dataList;
    },
    handleChangeCompanyList(value) {
      const dataList = this.updateCompanyListDataSource(this.companyList);
      this.companyTypeDataSource = dataList.filter(item=>item.indexOf(value)!=-1)
      
      this.searchedCompany = {
        debtCollectionType:"보고형"
      };
      if(this.companyTypeDataSource.length == 1){
        let filteredCompany = {};
        if(this.propertyManagermentCompanySearchType == "회사명"){
          filteredCompany = this.companyList.filter(item=>item.companyName == value);
        }else if(this.propertyManagermentCompanySearchType == "대표자명"){
          filteredCompany = this.companyList.filter(item=>item.companyOnwer == value);
        }
        console.log(filteredCompany)
        if(filteredCompany.length > 0){
          this.searchedCompanyName = filteredCompany[0].companyName;
          this.searchedCompany = filteredCompany[0];
          this.companyId = filteredCompany[0].id;
        }else{
        this.searchedCompanyName = "검색된 회사가 없습니다.";
        }
      }else if(this.companyTypeDataSource.length == 0){
        this.searchedCompanyName = "검색된 회사가 없습니다.";
      }else{
        if(value != ""){
          this.searchedCompanyName = "검색된 회사가 2개 이상입니다.";
        }else{
          this.guaranteeFeePercentage = 0;
          this.propertyManagermentCompanyFeePercentage = 0;
          this.searchedCompanyName = "";
          this.companyId = "";
        }
      }
      this.onChangePaymentPercent()
    },
    updateUserListDataSource(userList){
      let dataList = [];
      dataList = userList.map(item=>item.contractorName);
      return dataList;
    },
    handleChangeDelinquentList(value) {
      const dataList = this.updateUserListDataSource(this.userList);
      this.userTypeDataSource = dataList.filter(item=>item.indexOf(value)!=-1)
      this.searchedUser = {
        blackList: false,
        collectionList: false
      };
      if(this.userTypeDataSource.length == 1){
        let filteredUser = {};
        filteredUser = this.userList.filter(item=>item.contractorName == value);
        if(filteredUser.length > 0){
          this.searchedUserName = filteredUser[0].contractorName;
          this.searchedUser = filteredUser[0];
          this.userId = filteredUser[0].id;
          this.$store.dispatch(T.CHANGE_UPDATE_USER_ID,this.searchedUser.id);
        }else{
          this.searchedUserName = "검색된 계약자가 없습니다.";
          this.clearDatas()
        }
      }else if(this.userTypeDataSource.length == 0){
        this.searchedUserName = "검색된 계약자가 없습니다.";
        this.clearDatas()
      }else{
        if(value != ""){
          this.searchedUserName = "검색된 계약자가 2개 이상입니다.";
        }else{
          this.guaranteeFeePercentage = 0;
          this.propertyManagermentUserFeePercentage = 0;
          this.searchedUserName = "";
          this.userId = "";
          this.clearDatas()
        }
      }
      // this.onChangePaymentPercent()
    },
    onChangeGuarantorBirthday(date, dateString) {
      this.guarantorBirthday = dateString;
    },
    onChangeEmergencyBirthday(date, dateString) {
      this.emergencyBirthday = dateString;
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
      console.log(this.searchedCompany)
      if(this.searchedCompany == null){
        return false;
      }
      this.rent = parseInt(this.rent);
      this.managementCost = parseInt(this.managementCost);
      this.otherCosts = parseInt(this.otherCosts);
      this.guaranteeFee = parseInt((this.rent+this.managementCost+this.otherCosts)*this.guaranteeFeePercentage / 100);
      this.totalPayment = parseInt(this.rent+this.managementCost+this.otherCosts+this.guaranteeFee);
    },
    onChangePaymentPercent() {
      if(this.searchedCompany == null){
        this.guaranteeFee = "";
      }else{
        this.propertyManagermentCompanyFeePercentage = this.searchedCompany.propertyManagermentCompanyFee;
        switch (this.guaranteeType) {
          case "긴급연락처":
            this.guaranteeFeePercentage = this.searchedCompany.fee1;
            break;
          case "연대보증인":
            this.guaranteeFeePercentage = this.searchedCompany.fee2;
            break;
          case "기타":
            this.guaranteeFeePercentage = this.searchedCompany.fee3;
            break;
        
          default:
            break;
        }
      }
      this.onChangePayment();
    },
    handleUpdate(e) {
      this.loading = true;
      const thisObj = this;
      console.log(this.delinquentDataForUpdate.id)
      this.db.collection("delinquents").doc(this.delinquentDataForUpdate.id).update({
        userId:this.delinquentDataForUpdate.userId,
        companyId:this.delinquentDataForUpdate.companyId,
        nonPayMonthly: this.nonPayMonthly,  //월세 미납분
        delinquentFee: this.delinquentFee,  //수수료
        charges: this.charges,  //청구액
        arrears: this.arrears   //체납발생
      })
      .then(function(docRef) {
        thisObj.$store.dispatch(T.GET_DELINQUENT_LIST,{
          cb:()=>{
            thisObj.clearDatas()
            thisObj.loading = false;
            thisObj.alertMsg({type:"success",msg:"수정 완료"});
            thisObj.moveDelinquentPage();
          }
        });
      })
      .catch(function(error) {
        thisObj.loading = false;
        thisObj.alertMsg({type:"error",msg:"수정 실패"});
        console.error("Error adding document: ", error);
      });
    },
    setBlackList(e) {
      this.loading = true;
      const thisObj = this;
      const userValues = this.getUserInputValues();
      
      this.db.collection("users").doc(this.userId).update({
        ...userValues,
        blackList:true
      })
      .then(function(docRef) {
        thisObj.searchedUser.blackList = true
        thisObj.alertMsg({type:"success",msg:"블랙 리스트 추가 완료"});
        thisObj.loading = false;
      })
      .catch(function(error) {
        thisObj.loading = false;
        thisObj.alertMsg({type:"error",msg:"블랙 리스트 추가 실패"});
        console.error("Error adding document: ", error);
      });
    },
    deleteBlackList(e) {
      this.loading = true;
      const thisObj = this;
      const userValues = this.getUserInputValues();

      this.db.collection("users").doc(this.userId).update({
        ...userValues,
        blackList:false
      })
      .then(function(docRef) {
        thisObj.searchedUser.blackList = false
        thisObj.alertMsg({type:"success",msg:"블랙 리스트 삭제 완료"});
        thisObj.loading = false;
      })
      .catch(function(error) {
        thisObj.loading = false;
        thisObj.alertMsg({type:"error",msg:"블랙 리스트 삭제 실패"});
        console.error("Error adding document: ", error);
      });
    },
    setCollectionList(e) {
      this.loading = true;
      const thisObj = this;
      const userValues = this.getUserInputValues();

      this.db.collection("users").doc(this.userId).update({
        ...userValues,
        collectionList:true
      })
      .then(function(docRef) {
        thisObj.searchedUser.collectionList = true
        thisObj.alertMsg({type:"success",msg:"회심 추심 지정 완료"});
        thisObj.loading = false;
      })
      .catch(function(error) {
        thisObj.loading = false;
        thisObj.alertMsg({type:"error",msg:"회심 추심 지정 실패"});
        console.error("Error adding document: ", error);
      });
    },
    deleteCollectionList(e) {
      this.loading = true;
      const thisObj = this;
      const userValues = this.getUserInputValues();

      this.db.collection("users").doc(this.userId).update({
        ...userValues,
        collectionList:false
      })
      .then(function(docRef) {
        thisObj.searchedUser.collectionList = false
        thisObj.alertMsg({type:"success",msg:"회심 추심 삭제 완료"});
        thisObj.loading = false;
      })
      .catch(function(error) {
        thisObj.loading = false;
        thisObj.alertMsg({type:"error",msg:"회심 추심 삭제 실패"});
        console.error("Error adding document: ", error);
      });
    },
    handleSubmit(e) {
      this.loading = true;
      const thisObj = this;
      const userValues = this.getUserInputValues();
      this.db.collection("users").add({
        ...userValues
      })
      .then(function(docRef) {
        thisObj.$store.dispatch(T.GET_USER_LIST,{
          cb:()=>{
          thisObj.clearDatas()
          thisObj.loading = false;
          thisObj.alertMsg({type:"success",msg:"등록 완료"});
          thisObj.moveUserListPage();
          }
        });
      })
      .catch(function(error) {
        thisObj.loading = false;
        thisObj.alertMsg({type:"error",msg:"등록 실패"});
        console.error("Error adding document: ", error);
      });
    },
    handleRegister(e) {
      this.loading = true;
      const thisObj = this;
      const userValues = this.getUserInputValues();
      
      this.db.collection("delinquents").add({
        userId:this.userId,
        companyId:this.searchedUser.companyId,
        nonPayMonthly: this.nonPayMonthly,  //월세 미납분
        delinquentFee: this.delinquentFee,  //수수료
        charges: this.charges,  //청구액
        arrears: this.arrears   //체납발생
      })
      .then(function(docRef) {
        thisObj.$store.dispatch(T.GET_DELINQUENT_LIST,{ // GET_USER_LIST 참고
          cb:()=>{
          thisObj.clearDatas()
          thisObj.loading = false;
          thisObj.alertMsg({type:"success",msg:"연체자 등록 완료"}); 
          thisObj.moveDelinquentPage(); //moveDelinquentPage함수제작
          }
        });
      })
      .catch(function(error) {
        thisObj.loading = false;
        thisObj.alertMsg({type:"error",msg:"연체자 등록 실패"});
        console.error("Error adding document: ", error);
      });
    }
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
.overlay{
  width:100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  z-index: 99999;
}
.read-only-form-data{
  position: relative;
}
</style>
