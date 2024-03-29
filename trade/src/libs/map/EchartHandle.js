// const echarts = require('echarts')
// require('../dist/world.js')
// require('../dist/bmap.min.js')

class EchartHandle {
	constructor (divid) {
		this.myChart = echarts.init(document.getElementById(divid))
    // this.myChart.on('mapSelect', this.mapClick)
	}
	setOption (option) {
		this.myChart.setOption(option, true)
	}
  mapClick (param) {
    console.log('map:', param)
  }
  resize (width, height, silent) {
  	this.myChart.resize(width, height, silent)
  }
}

export default EchartHandle;