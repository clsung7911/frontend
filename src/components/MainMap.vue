<template>
  <div ref="map" class="map"></div>
</template>

<script>
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj.js';
import { defaults } from 'ol/control.js';


export default {
  name: 'MainMap',
  data(){
    return {
      olMap: undefined
    }
  },
  mounted() {
    this.olMap = new Map({
      target: this.$refs.map,
      controls : defaults({
        attribution : false,
        zoom : false,
        rotate: false,
      }),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([127.1388684, 37.4449168]),
        zoom: 12
      })
    })
    window.map = this.olMap
  }
}
</script>
<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>