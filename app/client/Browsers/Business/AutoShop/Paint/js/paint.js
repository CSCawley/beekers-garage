
	function prime(picker) {
		document.getElementById('hex-str').innerHTML = picker.toHEXString();
		document.getElementById('rgb-str').innerHTML = picker.toRGBString();
		document.getElementById('rgb').innerHTML =
			Math.round(picker.rgb[0]) + ', ' +
			Math.round(picker.rgb[1]) + ', ' +
			Math.round(picker.rgb[2]);
		service.prime = 
			Math.round(picker.rgb[0]) + ', ' +
			Math.round(picker.rgb[1]) + ', ' +
			Math.round(picker.rgb[2]);
	}

	function second(picker) {
		document.getElementById('hex-str2').innerHTML = picker.toHEXString();
		document.getElementById('rgb-str2').innerHTML = picker.toRGBString();
		document.getElementById('rgb2').innerHTML =
			Math.round(picker.rgb[0]) + ', ' +
			Math.round(picker.rgb[1]) + ', ' +
			Math.round(picker.rgb[2]);
			service.second = 
			Math.round(picker.rgb[0]) + ', ' +
			Math.round(picker.rgb[1]) + ', ' +
			Math.round(picker.rgb[2]);
	}

	const app = new Vue({
		el: '#app',
		data: {
      model: '',
      enginehealth: '',
      bodyhealth: '',
			prime: 0,
      second: 0,
      paint: '??',
      pearl: '??',
      repairammount: 50
		},
		methods: {
			changeCamRotation: function() {
				mp.trigger("cChangeHeading", this.camRotation); 
			},
			setPaint: function() {
				const paint = {
					primary: this.prime,
					secondary: this.second,
				}
				mp.trigger("cMisc-CallServerEvent", "sAutoShop-SetPaint", JSON.stringify(paint));
				this.exit()
			},
			exit: function() {
				mp.trigger("cCloseCefAndDestroyCam");
			}

		}
	})