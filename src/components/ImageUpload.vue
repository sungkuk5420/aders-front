<template>
  <a-upload
    name="avatar"
    listType="picture-card"
    class="avatar-uploader"
    :showUploadList="false"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :beforeUpload="beforeUpload"
    @change="handleChange"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar">
    <div v-else>
      <a-icon :type="loading ? 'loading' : 'plus'"/>
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
</template>
<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  props: ["imageCbFunc", "imageData"],
  data() {
    return {
      loading: false,
      imageUrl: ""
    };
  },
  watch: {
    imageData: {
      handler(imageData) {
        if (imageData !== undefined) {
          this.imageUrl = imageData;
        }
      },
      immediate: true
    }
  },
  mounted() {},
  methods: {
    clearImageData() {
      this.imageUrl = "";
    },
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
          if (this.imageCbFunc) {
            this.imageCbFunc(this.imageUrl);
          }
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    }
  }
};
</script>
<style lang="scss">
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
  img {
    max-width: 150px;
    max-height: 150px;
  }
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>