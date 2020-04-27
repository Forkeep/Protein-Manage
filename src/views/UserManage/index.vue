<template>
  <div>
    <BaseLayout :default-selected="['5']">
      <router-view />
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from "../../layouts/BaseLayout";
export default {
  components: {
    BaseLayout: BaseLayout
  }
};
</script>
<style lang="scss" scoped></style>
