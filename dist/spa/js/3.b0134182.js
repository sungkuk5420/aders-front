(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [3],
  {
    "0098": function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "add-user-page" }, [
            a(
              "div",
              { staticClass: "content" },
              [
                a(
                  "a-form",
                  e._b(
                    { attrs: { layout: e.formLayout, form: e.form } },
                    "a-form",
                    e.formItemLayout,
                    !1
                  ),
                  [
                    a("div", { staticClass: "form-row" }, [
                      a("h2", [e._v("代理店 登録")])
                    ]),
                    a("div", { staticClass: "form-row" }, [
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "登録 区分",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "a-radio-group",
                                {
                                  model: {
                                    value: e.companyType,
                                    callback: function(t) {
                                      e.companyType = t;
                                    },
                                    expression: "companyType"
                                  }
                                },
                                [
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "不動産" } },
                                    [e._v("不動産")]
                                  ),
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "管理会社" } },
                                    [e._v("管理会社")]
                                  ),
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "その他" } },
                                    [e._v("その他")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "会社名",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.companyName,
                                  callback: function(t) {
                                    e.companyName = t;
                                  },
                                  expression: "companyName"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "会社住所",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.companyAdress,
                                  callback: function(t) {
                                    e.companyAdress = t;
                                  },
                                  expression: "companyAdress"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "代表者",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.companyOnwer,
                                          callback: function(t) {
                                            e.companyOnwer = t;
                                          },
                                          expression: "companyOnwer"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "性別",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol2
                                      }
                                    },
                                    [
                                      a(
                                        "a-radio-group",
                                        {
                                          model: {
                                            value: e.companyOnwerSex,
                                            callback: function(t) {
                                              e.companyOnwerSex = t;
                                            },
                                            expression: "companyOnwerSex"
                                          }
                                        },
                                        [
                                          a(
                                            "a-radio-button",
                                            { attrs: { value: "男性" } },
                                            [e._v("男性")]
                                          ),
                                          a(
                                            "a-radio-button",
                                            { attrs: { value: "女性" } },
                                            [e._v("女性")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "代表者 TEL",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.companyOnwerTel,
                                          callback: function(t) {
                                            e.companyOnwerTel = t;
                                          },
                                          expression: "companyOnwerTel"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "システム管理者",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol2
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.systemManager,
                                          callback: function(t) {
                                            e.systemManager = t;
                                          },
                                          expression: "systemManager"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "システム管理者 メール",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-auto-complete", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          dataSource: e.emailDataSource
                                        },
                                        on: { change: e.handleChangeEmail },
                                        model: {
                                          value: e.systemManagerEmail,
                                          callback: function(t) {
                                            e.systemManagerEmail = t;
                                          },
                                          expression: "systemManagerEmail"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "FAX",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol2
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.fax,
                                          callback: function(t) {
                                            e.fax = t;
                                          },
                                          expression: "fax"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "備考",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.notes,
                                  callback: function(t) {
                                    e.notes = t;
                                  },
                                  expression: "notes"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "登録日",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.joinDate,
                                  callback: function(t) {
                                    e.joinDate = t;
                                  },
                                  expression: "joinDate"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "保有物件数",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        attrs: { addonAfter: "개" },
                                        model: {
                                          value: e.buildingCount,
                                          callback: function(t) {
                                            e.buildingCount = t;
                                          },
                                          expression: "buildingCount"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "従業員数",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol2
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        attrs: { addonAfter: "명" },
                                        model: {
                                          value: e.employeeCount,
                                          callback: function(t) {
                                            e.employeeCount = t;
                                          },
                                          expression: "employeeCount"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "商品種類",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "a-select",
                                {
                                  model: {
                                    value: e.productType,
                                    callback: function(t) {
                                      e.productType = t;
                                    },
                                    expression: "productType"
                                  }
                                },
                                [
                                  a(
                                    "a-select-option",
                                    { attrs: { value: "A" } },
                                    [e._v("A")]
                                  ),
                                  a(
                                    "a-select-option",
                                    { attrs: { value: "B" } },
                                    [e._v("B")]
                                  ),
                                  a(
                                    "a-select-option",
                                    { attrs: { value: "C" } },
                                    [e._v("C")]
                                  ),
                                  a(
                                    "a-select-option",
                                    { attrs: { value: "D" } },
                                    [e._v("D")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "保証審査料",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input-number", {
                                staticStyle: {
                                  width: "140px",
                                  "margin-right": "10px"
                                },
                                attrs: {
                                  max: 999,
                                  formatter: function(e) {
                                    return "緊急連絡先 " + e + "%";
                                  }
                                },
                                model: {
                                  value: e.fee1,
                                  callback: function(t) {
                                    e.fee1 = t;
                                  },
                                  expression: "fee1"
                                }
                              }),
                              a("a-input-number", {
                                staticStyle: {
                                  width: "140px",
                                  "margin-right": "10px"
                                },
                                attrs: {
                                  max: 999,
                                  formatter: function(e) {
                                    return "連帯保証人 " + e + "%";
                                  }
                                },
                                model: {
                                  value: e.fee2,
                                  callback: function(t) {
                                    e.fee2 = t;
                                  },
                                  expression: "fee2"
                                }
                              }),
                              a("a-input-number", {
                                staticStyle: { width: "100px" },
                                attrs: {
                                  max: 999,
                                  formatter: function(e) {
                                    return "その他 " + e + "%";
                                  }
                                },
                                model: {
                                  value: e.fee3,
                                  callback: function(t) {
                                    e.fee3 = t;
                                  },
                                  expression: "fee3"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "更新料",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.novationFee,
                                          callback: function(t) {
                                            e.novationFee = t;
                                          },
                                          expression: "novationFee"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "代理店手数料",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol2
                                      }
                                    },
                                    [
                                      a("a-input-number", {
                                        staticStyle: { width: "100px" },
                                        attrs: {
                                          max: 999,
                                          formatter: function(e) {
                                            return e + "%";
                                          }
                                        },
                                        model: {
                                          value:
                                            e.propertyManagermentCompanyFee,
                                          callback: function(t) {
                                            e.propertyManagermentCompanyFee = t;
                                          },
                                          expression:
                                            "propertyManagermentCompanyFee"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "債権回収",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "a-radio-group",
                                {
                                  model: {
                                    value: e.debtCollectionType,
                                    callback: function(t) {
                                      e.debtCollectionType = t;
                                    },
                                    expression: "debtCollectionType"
                                  }
                                },
                                [
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "滞納報告型" } },
                                    [e._v("滞納報告型")]
                                  ),
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "集金代行型" } },
                                    [e._v("集金代行型")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    a("div", { staticClass: "form-row" }, [
                      a("h2", [e._v("登録銀行情報")])
                    ]),
                    a("div", { staticClass: "form-row" }, [
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "銀行名",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.bankName,
                                  callback: function(t) {
                                    e.bankName = t;
                                  },
                                  expression: "bankName"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "受取人名",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.recipientName,
                                          callback: function(t) {
                                            e.recipientName = t;
                                          },
                                          expression: "recipientName"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "カナ）",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol2
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.recipientNameKana,
                                          callback: function(t) {
                                            e.recipientNameKana = t;
                                          },
                                          expression: "recipientNameKana"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "口座番号",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.bankAccountNumber,
                                          callback: function(t) {
                                            e.bankAccountNumber = t;
                                          },
                                          expression: "bankAccountNumber"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "送金タイプ",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol2
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.remitType,
                                          callback: function(t) {
                                            e.remitType = t;
                                          },
                                          expression: "remitType"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "支店名",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.branchOfficeName,
                                          callback: function(t) {
                                            e.branchOfficeName = t;
                                          },
                                          expression: "branchOfficeName"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a("a-form-item", {
                                    attrs: {
                                      label: "",
                                      "label-col": e.formItemLayout.labelCol2,
                                      "wrapper-col":
                                        e.formItemLayout.wrapperCol2
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      a("div", { staticClass: "form-cell" })
                    ]),
                    a("div", { staticClass: "form-row" }, [
                      a("div", { staticClass: "form-cell" }),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "確認担当者",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.comfirmPerson,
                                          callback: function(t) {
                                            e.comfirmPerson = t;
                                          },
                                          expression: "comfirmPerson"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "上司承認者",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol2
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.approvalPerson,
                                          callback: function(t) {
                                            e.approvalPerson = t;
                                          },
                                          expression: "approvalPerson"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "form-row--center",
                        staticStyle: { margin: "30px 0" }
                      },
                      [
                        a("div", { staticClass: "ant-row ant-form-item" }, [
                          a("div", {
                            staticClass: "ant-col-4 ant-form-item-label"
                          }),
                          a(
                            "div",
                            {
                              staticClass:
                                "ant-col-16 ant-form-item-control-wrapper"
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-button",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !e.companyDataForUpdate,
                                          expression: "!companyDataForUpdate"
                                        }
                                      ],
                                      attrs: {
                                        type: "primary",
                                        loading: e.loading
                                      },
                                      on: { click: e.handleSubmit }
                                    },
                                    [e._v("登録")]
                                  ),
                                  a(
                                    "a-button",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.companyDataForUpdate,
                                          expression: "companyDataForUpdate"
                                        }
                                      ],
                                      attrs: {
                                        type: "primary",
                                        loading: e.loading
                                      },
                                      on: { click: e.handleUpdate }
                                    },
                                    [e._v("編集")]
                                  ),
                                  a(
                                    "a-button",
                                    {
                                      staticStyle: { "margin-left": "10px" },
                                      attrs: { type: "default" },
                                      on: { click: e.cancel }
                                    },
                                    [e._v("キャンセル")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ],
              1
            )
          ]);
        },
        o = [];
    },
    "0392": function(e, t, a) {
      "use strict";
      var r = a("2c53"),
        o = a.n(r);
      o.a;
    },
    "099d": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("99a4"),
        o = a("db43");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("4cd1");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "DelinquentListPage.vue"), (t["default"] = s.exports);
    },
    "0b58": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("ea53"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    "0d63": function(e, t, a) {},
    "0ed5": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("54ca"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    "0f3e": function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("02fa")),
        n = a("2f62"),
        l = a("3d9d"),
        s = r(a("9529")),
        c = r(a("3e84")),
        i = r(a("c1df")),
        m = {
          components: { ImageUpload: s.default, VueSlideUpDown: c.default },
          data: function() {
            return {
              loading: !1,
              db: "",
              dateFormat: "YYYY-MM-DD",
              contractorType: "個人",
              contractorName: "",
              contractorNameEnglish: "",
              contractorCountry: "",
              contractorJobType: "学生",
              contractorAdress: "",
              contractorTel: "",
              moveIntoDate: "",
              contractorSex: "男性",
              contractorBirthday: "",
              contractorEmail: "",
              contractorSms: "",
              contractorResidenceQualification: "",
              contractorSchoolName: "",
              contractorSchoolTel: "",
              contractorSchoolAddress: "",
              contractorCompanyName: "",
              contractorCompanyTel: "",
              contractorCompanyAddress: "",
              contractorLengthOfService: "",
              contractorSalary: "",
              contractorOtherName: "",
              contractorOtherTel: "",
              contractorOtherAddress: "",
              contractorOtherContent: "",
              contractorOtherFile: "",
              companyId: "",
              guaranteeType: "緊急連絡先",
              guaranteeFee: 0,
              propertyName: "",
              propertyAdress: "",
              roomNumber: "",
              roomType: "",
              rent: 0,
              managementCost: 0,
              otherCosts: 0,
              totalPayment: 0,
              roomMate: !1,
              roomMateHeadCount: 1,
              roomMateName: "",
              roomMateBirthday: "",
              roomMateTel: "",
              roomMateCountry: "",
              roomMateIdCard: "",
              guarantorType: "連帯保証人",
              guarantorName: "",
              guarantorCountry: "",
              guarantorAdress: "",
              guarantorRelationship: "",
              guarantorTel1: "",
              guarantorTel2: "",
              guarantorCompanyName: "",
              guarantorCompanyTel: "",
              guarantorCompanyAddress: "",
              guarantorIdCardFront: "",
              guarantorIdCardBack: "",
              guarantorContract: "",
              guarantorBirthday: "",
              emergencyName: "",
              emergencyCountry: "",
              emergencyBirthday: "",
              emergencyRelationship: "",
              emergencyTel1: "",
              emergencyTel2: "",
              emergencyAdress: "",
              comfirmPerson: "",
              approvalPerson: "",
              searchedCompanyName: "",
              searchedCompany: { debtCollectionType: "滞納報告型" },
              guaranteeFeePercentage: 0,
              propertyManagermentCompanyFeePercentage: "",
              propertyManagermentCompanySearchType: "会社名",
              propertyManagermentCompanySearchKeyword: "",
              formLayout: "horizontal",
              emailDataSource: [],
              roomTypeDataSource: [],
              companyTypeDataSource: [],
              countryDataSource: ["韓国", "日本"]
            };
          },
          computed: (0, o.default)(
            {},
            (0, n.mapGetters)({
              userMaxIndex: "getUserMaxIndex",
              companyList: "getAllCompanyList",
              userDataForUpdate: "getUserDataForUpdate",
              isReadOnlyUpdateUserDetail: "getIsReadOnlyUpdateUserDetail"
            }),
            {
              formItemLayout: function() {
                this.formLayout;
                return {
                  labelCol: { span: 4 },
                  labelCol2: { span: 6 },
                  wrapperCol: { span: 18 }
                };
              },
              buttonItemLayout: function() {
                this.formLayout;
                return { wrapperCol: { span: 18, offset: 4 } };
              }
            }
          ),
          watch: {
            companyList: {
              handler: function(e) {
                if (e) {
                  var t = this.updateCompanyListDataSource(e);
                  this.companyTypeDataSource = t;
                }
              },
              immediate: !0
            },
            userDataForUpdate: {
              handler: function(e) {
                if (
                  (console.log(
                    "userDatauserDatauserDatauserDatauserDatauserDatauserDatauserData",
                    e
                  ),
                  e)
                ) {
                  var t = e.companyId,
                    a = this.companyList.filter(function(e) {
                      return e.id == t;
                    })[0];
                  if (
                    (console.log(a),
                    (this.contractorType = e.contractorType),
                    (this.contractorName = e.contractorName),
                    (this.contractorNameEnglish = e.contractorNameEnglish),
                    (this.contractorCountry = e.contractorCountry),
                    (this.contractorJobType = e.contractorJobType),
                    (this.contractorAdress = e.contractorAdress),
                    (this.contractorTel = e.contractorTel),
                    (this.moveIntoDate = e.moveIntoDate),
                    (this.contractorSex = e.contractorSex),
                    (this.contractorBirthday = e.contractorBirthday),
                    (this.contractorEmail = e.contractorEmail),
                    (this.contractorSms = e.contractorSms),
                    (this.contractorResidenceQualification =
                      e.contractorResidenceQualification),
                    (this.contractorSchoolName = e.contractorSchoolName),
                    (this.contractorSchoolTel = e.contractorSchoolTel),
                    (this.contractorSchoolAddress = e.contractorSchoolAddress),
                    (this.contractorCompanyName = e.contractorCompanyName),
                    (this.contractorCompanyTel = e.contractorCompanyTel),
                    (this.contractorCompanyAddress =
                      e.contractorCompanyAddress),
                    (this.contractorLengthOfService =
                      e.contractorLengthOfService),
                    (this.contractorSalary = e.contractorSalary),
                    (this.contractorOtherName = e.contractorOtherName),
                    (this.contractorOtherTel = e.contractorOtherTel),
                    (this.contractorOtherAddress = e.contractorOtherAddress),
                    (this.contractorOtherContent = e.contractorOtherContent),
                    (this.contractorOtherFile = e.contractorOtherFile),
                    (this.companyId = e.companyId),
                    (this.guaranteeType = e.guaranteeType),
                    (this.propertyManagermentCompanyFeePercentage =
                      e.propertyManagermentCompanyFeePercentage),
                    (this.guaranteeFee = e.guaranteeFee),
                    (this.propertyName = e.propertyName),
                    (this.propertyAdress = e.propertyAdress),
                    (this.roomNumber = e.roomNumber),
                    (this.roomType = e.roomType),
                    (this.rent = e.rent),
                    (this.managementCost = e.managementCost),
                    (this.otherCosts = e.otherCosts),
                    (this.totalPayment = e.totalPayment),
                    (this.roomMate = e.roomMate),
                    (this.roomMateHeadCount = e.roomMateHeadCount),
                    (this.roomMateName = e.roomMateName),
                    (this.roomMateBirthday = e.roomMateBirthday),
                    (this.roomMateTel = e.roomMateTel),
                    (this.roomMateCountry = e.roomMateCountry),
                    (this.roomMateIdCard = e.roomMateIdCard),
                    (this.guarantorType = e.guarantorType),
                    (this.guarantorName = e.guarantorName),
                    (this.guarantorCountry = e.guarantorCountry),
                    (this.guarantorAdress = e.guarantorAdress),
                    (this.guarantorRelationship = e.guarantorRelationship),
                    (this.guarantorTel1 = e.guarantorTel1),
                    (this.guarantorTel2 = e.guarantorTel2),
                    (this.guarantorCompanyName = e.guarantorCompanyName),
                    (this.guarantorCompanyTel = e.guarantorCompanyTel),
                    (this.guarantorCompanyAddress = e.guarantorCompanyAddress),
                    (this.guarantorIdCardFront = e.guarantorIdCardFront),
                    (this.guarantorIdCardBack = e.guarantorIdCardBack),
                    (this.guarantorContract = e.guarantorContract),
                    (this.guarantorBirthday = e.guarantorBirthday),
                    (this.emergencyName = e.emergencyName),
                    (this.emergencyCountry = e.emergencyCountry),
                    (this.emergencyBirthday = e.emergencyBirthday),
                    (this.emergencyRelationship = e.emergencyRelationship),
                    (this.emergencyTel1 = e.emergencyTel1),
                    (this.emergencyTel2 = e.emergencyTel2),
                    (this.emergencyAdress = e.emergencyAdress),
                    (this.comfirmPerson = e.comfirmPerson),
                    (this.approvalPerson = e.approvalPerson),
                    (this.createdDate = e.createdDate),
                    a)
                  )
                    switch (
                      ((this.searchedCompanyName = a.companyName),
                      (this.searchedCompany = a),
                      this.guaranteeType)
                    ) {
                      case "緊急連絡先":
                        this.guaranteeFeePercentage = this.searchedCompany.fee1;
                        break;
                      case "連帯保証人":
                        this.guaranteeFeePercentage = this.searchedCompany.fee2;
                        break;
                      case "その他":
                        this.guaranteeFeePercentage = this.searchedCompany.fee3;
                        break;
                      default:
                        break;
                    }
                } else this.clearDatas();
              },
              immediate: !0
            }
          },
          mounted: function() {
            this.db = firebase.firestore();
          },
          beforeCreate: function() {
            this.form = this.$form.createForm(this, { name: "validate_other" });
          },
          methods: {
            contractorOtherFileFunc: function(e) {
              this.contractorOtherFile = e;
            },
            roomMateIdCardFunc: function(e) {
              this.roomMateIdCard = e;
            },
            guarantorIdCardFrontFunc: function(e) {
              this.guarantorIdCardFront = e;
            },
            guarantorIdCardBackFunc: function(e) {
              this.guarantorIdCardBack = e;
            },
            guarantorContractFunc: function(e) {
              this.guarantorContract = e;
            },
            moment: i.default,
            moveUserListPage: function() {
              this.clearDatas(),
                this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 1),
                this.$store.dispatch(l.T.CHANGE_UPDATE_USER_ID, "");
            },
            moveBlackListPage: function() {
              this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 4),
                this.$store.dispatch(l.T.CHANGE_UPDATE_USER_ID, "");
            },
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            clearDatas: function() {
              (this.contractorType = "個人"),
                (this.contractorName = ""),
                (this.contractorNameEnglish = ""),
                (this.contractorCountry = ""),
                (this.contractorJobType = "学生"),
                (this.contractorAdress = ""),
                (this.contractorTel = ""),
                (this.moveIntoDate = ""),
                (this.contractorSex = "男性"),
                (this.contractorBirthday = ""),
                (this.contractorEmail = ""),
                (this.contractorSms = ""),
                (this.contractorResidenceQualification = ""),
                (this.contractorSchoolName = ""),
                (this.contractorSchoolTel = ""),
                (this.contractorSchoolAddress = ""),
                (this.contractorCompanyName = ""),
                (this.contractorCompanyTel = ""),
                (this.contractorCompanyAddress = ""),
                (this.contractorLengthOfService = ""),
                (this.contractorSalary = ""),
                (this.contractorOtherName = ""),
                (this.contractorOtherTel = ""),
                (this.contractorOtherAddress = ""),
                (this.contractorOtherContent = ""),
                (this.contractorOtherFile = ""),
                (this.companyId = ""),
                (this.propertyManagermentCompanySearchType = "会社名"),
                (this.guaranteeType = "緊急連絡先"),
                (this.propertyManagermentCompanyFeePercentage = ""),
                (this.guaranteeFee = 0),
                (this.propertyName = ""),
                (this.propertyAdress = ""),
                (this.roomNumber = ""),
                (this.roomType = ""),
                (this.rent = 0),
                (this.managementCost = 0),
                (this.otherCosts = 0),
                (this.totalPayment = 0),
                (this.roomMate = !1),
                (this.roomMateHeadCount = 1),
                (this.roomMateName = ""),
                (this.roomMateBirthday = ""),
                (this.roomMateTel = ""),
                (this.roomMateCountry = ""),
                (this.roomMateIdCard = ""),
                (this.guarantorType = "連帯保証人"),
                (this.guarantorName = ""),
                (this.guarantorCountry = ""),
                (this.guarantorAdress = ""),
                (this.guarantorRelationship = ""),
                (this.guarantorTel1 = ""),
                (this.guarantorTel2 = ""),
                (this.guarantorCompanyName = ""),
                (this.guarantorCompanyTel = ""),
                (this.guarantorCompanyAddress = ""),
                (this.guarantorIdCardFront = ""),
                (this.guarantorIdCardBack = ""),
                (this.guarantorContract = ""),
                (this.guarantorBirthday = ""),
                (this.emergencyName = ""),
                (this.emergencyCountry = ""),
                (this.emergencyBirthday = ""),
                (this.emergencyRelationship = ""),
                (this.emergencyTel1 = ""),
                (this.emergencyTel2 = ""),
                (this.emergencyAdress = ""),
                (this.comfirmPerson = ""),
                (this.approvalPerson = ""),
                (this.searchedCompany = { debtCollectionType: "滞納報告型" }),
                (this.guaranteeFeePercentage = 0),
                (this.propertyManagermentCompanyFeePercentage = 0),
                (this.searchedCompanyName = ""),
                (this.companyId = "");
            },
            getUserInputValues: function() {
              var e = this.contractorType,
                t = this.contractorName,
                a = this.contractorNameEnglish,
                r = this.contractorCountry,
                o = this.contractorJobType,
                n = this.contractorAdress,
                l = this.contractorTel,
                s = this.moveIntoDate,
                c = this.contractorSex,
                i = this.contractorBirthday,
                m = this.contractorEmail,
                u = this.contractorSms,
                p = this.contractorResidenceQualification,
                d = this.contractorSchoolName,
                h = this.contractorSchoolTel,
                y = this.contractorSchoolAddress,
                f = this.contractorCompanyName,
                g = this.contractorCompanyTel,
                C = this.contractorCompanyAddress,
                b = this.contractorLengthOfService,
                v = this.contractorSalary,
                w = this.contractorOtherName,
                I = this.contractorOtherTel,
                T = this.contractorOtherAddress,
                L = this.contractorOtherContent,
                x = this.contractorOtherFile,
                N = this.companyId,
                S = this.guaranteeType,
                k = this.propertyManagermentCompanyFeePercentage,
                _ = this.guaranteeFee,
                D = this.propertyName,
                M = this.propertyAdress,
                A = this.roomNumber,
                E = this.roomType,
                P = this.rent,
                F = this.managementCost,
                U = this.otherCosts,
                O = this.totalPayment,
                B = this.roomMate,
                $ = this.roomMateHeadCount,
                R = this.roomMateName,
                q = this.roomMateBirthday,
                H = this.roomMateTel,
                K = this.roomMateCountry,
                G = this.roomMateIdCard,
                J = this.guarantorType,
                Y = this.guarantorName,
                j = this.guarantorCountry,
                X = this.guarantorAdress,
                Q = this.guarantorRelationship,
                z = this.guarantorTel1,
                V = this.guarantorTel2,
                W = this.guarantorCompanyName,
                Z = this.guarantorCompanyTel,
                ee = this.guarantorCompanyAddress,
                te = this.guarantorIdCardFront,
                ae = this.guarantorIdCardBack,
                re = this.guarantorContract,
                oe = this.guarantorBirthday,
                ne = this.emergencyName,
                le = this.emergencyCountry,
                se = this.emergencyBirthday,
                ce = this.emergencyRelationship,
                ie = this.emergencyTel1,
                me = this.emergencyTel2,
                ue = this.emergencyAdress,
                pe = this.comfirmPerson,
                de = this.approvalPerson;
              return {
                contractorType: e,
                contractorName: t,
                contractorNameEnglish: a,
                contractorCountry: r,
                contractorJobType: o,
                contractorAdress: n,
                contractorTel: l,
                moveIntoDate: s,
                contractorSex: c,
                contractorBirthday: i,
                contractorEmail: m,
                contractorSms: u,
                contractorResidenceQualification: p,
                contractorSchoolName: d,
                contractorSchoolTel: h,
                contractorSchoolAddress: y,
                contractorCompanyName: f,
                contractorCompanyTel: g,
                contractorCompanyAddress: C,
                contractorLengthOfService: b,
                contractorSalary: v,
                contractorOtherName: w,
                contractorOtherTel: I,
                contractorOtherAddress: T,
                contractorOtherContent: L,
                contractorOtherFile: x,
                companyId: N,
                guaranteeType: S,
                propertyManagermentCompanyFeePercentage: k,
                guaranteeFee: _,
                propertyName: D,
                propertyAdress: M,
                roomNumber: A,
                roomType: E,
                rent: P,
                managementCost: F,
                otherCosts: U,
                totalPayment: O,
                roomMate: B,
                roomMateHeadCount: $,
                roomMateName: R,
                roomMateBirthday: q,
                roomMateTel: H,
                roomMateCountry: K,
                roomMateIdCard: G,
                guarantorType: J,
                guarantorName: Y,
                guarantorCountry: j,
                guarantorAdress: X,
                guarantorRelationship: Q,
                guarantorTel1: z,
                guarantorTel2: V,
                guarantorCompanyName: W,
                guarantorCompanyTel: Z,
                guarantorCompanyAddress: ee,
                guarantorIdCardFront: te,
                guarantorIdCardBack: ae,
                guarantorContract: re,
                guarantorBirthday: oe,
                emergencyName: ne,
                emergencyCountry: le,
                emergencyBirthday: se,
                emergencyRelationship: ce,
                emergencyTel1: ie,
                emergencyTel2: me,
                emergencyAdress: ue,
                comfirmPerson: pe,
                approvalPerson: de
              };
            },
            handleChangeEmail: function(e) {
              this.emailDataSource =
                !e || e.indexOf("@") >= 0
                  ? []
                  : [
                      "".concat(e, "@gmail.com"),
                      "".concat(e, "@yahoo.com"),
                      "".concat(e, "@other.com")
                    ];
            },
            handleChangeRoomMateCountry: function(e) {
              this.countryDataSource = ["韓国", "日本"].filter(function(t) {
                return -1 != t.indexOf(e);
              });
            },
            handleChangeGuarantorCountry: function(e) {
              this.countryDataSource = ["韓国", "日本"].filter(function(t) {
                return -1 != t.indexOf(e);
              });
            },
            handleChangeEmergencyCountry: function(e) {
              this.countryDataSource = ["韓国", "日本"].filter(function(t) {
                return -1 != t.indexOf(e);
              });
            },
            handleChangeRoomType: function(e) {
              this.roomTypeDataSource = [
                "1K",
                "1DK",
                "1LDK",
                "2K",
                "2DK",
                "2LDK",
                "3K",
                "3DK",
                "3LDK",
                "4K",
                "4DK",
                "4LDK"
              ].filter(function(t) {
                return -1 != t.indexOf(e);
              });
            },
            onChangeSearchCompanyType: function() {
              this.handleChangeCompanyList(
                this.propertyManagermentCompanySearchKeyword
              );
            },
            pad: function(e, t, a) {
              return (
                (a = a || "0"),
                (e += ""),
                e.length >= t ? e : new Array(t - e.length + 1).join(a) + e
              );
            },
            updateCompanyListDataSource: function(e) {
              var t = this,
                a = [];
              return (
                "会社名" == this.propertyManagermentCompanySearchType
                  ? (a = e.map(function(e) {
                      return e.companyName;
                    }))
                  : "契約番号" == this.propertyManagermentCompanySearchType &&
                    (a = e.map(function(e) {
                      return t.pad(e.approvalNumber, 4);
                    })),
                a
              );
            },
            handleChangeCompanyList: function(e) {
              var t = this.updateCompanyListDataSource(this.companyList);
              if (
                ((this.companyTypeDataSource = t.filter(function(t) {
                  return -1 != t.indexOf(e);
                })),
                (this.searchedCompany = { debtCollectionType: "滞納報告型" }),
                1 == this.companyTypeDataSource.length)
              ) {
                var a = {};
                "会社名" == this.propertyManagermentCompanySearchType
                  ? (a = this.companyList.filter(function(t) {
                      return t.companyName == e;
                    }))
                  : "契約番号" == this.propertyManagermentCompanySearchType &&
                    (a = this.companyList.filter(function(t) {
                      return t.approvalNumber == e;
                    })),
                  console.log(a),
                  a.length > 0
                    ? ((this.searchedCompanyName = a[0].companyName),
                      (this.searchedCompany = a[0]),
                      (this.companyId = a[0].id))
                    : (this.searchedCompanyName =
                        "検索された会社がありません。.");
              } else
                0 == this.companyTypeDataSource.length
                  ? (this.searchedCompanyName = "検索された会社がありません。.")
                  : "" != e
                  ? (this.searchedCompanyName = "検索された会社が2件以上です。")
                  : ((this.guaranteeFeePercentage = 0),
                    (this.propertyManagermentCompanyFeePercentage = 0),
                    (this.searchedCompanyName = ""),
                    (this.companyId = ""));
              this.onChangePaymentPercent();
            },
            onChangeGuarantorBirthday: function(e, t) {
              this.guarantorBirthday = t;
            },
            onChangeEmergencyBirthday: function(e, t) {
              this.emergencyBirthday = t;
            },
            onChangeContractorBirthday: function(e, t) {
              this.contractorBirthday = t;
            },
            onChangeMoveIntoDate: function(e, t) {
              this.moveIntoDate = t;
            },
            onChangeRoomMateBirthday: function(e, t) {
              this.roomMateBirthday = t;
            },
            onChangePayment: function() {
              if (
                (console.log(this.searchedCompany),
                null == this.searchedCompany)
              )
                return !1;
              (this.rent = parseInt(this.rent)),
                (this.managementCost = parseInt(this.managementCost)),
                (this.otherCosts = parseInt(this.otherCosts)),
                (this.guaranteeFee = parseInt(
                  ((this.rent + this.managementCost + this.otherCosts) *
                    this.guaranteeFeePercentage) /
                    100
                )),
                (this.totalPayment = parseInt(
                  this.rent + this.managementCost + this.otherCosts
                ));
            },
            onChangePaymentPercent: function() {
              if (null == this.searchedCompany) this.guaranteeFee = "";
              else
                switch (
                  ((this.propertyManagermentCompanyFeePercentage = this.searchedCompany.propertyManagermentCompanyFee),
                  this.guaranteeType)
                ) {
                  case "緊急連絡先":
                    this.guaranteeFeePercentage = this.searchedCompany.fee1;
                    break;
                  case "連帯保証人":
                    this.guaranteeFeePercentage = this.searchedCompany.fee2;
                    break;
                  case "その他":
                    this.guaranteeFeePercentage = this.searchedCompany.fee3;
                    break;
                  default:
                    break;
                }
              this.onChangePayment();
            },
            handleUpdate: function(e) {
              this.loading = !0;
              var t = this,
                a = this.getUserInputValues();
              this.db
                .collection("users")
                .doc(this.userDataForUpdate.id)
                .update((0, o.default)({}, a))
                .then(function(e) {
                  t.$store.dispatch(l.T.GET_USER_LIST, {
                    cb: function() {
                      t.clearDatas(),
                        (t.loading = !1),
                        t.alertMsg({ type: "success", msg: "編集 完了" }),
                        t.moveUserListPage();
                    }
                  });
                })
                .catch(function(e) {
                  (t.loading = !1),
                    t.alertMsg({ type: "error", msg: "編集 失敗" }),
                    console.error("Error adding document: ", e);
                });
            },
            handleSubmit: function(e) {
              this.loading = !0;
              var t = this,
                a = this.getUserInputValues();
              this.db
                .collection("users")
                .add(
                  (0, o.default)({}, a, {
                    createdDate: Date.now(),
                    approvalNumber: this.userMaxIndex
                  })
                )
                .then(function(e) {
                  t.$store.dispatch(l.T.GET_USER_LIST, {
                    cb: function() {
                      t.clearDatas(),
                        (t.loading = !1),
                        t.alertMsg({ type: "success", msg: "登録 完了" }),
                        t.moveUserListPage();
                    }
                  });
                })
                .catch(function(e) {
                  (t.loading = !1),
                    t.alertMsg({ type: "error", msg: "登録 失敗" }),
                    console.error("Error adding document: ", e);
                });
            }
          }
        };
      t.default = m;
    },
    "126f": function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "company-list-page" }, [
            a(
              "div",
              { staticClass: "search-wrapper" },
              [
                a(
                  "a-select",
                  {
                    on: { change: e.onSearch },
                    model: {
                      value: e.companySearchType,
                      callback: function(t) {
                        e.companySearchType = t;
                      },
                      expression: "companySearchType"
                    }
                  },
                  [
                    a("a-select-option", { attrs: { value: "代理店名" } }, [
                      e._v("代理店名")
                    ]),
                    a("a-select-option", { attrs: { value: "契約番号" } }, [
                      e._v("契約番号")
                    ]),
                    a("a-select-option", { attrs: { value: "代表者名" } }, [
                      e._v("代表者名")
                    ])
                  ],
                  1
                ),
                a(
                  "a-input-search",
                  {
                    attrs: { placeholder: "キーワード入寮", size: "large" },
                    on: { search: e.onSearch, change: e.onSearch },
                    model: {
                      value: e.companySearchKeyword,
                      callback: function(t) {
                        e.companySearchKeyword = t;
                      },
                      expression: "companySearchKeyword"
                    }
                  },
                  [
                    a(
                      "a-button",
                      {
                        attrs: {
                          slot: "enterButton",
                          type: "primary",
                          icon: "search",
                          loading: e.searchLoading
                        },
                        slot: "enterButton"
                      },
                      [e._v("検索")]
                    )
                  ],
                  1
                ),
                a(
                  "a-button",
                  {
                    attrs: { type: "primary" },
                    on: { click: e.moveAddCompanyPage }
                  },
                  [e._v("代理店 登録")]
                )
              ],
              1
            ),
            a(
              "div",
              { staticClass: "content" },
              [
                a(
                  "div",
                  {
                    staticClass: "row",
                    staticStyle: { "margin-bottom": "10px" }
                  },
                  [
                    a(
                      "a-button",
                      {
                        staticStyle: { "margin-left": "auto" },
                        attrs: { type: "primary" },
                        on: { click: e.exportExcel }
                      },
                      [e._v("Excel ダウンロード")]
                    )
                  ],
                  1
                ),
                a("CompanyTable")
              ],
              1
            )
          ]);
        },
        o = [];
    },
    1548: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("c330"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    1587: function(e, t, a) {},
    1687: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("a-table", {
            attrs: {
              columns: e.columns,
              dataSource: e.blackList,
              scroll: e.windowSize,
              expandRowByClick: ""
            },
            on: { change: e.handleTableChange },
            scopedSlots: e._u([
              {
                key: "expandedRowRender",
                fn: function(t) {
                  return a(
                    "div",
                    { staticClass: "detail-row" },
                    [
                      a("p", { staticStyle: { margin: "0" } }, [
                        e._v(e._s(t.notes))
                      ]),
                      a(
                        "a-button",
                        {
                          attrs: { type: "primary" },
                          on: {
                            click: function() {
                              e.detail(t.id);
                            }
                          }
                        },
                        [e._v("詳細")]
                      ),
                      a(
                        "a-popconfirm",
                        {
                          attrs: {
                            title: "本当にこのブラックリストを削除しますか。",
                            okText: "削除",
                            cancelText: "キャンセル"
                          },
                          on: {
                            confirm: function() {
                              e.confirm(t.id);
                            },
                            cancel: e.cancel
                          }
                        },
                        [
                          a("a-button", { attrs: { type: "default" } }, [
                            e._v("ブラックリスト 解除")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  );
                }
              }
            ])
          });
        },
        o = [];
    },
    "1a03": function(e, t, a) {
      "use strict";
      var r = a("0d63"),
        o = a.n(r);
      o.a;
    },
    "1cab": function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("02fa")),
        n = a("2f62"),
        l = a("3d9d"),
        s = [
          { title: "区分", dataIndex: "index", key: "index" },
          { title: "承認日", dataIndex: "createdDate", key: "createdDate" },
          {
            title: "代理店",
            dataIndex: "company.companyName",
            key: "company.companyName"
          },
          {
            title: "代理店 契約番号",
            dataIndex: "company.approvalNumber",
            key: "key3"
          },
          {
            title: "代理店手数料",
            dataIndex: "propertyManagermentCompanyFeePercentage",
            key: "propertyManagermentCompanyFeePercentage"
          },
          {
            title: "承認番号",
            dataIndex: "approvalNumber",
            key: "approvalNumber"
          },
          {
            title: "入居者名 (英語)",
            dataIndex: "contractorNameEnglish",
            key: "contractorNameEnglish"
          },
          {
            title: "入居者名",
            dataIndex: "contractorName",
            key: "contractorName"
          },
          {
            title: "メンション名",
            dataIndex: "propertyName",
            key: "propertyName"
          },
          { title: "部屋番号", dataIndex: "roomNumber", key: "roomNumber" },
          { title: "連絡先", dataIndex: "contractorTel", key: "contractorTel" },
          { title: "家賃", dataIndex: "rent", key: "rent" },
          { title: "審査金額", dataIndex: "guaranteeFee", key: "guaranteeFee" },
          {
            title: "審査率",
            dataIndex: "guaranteeFeePercentage",
            key: "guaranteeFeePercentage"
          },
          {
            title: "更新料",
            dataIndex: "company.novationFee",
            key: "company.novationFee"
          },
          { title: "担当者", dataIndex: "comfirmPerson", key: "comfirmPerson" },
          {
            title: "銀行名",
            dataIndex: "company.bankName",
            key: "company.bankName"
          },
          {
            title: "支店名",
            dataIndex: "company.branchOfficeName",
            key: "company.branchOfficeName"
          },
          {
            title: "口座番号",
            dataIndex: "company.bankAccountNumber",
            key: "company.bankAccountNumber"
          },
          { title: "備考", dataIndex: "company.notes", key: "company.notes" },
          {
            title: "連帯保証人の連絡先",
            dataIndex: "guarantorTel1",
            key: "guarantorTel1"
          },
          {
            title: "緊急連絡先",
            dataIndex: "emergencyTel1",
            key: "emergencyTel1"
          }
        ],
        c = {
          data: function() {
            return { columns: s, windowSize: { x: "max-content" } };
          },
          computed: (0, o.default)(
            {},
            (0, n.mapGetters)({ blackList: "getAllBlackList" })
          ),
          mounted: function() {
            this.db = firebase.firestore();
            window.innerHeight;
            this.windowSize = { x: "max-content" };
          },
          methods: {
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            detail: function(e) {
              this.$store.dispatch(l.T.CHANGE_UPDATE_USER_ID, e),
                this.$store.dispatch(l.T.IS_READ_ONLY_UPDATE_USER_DETAIL, !0),
                this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 10);
            },
            confirm: function(e) {
              var t = this;
              this.db
                .collection("users")
                .doc(e)
                .update({ blackList: !1 })
                .then(function() {
                  t.$store.dispatch(l.T.DELETE_BLACK_LIST, e),
                    t.alertMsg({
                      type: "success",
                      msg: "ブラックリスト 解除 完了"
                    });
                })
                .catch(function(e) {
                  console.log(e),
                    t.alertMsg({
                      type: "error",
                      msg: "ブラックリスト 解除 失敗"
                    });
                });
            },
            cancel: function() {
              this.alertMsg({ type: "error", msg: "キャンセル" });
            },
            handleTableChange: function(e, t, a) {
              console.log(e);
              var r = (0, o.default)({}, this.pagination);
              (r.current = e.current),
                (this.pagination = r),
                this.fetch(
                  (0, o.default)(
                    {
                      results: e.pageSize,
                      page: e.current,
                      sortField: a.field,
                      sortOrder: a.order
                    },
                    t
                  )
                );
            }
          }
        };
      t.default = c;
    },
    "1dd9": function(e, t, a) {},
    2612: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            {
              staticStyle: { "min-width": "1080px", margin: "15px 0 15px 10px" }
            },
            [
              a(
                "div",
                {
                  staticClass: "row",
                  staticStyle: { "margin-bottom": "15px" }
                },
                [
                  a("a-input", {
                    staticStyle: { flex: "10" },
                    model: {
                      value: e.content,
                      callback: function(t) {
                        e.content = t;
                      },
                      expression: "content"
                    }
                  }),
                  a(
                    "a-button",
                    {
                      staticStyle: { flex: "1" },
                      attrs: { type: "default" },
                      on: { click: e.addCallHistory }
                    },
                    [e._v("メモ作成")]
                  )
                ],
                1
              ),
              a("a-table", {
                staticStyle: { width: "100%" },
                attrs: {
                  columns: e.columns,
                  dataSource: e.campanyCallList,
                  size: "small",
                  pagination: !1
                }
              })
            ],
            1
          );
        },
        o = [];
    },
    "27e7": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("ffc2"),
        o = a("0ed5");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("1a03");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "UserTable.vue"), (t["default"] = s.exports);
    },
    "29b8": function(e, t, a) {},
    "2a22": function(e, t, a) {},
    "2aab": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("df73"),
        o = a("eb30");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("c07c");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "DelinquentTable.vue"), (t["default"] = s.exports);
    },
    "2c53": function(e, t, a) {},
    "2dac": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("126f"),
        o = a("77b8");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("5ad1");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "CompanyListPage.vue"), (t["default"] = s.exports);
    },
    "313c": function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            {
              staticStyle: { "min-width": "1080px", margin: "15px 0 15px 10px" }
            },
            [
              a(
                "div",
                {
                  staticClass: "row",
                  staticStyle: { "margin-bottom": "15px" }
                },
                [
                  a("a-input", {
                    staticStyle: { flex: "10" },
                    model: {
                      value: e.content,
                      callback: function(t) {
                        e.content = t;
                      },
                      expression: "content"
                    }
                  }),
                  a(
                    "a-button",
                    {
                      staticStyle: { flex: "1" },
                      attrs: { type: "default" },
                      on: { click: e.addCallHistory }
                    },
                    [e._v("メモ作成")]
                  )
                ],
                1
              ),
              a("a-table", {
                staticStyle: { width: "100%" },
                attrs: {
                  columns: e.columns,
                  dataSource: e.delinquentCallList,
                  size: "small",
                  pagination: !1
                }
              })
            ],
            1
          );
        },
        o = [];
    },
    "31e6": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("1cab"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    "351e": function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("4db1")),
        n = r(a("02fa")),
        l = (a("2f62"), r(a("c1df"))),
        s =
          (a("3d9d"),
          [
            { title: "区分", width: 60, key: "index", dataIndex: "index" },
            {
              title: "記録日",
              width: 180,
              dataIndex: "createdDate",
              key: "createdDate"
            },
            {
              title: "メモ内容",
              width: "auto",
              dataIndex: "content",
              key: "content"
            }
          ]),
        c = {
          props: ["userId"],
          data: function() {
            return { columns: s, userId: "", content: "", userCallList: [] };
          },
          computed: {},
          mounted: function() {
            (this.db = firebase.firestore()),
              (this.userId = this.$props.userId);
            var e = this;
            e.userCallList = e.db
              .collection("userCallHistory")
              .where("userId", "==", this.userId)
              .get()
              .then(function(t) {
                var a = [],
                  r = 1;
                t.forEach(function(e) {
                  var t = e.id;
                  a.push(
                    (0, n.default)({ index: r, id: t }, e.data(), {
                      createdDate: (0, l.default)(e.data().createdDate).format(
                        "YYYY-MM-DD hh:mm"
                      )
                    })
                  ),
                    r++;
                }),
                  console.log(a),
                  (e.userCallList = a);
              });
          },
          methods: {
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            addCallHistory: function(e) {
              var t = this,
                a = {
                  createdDate: Date.now(),
                  content: t.content,
                  userId: t.userId
                };
              (t.content = ""),
                this.db
                  .collection("userCallHistory")
                  .add(a)
                  .then(function() {
                    (t.userCallList = [].concat(
                      (0, o.default)(t.userCallList),
                      [
                        (0, n.default)({}, a, {
                          index: t.userCallList.length + 1,
                          createdDate: (0, l.default)(a.createdDate).format(
                            "YYYY-MM-DD hh:mm"
                          )
                        })
                      ]
                    )),
                      t.alertMsg({ type: "success", msg: "登録 完了" });
                  })
                  .catch(function(e) {
                    console.log(e),
                      t.alertMsg({ type: "error", msg: "登録 失敗" });
                  });
            }
          }
        };
      t.default = c;
    },
    "387e": function(e, t, a) {},
    "3a1a": function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("02fa")),
        n = a("2f62"),
        l = a("3d9d"),
        s = r(a("6ccf")),
        c = r(a("9044")),
        i = r(a("70e6")),
        m = r(a("fae6")),
        u = r(a("6159")),
        p = r(a("5c60")),
        d = r(a("2dac")),
        h = r(a("099d")),
        y = {
          components: {
            MainPage: s.default,
            UserListPage: c.default,
            BlackListPage: i.default,
            addUserPage: m.default,
            addCompanyPage: u.default,
            addDelinquentPage: p.default,
            CompanyListPage: d.default,
            DelinquentListPage: h.default
          },
          data: function() {
            return { isUnLogin: !1, loading: !1, password: "" };
          },
          computed: (0, o.default)(
            {},
            (0, n.mapGetters)({
              tabIndex: "getTabIndex",
              changeSuccessMessage: "changeSuccessMessage",
              changeErrorMessage: "changeErrorMessage"
            })
          ),
          watch: {
            changeSuccessMessage: function(e) {
              (this.loading = !1),
                "" !== e &&
                  (this.$message.success(e),
                  this.$store.dispatch(l.T.CHANGE_SUCCESS_MESSAGE, ""),
                  "ログイン成功" == e && this.getCompanyList());
            },
            changeErrorMessage: function(e) {
              (this.loading = !1),
                "" !== e &&
                  (this.$message.error(e),
                  this.$store.dispatch(l.T.CHANGE_ERROR_MESSAGE, ""));
            }
          },
          mounted: function() {
            this.getCompanyList();
          },
          methods: {
            checkAdminPassword: function(e) {
              var t = this;
              e = this.password;
              this.loading ||
                ((this.loading = !0),
                setTimeout(function() {
                  t.$store.dispatch(l.T.CHECK_ADMIN_PASSWORD, e);
                }, 500));
            },
            handleCancel: function() {
              document.getElementsByClassName("ant-modal-close")[0].click();
            },
            getUserList: function() {
              var e = this;
              this.$store.dispatch(l.T.GET_BLACK_LIST, {}),
                this.$store.dispatch(l.T.GET_USER_LIST, {
                  cb: function() {
                    e.getDelinquentList();
                  }
                });
            },
            getDelinquentList: function() {
              this.$store.dispatch(l.T.GET_DELINQUENT_LIST, {});
            },
            getCompanyList: function() {
              var e = this;
              this.$store.dispatch(l.T.GET_COMPANY_LIST, {
                cb: function() {
                  e.getUserList();
                }
              });
            },
            changeTabIndex: function(e) {
              switch (e) {
                case 0:
                  this.$store.dispatch(l.T.CHANGE_TAB_INDEX, e),
                    this.$store.dispatch(
                      l.T.IS_READ_ONLY_UPDATE_USER_DETAIL,
                      !1
                    );
                  break;
                case 1:
                  this.$store.dispatch(l.T.CHANGE_TAB_INDEX, e),
                    this.$store.dispatch(l.T.CHANGE_UPDATE_USER_ID, ""),
                    this.$store.dispatch(
                      l.T.IS_READ_ONLY_UPDATE_USER_DETAIL,
                      !1
                    );
                  break;
                case 2:
                  this.$store.dispatch(l.T.CHANGE_TAB_INDEX, e),
                    this.$store.dispatch(l.T.CHANGE_UPDATE_COMPNAY_ID, ""),
                    this.$store.dispatch(
                      l.T.IS_READ_ONLY_UPDATE_USER_DETAIL,
                      !1
                    );
                  break;
                case 3:
                  this.$store.dispatch(l.T.CHANGE_TAB_INDEX, e),
                    this.$store.dispatch(l.T.CHANGE_UPDATE_USER_ID, ""),
                    this.$store.dispatch(l.T.CHANGE_UPDATE_DELINQUENT_ID, ""),
                    this.$store.dispatch(
                      l.T.IS_READ_ONLY_UPDATE_USER_DETAIL,
                      !1
                    );
                  break;
                case 4:
                  this.$store.dispatch(l.T.CHANGE_TAB_INDEX, e),
                    this.$store.dispatch(l.T.CHANGE_UPDATE_USER_ID, ""),
                    this.$store.dispatch(
                      l.T.IS_READ_ONLY_UPDATE_USER_DETAIL,
                      !1
                    );
                  break;
                case 20:
                  this.$store.dispatch(l.T.CHANGE_TAB_INDEX, e);
                  break;
                default:
                  this.alertMsg({ type: "info", msg: "Comming soon" });
                  break;
              }
            },
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            notification: function(e) {
              var t = e.title,
                a = void 0 === t ? "" : t,
                r = e.content,
                o = void 0 === r ? "" : r;
              this.$notification.open({
                message: a,
                description: o,
                duration: 3,
                style: { top: "50px" }
              });
            }
          }
        };
      t.default = y;
    },
    "47d9": function(e, t, a) {},
    "4cd1": function(e, t, a) {
      "use strict";
      var r = a("29b8"),
        o = a.n(r);
      o.a;
    },
    "4eee": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("6eee"),
        o = a("7009");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("d508");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "CompanyTable.vue"), (t["default"] = s.exports);
    },
    "54ca": function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("02fa")),
        n = r(a("bdfd")),
        l = a("2f62"),
        s = a("3d9d"),
        c = [
          { title: "区分", dataIndex: "index", key: "index" },
          { title: "承認日", dataIndex: "createdDate", key: "createdDate" },
          {
            title: "代理店",
            dataIndex: "company.companyName",
            key: "company.companyName"
          },
          {
            title: "代理店 契約番号",
            dataIndex: "company.approvalNumber",
            key: "key3"
          },
          {
            title: "代理店手数料",
            dataIndex: "propertyManagermentCompanyFeePercentage",
            key: "propertyManagermentCompanyFeePercentage"
          },
          {
            title: "承認番号",
            dataIndex: "approvalNumber",
            key: "approvalNumber"
          },
          {
            title: "入居者名 (英語)",
            dataIndex: "contractorNameEnglish",
            key: "contractorNameEnglish"
          },
          {
            title: "入居者名",
            dataIndex: "contractorName",
            key: "contractorName"
          },
          {
            title: "メンション名",
            dataIndex: "propertyName",
            key: "propertyName"
          },
          { title: "部屋番号", dataIndex: "roomNumber", key: "roomNumber" },
          { title: "連絡先", dataIndex: "contractorTel", key: "contractorTel" },
          { title: "家賃", dataIndex: "rent", key: "rent" },
          { title: "審査金額", dataIndex: "guaranteeFee", key: "guaranteeFee" },
          {
            title: "審査率",
            dataIndex: "guaranteeFeePercentage",
            key: "guaranteeFeePercentage"
          },
          {
            title: "更新料",
            dataIndex: "company.novationFee",
            key: "company.novationFee"
          },
          { title: "担当者", dataIndex: "comfirmPerson", key: "comfirmPerson" },
          {
            title: "銀行名",
            dataIndex: "company.bankName",
            key: "company.bankName"
          },
          {
            title: "支店名",
            dataIndex: "company.branchOfficeName",
            key: "company.branchOfficeName"
          },
          {
            title: "口座番号",
            dataIndex: "company.bankAccountNumber",
            key: "company.bankAccountNumber"
          },
          { title: "備考", dataIndex: "company.notes", key: "company.notes" },
          {
            title: "連帯保証人の連絡先",
            dataIndex: "guarantorTel1",
            key: "guarantorTel1"
          },
          {
            title: "緊急連絡先",
            dataIndex: "emergencyTel1",
            key: "emergencyTel1"
          }
        ],
        i = {
          components: { UserCallHistoryTable: n.default },
          data: function() {
            return { columns: c, windowSize: { x: "max-content" } };
          },
          computed: (0, o.default)(
            {},
            (0, l.mapGetters)({ userList: "getAllUserList" })
          ),
          mounted: function() {
            this.db = firebase.firestore();
            window.innerHeight;
            this.windowSize = { x: "max-content" };
          },
          methods: {
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            detail: function(e) {
              this.$store.dispatch(s.T.CHANGE_UPDATE_USER_ID, e),
                this.$store.dispatch(s.T.CHANGE_TAB_INDEX, 10);
            },
            confirm: function(e) {
              var t = this;
              this.db
                .collection("users")
                .doc(e)
                .delete()
                .then(function() {
                  t.$store.dispatch(s.T.DELETE_USER, e),
                    t.alertMsg({ type: "success", msg: "削除 完了" });
                })
                .catch(function(e) {
                  console.log(e),
                    t.alertMsg({ type: "error", msg: "削除 失敗" });
                });
            },
            cancel: function() {
              this.alertMsg({ type: "error", msg: "キャンセル" });
            },
            handleTableChange: function(e, t, a) {
              console.log(e);
              var r = (0, o.default)({}, this.pagination);
              (r.current = e.current),
                (this.pagination = r),
                this.fetch(
                  (0, o.default)(
                    {
                      results: e.pageSize,
                      page: e.current,
                      sortField: a.field,
                      sortOrder: a.order
                    },
                    t
                  )
                );
            }
          }
        };
      t.default = i;
    },
    5872: function(e, t, a) {
      "use strict";
      var r = a("e3c6"),
        o = a.n(r);
      o.a;
    },
    "5ad1": function(e, t, a) {
      "use strict";
      var r = a("a1af"),
        o = a.n(r);
      o.a;
    },
    "5c60": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("ffdc"),
        o = a("1548");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("ac4e");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "addDelinquentPage.vue"), (t["default"] = s.exports);
    },
    "5c83": function(e, t, a) {
      "use strict";
      var r = a("47d9"),
        o = a.n(r);
      o.a;
    },
    6043: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "user-list-page" }, [
            a(
              "div",
              { staticClass: "search-wrapper" },
              [
                a(
                  "a-select",
                  {
                    on: { change: e.onSearch },
                    model: {
                      value: e.blackListSearchType,
                      callback: function(t) {
                        e.blackListSearchType = t;
                      },
                      expression: "blackListSearchType"
                    }
                  },
                  [
                    a("a-select-option", { attrs: { value: "入居者名" } }, [
                      e._v("入居者名")
                    ]),
                    a("a-select-option", { attrs: { value: "承認番号" } }, [
                      e._v("承認番号")
                    ]),
                    a("a-select-option", { attrs: { value: "メンション名" } }, [
                      e._v("メンション名")
                    ])
                  ],
                  1
                ),
                a(
                  "a-input-search",
                  {
                    attrs: { placeholder: "キーワード入寮", size: "large" },
                    on: { search: e.onSearch, change: e.onSearch },
                    model: {
                      value: e.blackListSearchKeyword,
                      callback: function(t) {
                        e.blackListSearchKeyword = t;
                      },
                      expression: "blackListSearchKeyword"
                    }
                  },
                  [
                    a(
                      "a-button",
                      {
                        attrs: {
                          slot: "enterButton",
                          type: "primary",
                          icon: "search",
                          loading: e.searchLoading
                        },
                        slot: "enterButton"
                      },
                      [e._v("検索")]
                    )
                  ],
                  1
                ),
                a("a-button", { attrs: { type: "primary" } }, [
                  e._v("詳細検索")
                ])
              ],
              1
            ),
            a(
              "div",
              { staticClass: "content" },
              [
                a(
                  "div",
                  {
                    staticClass: "row",
                    staticStyle: { "margin-bottom": "10px" }
                  },
                  [
                    a(
                      "a-button",
                      {
                        staticStyle: { "margin-left": "auto" },
                        attrs: { type: "primary" },
                        on: { click: e.exportExcel }
                      },
                      [e._v("Excel ダウンロード")]
                    )
                  ],
                  1
                ),
                a("BlackListTable")
              ],
              1
            )
          ]);
        },
        o = [];
    },
    6159: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("0098"),
        o = a("ae5b");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("f321");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "addCompanyPage.vue"), (t["default"] = s.exports);
    },
    "66d7": function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        a("34ef");
      var o = r(a("02fa")),
        n = a("2f62"),
        l = a("3d9d"),
        s = r(a("27e7")),
        c = {
          components: { UserTable: s.default },
          data: function() {
            return {
              userSearchType: "入居者名",
              userSearchKeyword: "",
              searchLoading: !1
            };
          },
          computed: (0, o.default)(
            {},
            (0, n.mapGetters)({ userList: "getAllUserList" })
          ),
          watch: {},
          mounted: function() {},
          methods: {
            exportExcel: function() {
              function e(e, t) {
                var a = t && t.sheet ? t.sheet : "Sheet1",
                  r = {};
                return (r[a] = e), { SheetNames: [a], Sheets: r };
              }
              function t(t, a) {
                return e(XLSX.utils.aoa_to_sheet(t, a), a);
              }
              function a(e) {
                for (
                  var t = new ArrayBuffer(e.length),
                    a = new Uint8Array(t),
                    r = 0;
                  r != e.length;
                  ++r
                )
                  a[r] = 255 & e.charCodeAt(r);
                return t;
              }
              console.log("export!");
              var r = { type: "binary" },
                o = [];
              o.push([
                "区分",
                "登録選択",
                "入居者 名前",
                "入居者 国籍",
                "入居者 分類",
                "入居者 住所",
                "入居者 電話番号",
                "入居予定日",
                "入居者 性別",
                "入居者 生年月日",
                "入居者 メール",
                "入居者 sms",
                "入居者 在留資格",
                "入居者 学校名",
                "入居者 学校 TEL",
                "入居者 学校住所",
                "入居者 会社名",
                "入居者 会社 電話番号",
                "入居者 会社住所",
                "入居者 勤続年数",
                "入居者 給料",
                "その他 名前",
                "その他 電話番号",
                "その他 住所",
                "その他のメモ",
                "保証種類",
                "審査手数料",
                "メンション名 ",
                "メンション住所",
                "部屋番号",
                "部屋のタイプ",
                "家賃",
                "管理費",
                "その他の費用",
                "合計金額",
                "同居者",
                "同居者 人数",
                "同居者 名前",
                "同居者 生年月日",
                "同居者 電話番号",
                "同居者 国籍",
                "保証タイプ 連帯保証人 or 緊急連絡先",
                "保証人 名前",
                "保証人 国籍",
                "保証人 住所",
                "保証人 関係",
                "保証人 TEL-1",
                "保証人 TEL-2",
                "保証人 会社名",
                "保証人 会社 電話番号",
                "保証人 会社住所",
                "保証人 生年月日",
                "緊急連絡先 名前",
                "緊急連絡先 国籍",
                "緊急連絡先 生年月日",
                "緊急連絡先 関係",
                "緊急連絡先-1",
                "緊急連絡先-2",
                "緊急連絡先 住所",
                "確認担当者",
                "上司承認者"
              ]);
              for (var n = 0; n < this.userList.length; n++) {
                var l = this.userList[n];
                o.push([
                  l.index,
                  l.contractorType,
                  l.contractorName,
                  l.contractorCountry,
                  l.contractorJobType,
                  l.contractorAdress,
                  l.contractorTel,
                  l.moveIntoDate,
                  l.contractorSex,
                  l.contractorBirthday,
                  l.contractorEmail,
                  l.contractorSms,
                  l.contractorResidenceQualification,
                  l.contractorSchoolName,
                  l.contractorSchoolTel,
                  l.contractorSchoolAddress,
                  l.contractorCompanyName,
                  l.contractorCompanyTel,
                  l.contractorCompanyAddress,
                  l.contractorLengthOfService,
                  l.contractorSalary,
                  l.contractorOtherName,
                  l.contractorOtherTel,
                  l.contractorOtherAddress,
                  l.contractorOtherContent,
                  l.guaranteeType,
                  l.guaranteeFee,
                  l.propertyName,
                  l.propertyAdress,
                  l.roomNumber,
                  l.roomType,
                  l.rent,
                  l.managementCost,
                  l.otherCosts,
                  l.totalPayment,
                  l.roomMate,
                  l.roomMateHeadCount,
                  l.roomMateName,
                  l.roomMateBirthday,
                  l.roomMateTel,
                  l.roomMateCountry,
                  l.guarantorType,
                  l.guarantorName,
                  l.guarantorCountry,
                  l.guarantorAdress,
                  l.guarantorRelationship,
                  l.guarantorTel1,
                  l.guarantorTel2,
                  l.guarantorCompanyName,
                  l.guarantorCompanyTel,
                  l.guarantorCompanyAddress,
                  l.guarantorBirthday,
                  l.emergencyName,
                  l.emergencyCountry,
                  l.emergencyBirthday,
                  l.emergencyRelationship,
                  l.emergencyTel1,
                  l.emergencyTel2,
                  l.emergencyAdress,
                  l.comfirmPerson,
                  l.approvalPerson
                ]);
              }
              var s = t(o),
                c = XLSX.write(s, r),
                i = new Blob([a(c)], { type: "application/octet-stream" });
              saveAs(i, "入居者 一覧.xlsx");
            },
            onSearch: function() {
              console.log("search click");
              var e = this.userSearchType,
                t = this.userSearchKeyword;
              this.$store.dispatch(l.T.SEARCH_USER, {
                userSearchType: e,
                userSearchKeyword: t
              });
            },
            moveAddUserPage: function() {
              this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 10);
            },
            alertMsg: function() {
              this.$message.info("開発中。。");
            }
          }
        };
      t.default = c;
    },
    "69b7": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("351e"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    "69e2": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("2612"),
        o = a("a3c2");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("a1b8");
      var l = a("2877"),
        s = Object(l["a"])(
          o["default"],
          r["a"],
          r["b"],
          !1,
          null,
          "698f57c0",
          null
        );
      (s.options.__file = "CompanyCallHistoryTable.vue"),
        (t["default"] = s.exports);
    },
    "6ccf": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("9a2d"),
        o = a("0b58");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("5872");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "MainPage.vue"), (t["default"] = s.exports);
    },
    "6eee": function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("a-table", {
            attrs: {
              columns: e.columns,
              dataSource: e.companyList,
              scroll: e.windowSize,
              expandRowByClick: ""
            },
            on: { change: e.handleTableChange },
            scopedSlots: e._u([
              {
                key: "expandedRowRender",
                fn: function(t) {
                  return a("div", { staticClass: "detail-row" }, [
                    a(
                      "div",
                      { staticClass: "col" },
                      [
                        a(
                          "div",
                          { staticClass: "row" },
                          [
                            a(
                              "a-button",
                              {
                                attrs: { type: "primary" },
                                on: {
                                  click: function() {
                                    e.detail(t.id);
                                  }
                                }
                              },
                              [e._v("詳細")]
                            )
                          ],
                          1
                        ),
                        a(
                          "div",
                          { staticClass: "row" },
                          [
                            a("CompanyCallHistoryTable", {
                              attrs: { campanyId: t.id }
                            })
                          ],
                          1
                        ),
                        a(
                          "a-popconfirm",
                          {
                            attrs: {
                              title: "本当にこの代理店を削除しますか。",
                              okText: "削除",
                              cancelText: "キャンセル"
                            },
                            on: {
                              confirm: function() {
                                e.confirm(t.id);
                              },
                              cancel: e.cancel
                            }
                          },
                          [
                            a("a-button", { attrs: { type: "default" } }, [
                              e._v("削除")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]);
                }
              }
            ])
          });
        },
        o = [];
    },
    7009: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("96da"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    "70e6": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("6043"),
        o = a("ff98");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("5c83");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "BlackListPage.vue"), (t["default"] = s.exports);
    },
    "77b8": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("cde8"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    "7c75": function(e, t, a) {
      "use strict";
      function r(e, t) {
        var a = new FileReader();
        a.addEventListener("load", function() {
          return t(a.result);
        }),
          a.readAsDataURL(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = {
        props: ["imageCbFunc", "imageData"],
        data: function() {
          return { loading: !1, imageUrl: "" };
        },
        watch: {
          imageData: {
            handler: function(e) {
              void 0 !== e && (this.imageUrl = e);
            },
            immediate: !0
          }
        },
        mounted: function() {},
        methods: {
          clearImageData: function() {
            this.imageUrl = "";
          },
          handleChange: function(e) {
            var t = this;
            "uploading" !== e.file.status
              ? "done" === e.file.status &&
                r(e.file.originFileObj, function(e) {
                  (t.imageUrl = e),
                    (t.loading = !1),
                    t.imageCbFunc && t.imageCbFunc(t.imageUrl);
                })
              : (this.loading = !0);
          },
          beforeUpload: function(e) {
            var t = "image/jpeg" === e.type || "image/png" === e.type;
            t || this.$message.error("You can only upload JPG file!");
            var a = e.size / 1024 / 1024 < 2;
            return (
              a || this.$message.error("Image must smaller than 2MB!"), t && a
            );
          }
        }
      };
      t.default = o;
    },
    "7e74": function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("02fa")),
        n = r(a("d23a")),
        l = a("2f62"),
        s = a("3d9d"),
        c = [
          { title: "区分", dataIndex: "index", key: "index" },
          {
            title: "家賃 未納分",
            dataIndex: "nonPayMonthly",
            key: "nonPayMonthly"
          },
          {
            title: "支払日",
            dataIndex: "paymentDate",
            key: "paymentDate"
          },
          { title: "承認日", dataIndex: "createdDate", key: "createdDate" },
          {
            title: "代理店",
            dataIndex: "company.companyName",
            key: "company.companyName"
          },
          {
            title: "代理店 契約番号",
            dataIndex: "company.approvalNumber",
            key: "company.approvalNumber"
          },
          {
            title: "入居者 承認番号",
            dataIndex: "user.approvalNumber",
            key: "user.approvalNumber"
          },
          {
            title: "契約者(英語)",
            dataIndex: "user.contractorNameEnglish",
            key: "user.contractorNameEnglish"
          },
          {
            title: "契約者",
            dataIndex: "user.contractorName",
            key: "user.contractorName"
          },
          {
            title: "メンション名",
            dataIndex: "user.propertyName",
            key: "user.propertyName"
          },
          {
            title: "部屋番号",
            dataIndex: "user.roomNumber",
            key: "user.roomNumber"
          },
          {
            title: "連絡先",
            dataIndex: "user.contractorTel",
            key: "user.contractorTel"
          },
          { title: "請求金額", dataIndex: "charges", key: "charges" },
          { title: "家賃", dataIndex: "user.rent", key: "user.rent" },
          { title: "手数料", dataIndex: "delinquentFee", key: "delinquentFee" },
          { title: "滞納発生", dataIndex: "arrears", key: "arrears" },
          {
            title: "担当者",
            dataIndex: "user.comfirmPerson",
            key: "user.comfirmPerson"
          },
          {
            title: "銀行名",
            dataIndex: "company.bankName",
            key: "company.bankName"
          },
          {
            title: "支店名",
            dataIndex: "company.branchOfficeName",
            key: "company.branchOfficeName"
          },
          {
            title: "口座番号",
            dataIndex: "company.bankAccountNumber",
            key: "company.bankAccountNumber"
          },
          { title: "備考", dataIndex: "company.notes", key: "company.notes" },
          {
            title: "緊急連絡先",
            dataIndex: "user.emergencyTel1",
            key: "user.emergencyTel1"
          }
        ],
        i = {
          components: { DelinquentCallHistoryTable: n.default },
          data: function() {
            return { columns: c, windowSize: { x: "max-content" } };
          },
          computed: (0, o.default)(
            {},
            (0, l.mapGetters)({
              delinquentList: "getAllDelinquentList",
              delinquentFilterType: "getDelinquentFilterType"
            })
          ),
          watch: {
            delinquentFilterType: {
              handler: function(e) {
                e && console.log("필터변경!! typetypetypetype" + e);
              },
              immediate: !0
            }
          },
          mounted: function() {
            this.db = firebase.firestore();
            window.innerHeight;
            this.windowSize = { x: "max-content" };
          },
          methods: {
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            detail: function(e) {
              this.$store.dispatch(s.T.CHANGE_UPDATE_DELINQUENT_ID, e),
                this.$store.dispatch(s.T.CHANGE_TAB_INDEX, 30);
            },
            confirm: function(e) {
              var t = this;
              this.db
                .collection("delinquents")
                .doc(e)
                .delete()
                .then(function() {
                  t.$store.dispatch(s.T.DELETE_DELINQUENT, e),
                    t.alertMsg({ type: "success", msg: "削除 完了" });
                })
                .catch(function(e) {
                  console.log(e),
                    t.alertMsg({ type: "error", msg: "削除 失敗" });
                });
            },
            cancel: function() {
              this.alertMsg({ type: "error", msg: "キャンセル" });
            }
          }
        };
      t.default = i;
    },
    8112: function(e, t, a) {},
    "81b8": function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        a("34ef");
      var o = r(a("02fa")),
        n = a("2f62"),
        l = a("3d9d"),
        s = r(a("2aab")),
        c = [
          {
            title:
              "- [NEW] 2020.01.01 라시누텐노지초미나미 801호 / LEE JIHYUNG / 更新料 / 15,000円-23일 경과"
          },
          {
            title:
              "- [NEW] 2020.01.01 멜로디하임유히가오카 203호 / KIM JIHYUN / 3월 家賃 / 15,000円-23일 경과"
          },
          {
            title:
              "- [장기 連帯者] 2020.01.11 멜로디하임유히가오카 203호 / KIM JIHYUN / 3월 家賃 / 15,000円-23일 경과"
          },
          {
            title:
              "- [승인 보류 심사] 2020.01.11 멜로디하임유히가오카 703호 / LEE HARU / 管理会社 에누케이"
          }
        ],
        i = {
          components: { DelinquentTable: s.default },
          data: function() {
            return {
              delinquentSearchType: "メンション名",
              delinquentSearchKeyword: "",
              searchLoading: !1,
              delinquentFilterType: "滞納報告型",
              data: c
            };
          },
          computed: (0, o.default)(
            {},
            (0, n.mapGetters)({ delinquentList: "getAllDelinquentList" })
          ),
          watch: {},
          mounted: function() {},
          methods: {
            exportExcel: function() {
              function e(e, t) {
                var a = t && t.sheet ? t.sheet : "Sheet1",
                  r = {};
                return (r[a] = e), { SheetNames: [a], Sheets: r };
              }
              function t(t, a) {
                return e(XLSX.utils.aoa_to_sheet(t, a), a);
              }
              function a(e) {
                for (
                  var t = new ArrayBuffer(e.length),
                    a = new Uint8Array(t),
                    r = 0;
                  r != e.length;
                  ++r
                )
                  a[r] = 255 & e.charCodeAt(r);
                return t;
              }
              var r = { type: "binary" },
                o = [];
              o.push([
                "区分",
                "家賃 未納分",
                "代理店",
                "契約者",
                "メンション名",
                "部屋番号",
                "連絡先",
                "請求金額",
                "家賃",
                "手数料",
                "滞納発生",
                "担当者",
                "銀行名",
                "支店名",
                "口座番号",
                "備考",
                "緊急連絡先"
              ]);
              for (var n = 0; n < this.delinquentList.length; n++) {
                var l = this.delinquentList[n];
                o.push([
                  l.index,
                  l.nonPayMonthly,
                  l.company.companyName,
                  l.user.contractorName,
                  l.user.propertyName,
                  l.user.roomNumber,
                  l.user.contractorTel,
                  l.charges,
                  l.user.rent,
                  l.delinquentFee,
                  l.arrears,
                  l.user.comfirmPerson,
                  l.company.bankName,
                  l.company.branchOfficeName,
                  l.company.bankAccountNumber,
                  l.company.notes,
                  l.user.emergencyTel1
                ]);
              }
              var s = t(o),
                c = XLSX.write(s, r),
                i = new Blob([a(c)], { type: "application/octet-stream" });
              saveAs(i, "連帯者 一覧.xlsx");
            },
            onSearch: function() {
              console.log("search click");
              var e = this.delinquentSearchType,
                t = this.delinquentSearchKeyword;
              this.$store.dispatch(l.T.SEARCH_DELINQUENT, {
                delinquentSearchType: e,
                delinquentSearchKeyword: t
              });
            },
            moveAddDelinquentPage: function() {
              this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 30);
            },
            alertMsg: function() {
              this.$message.info("開発中。。");
            },
            changeDelinquentFilterType: function() {
              this.$store.dispatch(
                l.T.CHANGE_DELINQUENT_FILTER_TYPE,
                this.delinquentFilterType
              ),
                this.$message.success(
                  "".concat(this.delinquentFilterType, "のみ表示")
                );
            }
          }
        };
      t.default = i;
    },
    "838c": function(e, t, a) {
      "use strict";
      var r = a("d4f0"),
        o = a.n(r);
      o.a;
    },
    9010: function(e, t, a) {},
    9044: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("dc42"),
        o = a("e163");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("9e76");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "UserListPage.vue"), (t["default"] = s.exports);
    },
    9184: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("0f3e"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    9529: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("dc44"),
        o = a("b923");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("fdf5");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "ImageUpload.vue"), (t["default"] = s.exports);
    },
    "96da": function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("02fa")),
        n = r(a("69e2")),
        l = a("2f62"),
        s = a("3d9d"),
        c = [
          { title: "区分", dataIndex: "index", key: "index" },
          {
            title: "契約番号",
            dataIndex: "approvalNumber",
            key: "approvalNumber"
          },
          { title: "登録日", dataIndex: "createdDate", key: "createdDate" },
          {
            title: "代理店 区分",
            dataIndex: "companyType",
            key: "companyType"
          },
          {
            title: "回収区分",
            dataIndex: "debtCollectionType",
            key: "debtCollectionType"
          },
          { title: "代理店名", dataIndex: "companyName", key: "companyName" },
          {
            title: "会社住所",
            dataIndex: "companyAdress",
            key: "companyAdress"
          },
          { title: "代表者", dataIndex: "companyOnwer", key: "companyOnwer" },
          {
            title: "代表者TEL",
            dataIndex: "companyOnwerTel",
            key: "companyOnwerTel"
          },
          {
            title: "システム管理者",
            dataIndex: "systemManager",
            key: "systemManager"
          },
          {
            title: "管理者Email",
            dataIndex: "systemManagerEmail",
            key: "systemManagerEmail"
          },
          { title: "FAX", dataIndex: "fax", key: "fax" },
          { title: "備考", dataIndex: "notes", key: "notes" },
          { title: "登録日", dataIndex: "joinDate", key: "joinDate" },
          {
            title: "保有物件数",
            dataIndex: "buildingCount",
            key: "buildingCount"
          },
          {
            title: "従業員数",
            dataIndex: "employeeCount",
            key: "employeeCount"
          },
          { title: "商品種類", dataIndex: "productType", key: "productType" },
          { title: "保証審査料", dataIndex: "fee1", key: "fee1" },
          { title: "更新料", dataIndex: "novationFee", key: "novationFee" },
          {
            title: "代理店手数料",
            dataIndex: "propertyManagermentCompanyFee",
            key: "propertyManagermentCompanyFee"
          }
        ],
        i = {
          components: { CompanyCallHistoryTable: n.default },
          data: function() {
            return { db: "", columns: c, windowSize: { x: "max-content" } };
          },
          computed: (0, o.default)(
            {},
            (0, l.mapGetters)({ companyList: "getCompanyList" })
          ),
          mounted: function() {
            this.db = firebase.firestore();
            window.innerHeight;
            this.windowSize = { x: "max-content" };
          },
          methods: {
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            detail: function(e) {
              this.$store.dispatch(s.T.CHANGE_UPDATE_COMPNAY_ID, e),
                this.$store.dispatch(s.T.CHANGE_TAB_INDEX, 20);
            },
            confirm: function(e) {
              var t = this;
              this.db
                .collection("companys")
                .doc(e)
                .delete()
                .then(function() {
                  t.$store.dispatch(s.T.DELETE_COMPANY, e),
                    t.alertMsg({ type: "success", msg: "削除 完了" });
                })
                .catch(function(e) {
                  console.log(e),
                    t.alertMsg({ type: "error", msg: "削除 失敗" });
                });
            },
            cancel: function() {
              this.alertMsg({ type: "error", msg: "キャンセル" });
            },
            handleTableChange: function(e, t, a) {
              console.log(e);
              var r = (0, o.default)({}, this.pagination);
              (r.current = e.current),
                (this.pagination = r),
                this.fetch(
                  (0, o.default)(
                    {
                      results: e.pageSize,
                      page: e.current,
                      sortField: a.field,
                      sortOrder: a.order
                    },
                    t
                  )
                );
            }
          }
        };
      t.default = i;
    },
    9884: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "a-layout",
            { attrs: { id: "components-layout-demo-fixed" } },
            [
              r(
                "a-layout-header",
                { style: { position: "fixed", zIndex: 1, width: "100%" } },
                [
                  r(
                    "div",
                    {
                      staticClass: "logo",
                      on: {
                        click: function(t) {
                          return e.changeTabIndex(0);
                        }
                      }
                    },
                    [r("img", { attrs: { src: a("cf05"), alt: "" } })]
                  ),
                  r(
                    "a-menu",
                    {
                      style: { lineHeight: "64px" },
                      attrs: {
                        theme: "dark",
                        mode: "horizontal",
                        defaultSelectedKeys: ["0"]
                      }
                    },
                    [
                      r(
                        "a-menu-item",
                        {
                          key: "0",
                          on: {
                            click: function(t) {
                              return e.changeTabIndex(0);
                            }
                          }
                        },
                        [e._v("메인 화면")]
                      ),
                      r(
                        "a-menu-item",
                        {
                          key: "1",
                          on: {
                            click: function(t) {
                              return e.changeTabIndex(1);
                            }
                          }
                        },
                        [e._v("入居者 一覧")]
                      ),
                      r(
                        "a-menu-item",
                        {
                          key: "2",
                          on: {
                            click: function(t) {
                              return e.changeTabIndex(2);
                            }
                          }
                        },
                        [e._v("代理店一覧")]
                      ),
                      r(
                        "a-menu-item",
                        {
                          key: "3",
                          on: {
                            click: function(t) {
                              return e.changeTabIndex(3);
                            }
                          }
                        },
                        [e._v("連帯者 一覧")]
                      ),
                      r(
                        "a-menu-item",
                        {
                          key: "4",
                          on: {
                            click: function(t) {
                              return e.changeTabIndex(4);
                            }
                          }
                        },
                        [e._v("ブラックリスト 一覧")]
                      ),
                      r(
                        "a-menu-item",
                        {
                          key: "5",
                          on: {
                            click: function(t) {
                              return e.changeTabIndex(5);
                            }
                          }
                        },
                        [e._v("支払용지 출력")]
                      ),
                      r(
                        "a-menu-item",
                        {
                          key: "6",
                          on: {
                            click: function(t) {
                              return e.changeTabIndex(6);
                            }
                          }
                        },
                        [e._v("収益分析")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              r(
                "a-layout-content",
                { style: { padding: "30px 30px 0 30px", marginTop: "64px" } },
                [
                  e.isUnLogin
                    ? e._e()
                    : r("MainPage", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 0 == e.tabIndex,
                            expression: "tabIndex ==0"
                          }
                        ]
                      }),
                  e.isUnLogin
                    ? e._e()
                    : r("UserListPage", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 1 == e.tabIndex,
                            expression: "tabIndex ==1"
                          }
                        ]
                      }),
                  e.isUnLogin
                    ? e._e()
                    : r("addUserPage", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 10 == e.tabIndex,
                            expression: "tabIndex ==10"
                          }
                        ]
                      }),
                  e.isUnLogin
                    ? e._e()
                    : r("CompanyListPage", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 2 == e.tabIndex,
                            expression: "tabIndex ==2"
                          }
                        ]
                      }),
                  e.isUnLogin
                    ? e._e()
                    : r("addCompanyPage", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 20 == e.tabIndex,
                            expression: "tabIndex == 20"
                          }
                        ]
                      }),
                  e.isUnLogin
                    ? e._e()
                    : r("DelinquentListPage", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 3 == e.tabIndex,
                            expression: "tabIndex ==3"
                          }
                        ]
                      }),
                  e.isUnLogin
                    ? e._e()
                    : r("addDelinquentPage", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 30 == e.tabIndex,
                            expression: "tabIndex ==30"
                          }
                        ]
                      }),
                  e.isUnLogin
                    ? e._e()
                    : r("BlackListPage", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 4 == e.tabIndex,
                            expression: "tabIndex ==4"
                          }
                        ]
                      }),
                  r(
                    "a-modal",
                    {
                      attrs: { title: "管理者パスワード" },
                      model: {
                        value: e.isUnLogin,
                        callback: function(t) {
                          e.isUnLogin = t;
                        },
                        expression: "isUnLogin"
                      }
                    },
                    [
                      r(
                        "template",
                        { slot: "footer" },
                        [
                          r(
                            "a-button",
                            { key: "back", on: { click: e.handleCancel } },
                            [e._v("キャンセル")]
                          ),
                          r(
                            "a-button",
                            {
                              key: "submit",
                              attrs: { type: "primary", loading: e.loading },
                              on: { click: e.checkAdminPassword }
                            },
                            [e._v("確認")]
                          )
                        ],
                        1
                      ),
                      r("div", { staticClass: "row-div popup" }, [
                        r("div", { staticClass: "content-div" }, [
                          r(
                            "div",
                            { staticClass: "components-input-demo-presuffix" },
                            [
                              r("span", { staticClass: "label" }, [
                                e._v("パスワード")
                              ]),
                              r(
                                "a-input",
                                {
                                  ref: "userNameInput",
                                  attrs: {
                                    type: "password",
                                    placeholder: "パスワード"
                                  },
                                  model: {
                                    value: e.password,
                                    callback: function(t) {
                                      e.password = t;
                                    },
                                    expression: "password"
                                  }
                                },
                                [
                                  r("a-icon", {
                                    attrs: { slot: "prefix", type: "lock" },
                                    slot: "prefix"
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          );
        },
        o = [];
    },
    "99a4": function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "delinquent-list-page" }, [
            a(
              "div",
              { staticClass: "search-wrapper" },
              [
                a(
                  "a-select",
                  {
                    on: { change: e.onSearch },
                    model: {
                      value: e.delinquentSearchType,
                      callback: function(t) {
                        e.delinquentSearchType = t;
                      },
                      expression: "delinquentSearchType"
                    }
                  },
                  [
                    a("a-select-option", { attrs: { value: "メンション名" } }, [
                      e._v("メンション名")
                    ]),
                    a("a-select-option", { attrs: { value: "契約者名" } }, [
                      e._v("契約者名")
                    ]),
                    a("a-select-option", { attrs: { value: "担当者名" } }, [
                      e._v("担当者名")
                    ]),
                    a("a-select-option", { attrs: { value: "家賃 未納分" } }, [
                      e._v("家賃 未納分")
                    ])
                  ],
                  1
                ),
                a(
                  "a-input-search",
                  {
                    attrs: { placeholder: "キーワード入寮", size: "large" },
                    on: { search: e.onSearch, change: e.onSearch },
                    model: {
                      value: e.delinquentSearchKeyword,
                      callback: function(t) {
                        e.delinquentSearchKeyword = t;
                      },
                      expression: "delinquentSearchKeyword"
                    }
                  },
                  [
                    a(
                      "a-button",
                      {
                        attrs: {
                          slot: "enterButton",
                          type: "primary",
                          icon: "search",
                          loading: e.searchLoading
                        },
                        slot: "enterButton"
                      },
                      [e._v("検索")]
                    )
                  ],
                  1
                ),
                a("a-button", { attrs: { type: "primary" } }, [
                  e._v("詳細検索")
                ]),
                a(
                  "a-button",
                  {
                    attrs: { type: "primary" },
                    on: { click: e.moveAddDelinquentPage }
                  },
                  [e._v("連帯者 登録")]
                )
              ],
              1
            ),
            a(
              "div",
              { staticClass: "content" },
              [
                a(
                  "div",
                  {
                    staticClass: "row",
                    staticStyle: { "margin-bottom": "10px" }
                  },
                  [
                    a(
                      "a-select",
                      {
                        staticStyle: { width: "130px" },
                        on: { change: e.changeDelinquentFilterType },
                        model: {
                          value: e.delinquentFilterType,
                          callback: function(t) {
                            e.delinquentFilterType = t;
                          },
                          expression: "delinquentFilterType"
                        }
                      },
                      [
                        a(
                          "a-select-option",
                          { attrs: { value: "滞納報告型" } },
                          [e._v("滞納報告型")]
                        ),
                        a(
                          "a-select-option",
                          { attrs: { value: "集金代行型" } },
                          [e._v("集金代行型")]
                        )
                      ],
                      1
                    ),
                    a(
                      "a-button",
                      {
                        staticStyle: { "margin-left": "auto" },
                        attrs: { type: "primary" },
                        on: { click: e.exportExcel }
                      },
                      [e._v("Excel ダウンロード")]
                    )
                  ],
                  1
                ),
                a("DelinquentTable")
              ],
              1
            )
          ]);
        },
        o = [];
    },
    "9a2d": function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "delinquent-list-page" }, [
            a(
              "div",
              { staticClass: "notification row" },
              [
                a("div", { staticClass: "notification__label" }, [
                  e._v("連帯未納者一覧お知らせ")
                ]),
                a("a-list", {
                  attrs: { "item-layout": "horizontal", "data-source": e.data },
                  scopedSlots: e._u([
                    {
                      key: "renderItem",
                      fn: function(t, r) {
                        return a("a-list-item", {}, [e._v(e._s(t.title))]);
                      }
                    }
                  ])
                })
              ],
              1
            ),
            a("div", { staticClass: "content" })
          ]);
        },
        o = [];
    },
    "9bc0": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("1687"),
        o = a("31e6");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("838c");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "BlackListTable.vue"), (t["default"] = s.exports);
    },
    "9cd7": function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            {
              staticStyle: { "min-width": "1080px", margin: "15px 0 15px 10px" }
            },
            [
              a(
                "div",
                {
                  staticClass: "row",
                  staticStyle: { "margin-bottom": "15px" }
                },
                [
                  a("a-input", {
                    staticStyle: { flex: "10" },
                    model: {
                      value: e.content,
                      callback: function(t) {
                        e.content = t;
                      },
                      expression: "content"
                    }
                  }),
                  a(
                    "a-button",
                    {
                      staticStyle: { flex: "1" },
                      attrs: { type: "default" },
                      on: { click: e.addCallHistory }
                    },
                    [e._v("メモ作成")]
                  )
                ],
                1
              ),
              a("a-table", {
                staticStyle: { width: "100%" },
                attrs: {
                  columns: e.columns,
                  dataSource: e.userCallList,
                  size: "small",
                  pagination: !1
                }
              })
            ],
            1
          );
        },
        o = [];
    },
    "9e76": function(e, t, a) {
      "use strict";
      var r = a("bb4a"),
        o = a.n(r);
      o.a;
    },
    a1af: function(e, t, a) {},
    a1b8: function(e, t, a) {
      "use strict";
      var r = a("1dd9"),
        o = a.n(r);
      o.a;
    },
    a3c2: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("d56f"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    ac4e: function(e, t, a) {
      "use strict";
      var r = a("bce4"),
        o = a.n(r);
      o.a;
    },
    ac8a: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("3a1a"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    ae5b: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("f3a0"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    b46c: function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        a("34ef");
      var o = r(a("02fa")),
        n = a("2f62"),
        l = a("3d9d"),
        s = r(a("9bc0")),
        c = {
          components: { BlackListTable: s.default },
          data: function() {
            return {
              blackListSearchType: "入居者名",
              blackListSearchKeyword: "",
              searchLoading: !1
            };
          },
          computed: (0, o.default)(
            {},
            (0, n.mapGetters)({ blackList: "getAllBlackList" })
          ),
          watch: {},
          mounted: function() {},
          methods: {
            exportExcel: function() {
              function e(e, t) {
                var a = t && t.sheet ? t.sheet : "Sheet1",
                  r = {};
                return (r[a] = e), { SheetNames: [a], Sheets: r };
              }
              function t(t, a) {
                return e(XLSX.utils.aoa_to_sheet(t, a), a);
              }
              function a(e) {
                for (
                  var t = new ArrayBuffer(e.length),
                    a = new Uint8Array(t),
                    r = 0;
                  r != e.length;
                  ++r
                )
                  a[r] = 255 & e.charCodeAt(r);
                return t;
              }
              console.log("export!");
              var r = { type: "binary" },
                o = [];
              o.push([
                "区分",
                "登録選択",
                "入居者 名前",
                "入居者 国籍",
                "入居者 分類",
                "入居者 住所",
                "入居者 電話番号",
                "入居予定日",
                "入居者 性別",
                "入居者 生年月日",
                "入居者 メール",
                "入居者 sms",
                "入居者 在留資格",
                "入居者 学校名",
                "入居者 学校 TEL",
                "入居者 学校住所",
                "入居者 会社名",
                "入居者 会社 電話番号",
                "入居者 会社住所",
                "入居者 勤続年数",
                "入居者 給料",
                "その他 名前",
                "その他 電話番号",
                "その他 住所",
                "その他のメモ",
                "保証種類",
                "審査手数料",
                "メンション名 ",
                "メンション住所",
                "部屋番号",
                "部屋のタイプ",
                "家賃",
                "管理費",
                "その他の費用",
                "合計金額",
                "同居者",
                "同居者 人数",
                "同居者 名前",
                "同居者 生年月日",
                "同居者 電話番号",
                "同居者 国籍",
                "保証タイプ 連帯保証人 or 緊急連絡先",
                "保証人 名前",
                "保証人 国籍",
                "保証人 住所",
                "保証人 関係",
                "保証人 TEL-1",
                "保証人 TEL-2",
                "保証人 会社名",
                "保証人 会社 電話番号",
                "保証人 会社住所",
                "保証人 生年月日",
                "緊急連絡先 名前",
                "緊急連絡先 国籍",
                "緊急連絡先 生年月日",
                "緊急連絡先 関係",
                "緊急連絡先-1",
                "緊急連絡先-2",
                "緊急連絡先 住所",
                "確認担当者",
                "上司承認者"
              ]);
              for (var n = 0; n < this.blackList.length; n++) {
                var l = this.blackList[n];
                o.push([
                  l.index,
                  l.contractorType,
                  l.contractorName,
                  l.contractorCountry,
                  l.contractorJobType,
                  l.contractorAdress,
                  l.contractorTel,
                  l.moveIntoDate,
                  l.contractorSex,
                  l.contractorBirthday,
                  l.contractorEmail,
                  l.contractorSms,
                  l.contractorResidenceQualification,
                  l.contractorSchoolName,
                  l.contractorSchoolTel,
                  l.contractorSchoolAddress,
                  l.contractorCompanyName,
                  l.contractorCompanyTel,
                  l.contractorCompanyAddress,
                  l.contractorLengthOfService,
                  l.contractorSalary,
                  l.contractorOtherName,
                  l.contractorOtherTel,
                  l.contractorOtherAddress,
                  l.contractorOtherContent,
                  l.guaranteeType,
                  l.guaranteeFee,
                  l.propertyName,
                  l.propertyAdress,
                  l.roomNumber,
                  l.roomType,
                  l.rent,
                  l.managementCost,
                  l.otherCosts,
                  l.totalPayment,
                  l.roomMate,
                  l.roomMateHeadCount,
                  l.roomMateName,
                  l.roomMateBirthday,
                  l.roomMateTel,
                  l.roomMateCountry,
                  l.guarantorType,
                  l.guarantorName,
                  l.guarantorCountry,
                  l.guarantorAdress,
                  l.guarantorRelationship,
                  l.guarantorTel1,
                  l.guarantorTel2,
                  l.guarantorCompanyName,
                  l.guarantorCompanyTel,
                  l.guarantorCompanyAddress,
                  l.guarantorBirthday,
                  l.emergencyName,
                  l.emergencyCountry,
                  l.emergencyBirthday,
                  l.emergencyRelationship,
                  l.emergencyTel1,
                  l.emergencyTel2,
                  l.emergencyAdress,
                  l.comfirmPerson,
                  l.approvalPerson
                ]);
              }
              var s = t(o),
                c = XLSX.write(s, r),
                i = new Blob([a(c)], { type: "application/octet-stream" });
              saveAs(i, "ブラックリスト 一覧.xlsx");
            },
            onSearch: function() {
              console.log("search click");
              var e = this.blackListSearchType,
                t = this.blackListSearchKeyword;
              this.$store.dispatch(l.T.SEARCH_BLACK_LIST, {
                blackListSearchType: e,
                blackListSearchKeyword: t
              });
            },
            moveAddUserPage: function() {
              this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 10);
            },
            alertMsg: function() {
              this.$message.info("開発中。。");
            }
          }
        };
      t.default = c;
    },
    b923: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("7c75"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    bb4a: function(e, t, a) {},
    bce4: function(e, t, a) {},
    bdfd: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("9cd7"),
        o = a("69b7");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("f1b6");
      var l = a("2877"),
        s = Object(l["a"])(
          o["default"],
          r["a"],
          r["b"],
          !1,
          null,
          "72c1e7bc",
          null
        );
      (s.options.__file = "UserCallHistoryTable.vue"),
        (t["default"] = s.exports);
    },
    c07c: function(e, t, a) {
      "use strict";
      var r = a("1587"),
        o = a.n(r);
      o.a;
    },
    c330: function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("02fa")),
        n = a("2f62"),
        l = a("3d9d"),
        s = r(a("9529")),
        c = r(a("3e84")),
        i = r(a("c1df")),
        m = {
          components: { ImageUpload: s.default, VueSlideUpDown: c.default },
          data: function() {
            return {
              loading: !1,
              db: "",
              dateFormat: "YYYY-MM-DD",
              contractorType: "個人",
              contractorName: "",
              contractorNameEnglish: "",
              contractorCountry: "",
              contractorJobType: "学生",
              contractorAdress: "",
              contractorTel: "",
              moveIntoDate: "",
              contractorSex: "男性",
              contractorBirthday: "",
              contractorEmail: "",
              contractorSms: "",
              contractorResidenceQualification: "",
              contractorSchoolName: "",
              contractorSchoolTel: "",
              contractorSchoolAddress: "",
              contractorCompanyName: "",
              contractorCompanyTel: "",
              contractorCompanyAddress: "",
              contractorLengthOfService: "",
              contractorSalary: "",
              contractorOtherName: "",
              contractorOtherTel: "",
              contractorOtherAddress: "",
              contractorOtherContent: "",
              contractorOtherFile: "",
              companyId: "",
              guaranteeType: "緊急連絡先",
              guaranteeFee: 0,
              propertyName: "",
              propertyAdress: "",
              roomNumber: "",
              roomType: "",
              rent: 0,
              managementCost: 0,
              otherCosts: 0,
              totalPayment: 0,
              roomMate: !1,
              roomMateHeadCount: 1,
              roomMateName: "",
              roomMateBirthday: "",
              roomMateTel: "",
              roomMateCountry: "",
              roomMateIdCard: "",
              guarantorType: "連帯保証人",
              guarantorName: "",
              guarantorCountry: "",
              guarantorAdress: "",
              guarantorRelationship: "",
              guarantorTel1: "",
              guarantorTel2: "",
              guarantorCompanyName: "",
              guarantorCompanyTel: "",
              guarantorCompanyAddress: "",
              guarantorIdCardFront: "",
              guarantorIdCardBack: "",
              guarantorContract: "",
              guarantorBirthday: "",
              emergencyName: "",
              emergencyCountry: "",
              emergencyBirthday: "",
              emergencyRelationship: "",
              emergencyTel1: "",
              emergencyTel2: "",
              emergencyAdress: "",
              comfirmPerson: "",
              approvalPerson: "",
              nonPayMonthly: "",
              delinquentFee: "",
              charges: "",
              arrears: "",
              paymentDate: "",
              searchedCompanyName: "",
              searchedCompany: { debtCollectionType: "滞納報告型" },
              searchedUserName: "",
              searchedUser: { blackList: !1, collectionList: !1 },
              guaranteeFeePercentage: 0,
              propertyManagermentCompanyFeePercentage: "",
              propertyManagermentCompanySearchType: "会社名",
              propertyManagermentCompanySearchKeyword: "",
              userSearchKeyword: "",
              userSearchType: "入居者名",
              formLayout: "horizontal",
              emailDataSource: [],
              roomTypeDataSource: [],
              companyTypeDataSource: [],
              userTypeDataSource: [],
              countryDataSource: ["韓国", "日本"]
            };
          },
          computed: (0, o.default)(
            {},
            (0, n.mapGetters)({
              companyList: "getAllCompanyList",
              userList: "getAllUserList",
              userDataForUpdate: "getUserDataForUpdate",
              delinquentDataForUpdate: "getDelinquentDataForUpdate",
              updateUserId: "getUpdateUserId"
            }),
            {
              formItemLayout: function() {
                this.formLayout;
                return {
                  labelCol: { span: 4 },
                  labelCol2: { span: 6 },
                  wrapperCol: { span: 18 }
                };
              },
              buttonItemLayout: function() {
                this.formLayout;
                return { wrapperCol: { span: 18, offset: 4 } };
              }
            }
          ),
          watch: {
            companyList: {
              handler: function(e) {
                if (e) {
                  var t = this.updateCompanyListDataSource(e);
                  this.companyTypeDataSource = t;
                }
              },
              immediate: !0
            },
            userList: {
              handler: function(e) {
                if (e) {
                  var t = this.updateUserListDataSource(e);
                  this.userTypeDataSource = t;
                }
              },
              immediate: !0
            },
            searchedUser: {
              handler: function(e) {
                console.log("searchedUsersearchedUser", e),
                  e ? this.updateUserDatas(e) : this.clearDatas();
              },
              immediate: !0
            },
            updateUserId: {
              handler: function(e) {
                console.log(
                  "updateUserIdupdateUserIdupdateUserIdupdateUserIdupdateUserIdupdateUserIdupdateUserId ",
                  e
                ),
                  e ? this.updateUserDatas(e) : this.clearDatas();
              },
              immediate: !0
            },
            delinquentDataForUpdate: {
              handler: function(e) {
                if (
                  (console.log(
                    "delinquentDatadelinquentDatadelinquentDatadelinquentDatadelinquentDatadelinquentDatadelinquentDatadelinquentData",
                    e
                  ),
                  e)
                ) {
                  var t = e.user;
                  (this.nonPayMonthly = e.nonPayMonthly),
                    (this.delinquentFee = e.delinquentFee),
                    (this.charges = e.charges),
                    (this.arrears = e.arrears),
                    (this.paymentDate = e.paymentDate),
                    (this.searchedUserName = t.contractorName),
                    (this.userId = t.id),
                    this.updateUserDatas(t);
                } else this.clearDatas();
              },
              immediate: !0
            }
          },
          mounted: function() {
            this.db = firebase.firestore();
          },
          beforeCreate: function() {
            this.form = this.$form.createForm(this, { name: "validate_other" });
          },
          methods: {
            updatePaymentDate: function() {
              var e = this;
              this.db
                .collection("delinquents")
                .doc(this.delinquentDataForUpdate.id)
                .update({ paymentDate: this.paymentDate })
                .then(function(t) {
                  e.$store.dispatch(l.T.GET_DELINQUENT_LIST, {
                    cb: function() {
                      e.clearDatas(),
                        (e.loading = !1),
                        e.alertMsg({ type: "success", msg: "支払 完了" }),
                        e.moveDelinquentPage();
                    }
                  });
                })
                .catch(function(t) {
                  (e.loading = !1),
                    e.alertMsg({ type: "error", msg: "支払 失敗" }),
                    console.error("Error adding document: ", t);
                });
            },
            updateUserDatas: function(e) {
              var t = e.companyId,
                a = this.companyList.filter(function(e) {
                  return e.id == t;
                })[0];
              if (
                ((this.contractorType = e.contractorType),
                (this.contractorName = e.contractorName),
                (this.contractorNameEnglish = e.contractorNameEnglish),
                (this.contractorCountry = e.contractorCountry),
                (this.contractorJobType = e.contractorJobType),
                (this.contractorAdress = e.contractorAdress),
                (this.contractorTel = e.contractorTel),
                (this.moveIntoDate = e.moveIntoDate),
                (this.contractorSex = e.contractorSex),
                (this.contractorBirthday = e.contractorBirthday),
                (this.contractorEmail = e.contractorEmail),
                (this.contractorSms = e.contractorSms),
                (this.contractorResidenceQualification =
                  e.contractorResidenceQualification),
                (this.contractorSchoolName = e.contractorSchoolName),
                (this.contractorSchoolTel = e.contractorSchoolTel),
                (this.contractorSchoolAddress = e.contractorSchoolAddress),
                (this.contractorCompanyName = e.contractorCompanyName),
                (this.contractorCompanyTel = e.contractorCompanyTel),
                (this.contractorCompanyAddress = e.contractorCompanyAddress),
                (this.contractorLengthOfService = e.contractorLengthOfService),
                (this.contractorSalary = e.contractorSalary),
                (this.contractorOtherName = e.contractorOtherName),
                (this.contractorOtherTel = e.contractorOtherTel),
                (this.contractorOtherAddress = e.contractorOtherAddress),
                (this.contractorOtherContent = e.contractorOtherContent),
                (this.contractorOtherFile = e.contractorOtherFile),
                (this.companyId = e.companyId),
                (this.guaranteeType = e.guaranteeType),
                (this.propertyManagermentCompanyFeePercentage =
                  e.propertyManagermentCompanyFeePercentage),
                (this.guaranteeFee = e.guaranteeFee),
                (this.propertyName = e.propertyName),
                (this.propertyAdress = e.propertyAdress),
                (this.roomNumber = e.roomNumber),
                (this.roomType = e.roomType),
                (this.rent = e.rent),
                (this.managementCost = e.managementCost),
                (this.otherCosts = e.otherCosts),
                (this.totalPayment = e.rent + e.managementCost + e.otherCosts),
                (this.roomMate = e.roomMate),
                (this.roomMateHeadCount = e.roomMateHeadCount),
                (this.roomMateName = e.roomMateName),
                (this.roomMateBirthday = e.roomMateBirthday),
                (this.roomMateTel = e.roomMateTel),
                (this.roomMateCountry = e.roomMateCountry),
                (this.roomMateIdCard = e.roomMateIdCard),
                (this.guarantorType = e.guarantorType),
                (this.guarantorName = e.guarantorName),
                (this.guarantorCountry = e.guarantorCountry),
                (this.guarantorAdress = e.guarantorAdress),
                (this.guarantorRelationship = e.guarantorRelationship),
                (this.guarantorTel1 = e.guarantorTel1),
                (this.guarantorTel2 = e.guarantorTel2),
                (this.guarantorCompanyName = e.guarantorCompanyName),
                (this.guarantorCompanyTel = e.guarantorCompanyTel),
                (this.guarantorCompanyAddress = e.guarantorCompanyAddress),
                (this.guarantorIdCardFront = e.guarantorIdCardFront),
                (this.guarantorIdCardBack = e.guarantorIdCardBack),
                (this.guarantorContract = e.guarantorContract),
                (this.guarantorBirthday = e.guarantorBirthday),
                (this.emergencyName = e.emergencyName),
                (this.emergencyCountry = e.emergencyCountry),
                (this.emergencyBirthday = e.emergencyBirthday),
                (this.emergencyRelationship = e.emergencyRelationship),
                (this.emergencyTel1 = e.emergencyTel1),
                (this.emergencyTel2 = e.emergencyTel2),
                (this.emergencyAdress = e.emergencyAdress),
                a)
              )
                switch (
                  ((this.searchedCompanyName = a.companyName),
                  (this.searchedCompany = a),
                  this.guaranteeType)
                ) {
                  case "緊急連絡先":
                    this.guaranteeFeePercentage = this.searchedCompany.fee1;
                    break;
                  case "連帯保証人":
                    this.guaranteeFeePercentage = this.searchedCompany.fee2;
                    break;
                  case "その他":
                    this.guaranteeFeePercentage = this.searchedCompany.fee3;
                    break;
                  default:
                    break;
                }
            },
            contractorOtherFileFunc: function(e) {
              this.contractorOtherFile = e;
            },
            roomMateIdCardFunc: function(e) {
              this.roomMateIdCard = e;
            },
            guarantorIdCardFrontFunc: function(e) {
              this.guarantorIdCardFront = e;
            },
            guarantorIdCardBackFunc: function(e) {
              this.guarantorIdCardBack = e;
            },
            guarantorContractFunc: function(e) {
              this.guarantorContract = e;
            },
            moment: i.default,
            moveUserListPage: function() {
              this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 1),
                this.$store.dispatch(l.T.CHANGE_UPDATE_USER_ID, "");
            },
            moveDelinquentPage: function() {
              this.handleChangeDelinquentList(""),
                this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 3),
                this.$store.dispatch(l.T.CHANGE_UPDATE_DELINQUENT_ID, "");
            },
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            clearUserDatas: function() {
              (this.contractorType = "個人"),
                (this.contractorName = ""),
                (this.contractorNameEnglish = ""),
                (this.contractorCountry = ""),
                (this.contractorJobType = "学生"),
                (this.contractorAdress = ""),
                (this.contractorTel = ""),
                (this.moveIntoDate = ""),
                (this.contractorSex = "男性"),
                (this.contractorBirthday = ""),
                (this.contractorEmail = ""),
                (this.contractorSms = ""),
                (this.contractorResidenceQualification = ""),
                (this.contractorSchoolName = ""),
                (this.contractorSchoolTel = ""),
                (this.contractorSchoolAddress = ""),
                (this.contractorCompanyName = ""),
                (this.contractorCompanyTel = ""),
                (this.contractorCompanyAddress = ""),
                (this.contractorLengthOfService = ""),
                (this.contractorSalary = ""),
                (this.contractorOtherName = ""),
                (this.contractorOtherTel = ""),
                (this.contractorOtherAddress = ""),
                (this.contractorOtherContent = ""),
                (this.contractorOtherFile = ""),
                (this.companyId = ""),
                (this.propertyManagermentCompanySearchType = "会社名"),
                (this.guaranteeType = "緊急連絡先"),
                (this.propertyManagermentCompanyFeePercentage = ""),
                (this.guaranteeFee = 0),
                (this.propertyName = ""),
                (this.propertyAdress = ""),
                (this.roomNumber = ""),
                (this.roomType = ""),
                (this.rent = 0),
                (this.managementCost = 0),
                (this.otherCosts = 0),
                (this.totalPayment = 0),
                (this.roomMate = !1),
                (this.roomMateHeadCount = 1),
                (this.roomMateName = ""),
                (this.roomMateBirthday = ""),
                (this.roomMateTel = ""),
                (this.roomMateCountry = ""),
                (this.roomMateIdCard = ""),
                (this.guarantorType = "連帯保証人"),
                (this.guarantorName = ""),
                (this.guarantorCountry = ""),
                (this.guarantorAdress = ""),
                (this.guarantorRelationship = ""),
                (this.guarantorTel1 = ""),
                (this.guarantorTel2 = ""),
                (this.guarantorCompanyName = ""),
                (this.guarantorCompanyTel = ""),
                (this.guarantorCompanyAddress = ""),
                (this.guarantorIdCardFront = ""),
                (this.guarantorIdCardBack = ""),
                (this.guarantorContract = ""),
                (this.guarantorBirthday = ""),
                (this.emergencyName = ""),
                (this.emergencyCountry = ""),
                (this.emergencyBirthday = ""),
                (this.emergencyRelationship = ""),
                (this.emergencyTel1 = ""),
                (this.emergencyTel2 = ""),
                (this.emergencyAdress = ""),
                (this.comfirmPerson = ""),
                (this.approvalPerson = ""),
                (this.createdDate = ""),
                (this.searchedUserName = ""),
                (this.userId = ""),
                (this.searchedCompany = { debtCollectionType: "滞納報告型" }),
                (this.guaranteeFeePercentage = 0),
                (this.propertyManagermentCompanyFeePercentage = 0),
                (this.searchedCompanyName = ""),
                (this.companyId = ""),
                this.$refs.contractorOtherFile &&
                  this.$refs.contractorOtherFile.clearImageData(),
                this.$refs.roomMateIdCard &&
                  this.$refs.roomMateIdCard.clearImageData(),
                this.$refs.guarantorIdCardFront &&
                  this.$refs.guarantorIdCardFront.clearImageData(),
                this.$refs.guarantorIdCardBack &&
                  this.$refs.guarantorIdCardBack.clearImageData(),
                this.$refs.guarantorContract &&
                  this.$refs.guarantorContract.clearImageData();
            },
            clearDatas: function() {
              console.log("clearDatas"),
                (this.contractorType = "個人"),
                (this.contractorName = ""),
                (this.contractorNameEnglish = ""),
                (this.contractorCountry = ""),
                (this.contractorJobType = "学生"),
                (this.contractorAdress = ""),
                (this.contractorTel = ""),
                (this.moveIntoDate = ""),
                (this.contractorSex = "男性"),
                (this.contractorBirthday = ""),
                (this.contractorEmail = ""),
                (this.contractorSms = ""),
                (this.contractorResidenceQualification = ""),
                (this.contractorSchoolName = ""),
                (this.contractorSchoolTel = ""),
                (this.contractorSchoolAddress = ""),
                (this.contractorCompanyName = ""),
                (this.contractorCompanyTel = ""),
                (this.contractorCompanyAddress = ""),
                (this.contractorLengthOfService = ""),
                (this.contractorSalary = ""),
                (this.contractorOtherName = ""),
                (this.contractorOtherTel = ""),
                (this.contractorOtherAddress = ""),
                (this.contractorOtherContent = ""),
                (this.contractorOtherFile = ""),
                (this.companyId = ""),
                (this.propertyManagermentCompanySearchType = "会社名"),
                (this.guaranteeType = "緊急連絡先"),
                (this.propertyManagermentCompanyFeePercentage = ""),
                (this.guaranteeFee = 0),
                (this.propertyName = ""),
                (this.propertyAdress = ""),
                (this.roomNumber = ""),
                (this.roomType = ""),
                (this.rent = 0),
                (this.managementCost = 0),
                (this.otherCosts = 0),
                (this.totalPayment = 0),
                (this.roomMate = !1),
                (this.roomMateHeadCount = 1),
                (this.roomMateName = ""),
                (this.roomMateBirthday = ""),
                (this.roomMateTel = ""),
                (this.roomMateCountry = ""),
                (this.roomMateIdCard = ""),
                (this.guarantorType = "連帯保証人"),
                (this.guarantorName = ""),
                (this.guarantorCountry = ""),
                (this.guarantorAdress = ""),
                (this.guarantorRelationship = ""),
                (this.guarantorTel1 = ""),
                (this.guarantorTel2 = ""),
                (this.guarantorCompanyName = ""),
                (this.guarantorCompanyTel = ""),
                (this.guarantorCompanyAddress = ""),
                (this.guarantorIdCardFront = ""),
                (this.guarantorIdCardBack = ""),
                (this.guarantorContract = ""),
                (this.guarantorBirthday = ""),
                (this.emergencyName = ""),
                (this.emergencyCountry = ""),
                (this.emergencyBirthday = ""),
                (this.emergencyRelationship = ""),
                (this.emergencyTel1 = ""),
                (this.emergencyTel2 = ""),
                (this.emergencyAdress = ""),
                (this.comfirmPerson = ""),
                (this.approvalPerson = ""),
                (this.createdDate = ""),
                (this.searchedUserName = ""),
                (this.userId = ""),
                (this.searchedCompany = { debtCollectionType: "滞納報告型" }),
                (this.guaranteeFeePercentage = 0),
                (this.propertyManagermentCompanyFeePercentage = 0),
                (this.searchedCompanyName = ""),
                (this.companyId = ""),
                (this.userSearchKeyword = ""),
                (this.userSearchType = "入居者名"),
                (this.nonPayMonthly = ""),
                (this.delinquentFee = ""),
                (this.charges = ""),
                (this.arrears = ""),
                (this.paymentDate = ""),
                this.$refs.contractorOtherFile &&
                  this.$refs.contractorOtherFile.clearImageData(),
                this.$refs.roomMateIdCard &&
                  this.$refs.roomMateIdCard.clearImageData(),
                this.$refs.guarantorIdCardFront &&
                  this.$refs.guarantorIdCardFront.clearImageData(),
                this.$refs.guarantorIdCardBack &&
                  this.$refs.guarantorIdCardBack.clearImageData(),
                this.$refs.guarantorContract &&
                  this.$refs.guarantorContract.clearImageData();
            },
            getUserInputValues: function() {
              var e = this.contractorType,
                t = this.contractorName,
                a = this.contractorNameEnglish,
                r = this.contractorCountry,
                o = this.contractorJobType,
                n = this.contractorAdress,
                l = this.contractorTel,
                s = this.moveIntoDate,
                c = this.contractorSex,
                i = this.contractorBirthday,
                m = this.contractorEmail,
                u = this.contractorSms,
                p = this.contractorResidenceQualification,
                d = this.contractorSchoolName,
                h = this.contractorSchoolTel,
                y = this.contractorSchoolAddress,
                f = this.contractorCompanyName,
                g = this.contractorCompanyTel,
                C = this.contractorCompanyAddress,
                b = this.contractorLengthOfService,
                v = this.contractorSalary,
                w = this.contractorOtherName,
                I = this.contractorOtherTel,
                T = this.contractorOtherAddress,
                L = this.contractorOtherContent,
                x = this.contractorOtherFile,
                N = this.companyId,
                S = this.guaranteeType,
                k = this.propertyManagermentCompanyFeePercentage,
                _ = this.guaranteeFee,
                D = this.propertyName,
                M = this.propertyAdress,
                A = this.roomNumber,
                E = this.roomType,
                P = this.rent,
                F = this.managementCost,
                U = this.otherCosts,
                O = this.totalPayment,
                B = this.roomMate,
                $ = this.roomMateHeadCount,
                R = this.roomMateName,
                q = this.roomMateBirthday,
                H = this.roomMateTel,
                K = this.roomMateCountry,
                G = this.roomMateIdCard,
                J = this.guarantorType,
                Y = this.guarantorName,
                j = this.guarantorCountry,
                X = this.guarantorAdress,
                Q = this.guarantorRelationship,
                z = this.guarantorTel1,
                V = this.guarantorTel2,
                W = this.guarantorCompanyName,
                Z = this.guarantorCompanyTel,
                ee = this.guarantorCompanyAddress,
                te = this.guarantorIdCardFront,
                ae = this.guarantorIdCardBack,
                re = this.guarantorContract,
                oe = this.guarantorBirthday,
                ne = this.emergencyName,
                le = this.emergencyCountry,
                se = this.emergencyBirthday,
                ce = this.emergencyRelationship,
                ie = this.emergencyTel1,
                me = this.emergencyTel2,
                ue = this.emergencyAdress,
                pe = this.comfirmPerson,
                de = this.approvalPerson,
                he = this.createdDate;
              return {
                contractorType: e,
                contractorName: t,
                contractorNameEnglish: a,
                contractorCountry: r,
                contractorJobType: o,
                contractorAdress: n,
                contractorTel: l,
                moveIntoDate: s,
                contractorSex: c,
                contractorBirthday: i,
                contractorEmail: m,
                contractorSms: u,
                contractorResidenceQualification: p,
                contractorSchoolName: d,
                contractorSchoolTel: h,
                contractorSchoolAddress: y,
                contractorCompanyName: f,
                contractorCompanyTel: g,
                contractorCompanyAddress: C,
                contractorLengthOfService: b,
                contractorSalary: v,
                contractorOtherName: w,
                contractorOtherTel: I,
                contractorOtherAddress: T,
                contractorOtherContent: L,
                contractorOtherFile: x,
                companyId: N,
                guaranteeType: S,
                propertyManagermentCompanyFeePercentage: k,
                guaranteeFee: _,
                propertyName: D,
                propertyAdress: M,
                roomNumber: A,
                roomType: E,
                rent: P,
                managementCost: F,
                otherCosts: U,
                totalPayment: O,
                roomMate: B,
                roomMateHeadCount: $,
                roomMateName: R,
                roomMateBirthday: q,
                roomMateTel: H,
                roomMateCountry: K,
                roomMateIdCard: G,
                guarantorType: J,
                guarantorName: Y,
                guarantorCountry: j,
                guarantorAdress: X,
                guarantorRelationship: Q,
                guarantorTel1: z,
                guarantorTel2: V,
                guarantorCompanyName: W,
                guarantorCompanyTel: Z,
                guarantorCompanyAddress: ee,
                guarantorIdCardFront: te,
                guarantorIdCardBack: ae,
                guarantorContract: re,
                guarantorBirthday: oe,
                emergencyName: ne,
                emergencyCountry: le,
                emergencyBirthday: se,
                emergencyRelationship: ce,
                emergencyTel1: ie,
                emergencyTel2: me,
                emergencyAdress: ue,
                comfirmPerson: pe,
                approvalPerson: de,
                createdDate: he
              };
            },
            handleChangeEmail: function(e) {
              this.emailDataSource =
                !e || e.indexOf("@") >= 0
                  ? []
                  : [
                      "".concat(e, "@gmail.com"),
                      "".concat(e, "@yahoo.com"),
                      "".concat(e, "@other.com")
                    ];
            },
            handleChangeRoomMateCountry: function(e) {
              this.countryDataSource = ["韓国", "日本"].filter(function(t) {
                return -1 != t.indexOf(e);
              });
            },
            handleChangeGuarantorCountry: function(e) {
              this.countryDataSource = ["韓国", "日本"].filter(function(t) {
                return -1 != t.indexOf(e);
              });
            },
            handleChangeEmergencyCountry: function(e) {
              this.countryDataSource = ["韓国", "日本"].filter(function(t) {
                return -1 != t.indexOf(e);
              });
            },
            handleChangeRoomType: function(e) {
              this.roomTypeDataSource = [
                "1K",
                "1DK",
                "1LDK",
                "2K",
                "2DK",
                "2LDK",
                "3K",
                "3DK",
                "3LDK",
                "4K",
                "4DK",
                "4LDK"
              ].filter(function(t) {
                return -1 != t.indexOf(e);
              });
            },
            onChangeSearchCompanyType: function() {
              this.handleChangeCompanyList(
                this.propertyManagermentCompanySearchKeyword
              );
            },
            onChangeSearchUserType: function() {
              this.handleChangeDelinquentList(this.userSearchKeyword);
            },
            pad: function(e, t, a) {
              return (
                (a = a || "0"),
                (e += ""),
                e.length >= t ? e : new Array(t - e.length + 1).join(a) + e
              );
            },
            updateCompanyListDataSource: function(e) {
              var t = this,
                a = [];
              return (
                "会社名" == this.propertyManagermentCompanySearchType
                  ? (a = e.map(function(e) {
                      return e.companyName;
                    }))
                  : "契約番号" == this.propertyManagermentCompanySearchType &&
                    (a = e.map(function(e) {
                      return t.pad(e.approvalNumber, 4);
                    })),
                a
              );
            },
            handleChangeCompanyList: function(e) {
              var t = this.updateCompanyListDataSource(this.companyList);
              if (
                ((this.companyTypeDataSource = t.filter(function(t) {
                  return -1 != t.indexOf(e);
                })),
                (this.searchedCompany = { debtCollectionType: "滞納報告型" }),
                1 == this.companyTypeDataSource.length)
              ) {
                var a = {};
                "会社名" == this.propertyManagermentCompanySearchType
                  ? (a = this.companyList.filter(function(t) {
                      return t.companyName == e;
                    }))
                  : "契約番号" == this.propertyManagermentCompanySearchType &&
                    (a = this.companyList.filter(function(t) {
                      return t.approvalNumber == e;
                    })),
                  console.log(a),
                  a.length > 0
                    ? ((this.searchedCompanyName = a[0].companyName),
                      (this.searchedCompany = a[0]),
                      (this.companyId = a[0].id))
                    : (this.searchedCompanyName =
                        "検索された会社がありません。.");
              } else
                0 == this.companyTypeDataSource.length
                  ? (this.searchedCompanyName = "検索された会社がありません。.")
                  : "" != e
                  ? (this.searchedCompanyName = "検索された会社が2件以上です。")
                  : ((this.guaranteeFeePercentage = 0),
                    (this.propertyManagermentCompanyFeePercentage = 0),
                    (this.searchedCompanyName = ""),
                    (this.companyId = ""));
              this.onChangePaymentPercent();
            },
            updateUserListDataSource: function(e) {
              var t = this,
                a = [];
              return (
                "入居者名" == this.userSearchType
                  ? (a = e.map(function(e) {
                      return e.contractorName;
                    }))
                  : "承認番号" == this.userSearchType &&
                    (a = e.map(function(e) {
                      return t.pad(e.approvalNumber, 4);
                    })),
                a
              );
            },
            handleChangeDelinquentList: function(e) {
              var t = this.updateUserListDataSource(this.userList);
              if (
                ((this.userTypeDataSource = t.filter(function(t) {
                  return -1 != t.indexOf(e);
                })),
                (this.searchedUser = { blackList: !1, collectionList: !1 }),
                1 == this.userTypeDataSource.length)
              ) {
                var a = {};
                "入居者名" == this.userSearchType
                  ? (a = this.userList.filter(function(t) {
                      return t.contractorName == e;
                    }))
                  : "承認番号" == this.userSearchType &&
                    (a = this.userList.filter(function(t) {
                      return t.approvalNumber == e;
                    })),
                  a.length > 0
                    ? ((this.searchedUserName = a[0].contractorName),
                      (this.searchedUser = a[0]),
                      (this.userId = a[0].id))
                    : ((this.searchedUserName = "検索された契約者가 없습니다."),
                      this.clearUserDatas());
              } else
                0 == this.userTypeDataSource.length
                  ? ((this.searchedUserName = "検索された契約者가 없습니다."),
                    this.clearUserDatas())
                  : "" != e
                  ? (this.searchedUserName =
                      "検索された契約者가 2개 이상입니다.")
                  : ((this.guaranteeFeePercentage = 0),
                    (this.propertyManagermentUserFeePercentage = 0),
                    (this.searchedUserName = ""),
                    (this.userId = ""),
                    this.clearUserDatas());
            },
            onChangeGuarantorBirthday: function(e, t) {
              this.guarantorBirthday = t;
            },
            onChangeEmergencyBirthday: function(e, t) {
              this.emergencyBirthday = t;
            },
            onChangeContractorBirthday: function(e, t) {
              this.contractorBirthday = t;
            },
            onChangePaymentDate: function(e, t) {
              this.paymentDate = t;
            },
            onChangeMoveIntoDate: function(e, t) {
              this.moveIntoDate = t;
            },
            onChangeRoomMateBirthday: function(e, t) {
              this.roomMateBirthday = t;
            },
            onChangePayment: function() {
              if (
                (console.log(this.searchedCompany),
                null == this.searchedCompany)
              )
                return !1;
              (this.rent = parseInt(this.rent)),
                (this.managementCost = parseInt(this.managementCost)),
                (this.otherCosts = parseInt(this.otherCosts)),
                (this.guaranteeFee = parseInt(
                  ((this.rent + this.managementCost + this.otherCosts) *
                    this.guaranteeFeePercentage) /
                    100
                )),
                (this.totalPayment = parseInt(
                  this.rent + this.managementCost + this.otherCosts
                ));
            },
            onChangePaymentPercent: function() {
              if (null == this.searchedCompany) this.guaranteeFee = "";
              else
                switch (
                  ((this.propertyManagermentCompanyFeePercentage = this.searchedCompany.propertyManagermentCompanyFee),
                  this.guaranteeType)
                ) {
                  case "緊急連絡先":
                    this.guaranteeFeePercentage = this.searchedCompany.fee1;
                    break;
                  case "連帯保証人":
                    this.guaranteeFeePercentage = this.searchedCompany.fee2;
                    break;
                  case "その他":
                    this.guaranteeFeePercentage = this.searchedCompany.fee3;
                    break;
                  default:
                    break;
                }
              this.onChangePayment();
            },
            handleUpdate: function(e) {
              this.loading = !0;
              var t = this;
              console.log(this.delinquentDataForUpdate.id),
                this.db
                  .collection("delinquents")
                  .doc(this.delinquentDataForUpdate.id)
                  .update({
                    userId: this.delinquentDataForUpdate.userId,
                    companyId: this.delinquentDataForUpdate.companyId,
                    nonPayMonthly: this.nonPayMonthly,
                    delinquentFee: this.delinquentFee,
                    charges: this.charges,
                    arrears: this.arrears,
                    paymentDate: this.paymentDate
                  })
                  .then(function(e) {
                    t.$store.dispatch(l.T.GET_DELINQUENT_LIST, {
                      cb: function() {
                        t.clearDatas(),
                          (t.loading = !1),
                          t.alertMsg({ type: "success", msg: "編集 完了" }),
                          t.moveDelinquentPage();
                      }
                    });
                  })
                  .catch(function(e) {
                    (t.loading = !1),
                      t.alertMsg({ type: "error", msg: "編集 失敗" }),
                      console.error("Error adding document: ", e);
                  });
            },
            setBlackList: function(e) {
              this.loading = !0;
              var t = this;
              this.getUserInputValues();
              this.db
                .collection("users")
                .doc(this.userId)
                .update({ blackList: !0 })
                .then(function(e) {
                  t.$store.dispatch(l.T.GET_BLACK_LIST, {}),
                    (t.searchedUser.blackList = !0),
                    t.alertMsg({
                      type: "success",
                      msg: "ブラックリスト 追加 完了"
                    }),
                    (t.loading = !1);
                })
                .catch(function(e) {
                  (t.loading = !1),
                    t.alertMsg({
                      type: "error",
                      msg: "ブラックリスト 追加 失敗"
                    }),
                    console.error("Error adding document: ", e);
                });
            },
            deleteBlackList: function(e) {
              this.loading = !0;
              var t = this;
              this.getUserInputValues();
              this.db
                .collection("users")
                .doc(this.userId)
                .update({ blackList: !1 })
                .then(function(e) {
                  t.$store.dispatch(l.T.GET_BLACK_LIST, {}),
                    (t.searchedUser.blackList = !1),
                    t.alertMsg({
                      type: "success",
                      msg: "ブラックリスト 削除 完了"
                    }),
                    (t.loading = !1);
                })
                .catch(function(e) {
                  (t.loading = !1),
                    t.alertMsg({
                      type: "error",
                      msg: "ブラックリスト 削除 失敗"
                    }),
                    console.error("Error adding document: ", e);
                });
            },
            setCollectionList: function(e) {
              this.loading = !0;
              var t = this;
              this.getUserInputValues();
              this.db
                .collection("users")
                .doc(this.userId)
                .update({ collectionList: !0 })
                .then(function(e) {
                  (t.searchedUser.collectionList = !0),
                    t.alertMsg({ type: "success", msg: "推尋対象 指定 完了" }),
                    (t.loading = !1);
                })
                .catch(function(e) {
                  (t.loading = !1),
                    t.alertMsg({ type: "error", msg: "推尋対象 指定 失敗" }),
                    console.error("Error adding document: ", e);
                });
            },
            deleteCollectionList: function(e) {
              this.loading = !0;
              var t = this;
              this.getUserInputValues();
              this.db
                .collection("users")
                .doc(this.userId)
                .update({ collectionList: !1 })
                .then(function(e) {
                  (t.searchedUser.collectionList = !1),
                    t.alertMsg({ type: "success", msg: "推尋対象 削除 完了" }),
                    (t.loading = !1);
                })
                .catch(function(e) {
                  (t.loading = !1),
                    t.alertMsg({ type: "error", msg: "推尋対象 削除 失敗" }),
                    console.error("Error adding document: ", e);
                });
            },
            handleRegister: function(e) {
              this.loading = !0;
              var t = this;
              this.getUserInputValues();
              this.db
                .collection("delinquents")
                .add({
                  userId: this.userId,
                  companyId: this.searchedUser.companyId,
                  nonPayMonthly: this.nonPayMonthly,
                  delinquentFee: this.delinquentFee,
                  charges: this.charges,
                  arrears: this.arrears,
                  paymentDate: this.paymentDate,
                  comfirmPerson: this.comfirmPerson,
                  approvalPerson: this.approvalPerson,
                  createdDate: Date.now()
                })
                .then(function(e) {
                  t.$store.dispatch(l.T.GET_DELINQUENT_LIST, {
                    cb: function() {
                      t.clearDatas(),
                        (t.loading = !1),
                        t.alertMsg({
                          type: "success",
                          msg: "連帯者 登録 完了"
                        }),
                        t.moveDelinquentPage();
                    }
                  });
                })
                .catch(function(e) {
                  (t.loading = !1),
                    t.alertMsg({ type: "error", msg: "連帯者 登録 失敗" }),
                    console.error("Error adding document: ", e);
                });
            }
          }
        };
      t.default = m;
    },
    c49a: function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("4db1")),
        n = r(a("02fa")),
        l = (a("2f62"), r(a("c1df"))),
        s =
          (a("3d9d"),
          [
            { title: "区分", width: 60, key: "index", dataIndex: "index" },
            {
              title: "記録日",
              width: 180,
              dataIndex: "createdDate",
              key: "createdDate"
            },
            {
              title: "メモ内容",
              width: "auto",
              dataIndex: "content",
              key: "content"
            }
          ]),
        c = {
          props: ["delinquentId"],
          data: function() {
            return {
              columns: s,
              delinquentId: "",
              content: "",
              delinquentCallList: []
            };
          },
          computed: {},
          mounted: function() {
            (this.db = firebase.firestore()),
              (this.delinquentId = this.$props.delinquentId);
            var e = this;
            e.delinquentCallList = e.db
              .collection("delinquentCallHistory")
              .where("delinquentId", "==", this.delinquentId)
              .get()
              .then(function(t) {
                var a = [],
                  r = 1;
                t.forEach(function(e) {
                  var t = e.id;
                  a.push(
                    (0, n.default)({ index: r, id: t }, e.data(), {
                      createdDate: (0, l.default)(e.data().createdDate).format(
                        "YYYY-MM-DD hh:mm"
                      )
                    })
                  ),
                    r++;
                }),
                  console.log(a),
                  (e.delinquentCallList = a);
              });
          },
          methods: {
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            addCallHistory: function(e) {
              var t = this,
                a = {
                  createdDate: Date.now(),
                  content: t.content,
                  delinquentId: t.delinquentId
                };
              (t.content = ""),
                this.db
                  .collection("delinquentCallHistory")
                  .add(a)
                  .then(function() {
                    (t.delinquentCallList = [].concat(
                      (0, o.default)(t.delinquentCallList),
                      [
                        (0, n.default)({}, a, {
                          index: t.delinquentCallList.length + 1,
                          createdDate: (0, l.default)(a.createdDate).format(
                            "YYYY-MM-DD hh:mm"
                          )
                        })
                      ]
                    )),
                      t.alertMsg({ type: "success", msg: "登録 完了" });
                  })
                  .catch(function(e) {
                    console.log(e),
                      t.alertMsg({ type: "error", msg: "登録 失敗" });
                  });
            }
          }
        };
      t.default = c;
    },
    cde8: function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        a("34ef");
      var o = r(a("02fa")),
        n = a("2f62"),
        l = a("3d9d"),
        s = r(a("4eee")),
        c = {
          props: [],
          components: { CompanyTable: s.default },
          data: function() {
            return {
              companySearchType: "代理店名",
              companySearchKeyword: "",
              searchLoading: !1
            };
          },
          computed: (0, o.default)(
            {},
            (0, n.mapGetters)({ companyList: "getCompanyList" })
          ),
          watch: {},
          mounted: function() {},
          methods: {
            exportExcel: function() {
              function e(e, t) {
                var a = t && t.sheet ? t.sheet : "Sheet1",
                  r = {};
                return (r[a] = e), { SheetNames: [a], Sheets: r };
              }
              function t(t, a) {
                return e(XLSX.utils.aoa_to_sheet(t, a), a);
              }
              function a(e) {
                for (
                  var t = new ArrayBuffer(e.length),
                    a = new Uint8Array(t),
                    r = 0;
                  r != e.length;
                  ++r
                )
                  a[r] = 255 & e.charCodeAt(r);
                return t;
              }
              var r = { type: "binary" },
                o = [];
              o.push([
                "区分",
                "登録 区分",
                "会社名",
                "会社住所",
                "会社代表者",
                "会社代表者 性別",
                "代表者 電話番号",
                "システム管理者",
                "システム管理者 メール",
                "FAX",
                "備考",
                "登録日",
                "保有物件数",
                "従業員数",
                "商品種類",
                "保証審査料 緊急連絡先",
                "保証審査料 連帯保証人",
                "保証審査料 その他",
                "更新料",
                "代理店手数料",
                "銀行名",
                "受取人名",
                "カナ",
                "口座番号",
                "送金タイプ",
                "支店名",
                "確認担当者",
                "上司承認者"
              ]);
              for (var n = 0; n < this.companyList.length; n++) {
                var l = this.companyList[n];
                o.push([
                  l.index,
                  l.companyType,
                  l.companyName,
                  l.companyAdress,
                  l.companyOnwer,
                  l.companyOnwerSex,
                  l.companyOnwerTel,
                  l.systemManager,
                  l.systemManagerEmail,
                  l.fax,
                  l.notes,
                  l.joinDate,
                  l.buildingCount,
                  l.employeeCount,
                  l.productType,
                  l.fee1,
                  l.fee2,
                  l.fee3,
                  l.novationFee,
                  l.propertyManagermentCompanyFee,
                  l.bankName,
                  l.recipientName,
                  l.recipientNameKana,
                  l.bankAccountNumber,
                  l.remitType,
                  l.branchOfficeName,
                  l.comfirmPerson,
                  l.approvalPerson
                ]);
              }
              var s = t(o),
                c = XLSX.write(s, r),
                i = new Blob([a(c)], { type: "application/octet-stream" });
              saveAs(i, "代理店一覧.xlsx");
            },
            onSearch: function() {
              var e = this.companySearchType,
                t = this.companySearchKeyword;
              this.$store.dispatch(l.T.SEARCH_COMPANY, {
                companySearchType: e,
                companySearchKeyword: t
              });
            },
            moveAddCompanyPage: function() {
              this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 20);
            },
            alertMsg: function() {
              this.$message.info("開発中。。");
            }
          }
        };
      t.default = c;
    },
    cf05: function(e, t, a) {
      e.exports = a.p + "img/logo.fdac5353.png";
    },
    d23a: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("313c"),
        o = a("d696");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("d499");
      var l = a("2877"),
        s = Object(l["a"])(
          o["default"],
          r["a"],
          r["b"],
          !1,
          null,
          "92153a5c",
          null
        );
      (s.options.__file = "DelinquentCallHistoryTable.vue"),
        (t["default"] = s.exports);
    },
    d499: function(e, t, a) {
      "use strict";
      var r = a("d96f"),
        o = a.n(r);
      o.a;
    },
    d4f0: function(e, t, a) {},
    d508: function(e, t, a) {
      "use strict";
      var r = a("387e"),
        o = a.n(r);
      o.a;
    },
    d56f: function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("4db1")),
        n = r(a("02fa")),
        l = (a("2f62"), r(a("c1df"))),
        s =
          (a("3d9d"),
          [
            { title: "区分", width: 60, key: "index", dataIndex: "index" },
            {
              title: "記録日",
              width: 180,
              dataIndex: "createdDate",
              key: "createdDate"
            },
            {
              title: "メモ内容",
              width: "auto",
              dataIndex: "content",
              key: "content"
            }
          ]),
        c = {
          props: ["campanyId"],
          data: function() {
            return {
              columns: s,
              campanyId: "",
              content: "",
              campanyCallList: []
            };
          },
          computed: {},
          mounted: function() {
            (this.db = firebase.firestore()),
              (this.campanyId = this.$props.campanyId);
            var e = this;
            e.campanyCallList = e.db
              .collection("campanyCallHistory")
              .where("campanyId", "==", this.campanyId)
              .get()
              .then(function(t) {
                var a = [],
                  r = 1;
                t.forEach(function(e) {
                  var t = e.id;
                  a.push(
                    (0, n.default)({ index: r, id: t }, e.data(), {
                      createdDate: (0, l.default)(e.data().createdDate).format(
                        "YYYY-MM-DD hh:mm"
                      )
                    })
                  ),
                    r++;
                }),
                  console.log(a),
                  (e.campanyCallList = a);
              });
          },
          methods: {
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            addCallHistory: function(e) {
              var t = this,
                a = {
                  createdDate: Date.now(),
                  content: t.content,
                  campanyId: t.campanyId
                };
              (t.content = ""),
                this.db
                  .collection("campanyCallHistory")
                  .add(a)
                  .then(function() {
                    (t.campanyCallList = [].concat(
                      (0, o.default)(t.campanyCallList),
                      [
                        (0, n.default)({}, a, {
                          index: t.campanyCallList.length + 1,
                          createdDate: (0, l.default)(a.createdDate).format(
                            "YYYY-MM-DD hh:mm"
                          )
                        })
                      ]
                    )),
                      t.alertMsg({ type: "success", msg: "登録 完了" });
                  })
                  .catch(function(e) {
                    console.log(e),
                      t.alertMsg({ type: "error", msg: "登録 失敗" });
                  });
            }
          }
        };
      t.default = c;
    },
    d696: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("c49a"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    d920: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "add-user-page" }, [
            a(
              "div",
              { staticClass: "content" },
              [
                a(
                  "a-form",
                  e._b(
                    {
                      attrs: { layout: e.formLayout, form: e.form },
                      on: { submit: e.handleSubmit }
                    },
                    "a-form",
                    e.formItemLayout,
                    !1
                  ),
                  [
                    a("div", { staticClass: "form-row" }, [
                      a("h2", [e._v("入居者")])
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "form-row",
                        class: e.isReadOnlyUpdateUserDetail
                          ? "read-only-form-data"
                          : ""
                      },
                      [
                        e.isReadOnlyUpdateUserDetail
                          ? a("div", { staticClass: "overlay" })
                          : e._e(),
                        a(
                          "div",
                          { staticClass: "form-cell" },
                          [
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "登録 選択",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a(
                                          "a-radio-group",
                                          {
                                            model: {
                                              value: e.contractorType,
                                              callback: function(t) {
                                                e.contractorType = t;
                                              },
                                              expression: "contractorType"
                                            }
                                          },
                                          [
                                            a(
                                              "a-radio-button",
                                              { attrs: { value: "個人" } },
                                              [e._v("個人")]
                                            ),
                                            a(
                                              "a-radio-button",
                                              { attrs: { value: "法人" } },
                                              [e._v("法人")]
                                            ),
                                            a(
                                              "a-radio-button",
                                              {
                                                attrs: {
                                                  value: "その他の保証会社"
                                                }
                                              },
                                              [e._v("その他の保証会社")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "入居予定日",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.moveIntoDate,
                                            callback: function(t) {
                                              e.moveIntoDate = t;
                                            },
                                            expression: "moveIntoDate"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "名前",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorName,
                                            callback: function(t) {
                                              e.contractorName = t;
                                            },
                                            expression: "contractorName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "名前(英語)",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorNameEnglish,
                                            callback: function(t) {
                                              e.contractorNameEnglish = t;
                                            },
                                            expression: "contractorNameEnglish"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "性別",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "a-radio-group",
                                  {
                                    model: {
                                      value: e.contractorSex,
                                      callback: function(t) {
                                        e.contractorSex = t;
                                      },
                                      expression: "contractorSex"
                                    }
                                  },
                                  [
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "男性" } },
                                      [e._v("男性")]
                                    ),
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "女性" } },
                                      [e._v("女性")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "国籍",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorCountry,
                                            callback: function(t) {
                                              e.contractorCountry = t;
                                            },
                                            expression: "contractorCountry"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "生年月日",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorBirthday,
                                            callback: function(t) {
                                              e.contractorBirthday = t;
                                            },
                                            expression: "contractorBirthday"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "住所",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.contractorAdress,
                                    callback: function(t) {
                                      e.contractorAdress = t;
                                    },
                                    expression: "contractorAdress"
                                  }
                                })
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "TEL",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          staticStyle: { width: "100%" },
                                          model: {
                                            value: e.contractorTel,
                                            callback: function(t) {
                                              e.contractorTel = t;
                                            },
                                            expression: "contractorTel"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "メール",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-auto-complete", {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            dataSource: e.emailDataSource
                                          },
                                          on: { change: e.handleChangeEmail },
                                          model: {
                                            value: e.contractorEmail,
                                            callback: function(t) {
                                              e.contractorEmail = t;
                                            },
                                            expression: "contractorEmail"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "SMS ID",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorSms,
                                            callback: function(t) {
                                              e.contractorSms = t;
                                            },
                                            expression: "contractorSms"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "在留資格",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value:
                                              e.contractorResidenceQualification,
                                            callback: function(t) {
                                              e.contractorResidenceQualification = t;
                                            },
                                            expression:
                                              "contractorResidenceQualification"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "分類",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "a-radio-group",
                                  {
                                    model: {
                                      value: e.contractorJobType,
                                      callback: function(t) {
                                        e.contractorJobType = t;
                                      },
                                      expression: "contractorJobType"
                                    }
                                  },
                                  [
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "学生" } },
                                      [e._v("学生")]
                                    ),
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "会社員" } },
                                      [e._v("会社員")]
                                    ),
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "その他" } },
                                      [e._v("その他")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "学生" == e.contractorJobType,
                                    expression: "contractorJobType=='学生'"
                                  }
                                ],
                                attrs: {
                                  label: "学校名",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorSchoolName,
                                            callback: function(t) {
                                              e.contractorSchoolName = t;
                                            },
                                            expression: "contractorSchoolName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "学校TEL",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorSchoolTel,
                                            callback: function(t) {
                                              e.contractorSchoolTel = t;
                                            },
                                            expression: "contractorSchoolTel"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "学生" == e.contractorJobType,
                                    expression: "contractorJobType=='学生'"
                                  }
                                ],
                                attrs: {
                                  label: "学校住所",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.contractorSchoolAddress,
                                    callback: function(t) {
                                      e.contractorSchoolAddress = t;
                                    },
                                    expression: "contractorSchoolAddress"
                                  }
                                })
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "会社員" == e.contractorJobType,
                                    expression: "contractorJobType=='会社員'"
                                  }
                                ],
                                attrs: {
                                  label: "勤め先名",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorCompanyName,
                                            callback: function(t) {
                                              e.contractorCompanyName = t;
                                            },
                                            expression: "contractorCompanyName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "会社住所",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorCompanyAddress,
                                            callback: function(t) {
                                              e.contractorCompanyAddress = t;
                                            },
                                            expression:
                                              "contractorCompanyAddress"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "会社員" == e.contractorJobType,
                                    expression: "contractorJobType=='会社員'"
                                  }
                                ],
                                attrs: {
                                  label: "勤め先TEL",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorCompanyTel,
                                            callback: function(t) {
                                              e.contractorCompanyTel = t;
                                            },
                                            expression: "contractorCompanyTel"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "勤続年数",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a(
                                          "div",
                                          { staticClass: "form-row" },
                                          [
                                            a(
                                              "a-form-item",
                                              {
                                                attrs: {
                                                  "label-col": { span: 1 },
                                                  "wrapper-col": { span: 24 }
                                                }
                                              },
                                              [
                                                a("a-input", {
                                                  model: {
                                                    value:
                                                      e.contractorLengthOfService,
                                                    callback: function(t) {
                                                      e.contractorLengthOfService = t;
                                                    },
                                                    expression:
                                                      "contractorLengthOfService"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            a(
                                              "a-form-item",
                                              {
                                                attrs: {
                                                  label: "給料",
                                                  "label-col":
                                                    e.formItemLayout.labelCol2,
                                                  "wrapper-col":
                                                    e.formItemLayout.wrapperCol
                                                }
                                              },
                                              [
                                                a("a-input", {
                                                  model: {
                                                    value: e.contractorSalary,
                                                    callback: function(t) {
                                                      e.contractorSalary = t;
                                                    },
                                                    expression:
                                                      "contractorSalary"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "その他" == e.contractorJobType,
                                    expression: "contractorJobType=='その他'"
                                  }
                                ],
                                attrs: {
                                  label: "その他 名前",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorOtherName,
                                            callback: function(t) {
                                              e.contractorOtherName = t;
                                            },
                                            expression: "contractorOtherName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "その他TEL",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.contractorOtherTel,
                                            callback: function(t) {
                                              e.contractorOtherTel = t;
                                            },
                                            expression: "contractorOtherTel"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "その他" == e.contractorJobType,
                                    expression: "contractorJobType=='その他'"
                                  }
                                ],
                                attrs: {
                                  label: "その他 住所",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.contractorOtherAddress,
                                    callback: function(t) {
                                      e.contractorOtherAddress = t;
                                    },
                                    expression: "contractorOtherAddress"
                                  }
                                })
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "その他" == e.contractorJobType,
                                    expression: "contractorJobType=='その他'"
                                  }
                                ],
                                attrs: {
                                  label: "その他のメモ",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.contractorOtherContent,
                                    callback: function(t) {
                                      e.contractorOtherContent = t;
                                    },
                                    expression: "contractorOtherContent"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        a(
                          "div",
                          { staticClass: "form-cell" },
                          [
                            a(
                              "a-form-item",
                              {
                                staticClass: "search-row",
                                attrs: {
                                  label: "管理会社",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "a-radio-group",
                                  {
                                    staticClass: "ant-col-10",
                                    staticStyle: { "max-width": "180px" },
                                    attrs: { "default-value": "会社名" },
                                    on: { change: e.onChangeSearchCompanyType },
                                    model: {
                                      value:
                                        e.propertyManagermentCompanySearchType,
                                      callback: function(t) {
                                        e.propertyManagermentCompanySearchType = t;
                                      },
                                      expression:
                                        "propertyManagermentCompanySearchType"
                                    }
                                  },
                                  [
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "会社名" } },
                                      [e._v("会社名")]
                                    ),
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "契約番号" } },
                                      [e._v("契約番号")]
                                    )
                                  ],
                                  1
                                ),
                                a("a-auto-complete", {
                                  staticStyle: { width: "200px" },
                                  attrs: {
                                    dataSource: e.companyTypeDataSource,
                                    placeholder: "Search Keyword"
                                  },
                                  on: { change: e.handleChangeCompanyList },
                                  model: {
                                    value:
                                      e.propertyManagermentCompanySearchKeyword,
                                    callback: function(t) {
                                      e.propertyManagermentCompanySearchKeyword = t;
                                    },
                                    expression:
                                      "propertyManagermentCompanySearchKeyword"
                                  }
                                })
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "保証種類",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "a-radio-group",
                                  {
                                    on: { change: e.onChangePaymentPercent },
                                    model: {
                                      value: e.guaranteeType,
                                      callback: function(t) {
                                        e.guaranteeType = t;
                                      },
                                      expression: "guaranteeType"
                                    }
                                  },
                                  [
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "緊急連絡先" } },
                                      [e._v("緊急連絡先")]
                                    ),
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "連帯保証人" } },
                                      [e._v("連帯保証人")]
                                    ),
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "その他" } },
                                      [e._v("その他")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "検索された会社",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [a("span", [e._v(e._s(e.searchedCompanyName))])]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "代理店手数料",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("b", [
                                          a(
                                            "span",
                                            { staticClass: "ant-form-text" },
                                            [
                                              e._v(
                                                e._s(
                                                  e.propertyManagermentCompanyFeePercentage
                                                    ? e.propertyManagermentCompanyFeePercentage +
                                                        "%"
                                                    : ""
                                                )
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "保証審査料",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("b", [
                                          a(
                                            "span",
                                            { staticClass: "ant-form-text" },
                                            [
                                              a("a-input-number", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      e.guaranteeFeePercentage,
                                                    expression:
                                                      "guaranteeFeePercentage"
                                                  }
                                                ],
                                                staticStyle: { width: "100%" },
                                                attrs: {
                                                  max: 999,
                                                  formatter: function(t) {
                                                    return (
                                                      t +
                                                      "% = " +
                                                      e.guaranteeFee +
                                                      "円"
                                                    );
                                                  },
                                                  readonly: ""
                                                },
                                                model: {
                                                  value:
                                                    e.guaranteeFeePercentage,
                                                  callback: function(t) {
                                                    e.guaranteeFeePercentage = t;
                                                  },
                                                  expression:
                                                    "guaranteeFeePercentage"
                                                }
                                              }),
                                              a("a-input-number", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: !e.guaranteeFeePercentage,
                                                    expression:
                                                      "!guaranteeFeePercentage"
                                                  }
                                                ],
                                                staticStyle: { width: "100%" },
                                                attrs: {
                                                  max: 999,
                                                  value: "",
                                                  readonly: ""
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ])
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                staticClass: "read-only-form-data",
                                attrs: {
                                  label: "回収区分",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("div", {
                                  staticClass: "overlay",
                                  staticStyle: { height: "50px" }
                                }),
                                a(
                                  "a-radio-group",
                                  {
                                    model: {
                                      value:
                                        e.searchedCompany.debtCollectionType,
                                      callback: function(t) {
                                        e.$set(
                                          e.searchedCompany,
                                          "debtCollectionType",
                                          t
                                        );
                                      },
                                      expression:
                                        "searchedCompany.debtCollectionType"
                                    }
                                  },
                                  [
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "滞納報告型" } },
                                      [e._v("滞納報告型")]
                                    ),
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "集金代行型" } },
                                      [e._v("集金代行型")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "メンション名",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.propertyName,
                                    callback: function(t) {
                                      e.propertyName = t;
                                    },
                                    expression: "propertyName"
                                  }
                                })
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "メンション住所",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.propertyAdress,
                                    callback: function(t) {
                                      e.propertyAdress = t;
                                    },
                                    expression: "propertyAdress"
                                  }
                                })
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "部屋番号",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.roomNumber,
                                            callback: function(t) {
                                              e.roomNumber = t;
                                            },
                                            expression: "roomNumber"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "部屋タイプ",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-auto-complete", {
                                          staticStyle: { width: "200px" },
                                          attrs: {
                                            dataSource: e.roomTypeDataSource,
                                            placeholder: "Type"
                                          },
                                          on: {
                                            change: e.handleChangeRoomType
                                          },
                                          model: {
                                            value: e.roomType,
                                            callback: function(t) {
                                              e.roomType = t;
                                            },
                                            expression: "roomType"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "家賃",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input-number", {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            formatter: function(e) {
                                              return e + "円";
                                            }
                                          },
                                          on: { change: e.onChangePayment },
                                          model: {
                                            value: e.rent,
                                            callback: function(t) {
                                              e.rent = t;
                                            },
                                            expression: "rent"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "管理費",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input-number", {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            formatter: function(e) {
                                              return e + "円";
                                            }
                                          },
                                          on: { change: e.onChangePayment },
                                          model: {
                                            value: e.managementCost,
                                            callback: function(t) {
                                              e.managementCost = t;
                                            },
                                            expression: "managementCost"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "その他の費用",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input-number", {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            formatter: function(e) {
                                              return e + "円";
                                            }
                                          },
                                          on: { change: e.onChangePayment },
                                          model: {
                                            value: e.otherCosts,
                                            callback: function(t) {
                                              e.otherCosts = t;
                                            },
                                            expression: "otherCosts"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a("a-form-item", {
                                      attrs: {
                                        label: "",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "合計金額",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("b", [
                                  a(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.totalPayment,
                                          expression: "totalPayment"
                                        }
                                      ],
                                      staticClass: "ant-form-text"
                                    },
                                    [e._v(e._s(e.totalPayment) + "円")]
                                  ),
                                  a(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !e.totalPayment,
                                          expression: "!totalPayment"
                                        }
                                      ],
                                      staticClass: "ant-form-text"
                                    },
                                    [e._v(e._s(e.totalPayment) + "円")]
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    a("div", { staticClass: "form-row" }, [
                      a("h2", [e._v("同居者")])
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "form-row",
                        class: e.isReadOnlyUpdateUserDetail
                          ? "read-only-form-data"
                          : ""
                      },
                      [
                        e.isReadOnlyUpdateUserDetail
                          ? a("div", { staticClass: "overlay" })
                          : e._e(),
                        a(
                          "div",
                          { staticClass: "form-cell" },
                          [
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "同居者",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-switch", {
                                          attrs: {
                                            checkedChildren: "有",
                                            unCheckedChildren: "無"
                                          },
                                          model: {
                                            value: e.roomMate,
                                            callback: function(t) {
                                              e.roomMate = t;
                                            },
                                            expression: "roomMate"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: e.roomMate,
                                            expression: "roomMate"
                                          }
                                        ],
                                        attrs: {
                                          label: "人数",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input-number", {
                                          model: {
                                            value: e.roomMateHeadCount,
                                            callback: function(t) {
                                              e.roomMateHeadCount = t;
                                            },
                                            expression: "roomMateHeadCount"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "入居者 名前",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.roomMateName,
                                            callback: function(t) {
                                              e.roomMateName = t;
                                            },
                                            expression: "roomMateName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "生年月日",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.roomMateBirthday,
                                            callback: function(t) {
                                              e.roomMateBirthday = t;
                                            },
                                            expression: "roomMateBirthday"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a("div", { staticClass: "ant-row ant-form-item" }, [
                              a(
                                "div",
                                {
                                  staticClass: "ant-col-4 ant-form-item-label"
                                },
                                [
                                  a("div", { staticClass: "form-col" }, [
                                    a("label", { attrs: { title: "TEL" } }, [
                                      e._v("TEL")
                                    ]),
                                    a("label", { attrs: { title: "TEL" } }, [
                                      e._v("国籍")
                                    ])
                                  ])
                                ]
                              ),
                              a(
                                "div",
                                {
                                  staticClass:
                                    "ant-col-18 ant-form-item-control-wrapper"
                                },
                                [
                                  a(
                                    "div",
                                    { staticClass: "form-row" },
                                    [
                                      a(
                                        "a-form-item",
                                        {
                                          attrs: {
                                            "label-col": { span: 1 },
                                            "wrapper-col": { span: 24 }
                                          }
                                        },
                                        [
                                          a(
                                            "div",
                                            { staticClass: "form-col" },
                                            [
                                              a("a-input", {
                                                staticStyle: { width: "100%" },
                                                model: {
                                                  value: e.roomMateTel,
                                                  callback: function(t) {
                                                    e.roomMateTel = t;
                                                  },
                                                  expression: "roomMateTel"
                                                }
                                              }),
                                              a("a-auto-complete", {
                                                staticStyle: { width: "100%" },
                                                attrs: {
                                                  dataSource:
                                                    e.countryDataSource
                                                },
                                                on: {
                                                  change:
                                                    e.handleChangeRoomMateCountry
                                                },
                                                model: {
                                                  value: e.roomMateCountry,
                                                  callback: function(t) {
                                                    e.roomMateCountry = t;
                                                  },
                                                  expression: "roomMateCountry"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ])
                          ],
                          1
                        ),
                        a("div", { staticClass: "form-cell" })
                      ]
                    ),
                    a("div", { staticClass: "form-row" }, [
                      a("h2", [e._v("緊急連絡先 / 連帯保証人")])
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "form-row",
                        class: e.isReadOnlyUpdateUserDetail
                          ? "read-only-form-data"
                          : ""
                      },
                      [
                        e.isReadOnlyUpdateUserDetail
                          ? a("div", { staticClass: "overlay" })
                          : e._e(),
                        a(
                          "div",
                          { staticClass: "form-cell" },
                          [
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "保証人",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "a-select",
                                  {
                                    model: {
                                      value: e.guarantorType,
                                      callback: function(t) {
                                        e.guarantorType = t;
                                      },
                                      expression: "guarantorType"
                                    }
                                  },
                                  [
                                    a(
                                      "a-select-option",
                                      { attrs: { value: "連帯保証人" } },
                                      [e._v("連帯保証人")]
                                    ),
                                    a(
                                      "a-select-option",
                                      { attrs: { value: "緊急連絡先" } },
                                      [e._v("緊急連絡先")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        a("div", { staticClass: "form-cell" })
                      ]
                    ),
                    a(
                      "VueSlideUpDown",
                      {
                        staticClass: "form-row",
                        class: e.isReadOnlyUpdateUserDetail
                          ? "read-only-form-data"
                          : "",
                        attrs: {
                          active: "連帯保証人" == e.guarantorType,
                          duration: 500
                        }
                      },
                      [
                        e.isReadOnlyUpdateUserDetail
                          ? a("div", { staticClass: "overlay" })
                          : e._e(),
                        a(
                          "div",
                          { staticClass: "form-cell" },
                          [
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "名前",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorName,
                                            callback: function(t) {
                                              e.guarantorName = t;
                                            },
                                            expression: "guarantorName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "国籍",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-auto-complete", {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            dataSource: e.countryDataSource
                                          },
                                          on: {
                                            change:
                                              e.handleChangeGuarantorCountry
                                          },
                                          model: {
                                            value: e.guarantorCountry,
                                            callback: function(t) {
                                              e.guarantorCountry = t;
                                            },
                                            expression: "guarantorCountry"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "生年月日",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorBirthday,
                                            callback: function(t) {
                                              e.guarantorBirthday = t;
                                            },
                                            expression: "guarantorBirthday"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "関係",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorRelationship,
                                            callback: function(t) {
                                              e.guarantorRelationship = t;
                                            },
                                            expression: "guarantorRelationship"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "TEL-1",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorTel1,
                                            callback: function(t) {
                                              e.guarantorTel1 = t;
                                            },
                                            expression: "guarantorTel1"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "TEL-2",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorTel2,
                                            callback: function(t) {
                                              e.guarantorTel2 = t;
                                            },
                                            expression: "guarantorTel2"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "住所",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.guarantorAdress,
                                    callback: function(t) {
                                      e.guarantorAdress = t;
                                    },
                                    expression: "guarantorAdress"
                                  }
                                })
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "勤め先名",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorCompanyName,
                                            callback: function(t) {
                                              e.guarantorCompanyName = t;
                                            },
                                            expression: "guarantorCompanyName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "会社 TEL",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorCompanyTel,
                                            callback: function(t) {
                                              e.guarantorCompanyTel = t;
                                            },
                                            expression: "guarantorCompanyTel"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "会社住所",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.guarantorCompanyAddress,
                                    callback: function(t) {
                                      e.guarantorCompanyAddress = t;
                                    },
                                    expression: "guarantorCompanyAddress"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        a("div", { staticClass: "form-cell" })
                      ]
                    ),
                    a(
                      "VueSlideUpDown",
                      {
                        staticClass: "form-row",
                        class: e.isReadOnlyUpdateUserDetail
                          ? "read-only-form-data"
                          : "",
                        attrs: {
                          active: "緊急連絡先" == e.guarantorType,
                          duration: 500
                        }
                      },
                      [
                        e.isReadOnlyUpdateUserDetail
                          ? a("div", { staticClass: "overlay" })
                          : e._e(),
                        a(
                          "div",
                          { staticClass: "form-cell" },
                          [
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "名前",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.emergencyName,
                                            callback: function(t) {
                                              e.emergencyName = t;
                                            },
                                            expression: "emergencyName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "国籍",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-auto-complete", {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            dataSource: e.countryDataSource
                                          },
                                          on: {
                                            change:
                                              e.handleChangeEmergencyCountry
                                          },
                                          model: {
                                            value: e.emergencyCountry,
                                            callback: function(t) {
                                              e.emergencyCountry = t;
                                            },
                                            expression: "emergencyCountry"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "生年月日",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.emergencyBirthday,
                                            callback: function(t) {
                                              e.emergencyBirthday = t;
                                            },
                                            expression: "emergencyBirthday"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "関係",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.emergencyRelationship,
                                            callback: function(t) {
                                              e.emergencyRelationship = t;
                                            },
                                            expression: "emergencyRelationship"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "TEL-1",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.emergencyTel1,
                                            callback: function(t) {
                                              e.emergencyTel1 = t;
                                            },
                                            expression: "emergencyTel1"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "TEL-2",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.emergencyTel2,
                                            callback: function(t) {
                                              e.emergencyTel2 = t;
                                            },
                                            expression: "emergencyTel2"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "住所",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.emergencyAdress,
                                    callback: function(t) {
                                      e.emergencyAdress = t;
                                    },
                                    expression: "emergencyAdress"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        a("div", { staticClass: "form-cell" })
                      ]
                    ),
                    a("div", { staticClass: "form-row" }, [
                      a("h2", [e._v("添付ファイル")])
                    ]),
                    a("div", { staticClass: "form-row" }, [
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "自国身分証明書",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("ImageUpload", {
                                        attrs: {
                                          imageData: e.guarantorIdCardFront,
                                          imageCbFunc:
                                            e.guarantorIdCardFrontFunc
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "日本身分証明書",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("ImageUpload", {
                                        attrs: {
                                          imageData: e.guarantorIdCardBack,
                                          imageCbFunc: e.guarantorIdCardBackFunc
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "パスポート",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("ImageUpload", {
                                        attrs: {
                                          imageData: e.guarantorContract,
                                          imageCbFunc: e.guarantorContractFunc
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a("a-form-item", {
                                    attrs: {
                                      label: "",
                                      "label-col": e.formItemLayout.labelCol2,
                                      "wrapper-col": e.formItemLayout.wrapperCol
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "form-row",
                        class: e.isReadOnlyUpdateUserDetail
                          ? "read-only-form-data"
                          : ""
                      },
                      [
                        e.isReadOnlyUpdateUserDetail
                          ? a("div", { staticClass: "overlay" })
                          : e._e(),
                        a("div", { staticClass: "form-cell" }),
                        a(
                          "div",
                          { staticClass: "form-cell" },
                          [
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "確認担当者",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.comfirmPerson,
                                            callback: function(t) {
                                              e.comfirmPerson = t;
                                            },
                                            expression: "comfirmPerson"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "上司承認者",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.approvalPerson,
                                            callback: function(t) {
                                              e.approvalPerson = t;
                                            },
                                            expression: "approvalPerson"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    a(
                      "div",
                      {
                        staticClass: "form-row--center",
                        staticStyle: { margin: "30px 0" }
                      },
                      [
                        a("div", { staticClass: "ant-row ant-form-item" }, [
                          a("div", {
                            staticClass: "ant-col-4 ant-form-item-label"
                          }),
                          a(
                            "div",
                            {
                              staticClass:
                                "ant-col-16 ant-form-item-control-wrapper"
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-button",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !e.userDataForUpdate,
                                          expression: "!userDataForUpdate"
                                        }
                                      ],
                                      attrs: {
                                        type: "primary",
                                        loading: e.loading
                                      },
                                      on: { click: e.handleSubmit }
                                    },
                                    [e._v("登録")]
                                  ),
                                  a(
                                    "a-button",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            e.userDataForUpdate &&
                                            !e.isReadOnlyUpdateUserDetail,
                                          expression:
                                            "userDataForUpdate && !isReadOnlyUpdateUserDetail"
                                        }
                                      ],
                                      attrs: {
                                        type: "primary",
                                        loading: e.loading
                                      },
                                      on: { click: e.handleUpdate }
                                    },
                                    [e._v("編集")]
                                  ),
                                  a(
                                    "a-button",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !e.isReadOnlyUpdateUserDetail,
                                          expression:
                                            "!isReadOnlyUpdateUserDetail"
                                        }
                                      ],
                                      staticStyle: { "margin-left": "10px" },
                                      attrs: {
                                        type: "default",
                                        loading: e.loading
                                      },
                                      on: { click: e.moveUserListPage }
                                    },
                                    [e._v("キャンセル")]
                                  ),
                                  a(
                                    "a-button",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.isReadOnlyUpdateUserDetail,
                                          expression:
                                            "isReadOnlyUpdateUserDetail"
                                        }
                                      ],
                                      staticStyle: { "margin-left": "10px" },
                                      attrs: {
                                        type: "default",
                                        loading: e.loading
                                      },
                                      on: { click: e.moveBlackListPage }
                                    },
                                    [e._v("ブラックリスト画面に戻る")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]);
        },
        o = [];
    },
    d96f: function(e, t, a) {},
    db43: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("81b8"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    dc42: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "user-list-page" }, [
            a(
              "div",
              { staticClass: "search-wrapper" },
              [
                a(
                  "a-select",
                  {
                    on: { change: e.onSearch },
                    model: {
                      value: e.userSearchType,
                      callback: function(t) {
                        e.userSearchType = t;
                      },
                      expression: "userSearchType"
                    }
                  },
                  [
                    a("a-select-option", { attrs: { value: "入居者名" } }, [
                      e._v("入居者名")
                    ]),
                    a("a-select-option", { attrs: { value: "承認番号" } }, [
                      e._v("承認番号")
                    ]),
                    a("a-select-option", { attrs: { value: "メンション名" } }, [
                      e._v("メンション名")
                    ]),
                    a("a-select-option", { attrs: { value: "承認日" } }, [
                      e._v("承認日")
                    ])
                  ],
                  1
                ),
                a(
                  "a-input-search",
                  {
                    attrs: { placeholder: "キーワード入寮", size: "large" },
                    on: { search: e.onSearch, change: e.onSearch },
                    model: {
                      value: e.userSearchKeyword,
                      callback: function(t) {
                        e.userSearchKeyword = t;
                      },
                      expression: "userSearchKeyword"
                    }
                  },
                  [
                    a(
                      "a-button",
                      {
                        attrs: {
                          slot: "enterButton",
                          type: "primary",
                          icon: "search",
                          loading: e.searchLoading
                        },
                        slot: "enterButton"
                      },
                      [e._v("検索")]
                    )
                  ],
                  1
                ),
                a("a-button", { attrs: { type: "primary" } }, [
                  e._v("詳細検索")
                ]),
                a(
                  "a-button",
                  {
                    attrs: { type: "primary" },
                    on: { click: e.moveAddUserPage }
                  },
                  [e._v("入居者 登録")]
                )
              ],
              1
            ),
            a(
              "div",
              { staticClass: "content" },
              [
                a(
                  "div",
                  {
                    staticClass: "row",
                    staticStyle: { "margin-bottom": "10px" }
                  },
                  [
                    a(
                      "a-button",
                      {
                        staticStyle: { "margin-left": "auto" },
                        attrs: { type: "primary" },
                        on: { click: e.exportExcel }
                      },
                      [e._v("Excel ダウンロード")]
                    )
                  ],
                  1
                ),
                a("UserTable")
              ],
              1
            )
          ]);
        },
        o = [];
    },
    dc44: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "a-upload",
            {
              staticClass: "avatar-uploader",
              attrs: {
                name: "avatar",
                listType: "picture-card",
                showUploadList: !1,
                action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                beforeUpload: e.beforeUpload
              },
              on: { change: e.handleChange }
            },
            [
              e.imageUrl
                ? a("img", { attrs: { src: e.imageUrl, alt: "avatar" } })
                : a(
                    "div",
                    [
                      a("a-icon", {
                        attrs: { type: e.loading ? "loading" : "plus" }
                      }),
                      a("div", { staticClass: "ant-upload-text" }, [
                        e._v("Upload")
                      ])
                    ],
                    1
                  )
            ]
          );
        },
        o = [];
    },
    df73: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("a-table", {
            class:
              "滞納報告型" === e.delinquentFilterType ? "filter-1" : "filter-2",
            attrs: {
              columns: e.columns,
              dataSource: e.delinquentList,
              scroll: e.windowSize,
              expandRowByClick: ""
            },
            scopedSlots: e._u([
              {
                key: "expandedRowRender",
                fn: function(t) {
                  return a("div", { staticClass: "detail-row" }, [
                    a(
                      "div",
                      { staticClass: "col" },
                      [
                        a(
                          "div",
                          { staticClass: "row" },
                          [
                            a(
                              "a-button",
                              {
                                attrs: { type: "primary" },
                                on: {
                                  click: function() {
                                    e.detail(t.id);
                                  }
                                }
                              },
                              [e._v("詳細")]
                            )
                          ],
                          1
                        ),
                        a(
                          "div",
                          { staticClass: "row" },
                          [
                            a("DelinquentCallHistoryTable", {
                              attrs: { delinquentId: t.id }
                            })
                          ],
                          1
                        ),
                        a(
                          "a-popconfirm",
                          {
                            attrs: {
                              title: "정말로 이 연체 기록을 삭제하시겠습니까?",
                              okText: "削除",
                              cancelText: "キャンセル"
                            },
                            on: {
                              confirm: function() {
                                e.confirm(t.id);
                              },
                              cancel: e.cancel
                            }
                          },
                          [
                            a("a-button", { attrs: { type: "default" } }, [
                              e._v("削除")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]);
                }
              }
            ])
          });
        },
        o = [];
    },
    e163: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("66d7"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    e3c6: function(e, t, a) {},
    e5ee: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("9884"),
        o = a("ac8a");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("0392");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "Main.vue"), (t["default"] = s.exports);
    },
    ea53: function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        a("34ef");
      var o = r(a("02fa")),
        n = a("2f62"),
        l = a("3d9d"),
        s = r(a("2aab")),
        c = [
          {
            title:
              "- [NEW] 2020.01.01 라시누텐노지초미나미 801호 / LEE JIHYUNG / 更新料 / 15,000円-23일 경과"
          },
          {
            title:
              "- [NEW] 2020.01.01 멜로디하임유히가오카 203호 / KIM JIHYUN / 3월 家賃 / 15,000円-23일 경과"
          },
          {
            title:
              "- [장기 連帯者] 2020.01.11 멜로디하임유히가오카 203호 / KIM JIHYUN / 3월 家賃 / 15,000円-23일 경과"
          },
          {
            title:
              "- [승인 보류 심사] 2020.01.11 멜로디하임유히가오카 703호 / LEE HARU / 管理会社 에누케이"
          }
        ],
        i = {
          components: { DelinquentTable: s.default },
          data: function() {
            return {
              delinquentSearchType: "メンション名",
              delinquentSearchKeyword: "",
              searchLoading: !1,
              delinquentFilterType: "滞納報告型",
              data: c
            };
          },
          computed: (0, o.default)(
            {},
            (0, n.mapGetters)({ delinquentList: "getAllDelinquentList" })
          ),
          watch: {},
          mounted: function() {},
          methods: {
            exportExcel: function() {
              function e(e, t) {
                var a = t && t.sheet ? t.sheet : "Sheet1",
                  r = {};
                return (r[a] = e), { SheetNames: [a], Sheets: r };
              }
              function t(t, a) {
                return e(XLSX.utils.aoa_to_sheet(t, a), a);
              }
              function a(e) {
                for (
                  var t = new ArrayBuffer(e.length),
                    a = new Uint8Array(t),
                    r = 0;
                  r != e.length;
                  ++r
                )
                  a[r] = 255 & e.charCodeAt(r);
                return t;
              }
              var r = { type: "binary" },
                o = [];
              o.push([
                "区分",
                "家賃 未納分",
                "代理店",
                "契約者",
                "メンション名",
                "部屋番号",
                "連絡先",
                "請求金額",
                "家賃",
                "手数料",
                "滞納発生",
                "担当者",
                "銀行名",
                "支店名",
                "口座番号",
                "備考",
                "緊急連絡先"
              ]);
              for (var n = 0; n < this.delinquentList.length; n++) {
                var l = this.delinquentList[n];
                o.push([
                  l.index,
                  l.nonPayMonthly,
                  l.company.companyName,
                  l.user.contractorName,
                  l.user.propertyName,
                  l.user.roomNumber,
                  l.user.contractorTel,
                  l.charges,
                  l.user.rent,
                  l.delinquentFee,
                  l.arrears,
                  l.user.comfirmPerson,
                  l.company.bankName,
                  l.company.branchOfficeName,
                  l.company.bankAccountNumber,
                  l.company.notes,
                  l.user.emergencyTel1
                ]);
              }
              var s = t(o),
                c = XLSX.write(s, r),
                i = new Blob([a(c)], { type: "application/octet-stream" });
              saveAs(i, "連帯者 一覧.xlsx");
            },
            onSearch: function() {
              console.log("search click");
              var e = this.delinquentSearchType,
                t = this.delinquentSearchKeyword;
              this.$store.dispatch(l.T.SEARCH_DELINQUENT, {
                delinquentSearchType: e,
                delinquentSearchKeyword: t
              });
            },
            moveAddDelinquentPage: function() {
              this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 30);
            },
            alertMsg: function() {
              this.$message.info("開発中。。");
            },
            changeDelinquentFilterType: function() {
              this.$store.dispatch(
                l.T.CHANGE_DELINQUENT_FILTER_TYPE,
                this.delinquentFilterType
              ),
                this.$message.success(
                  "".concat(this.delinquentFilterType, "のみ表示")
                );
            }
          }
        };
      t.default = i;
    },
    eb30: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("7e74"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    ee95: function(e, t, a) {},
    f1b6: function(e, t, a) {
      "use strict";
      var r = a("9010"),
        o = a.n(r);
      o.a;
    },
    f321: function(e, t, a) {
      "use strict";
      var r = a("8112"),
        o = a.n(r);
      o.a;
    },
    f3a0: function(e, t, a) {
      "use strict";
      var r = a("288e");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a("02fa")),
        n = a("2f62"),
        l = a("3d9d"),
        s = r(a("9529")),
        c = r(a("3e84")),
        i = 0,
        m = {
          components: { ImageUpload: s.default, VueSlideUpDown: c.default },
          data: function() {
            return {
              loading: !1,
              db: "",
              companyType: "不動産",
              companyName: "",
              companyAdress: "",
              companyOnwer: "",
              companyOnwerSex: "男性",
              companyOnwerTel: "",
              systemManager: "",
              systemManagerEmail: "",
              fax: "",
              notes: "",
              joinDate: "",
              buildingCount: 0,
              employeeCount: 0,
              productType: 0,
              fee1: 0,
              fee2: 0,
              fee3: 0,
              novationFee: 0,
              propertyManagermentCompanyFee: 0,
              debtCollectionType: "滞納報告型",
              bankName: "",
              recipientName: "",
              recipientNameKana: "",
              bankAccountNumber: "",
              remitType: "",
              branchOfficeName: "",
              comfirmPerson: "",
              approvalPerson: "",
              createdDate: Date.now(),
              formLayout: "horizontal",
              emailDataSource: [],
              formItemLayoutWithOutLabel: {
                wrapperCol: {
                  xs: { span: 16, offset: 0 },
                  sm: { span: 16, offset: 0 }
                }
              }
            };
          },
          computed: (0, o.default)(
            {},
            (0, n.mapGetters)({
              companyMaxIndex: "getCompanyMaxIndex",
              companyDataForUpdate: "getCompanyDataForUpdate"
            }),
            {
              formItemLayout: function() {
                this.formLayout;
                return {
                  labelCol: { span: 4 },
                  labelCol2: { span: 10 },
                  wrapperCol: { span: 20 },
                  wrapperCol2: { span: 14 }
                };
              },
              buttonItemLayout: function() {
                this.formLayout;
                return { wrapperCol: { span: 14, offset: 4 } };
              }
            }
          ),
          watch: {
            companyDataForUpdate: {
              handler: function(e) {
                console.log("companyData", e),
                  e
                    ? ((this.companyType = e.companyType),
                      (this.companyName = e.companyName),
                      (this.companyAdress = e.companyAdress),
                      (this.companyOnwer = e.companyOnwer),
                      (this.companyOnwerSex = e.companyOnwerSex),
                      (this.companyOnwerTel = e.companyOnwerTel),
                      (this.systemManager = e.systemManager),
                      (this.systemManagerEmail = e.systemManagerEmail),
                      (this.fax = e.fax),
                      (this.notes = e.notes),
                      (this.joinDate = e.joinDate),
                      (this.buildingCount = e.buildingCount),
                      (this.employeeCount = e.employeeCount),
                      (this.productType = e.productType),
                      (this.fee1 = e.fee1),
                      (this.fee2 = e.fee2),
                      (this.fee3 = e.fee3),
                      (this.novationFee = e.novationFee),
                      (this.propertyManagermentCompanyFee =
                        e.propertyManagermentCompanyFee),
                      (this.debtCollectionType = e.debtCollectionType),
                      (this.bankName = e.bankName),
                      (this.recipientName = e.recipientName),
                      (this.recipientNameKana = e.recipientNameKana),
                      (this.bankAccountNumber = e.bankAccountNumber),
                      (this.remitType = e.remitType),
                      (this.branchOfficeName = e.branchOfficeName),
                      (this.comfirmPerson = e.comfirmPerson),
                      (this.approvalPerson = e.approvalPerson),
                      (this.createdDate = e.createdDate))
                    : this.clearDatas();
              },
              immediate: !0
            }
          },
          beforeCreate: function() {
            (this.form = this.$form.createForm(this, {
              name: "validate_other"
            })),
              this.form.getFieldDecorator("keys", {
                initialValue: [],
                preserve: !0
              });
          },
          mounted: function() {
            this.db = firebase.firestore();
          },
          methods: {
            remove: function(e) {
              var t = this.form,
                a = t.getFieldValue("keys");
              1 !== a.length &&
                t.setFieldsValue({
                  keys: a.filter(function(t) {
                    return t !== e;
                  })
                });
            },
            add: function() {
              var e = this.form,
                t = e.getFieldValue("keys");
              if (t.length > 4) return !1;
              var a = t.concat(i++);
              e.setFieldsValue({ keys: a }), console.log(a);
            },
            handleChangeEmail: function(e) {
              this.emailDataSource =
                !e || e.indexOf("@") >= 0
                  ? []
                  : [
                      "".concat(e, "@gmail.com"),
                      "".concat(e, "@yahoo.com"),
                      "".concat(e, "@other.com")
                    ];
            },
            onChangeJoinDate: function(e, t) {
              this.joinDate = t;
            },
            onChangeRoomMateBirthday: function(e, t) {
              this.roomMateBirthday = t;
            },
            getCompanyInputValues: function() {
              var e = this.companyType,
                t = this.companyName,
                a = this.companyAdress,
                r = this.companyOnwer,
                o = this.companyOnwerSex,
                n = this.companyOnwerTel,
                l = this.systemManager,
                s = this.systemManagerEmail,
                c = this.fax,
                i = this.notes,
                m = this.joinDate,
                u = this.buildingCount,
                p = this.employeeCount,
                d = this.productType,
                h = this.fee1,
                y = this.fee2,
                f = this.fee3,
                g = this.novationFee,
                C = this.propertyManagermentCompanyFee,
                b = this.debtCollectionType,
                v = this.bankName,
                w = this.recipientName,
                I = this.recipientNameKana,
                T = this.bankAccountNumber,
                L = this.remitType,
                x = this.branchOfficeName,
                N = this.comfirmPerson,
                S = this.approvalPerson,
                k = Date.now();
              return {
                companyType: e,
                companyName: t,
                companyAdress: a,
                companyOnwer: r,
                companyOnwerSex: o,
                companyOnwerTel: n,
                systemManager: l,
                systemManagerEmail: s,
                fax: c,
                notes: i,
                joinDate: m,
                buildingCount: u,
                employeeCount: p,
                productType: d,
                fee1: h,
                fee2: y,
                fee3: f,
                novationFee: g,
                propertyManagermentCompanyFee: C,
                debtCollectionType: b,
                bankName: v,
                recipientName: w,
                recipientNameKana: I,
                bankAccountNumber: T,
                remitType: L,
                branchOfficeName: x,
                comfirmPerson: N,
                approvalPerson: S,
                createdDate: k
              };
            },
            handleSubmit: function(e) {
              this.loading = !0;
              var t = this,
                a = this.getCompanyInputValues();
              this.db
                .collection("companys")
                .add(
                  (0, o.default)({}, a, {
                    approvalNumber: this.companyMaxIndex
                  })
                )
                .then(function(e) {
                  t.getCompanyList(function() {
                    t.clearDatas(),
                      (t.loading = !1),
                      t.alertMsg({ type: "success", msg: "登録 完了" }),
                      t.moveCompanyListPage();
                  });
                })
                .catch(function(e) {
                  (t.loading = !1),
                    t.alertMsg({ type: "error", msg: "登録 失敗" }),
                    console.error("Error adding document: ", e);
                });
            },
            handleUpdate: function(e) {
              this.loading = !0;
              var t = this,
                a = this.getCompanyInputValues();
              this.db
                .collection("companys")
                .doc(this.companyDataForUpdate.id)
                .update((0, o.default)({}, a))
                .then(function(e) {
                  t.getCompanyList(function() {
                    t.clearDatas(),
                      (t.loading = !1),
                      t.alertMsg({ type: "success", msg: "編集 完了" }),
                      t.moveCompanyListPage();
                  });
                })
                .catch(function(e) {
                  (t.loading = !1),
                    t.alertMsg({ type: "error", msg: "編集 失敗" }),
                    console.error("Error adding document: ", e);
                });
            },
            cancel: function() {
              this.moveCompanyListPage();
            },
            clearDatas: function() {
              (this.companyType = "不動産"),
                (this.companyName = ""),
                (this.companyAdress = ""),
                (this.companyOnwer = ""),
                (this.companyOnwerSex = "男性"),
                (this.companyOnwerTel = ""),
                (this.systemManager = ""),
                (this.systemManagerEmail = ""),
                (this.fax = ""),
                (this.notes = ""),
                (this.joinDate = ""),
                (this.buildingCount = 0),
                (this.employeeCount = 0),
                (this.productType = "A"),
                (this.fee1 = 0),
                (this.fee2 = 0),
                (this.fee3 = 0),
                (this.novationFee = 0),
                (this.propertyManagermentCompanyFee = 0),
                (this.debtCollectionType = "滞納報告型"),
                (this.bankName = ""),
                (this.recipientName = ""),
                (this.recipientNameKana = ""),
                (this.bankAccountNumber = ""),
                (this.remitType = ""),
                (this.branchOfficeName = ""),
                (this.comfirmPerson = ""),
                (this.approvalPerson = ""),
                (this.createdDate = "");
            },
            getCompanyList: function(e) {
              this.$store.dispatch(l.T.GET_COMPANY_LIST, { cb: e });
            },
            alertMsg: function(e) {
              var t = e.type,
                a = void 0 === t ? "info" : t,
                r = e.msg,
                o = void 0 === r ? "" : r;
              switch (a) {
                case "info":
                  this.$message.info(o);
                  break;
                case "error":
                  this.$message.error(o);
                  break;
                case "success":
                  this.$message.success(o);
                  break;
                default:
                  break;
              }
            },
            moveCompanyListPage: function() {
              this.$store.dispatch(l.T.CHANGE_TAB_INDEX, 2),
                this.$store.dispatch(l.T.CHANGE_UPDATE_COMPNAY_ID, "");
            }
          }
        };
      t.default = m;
    },
    fae6: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("d920"),
        o = a("9184");
      for (var n in o)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return o[e];
            });
          })(n);
      a("fb7c");
      var l = a("2877"),
        s = Object(l["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
      (s.options.__file = "addUserPage.vue"), (t["default"] = s.exports);
    },
    fb7c: function(e, t, a) {
      "use strict";
      var r = a("2a22"),
        o = a.n(r);
      o.a;
    },
    fdf5: function(e, t, a) {
      "use strict";
      var r = a("ee95"),
        o = a.n(r);
      o.a;
    },
    ff98: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("b46c"),
        o = a.n(r);
      for (var n in r)
        "default" !== n &&
          (function(e) {
            a.d(t, e, function() {
              return r[e];
            });
          })(n);
      t["default"] = o.a;
    },
    ffc2: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("a-table", {
            attrs: {
              columns: e.columns,
              dataSource: e.userList,
              scroll: e.windowSize,
              expandRowByClick: ""
            },
            on: { change: e.handleTableChange },
            scopedSlots: e._u([
              {
                key: "expandedRowRender",
                fn: function(t) {
                  return a("div", { staticClass: "detail-row" }, [
                    a(
                      "div",
                      { staticClass: "col" },
                      [
                        a(
                          "div",
                          { staticClass: "row" },
                          [
                            a(
                              "a-button",
                              {
                                attrs: { type: "primary" },
                                on: {
                                  click: function() {
                                    e.detail(t.id);
                                  }
                                }
                              },
                              [e._v("詳細")]
                            )
                          ],
                          1
                        ),
                        a(
                          "div",
                          { staticClass: "row" },
                          [
                            a("UserCallHistoryTable", {
                              attrs: { userId: t.id }
                            })
                          ],
                          1
                        ),
                        a(
                          "a-popconfirm",
                          {
                            attrs: {
                              title: "本当にこの入居者を削除しますか。",
                              okText: "削除",
                              cancelText: "キャンセル"
                            },
                            on: {
                              confirm: function() {
                                e.confirm(t.id);
                              },
                              cancel: e.cancel
                            }
                          },
                          [
                            a("a-button", { attrs: { type: "default" } }, [
                              e._v("削除")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]);
                }
              }
            ])
          });
        },
        o = [];
    },
    ffdc: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      }),
        a.d(t, "b", function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "add-user-page" }, [
            a(
              "div",
              { staticClass: "content" },
              [
                a(
                  "a-form",
                  e._b(
                    { attrs: { layout: e.formLayout, form: e.form } },
                    "a-form",
                    e.formItemLayout,
                    !1
                  ),
                  [
                    a("div", { staticClass: "form-row" }, [
                      a("h2", [e._v("検索")])
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "form-row",
                        class: e.delinquentDataForUpdate
                          ? "read-only-form-data"
                          : ""
                      },
                      [
                        e.delinquentDataForUpdate
                          ? a("div", { staticClass: "overlay" })
                          : e._e(),
                        a(
                          "div",
                          { staticClass: "form-cell" },
                          [
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "入居者 検索",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "a-radio-group",
                                  {
                                    staticClass: "ant-col-10",
                                    staticStyle: { "max-width": "180px" },
                                    on: { change: e.onChangeSearchUserType },
                                    model: {
                                      value: e.userSearchType,
                                      callback: function(t) {
                                        e.userSearchType = t;
                                      },
                                      expression: "userSearchType"
                                    }
                                  },
                                  [
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "入居者名" } },
                                      [e._v("入居者名")]
                                    ),
                                    a(
                                      "a-radio-button",
                                      { attrs: { value: "承認番号" } },
                                      [e._v("承認番号")]
                                    )
                                  ],
                                  1
                                ),
                                a("a-auto-complete", {
                                  staticStyle: {
                                    width: "200px",
                                    "margin-right": "10px"
                                  },
                                  attrs: {
                                    dataSource: e.userTypeDataSource,
                                    placeholder: "Search Keyword"
                                  },
                                  on: { change: e.handleChangeDelinquentList },
                                  model: {
                                    value: e.userSearchKeyword,
                                    callback: function(t) {
                                      e.userSearchKeyword = t;
                                    },
                                    expression: "userSearchKeyword"
                                  }
                                })
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "検索された入居者",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [a("span", [e._v(e._s(e.searchedUserName))])]
                            )
                          ],
                          1
                        ),
                        a("div", { staticClass: "form-cell" })
                      ]
                    ),
                    a("div", { staticClass: "form-row read-only-form-data" }, [
                      a("div", { staticClass: "overlay" }),
                      a("h2", [e._v("連帯者 登録")])
                    ]),
                    a("div", { staticClass: "form-row read-only-form-data" }, [
                      a("div", { staticClass: "overlay" }),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "登録 選択",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a(
                                        "a-radio-group",
                                        {
                                          model: {
                                            value: e.contractorType,
                                            callback: function(t) {
                                              e.contractorType = t;
                                            },
                                            expression: "contractorType"
                                          }
                                        },
                                        [
                                          a(
                                            "a-radio-button",
                                            { attrs: { value: "個人" } },
                                            [e._v("個人")]
                                          ),
                                          a(
                                            "a-radio-button",
                                            { attrs: { value: "法人" } },
                                            [e._v("法人")]
                                          ),
                                          a(
                                            "a-radio-button",
                                            {
                                              attrs: {
                                                value: "その他の保証会社"
                                              }
                                            },
                                            [e._v("その他の保証会社")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "入居予定日",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-date-picker", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          value:
                                            "" != e.moveIntoDate
                                              ? e.moment(
                                                  e.moveIntoDate,
                                                  e.dateFormat
                                                )
                                              : "",
                                          format: e.dateFormat
                                        },
                                        on: { change: e.onChangeMoveIntoDate }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "名前",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorName,
                                          callback: function(t) {
                                            e.contractorName = t;
                                          },
                                          expression: "contractorName"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "名前(英語)",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorNameEnglish,
                                          callback: function(t) {
                                            e.contractorNameEnglish = t;
                                          },
                                          expression: "contractorNameEnglish"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "性別",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "a-radio-group",
                                {
                                  model: {
                                    value: e.contractorSex,
                                    callback: function(t) {
                                      e.contractorSex = t;
                                    },
                                    expression: "contractorSex"
                                  }
                                },
                                [
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "男性" } },
                                    [e._v("男性")]
                                  ),
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "女性" } },
                                    [e._v("女性")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "国籍",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorCountry,
                                          callback: function(t) {
                                            e.contractorCountry = t;
                                          },
                                          expression: "contractorCountry"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "生年月日",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-date-picker", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          value:
                                            "" != e.contractorBirthday
                                              ? e.moment(
                                                  e.contractorBirthday,
                                                  e.dateFormat
                                                )
                                              : "",
                                          format: e.dateFormat
                                        },
                                        on: {
                                          change: e.onChangeContractorBirthday
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "住所",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.contractorAdress,
                                  callback: function(t) {
                                    e.contractorAdress = t;
                                  },
                                  expression: "contractorAdress"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "TEL",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        staticStyle: { width: "100%" },
                                        model: {
                                          value: e.contractorTel,
                                          callback: function(t) {
                                            e.contractorTel = t;
                                          },
                                          expression: "contractorTel"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "メール",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-auto-complete", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          dataSource: e.emailDataSource
                                        },
                                        on: { change: e.handleChangeEmail },
                                        model: {
                                          value: e.contractorEmail,
                                          callback: function(t) {
                                            e.contractorEmail = t;
                                          },
                                          expression: "contractorEmail"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "SMS ID",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorSms,
                                          callback: function(t) {
                                            e.contractorSms = t;
                                          },
                                          expression: "contractorSms"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "在留資格",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a(
                                        "a-select",
                                        {
                                          model: {
                                            value:
                                              e.contractorResidenceQualification,
                                            callback: function(t) {
                                              e.contractorResidenceQualification = t;
                                            },
                                            expression:
                                              "contractorResidenceQualification"
                                          }
                                        },
                                        [
                                          a(
                                            "a-select-option",
                                            { attrs: { value: "배우자 비자" } },
                                            [e._v("배우자 비자")]
                                          ),
                                          a(
                                            "a-select-option",
                                            {
                                              attrs: { value: "기술인문비자" }
                                            },
                                            [e._v("기술인문비자")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "分類",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "a-radio-group",
                                {
                                  model: {
                                    value: e.contractorJobType,
                                    callback: function(t) {
                                      e.contractorJobType = t;
                                    },
                                    expression: "contractorJobType"
                                  }
                                },
                                [
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "学生" } },
                                    [e._v("学生")]
                                  ),
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "会社員" } },
                                    [e._v("会社員")]
                                  ),
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "その他" } },
                                    [e._v("その他")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "学生" == e.contractorJobType,
                                  expression: "contractorJobType=='学生'"
                                }
                              ],
                              attrs: {
                                label: "学校名",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorSchoolName,
                                          callback: function(t) {
                                            e.contractorSchoolName = t;
                                          },
                                          expression: "contractorSchoolName"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "学校TEL",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorSchoolTel,
                                          callback: function(t) {
                                            e.contractorSchoolTel = t;
                                          },
                                          expression: "contractorSchoolTel"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "学生" == e.contractorJobType,
                                  expression: "contractorJobType=='学生'"
                                }
                              ],
                              attrs: {
                                label: "学校住所",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.contractorSchoolAddress,
                                  callback: function(t) {
                                    e.contractorSchoolAddress = t;
                                  },
                                  expression: "contractorSchoolAddress"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "会社員" == e.contractorJobType,
                                  expression: "contractorJobType=='会社員'"
                                }
                              ],
                              attrs: {
                                label: "勤め先名",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorCompanyName,
                                          callback: function(t) {
                                            e.contractorCompanyName = t;
                                          },
                                          expression: "contractorCompanyName"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "会社住所",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorCompanyAddress,
                                          callback: function(t) {
                                            e.contractorCompanyAddress = t;
                                          },
                                          expression: "contractorCompanyAddress"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "会社員" == e.contractorJobType,
                                  expression: "contractorJobType=='会社員'"
                                }
                              ],
                              attrs: {
                                label: "勤め先TEL",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorCompanyTel,
                                          callback: function(t) {
                                            e.contractorCompanyTel = t;
                                          },
                                          expression: "contractorCompanyTel"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "勤続年数",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a(
                                        "div",
                                        { staticClass: "form-row" },
                                        [
                                          a(
                                            "a-form-item",
                                            {
                                              attrs: {
                                                "label-col": { span: 1 },
                                                "wrapper-col": { span: 24 }
                                              }
                                            },
                                            [
                                              a("a-input", {
                                                model: {
                                                  value:
                                                    e.contractorLengthOfService,
                                                  callback: function(t) {
                                                    e.contractorLengthOfService = t;
                                                  },
                                                  expression:
                                                    "contractorLengthOfService"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          a(
                                            "a-form-item",
                                            {
                                              attrs: {
                                                label: "給料",
                                                "label-col":
                                                  e.formItemLayout.labelCol2,
                                                "wrapper-col":
                                                  e.formItemLayout.wrapperCol
                                              }
                                            },
                                            [
                                              a("a-input", {
                                                model: {
                                                  value: e.contractorSalary,
                                                  callback: function(t) {
                                                    e.contractorSalary = t;
                                                  },
                                                  expression: "contractorSalary"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "その他" == e.contractorJobType,
                                  expression: "contractorJobType=='その他'"
                                }
                              ],
                              attrs: {
                                label: "その他 名前",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorOtherName,
                                          callback: function(t) {
                                            e.contractorOtherName = t;
                                          },
                                          expression: "contractorOtherName"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "その他TEL",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.contractorOtherTel,
                                          callback: function(t) {
                                            e.contractorOtherTel = t;
                                          },
                                          expression: "contractorOtherTel"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "その他" == e.contractorJobType,
                                  expression: "contractorJobType=='その他'"
                                }
                              ],
                              attrs: {
                                label: "その他 住所",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.contractorOtherAddress,
                                  callback: function(t) {
                                    e.contractorOtherAddress = t;
                                  },
                                  expression: "contractorOtherAddress"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "その他" == e.contractorJobType,
                                  expression: "contractorJobType=='その他'"
                                }
                              ],
                              attrs: {
                                label: "その他のメモ",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.contractorOtherContent,
                                  callback: function(t) {
                                    e.contractorOtherContent = t;
                                  },
                                  expression: "contractorOtherContent"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "その他" == e.contractorJobType,
                                  expression: "contractorJobType=='その他'"
                                }
                              ],
                              attrs: {
                                label: "증빙서류",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("ImageUpload", {
                                ref: "contractorOtherFile",
                                attrs: {
                                  imageData: e.contractorOtherFile,
                                  imageCbFunc: e.contractorOtherFileFunc
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              staticClass: "search-row",
                              attrs: {
                                label: "管理会社",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "a-radio-group",
                                {
                                  staticClass: "ant-col-10",
                                  staticStyle: { "max-width": "180px" },
                                  attrs: { "default-value": "会社名" },
                                  on: { change: e.onChangeSearchCompanyType },
                                  model: {
                                    value:
                                      e.propertyManagermentCompanySearchType,
                                    callback: function(t) {
                                      e.propertyManagermentCompanySearchType = t;
                                    },
                                    expression:
                                      "propertyManagermentCompanySearchType"
                                  }
                                },
                                [
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "会社名" } },
                                    [e._v("会社名")]
                                  ),
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "契約番号" } },
                                    [e._v("契約番号")]
                                  )
                                ],
                                1
                              ),
                              a("a-auto-complete", {
                                staticStyle: { width: "200px" },
                                attrs: {
                                  dataSource: e.companyTypeDataSource,
                                  placeholder: "Search Keyword"
                                },
                                on: { change: e.handleChangeCompanyList },
                                model: {
                                  value:
                                    e.propertyManagermentCompanySearchKeyword,
                                  callback: function(t) {
                                    e.propertyManagermentCompanySearchKeyword = t;
                                  },
                                  expression:
                                    "propertyManagermentCompanySearchKeyword"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "保証種類",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "a-radio-group",
                                {
                                  on: { change: e.onChangePaymentPercent },
                                  model: {
                                    value: e.guaranteeType,
                                    callback: function(t) {
                                      e.guaranteeType = t;
                                    },
                                    expression: "guaranteeType"
                                  }
                                },
                                [
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "緊急連絡先" } },
                                    [e._v("緊急連絡先")]
                                  ),
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "連帯保証人" } },
                                    [e._v("連帯保証人")]
                                  ),
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "その他" } },
                                    [e._v("その他")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "検索された会社",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [a("span", [e._v(e._s(e.searchedCompanyName))])]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "代理店手数料",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("b", [
                                        a(
                                          "span",
                                          { staticClass: "ant-form-text" },
                                          [
                                            e._v(
                                              e._s(
                                                e.propertyManagermentCompanyFeePercentage
                                                  ? e.propertyManagermentCompanyFeePercentage +
                                                      "%"
                                                  : ""
                                              )
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "保証審査料",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("b", [
                                        a(
                                          "span",
                                          { staticClass: "ant-form-text" },
                                          [
                                            a("a-input-number", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    e.guaranteeFeePercentage,
                                                  expression:
                                                    "guaranteeFeePercentage"
                                                }
                                              ],
                                              staticStyle: { width: "100%" },
                                              attrs: {
                                                max: 999,
                                                formatter: function(t) {
                                                  return (
                                                    t +
                                                    "% = " +
                                                    e.guaranteeFee +
                                                    "円"
                                                  );
                                                },
                                                readonly: ""
                                              },
                                              model: {
                                                value: e.guaranteeFeePercentage,
                                                callback: function(t) {
                                                  e.guaranteeFeePercentage = t;
                                                },
                                                expression:
                                                  "guaranteeFeePercentage"
                                              }
                                            }),
                                            a("a-input-number", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: !e.guaranteeFeePercentage,
                                                  expression:
                                                    "!guaranteeFeePercentage"
                                                }
                                              ],
                                              staticStyle: { width: "100%" },
                                              attrs: {
                                                max: 999,
                                                value: "",
                                                readonly: ""
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              staticClass: "read-only-form-data",
                              attrs: {
                                label: "回収区分",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("div", {
                                staticClass: "overlay",
                                staticStyle: { height: "50px" }
                              }),
                              a(
                                "a-radio-group",
                                {
                                  model: {
                                    value: e.searchedCompany.debtCollectionType,
                                    callback: function(t) {
                                      e.$set(
                                        e.searchedCompany,
                                        "debtCollectionType",
                                        t
                                      );
                                    },
                                    expression:
                                      "searchedCompany.debtCollectionType"
                                  }
                                },
                                [
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "滞納報告型" } },
                                    [e._v("滞納報告型")]
                                  ),
                                  a(
                                    "a-radio-button",
                                    { attrs: { value: "集金代行型" } },
                                    [e._v("集金代行型")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "メンション名",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.propertyName,
                                  callback: function(t) {
                                    e.propertyName = t;
                                  },
                                  expression: "propertyName"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "メンション住所",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("a-input", {
                                model: {
                                  value: e.propertyAdress,
                                  callback: function(t) {
                                    e.propertyAdress = t;
                                  },
                                  expression: "propertyAdress"
                                }
                              })
                            ],
                            1
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "部屋番号",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.roomNumber,
                                          callback: function(t) {
                                            e.roomNumber = t;
                                          },
                                          expression: "roomNumber"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "部屋タイプ",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-auto-complete", {
                                        staticStyle: { width: "200px" },
                                        attrs: {
                                          dataSource: e.roomTypeDataSource,
                                          placeholder: "Type"
                                        },
                                        on: { change: e.handleChangeRoomType },
                                        model: {
                                          value: e.roomType,
                                          callback: function(t) {
                                            e.roomType = t;
                                          },
                                          expression: "roomType"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "家賃",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input-number", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          formatter: function(e) {
                                            return e + "円";
                                          }
                                        },
                                        on: { change: e.onChangePayment },
                                        model: {
                                          value: e.rent,
                                          callback: function(t) {
                                            e.rent = t;
                                          },
                                          expression: "rent"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "管理費",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-input-number", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          formatter: function(e) {
                                            return e + "円";
                                          }
                                        },
                                        on: { change: e.onChangePayment },
                                        model: {
                                          value: e.managementCost,
                                          callback: function(t) {
                                            e.managementCost = t;
                                          },
                                          expression: "managementCost"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "その他の費用",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input-number", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          formatter: function(e) {
                                            return e + "円";
                                          }
                                        },
                                        on: { change: e.onChangePayment },
                                        model: {
                                          value: e.otherCosts,
                                          callback: function(t) {
                                            e.otherCosts = t;
                                          },
                                          expression: "otherCosts"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a("a-form-item", {
                                    attrs: {
                                      label: "",
                                      "label-col": e.formItemLayout.labelCol2,
                                      "wrapper-col": e.formItemLayout.wrapperCol
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "合計金額",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a("b", [
                                a(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.totalPayment,
                                        expression: "totalPayment"
                                      }
                                    ],
                                    staticClass: "ant-form-text"
                                  },
                                  [e._v(e._s(e.totalPayment) + "円")]
                                ),
                                a(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !e.totalPayment,
                                        expression: "!totalPayment"
                                      }
                                    ],
                                    staticClass: "ant-form-text"
                                  },
                                  [e._v(e._s(e.totalPayment) + "円")]
                                )
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    a("div", { staticClass: "form-row read-only-form-data" }, [
                      a("div", { staticClass: "overlay" }),
                      a("h2", [e._v("同居者")])
                    ]),
                    a("div", { staticClass: "form-row read-only-form-data" }, [
                      a("div", { staticClass: "overlay" }),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "同居者",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-switch", {
                                        attrs: {
                                          checkedChildren: "有",
                                          unCheckedChildren: "無"
                                        },
                                        model: {
                                          value: e.roomMate,
                                          callback: function(t) {
                                            e.roomMate = t;
                                          },
                                          expression: "roomMate"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.roomMate,
                                          expression: "roomMate"
                                        }
                                      ],
                                      attrs: {
                                        label: "人数",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-input-number", {
                                        model: {
                                          value: e.roomMateHeadCount,
                                          callback: function(t) {
                                            e.roomMateHeadCount = t;
                                          },
                                          expression: "roomMateHeadCount"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "入居者 名前",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.roomMateName,
                                          callback: function(t) {
                                            e.roomMateName = t;
                                          },
                                          expression: "roomMateName"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "生年月日",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-date-picker", {
                                        on: {
                                          change: e.onChangeRoomMateBirthday
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a("div", { staticClass: "ant-row ant-form-item" }, [
                            a(
                              "div",
                              { staticClass: "ant-col-4 ant-form-item-label" },
                              [
                                a("div", { staticClass: "form-col" }, [
                                  a("label", { attrs: { title: "TEL" } }, [
                                    e._v("TEL")
                                  ]),
                                  a("label", { attrs: { title: "TEL" } }, [
                                    e._v("国籍")
                                  ])
                                ])
                              ]
                            ),
                            a(
                              "div",
                              {
                                staticClass:
                                  "ant-col-18 ant-form-item-control-wrapper"
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a(
                                          "div",
                                          { staticClass: "form-col" },
                                          [
                                            a("a-input", {
                                              staticStyle: { width: "100%" },
                                              model: {
                                                value: e.roomMateTel,
                                                callback: function(t) {
                                                  e.roomMateTel = t;
                                                },
                                                expression: "roomMateTel"
                                              }
                                            }),
                                            a("a-auto-complete", {
                                              staticStyle: { width: "100%" },
                                              attrs: {
                                                dataSource: e.countryDataSource
                                              },
                                              on: {
                                                change:
                                                  e.handleChangeRoomMateCountry
                                              },
                                              model: {
                                                value: e.roomMateCountry,
                                                callback: function(t) {
                                                  e.roomMateCountry = t;
                                                },
                                                expression: "roomMateCountry"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                        ],
                        1
                      ),
                      a("div", { staticClass: "form-cell" })
                    ]),
                    a("div", { staticClass: "form-row read-only-form-data" }, [
                      a("div", { staticClass: "overlay" }),
                      a("h2", [e._v("緊急連絡先 / 連帯保証人")])
                    ]),
                    a("div", { staticClass: "form-row read-only-form-data" }, [
                      a("div", { staticClass: "overlay" }),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "保証人",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "a-select",
                                {
                                  model: {
                                    value: e.guarantorType,
                                    callback: function(t) {
                                      e.guarantorType = t;
                                    },
                                    expression: "guarantorType"
                                  }
                                },
                                [
                                  a(
                                    "a-select-option",
                                    { attrs: { value: "連帯保証人" } },
                                    [e._v("連帯保証人")]
                                  ),
                                  a(
                                    "a-select-option",
                                    { attrs: { value: "緊急連絡先" } },
                                    [e._v("緊急連絡先")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      a("div", { staticClass: "form-cell" })
                    ]),
                    a(
                      "VueSlideUpDown",
                      {
                        staticClass: "form-row read-only-form-data",
                        attrs: {
                          active: "連帯保証人" == e.guarantorType,
                          duration: 500
                        }
                      },
                      [
                        a("div", { staticClass: "overlay" }),
                        a(
                          "div",
                          { staticClass: "form-cell" },
                          [
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "名前",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorName,
                                            callback: function(t) {
                                              e.guarantorName = t;
                                            },
                                            expression: "guarantorName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "国籍",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-auto-complete", {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            dataSource: e.countryDataSource
                                          },
                                          on: {
                                            change:
                                              e.handleChangeGuarantorCountry
                                          },
                                          model: {
                                            value: e.guarantorCountry,
                                            callback: function(t) {
                                              e.guarantorCountry = t;
                                            },
                                            expression: "guarantorCountry"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "生年月日",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-date-picker", {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            value:
                                              "" != e.guarantorBirthday
                                                ? e.moment(
                                                    e.guarantorBirthday,
                                                    e.dateFormat
                                                  )
                                                : "",
                                            format: e.dateFormat
                                          },
                                          on: {
                                            change: e.onChangeGuarantorBirthday
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "関係",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorRelationship,
                                            callback: function(t) {
                                              e.guarantorRelationship = t;
                                            },
                                            expression: "guarantorRelationship"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "TEL-1",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorTel1,
                                            callback: function(t) {
                                              e.guarantorTel1 = t;
                                            },
                                            expression: "guarantorTel1"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "TEL-2",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorTel2,
                                            callback: function(t) {
                                              e.guarantorTel2 = t;
                                            },
                                            expression: "guarantorTel2"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "住所",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.guarantorAdress,
                                    callback: function(t) {
                                      e.guarantorAdress = t;
                                    },
                                    expression: "guarantorAdress"
                                  }
                                })
                              ],
                              1
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "勤め先名",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorCompanyName,
                                            callback: function(t) {
                                              e.guarantorCompanyName = t;
                                            },
                                            expression: "guarantorCompanyName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "会社 TEL",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.guarantorCompanyTel,
                                            callback: function(t) {
                                              e.guarantorCompanyTel = t;
                                            },
                                            expression: "guarantorCompanyTel"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "会社住所",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.guarantorCompanyAddress,
                                    callback: function(t) {
                                      e.guarantorCompanyAddress = t;
                                    },
                                    expression: "guarantorCompanyAddress"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        a("div", { staticClass: "form-cell" })
                      ]
                    ),
                    a(
                      "VueSlideUpDown",
                      {
                        staticClass: "form-row read-only-form-data",
                        attrs: {
                          active: "緊急連絡先" == e.guarantorType,
                          duration: 500
                        }
                      },
                      [
                        a("div", { staticClass: "overlay" }),
                        a(
                          "div",
                          { staticClass: "form-cell" },
                          [
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "名前",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.emergencyName,
                                            callback: function(t) {
                                              e.emergencyName = t;
                                            },
                                            expression: "emergencyName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "国籍",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-auto-complete", {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            dataSource: e.countryDataSource
                                          },
                                          on: {
                                            change:
                                              e.handleChangeEmergencyCountry
                                          },
                                          model: {
                                            value: e.emergencyCountry,
                                            callback: function(t) {
                                              e.emergencyCountry = t;
                                            },
                                            expression: "emergencyCountry"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "生年月日",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-date-picker", {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            value:
                                              "" != e.emergencyBirthday
                                                ? e.moment(
                                                    e.emergencyBirthday,
                                                    e.dateFormat
                                                  )
                                                : "",
                                            format: e.dateFormat
                                          },
                                          on: {
                                            change: e.onChangeEmergencyBirthday
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "関係",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.emergencyRelationship,
                                            callback: function(t) {
                                              e.emergencyRelationship = t;
                                            },
                                            expression: "emergencyRelationship"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "TEL-1",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "form-row" },
                                  [
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          "label-col": { span: 1 },
                                          "wrapper-col": { span: 24 }
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.emergencyTel1,
                                            callback: function(t) {
                                              e.emergencyTel1 = t;
                                            },
                                            expression: "emergencyTel1"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    a(
                                      "a-form-item",
                                      {
                                        attrs: {
                                          label: "TEL-2",
                                          "label-col":
                                            e.formItemLayout.labelCol2,
                                          "wrapper-col":
                                            e.formItemLayout.wrapperCol
                                        }
                                      },
                                      [
                                        a("a-input", {
                                          model: {
                                            value: e.emergencyTel2,
                                            callback: function(t) {
                                              e.emergencyTel2 = t;
                                            },
                                            expression: "emergencyTel2"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            a(
                              "a-form-item",
                              {
                                attrs: {
                                  label: "住所",
                                  "label-col": e.formItemLayout.labelCol,
                                  "wrapper-col": e.formItemLayout.wrapperCol
                                }
                              },
                              [
                                a("a-input", {
                                  model: {
                                    value: e.emergencyAdress,
                                    callback: function(t) {
                                      e.emergencyAdress = t;
                                    },
                                    expression: "emergencyAdress"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        a("div", { staticClass: "form-cell" })
                      ]
                    ),
                    a("div", { staticClass: "form-row" }, [
                      a("h2", [e._v("添付ファイル")])
                    ]),
                    a("div", { staticClass: "form-row read-only-form-data" }, [
                      a("div", { staticClass: "overlay" }),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "自国身分証明書",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("ImageUpload", {
                                        attrs: {
                                          imageData: e.guarantorIdCardFront,
                                          imageCbFunc:
                                            e.guarantorIdCardFrontFunc
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "日本身分証明書",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("ImageUpload", {
                                        attrs: {
                                          imageData: e.guarantorIdCardBack,
                                          imageCbFunc: e.guarantorIdCardBackFunc
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "パスポート",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("ImageUpload", {
                                        attrs: {
                                          imageData: e.guarantorContract,
                                          imageCbFunc: e.guarantorContractFunc
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a("a-form-item", {
                                    attrs: {
                                      label: "",
                                      "label-col": e.formItemLayout.labelCol2,
                                      "wrapper-col": e.formItemLayout.wrapperCol
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    a("div", { staticClass: "form-row" }, [
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "div",
                            { staticClass: "form-row read-only-form-data" },
                            [
                              a("div", { staticClass: "overlay" }),
                              a("h2", [e._v("連帯内容")])
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "家賃 未納分",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          formatter: function(e) {
                                            return e + "円";
                                          }
                                        },
                                        model: {
                                          value: e.nonPayMonthly,
                                          callback: function(t) {
                                            e.nonPayMonthly = t;
                                          },
                                          expression: "nonPayMonthly"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "手数料",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-input-number", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          formatter: function(e) {
                                            return e + "円";
                                          }
                                        },
                                        model: {
                                          value: e.delinquentFee,
                                          callback: function(t) {
                                            e.delinquentFee = t;
                                          },
                                          expression: "delinquentFee"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "請求金額",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input-number", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          formatter: function(e) {
                                            return e + "円";
                                          }
                                        },
                                        model: {
                                          value: e.charges,
                                          callback: function(t) {
                                            e.charges = t;
                                          },
                                          expression: "charges"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "滞納発生",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.arrears,
                                          callback: function(t) {
                                            e.arrears = t;
                                          },
                                          expression: "arrears"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          e.delinquentDataForUpdate
                            ? a(
                                "a-form-item",
                                {
                                  attrs: {
                                    label: "支払완료날짜",
                                    "label-col": e.formItemLayout.labelCol,
                                    "wrapper-col": e.formItemLayout.wrapperCol
                                  }
                                },
                                [
                                  a(
                                    "div",
                                    { staticClass: "form-row" },
                                    [
                                      a(
                                        "a-form-item",
                                        {
                                          attrs: {
                                            "label-col": { span: 1 },
                                            "wrapper-col": { span: 24 }
                                          }
                                        },
                                        [
                                          a("a-date-picker", {
                                            staticStyle: { width: "100%" },
                                            attrs: { format: e.dateFormat },
                                            on: {
                                              change: e.onChangePaymentDate
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      a(
                                        "a-form-item",
                                        {
                                          attrs: {
                                            label: "저장",
                                            "label-col":
                                              e.formItemLayout.labelCol2,
                                            "wrapper-col":
                                              e.formItemLayout.wrapperCol
                                          }
                                        },
                                        [
                                          a(
                                            "a-button",
                                            {
                                              attrs: {
                                                type: "default",
                                                loading: e.loading
                                              },
                                              on: { click: e.updatePaymentDate }
                                            },
                                            [e._v("支払완료")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : e._e(),
                          a("a-form-item", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.delinquentDataForUpdate,
                                expression: "delinquentDataForUpdate"
                              }
                            ],
                            attrs: {
                              label: "",
                              "label-col": e.formItemLayout.labelCol,
                              "wrapper-col": e.formItemLayout.wrapperCol
                            }
                          })
                        ],
                        1
                      ),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "ブラックリスト",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      !0 === e.searchedUser.blackList
                                        ? a(
                                            "a-button",
                                            {
                                              attrs: {
                                                type: "default",
                                                loading: e.loading
                                              },
                                              on: { click: e.deleteBlackList }
                                            },
                                            [e._v("削除")]
                                          )
                                        : a(
                                            "a-button",
                                            {
                                              attrs: {
                                                type: "default",
                                                loading: e.loading
                                              },
                                              on: { click: e.setBlackList }
                                            },
                                            [e._v("追加")]
                                          )
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "회심추심",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      !0 === e.searchedUser.collectionList
                                        ? a(
                                            "a-button",
                                            {
                                              attrs: {
                                                type: "default",
                                                loading: e.loading
                                              },
                                              on: {
                                                click: e.deleteCollectionList
                                              }
                                            },
                                            [e._v("解除")]
                                          )
                                        : a(
                                            "a-button",
                                            {
                                              attrs: {
                                                type: "default",
                                                loading: e.loading
                                              },
                                              on: { click: e.setCollectionList }
                                            },
                                            [e._v("指定")]
                                          )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    a("div", { staticClass: "form-row" }, [
                      a("div", { staticClass: "form-cell" }),
                      a(
                        "div",
                        { staticClass: "form-cell" },
                        [
                          a(
                            "a-form-item",
                            {
                              attrs: {
                                label: "確認担当者",
                                "label-col": e.formItemLayout.labelCol,
                                "wrapper-col": e.formItemLayout.wrapperCol
                              }
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        "label-col": { span: 1 },
                                        "wrapper-col": { span: 24 }
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.comfirmPerson,
                                          callback: function(t) {
                                            e.comfirmPerson = t;
                                          },
                                          expression: "comfirmPerson"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "a-form-item",
                                    {
                                      attrs: {
                                        label: "上司承認者",
                                        "label-col": e.formItemLayout.labelCol2,
                                        "wrapper-col":
                                          e.formItemLayout.wrapperCol
                                      }
                                    },
                                    [
                                      a("a-input", {
                                        model: {
                                          value: e.approvalPerson,
                                          callback: function(t) {
                                            e.approvalPerson = t;
                                          },
                                          expression: "approvalPerson"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "form-row--center",
                        staticStyle: { margin: "30px 0" }
                      },
                      [
                        a("div", { staticClass: "ant-row ant-form-item" }, [
                          a("div", {
                            staticClass: "ant-col-4 ant-form-item-label"
                          }),
                          a(
                            "div",
                            {
                              staticClass:
                                "ant-col-16 ant-form-item-control-wrapper"
                            },
                            [
                              a(
                                "div",
                                { staticClass: "form-row" },
                                [
                                  a(
                                    "a-button",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !e.delinquentDataForUpdate,
                                          expression: "!delinquentDataForUpdate"
                                        }
                                      ],
                                      attrs: {
                                        type: "primary",
                                        loading: e.loading
                                      },
                                      on: { click: e.handleRegister }
                                    },
                                    [e._v("登録")]
                                  ),
                                  a(
                                    "a-button",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.delinquentDataForUpdate,
                                          expression: "delinquentDataForUpdate"
                                        }
                                      ],
                                      attrs: {
                                        type: "primary",
                                        loading: e.loading
                                      },
                                      on: { click: e.handleUpdate }
                                    },
                                    [e._v("編集")]
                                  ),
                                  a(
                                    "a-button",
                                    {
                                      staticStyle: { "margin-left": "10px" },
                                      attrs: {
                                        type: "default",
                                        loading: e.loading
                                      },
                                      on: { click: e.moveDelinquentPage }
                                    },
                                    [e._v("キャンセル")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]);
        },
        o = [];
    }
  }
]);
