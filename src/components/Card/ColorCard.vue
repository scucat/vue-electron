<template>
<div class="card">
  <div class="color-card">
    <div class="card-item color-a">
        <div class="all-count">158</div>
    </div>
  </div>
    <div class="color-card">
    <div class="card-item color-b">
        <div class="all-count">38</div>
    </div>
  </div>
    <div class="color-card">
    <div class="card-item color-c">
        <div class="all-count">4176</div>
    </div>
  </div>
    <div class="color-card">
    <div class="card-item color-d">
        <div class="all-count">28</div>
    </div>
  </div>
</div>
</template>
<script>
import { getCurrentInstance } from 'vue'

export default {
  setup () {
    const { proxy } = getCurrentInstance()

    function finishFunc (index) {


      proxy.$router.push({
        path: '/finished'
      })
    }
    function deleteFunc (index) {
    }
    return {
      finishFunc,
      deleteFunc
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" >
.card{
  width: 100%;
  -webkit-app-region: no-drag;
}

.color-card{
    width: 250px;
    float: left;
    padding: 0 12px;
    margin: 10px 0;
}
.card-item{
    height: 124px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
}

.all-count{
    color: #fff;
    font-size: 1.9rem;
    font-weight: 700;
    padding: 30px;
}

.color-a{
    background: linear-gradient(90deg,#5171fd,#c97afd);
    box-shadow: 0 5px 10px #c97afd;
}
.color-b{
    background: linear-gradient(90deg,#3dadf6,#737bfc);
    box-shadow: 0 5px 10px #737bfc;
}
.color-c{
    background: linear-gradient(90deg,#ea677c,#ef9b5f);
    box-shadow: 0 5px 10px #ef9b5f;
}
.color-d{
    background: linear-gradient(90deg,#42d79b,#a6e25f);
    box-shadow: 0 5px 10px #a6e25f;
}
.card-item:hover{
    transform: scale(1.05);
    box-shadow: 0 5px 15px #a8a8a8;
}
</style>
