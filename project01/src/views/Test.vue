<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      lat: 0, // 위도
      lon: 0, // 경도
      locPosition: 0,
      message: '',
      map: null
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getLocation()

    this.displayMarker(this.locPosition, this.message)
  },
  unmounted() {},
  methods: {
    initMap() {
      var container = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //  지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(this.lat, this.lon), //  지도의 중심좌표.
        level: 4 // 지도의 레벨(확대, 축소 정도)
      }

      this.map = new window.kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴

      this.displayMarker(this.lat, this.lon) // 가게리스트 만큼 for
    },
    getLocation() {
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(position => {
          this.lat = position.coords.latitude // 위도
          this.lon = position.coords.longitude // 경도
          this.initMap()
        })
      } else {
      }
    },
    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    displayMarker(lat, lon) {
      var markerPosition = new window.kakao.maps.LatLng(lat, lon)
      var marker = new window.kakao.maps.Marker({
        position: markerPosition
      })

      marker.setMap(this.map)
    }
  }
}
</script>
<style>
.map {
  width: 100%;
  height: 400px;
}
</style>
