<template>
    <button ref="btn" class="ripple">
        <slot></slot>
    </button>
</template>
<script>
import { getCurrentInstance, onMounted, ref } from 'vue'

export default {
    props: {
        type: String,
        round:{
            type: Boolean,
            default: false
        },
        circle:{
            type: Boolean,
            default: false
        },
        plain:{
            type: Boolean,
            default: false
        },
        dashed:{
            type: Boolean,
            default: false
        },
        text:{
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const { proxy } = getCurrentInstance()
        const btn = ref(null);

        function finishFunc(index) {
        }
        function deleteFunc(index) {
        }
        onMounted(() => {
            if (props.type) {
                btn.value.classList.add(props.type)
            }
            if (props.round) {
                btn.value.classList.add("round")
            } else if(props.circle) {
                btn.value.classList.add("circle")
            } else if(props.plain) {
                btn.value.classList.add("plain")
            } else if(props.text) {
                btn.value.classList.add("text")
            } else {
            }
            if (props.dashed) {
                btn.value.classList.add("dashed")
            }
            console.log(props)
        })
        return {
            btn
        }
    },
}
</script>
<style lang="scss" scoped >

$primary-color-old:rgb(0, 122, 204);
$primary-color:rgb(24,144,255);
$success-color:rgb(103, 194, 58);
$info-color:rgb(143, 146, 148);
$warning-color:rgb(255, 169, 56);
$danger-color:rgb(235, 71, 49);

$primary-color-10:rgba(0, 122, 204, 0.1);
$success-color-10:rgba(103, 194, 58, 0.1);
$info-color-10:rgba(143, 146, 148, 0.1);
$warning-color-10:rgba(255, 169, 56, 0.1);
$danger-color-10:rgba(235, 71, 49, 0.1);
button {
    padding: 0px 16px;
    height: 35px;
    border: none;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    white-space: nowrap;
    transition: all .3s;
}
button:hover {
    box-shadow: 0 4px 10px gray;
}

.primary {
    background: $primary-color;
    color: white;
}
.success {
    background: $success-color;
    color: white;
}
.info {
    background: $info-color;
    color: white;
}
.warning {
    background: $warning-color;
    color: white;
}
.danger {
    background: $danger-color;
    color: white;
}

.round{
    border-radius: 30px;
}
.circle{
    padding: 0px !important;
    height: 35px;
    width: 35px;
    border-radius: 50%;
}
.plain{
    background: transparent;
    border: 1px solid gray;
    &.primary{
        color: $primary-color;
        border: 1px solid $primary-color;
        background: $primary-color-10;
    }
    &.success{
        color: $success-color;
        border: 1px solid $success-color;
        background: $success-color-10;
    }
    &.info{
        color: $info-color;
        border: 1px solid $info-color;
        background: $info-color-10;
    }
    &.warning{
        color: $warning-color;
        border: 1px solid $warning-color;
        background: $warning-color-10;
    }
    &.danger{
        color: $danger-color;
        border: 1px solid $danger-color;
        background: $danger-color-10;
    }
}
.dashed{
    border-style: dashed !important;
}

.text{
    background: transparent;
    &.primary{
        color: $primary-color;
    }
    &.success{
        color: $success-color;
    }
    &.info{
        color: $info-color;
    }
    &.warning{
        color: $warning-color;
    }
    &.danger{
        color: $danger-color;
    }
}
.text:hover{
    box-shadow: none;
}

// 水波特效：https://www.jianshu.com/p/958fe5bbaf8b
.ripple {
    overflow: hidden;
    position: relative;
    transition: background-color 0.3s linear, border 0.3s linear;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(
        circle,
        #000 10%,
        rgba(0, 0, 0, 0) 10.01%
      );
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10);
      opacity: 0;
      transition: transform 0.5s, opacity 1s;
    }
    &:active:after {
      transform: scale(0);
      opacity: 0.2;
      transition: 0s;
    }
  }
</style>
