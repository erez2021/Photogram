<template >
<div class="gmap">
  <GmapMap
    ref="gMap"
    :center="pos"
    :zoom="10"
    map-type-id="terrain"
      @click="closeMap"
    style="width: 250px; height: 350px"
  >
    <GmapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="true"
    
    />
  </GmapMap>
  </div>
</template>

<script>
export default {
  props: {
    pos: {
      type: Object,
    },
  },

  data() {
    return {
      markers: [
        { position: { lat: 32.05, lng: 34.8 } },
        { position: { lat: 31.7, lng: 35.2 } },
        { position: { lat: 34.052, lng: -118.243 } },
        { position: { lat: 40.73, lng: -73.935 } },
        { position:  {lat: 32.095, lng: 34.952}},
        { position: { lat: 7.8789,
      lng: 98.4,}}
     
      ],
    };
  },
  methods: {
    closeMap() {
      console.log('map');
      this.$emit('closeMap')
    }
  },
};
</script>

