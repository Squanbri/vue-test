<template>
  <div :class="$style.splashScreen">
    <div :class="$style.spinnerWrapper">
      <div :class="$style.spinner" />
    </div>
  </div>
</template>

<style module lang="scss">
  .splashScreen {
    background: #f2f0ee;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 50;
  }

  .spinnerWrapper {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }
  .spinner {
    width: 80px;
    height: 80px;
    margin: 100px auto;
    background-color: #e45447;

    border-radius: 100%;
    -webkit-animation: sk-scaleout 1s infinite ease-in-out;
    animation: sk-scaleout 1s infinite ease-in-out;
  }

  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
</style>
