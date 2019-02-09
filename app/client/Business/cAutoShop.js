"use strict";

const misc = require('../cMisc');
const player = mp.players.local;
const vehicle = player.vehicle

mp.events.add(
{
	"cAutoShop-ShowPaintMenu" : (service) => {
		misc.prepareToCef();
		misc.openCef("package://RP/Browsers/Business/AutoShop/Paint/paint.html");
		misc.injectCef(service);
		misc.createPointedCam(103.13, 6626.423, 32.828, 0, 0, 0, 80, 102.738, 6623.627, 31.829)
		// setTimeout(function(){ 
		// 	misc.destroyCam();
		// },3000)
	},

	"cAutoShop-ShowMechanicMenu" : () => {
		misc.prepareToCef();
		misc.openCef("package://RP/Browsers/Business/AutoShop/Mechanic/mechanic.html");
		//misc.injectCef(inject);
		misc.createPointedCam(110.48, 6631.676, 31.787, 0, 0, 0, 80, 109.888, 6626.924, 31.787)
		//setTimeout(function(){ 
		//	misc.destroyCam();
		//},3000)
	},

	"cAutoShop-ShowDevMenu" : () => {
		misc.prepareToCef()
		misc.openCef("package://RP/Browsers/Business/AutoShop/Paint/paint.html")
	},

	"cAutoShop-CallServerEvent" : (eventName, a, b) => mp.events.callRemote(eventName, a, b),
	


	//"cAutoShop-SetVehicleColor" : (col1, col2) => vehicle.setColours(col1, col2)
});

// RAGE Object Declarations
//paleto right garage
//mp.game.object.doorControl(-822900180, 114, 6623, 32, true, 0, 0, 0);
//paleto left garage
//mp.game.object.doorControl(-822900180, 108, 6617, 32, true, 0, 0, 0);
//paleto paint garage
//mp.game.object.doorControl(106.161, 6619.949, 32, true, 0, 0, 0);