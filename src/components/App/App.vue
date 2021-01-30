<template>
  <div id="app" :class="tw.app" @click.prevent="onTap" @keyup.space.prevent="onTap" tabindex="0">
    <h1 :class="tw.h1">Tap Tempo</h1>
    <h2 :class="tw.h2">(just click or press spacebar)</h2>
    <div :class="tw.bpm">{{ avgTempo }} BPM</div>
    <!-- <div>
      <div v-for="(tap,i) in taps" :key="i" class="w-24 h-12 bg-blue-200" />
    </div> -->
  </div>
</template>

<script src="./App.js" />
