<template>
  <section>
  <div>  <!-- v-if="time"-->
      <!-- this creates a google map on the page with the given lat/lng from -->
      <!-- the component as the initial center of the map: -->
       
      <iframe src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=52.36246&lng=4.97656&overname=2&zoom=13&naam=1086 XP&size=3&voor=1" scrolling=no width=550 height=512 frameborder=no></iframe>
      ov nog geen oplossing <br>
      <p>checkt nog niet of de tijd veranderd is</p>
  </div>
  <div>  <!--v-if="!time"-->
    should be looping through websites
  </div>
  <div> <!--v-if="time === 'past 6'"-->
    if it is past 6 i am shown (though the screen is most likely turned off)
    <p>checkt nog niet of de tijd veranderd is</p>
  </div>
  <p>
    temp:
    if the time is right i will display google maps with a traffic layer 9292ov.nl and buien radar
   the rest of the time i will loop through a list of websites retrieved from the DB.
  </p>
    <!-- used for opening windows -->
    
    <span id="urls" hidden="true" :key="w.id" v-for="w in websites">{{w.url}}</span>
</section>
</template>

<script>
import axios from '~/plugins/axios'

// eslint-disable-next-line
let date = new Date()
let hour = date.getHours()
// var hour = 13
let arrayOfUrls = []
let time
function greeting () {
  let monthDayAndTime = {day: date.getDate(), month: date.getMonth() + 1, hour: hour, min: date.getMinutes()}
  if (greeting !== monthDayAndTime) {
    console.log(monthDayAndTime)
  }
}
function fake () {
  event()
  fake()
}
function event () {
  fake()
  whatToDo()
}
function whatToDo () {
  console.log(hour)
  if (hour > 17) { // 16h = 4pm
    console.log('no 1 should be working')
    time = 'past 6'
  } else if (hour > 15) {
    console.log('display travel info')
    time = false
  } else if (hour <= 15) {
    console.log('loop')
    setTimeout(() => {
      openWindow()
    }, 400)
    time = true
  }
  return time
}
function openWindow () {
  var x = 0
  // << he doesnt like this document
  var url = document.querySelectorAll('span#urls')
  for (let i = 0; i < url.length; i++) {
    arrayOfUrls.push(url[i].innerHTML)
  }
  // test array of urls
  // arrayOfUrls = ['http://www.muhahahaha.nl', 'url2', 'url3']
  function go () {
    var myWindow = window.open(arrayOfUrls[x])
    if (x++ < arrayOfUrls.length - 1) {
      setTimeout(() => {
        myWindow.close()
        go()
        // change this number to change the time it switches between websites
      }, 6000)
    } else if (x === arrayOfUrls.length) {
      console.log('should be called last')
      myWindow.close()
      greeting()
      // whatToDo()
    }
  }
  go()
}
function checkEvents () {
  var event = false
  if (event) {
    console.log('a event is happening')
    // this.redirect('./channels/entrance')
  } else {
    console.log('nothing going on')
  }
}
export default {
  async asyncData () {
    // let { data } = await axios.get('/api/')
    let {events} = await axios.get('/api/events')
    return { events: events }
  },
  data () {
    return {
      websites: [],
      events: [],
      time: []
    }
  },
  methods: {
    getWebsites: function () {
      axios.get(`/api/websites`)
        .then(response => {
        // JSON responses are automatically parsed.
          this.websites = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getEvents: function () {
      axios.get(`/api/events`)
        .then(response => {
        // JSON responses are automatically parsed.
          this.events = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  created: function () {
    this.getWebsites()
    this.getEvents()
    greeting()
    checkEvents()
    whatToDo()
  }
}
</script>

<style>
.vue-google-map {
  width: 500px;
  height: 400px;
}
</style>
