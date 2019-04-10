<template>
  <div class="flap-card-wrapper" v-show="flapCardVisible">
    <div class="flap-card-bg">
      <div class="flap-card" v-for="(item, index) in flapCardList" :key="index">
        <div class="flap-card-circle">
          <div class="flap-card-semi-circle flap-card-semi-circle-left" :style="semiCircleStyle(item, 'left')"></div>
          <div class="flap-card-semi-circle flap-card-semi-circle-right" :style="semiCircleStyle(item, 'right')"></div>
        </div>
      </div>
    </div>
    <div class="close-btn-wrapper" @click="close">
      <div class="icon-close"></div>
    </div>
  </div>
</template>

<script>
  import {storeHomeMixin} from "../../utils/mixin";
  import {flapCardList} from "../../utils/store";

  export default {
    name: "flap-card",
    mixins: [storeHomeMixin],
    data() {
      return {
        flapCardList,

      }
    },
    methods: {
      close() {
        this.setFlapCardVisible(false)
      },
      semiCircleStyle(item, dir) {
        return {
          backgroundColor: `rgb(${item.r},${item.g}, ${item.b})`,
          backgroundSize: item.backgroundSize,
          backgroundImage: dir === 'left' ? item.imgLeft : item.imgRight
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
.flap-card-wrapper {
  @include absCenter;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);
  @include center;
  .flap-card-bg {
    position: relative;
    width: px2rem(64);
    height: px2rem(64);
    border-radius: px2rem(5);
    background: #ffffff;
    .flap-card {
      width: px2rem(48);
      height: px2rem(48);
      background: orange;
      @include absCenter;
      .flap-card-circle {  //@go 重新写一遍
        display: flex;

        width: 100%;
        height: 100%;
        .flap-card-semi-circle {
          flex: 0 0 50%;
          width: 50%;
          height: 100%;
          background: orange;
        }
      }
    }
  }
  .close-btn-wrapper {
    position: absolute;
    left: 0;
    bottom: px2rem(30);
    z-index: 1100;
    width: 100%;
    @include center;
    .icon-close {
      width: px2rem(45);
      height: px2rem(45);
      border-radius: 50%;
      background-color: #333;
      font-size: px2rem(25);
      @include center;
      color: #ffffff;
    }
  }
}
</style>