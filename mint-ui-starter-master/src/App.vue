<template>
  <div class="page-loadmore">
    <p class="page-loadmore-desc">
        <mt-navbar class="page-part" v-model="selected">
          <mt-tab-item id="1">家庭</mt-tab-item>
          <mt-tab-item id="2">关注</mt-tab-item>
          <mt-tab-item id="3">动态</mt-tab-item>
        </mt-navbar>
    </p>
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">
            <mt-tab-container  v-model="selected">
              <mt-tab-container-item id="1">
               <div class="app-header">
                       <div class="app-header-img">
                           <a>
                           <img src="./img/img1.png"/>
                           </a>
                       </div>
                       <div class="app-header-content">
                           <div class="app-content-title">浩浩爸爸</div>
                           <div class="app-content-date">3月25日</div>
                       </div>
                       <div class="app-header-btns">
                          <a><img src="./img/close.png" /></a>
                       </div>
                   </div>
                   <div class="app-content">
                       <div class="app-content-msg">已经监督吃药了已经监督吃药了已经监督吃药了已经监督吃药了已经监督吃药了已经监督吃药了已经监督吃药了已经监督吃药了已经监督吃药了已经监督吃药了已经监督吃药了已经监督吃药了</div>
                       <div class="app-content-img">
                           <div v-for="item in list" class="app-share-img">
                               <img src="./img/img1.png" />
                           </div>
                       </div>
                       <div class="app-content-footer">
                       宝宝健康计划>
                       </div>
                   </div>
                   <div class="app-footer">
                       <div class="app-footer-comment">
                           <a><img src="./img/comment.png" /></a>
                           <span>20</span>
                       </div>
                       <div class="app-footer-comment">
                           <a><img src="./img/zan.png" /></a>
                           <span>20</span>
                       </div>
                       <div class="app-footer-comment">
                           <a><img src="./img/share.png" /></a>
                           <span>20</span>
                       </div>
                   </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" />
              </mt-tab-container-item>
              <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" />
              </mt-tab-container-item>
        </mt-tab-container>
          </li>
        </ul>

        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
  name:"app",
    data() {
      return {
      selected:"1",
        list: [],
        topStatus: '',
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0
      };
    },

    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },

      loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },

      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      }
    },
    created() {
      for (let i = 1; i <= 9; i++) {
        this.list.push(i);
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>
