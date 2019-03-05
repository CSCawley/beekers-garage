const misc = require('../cMisc');

const player = mp.players.local;
const vehicle = player.vehicle

// mp.game.streaming.requestIpl("apa_v_mp_h_02_c");
// mp.game.streaming.requestIpl("imp_dt1_02_modgarage")
// mp.game.streaming.requestIpl("imp_dt1_02_cargarage_a")
// mp.game.streaming.requestIpl("imp_dt1_02_cargarage_b")
// mp.game.streaming.requestIpl("imp_dt1_02_cargarage_c")
 
// mp.game.streaming.requestIpl("imp_dt1_11_modgarage")
// mp.game.streaming.requestIpl("imp_dt1_11_cargarage_a")
// mp.game.streaming.requestIpl("imp_dt1_11_cargarage_b")
// mp.game.streaming.requestIpl("imp_dt1_11_cargarage_c")
 
// mp.game.streaming.requestIpl("imp_sm_13_modgarage")
// mp.game.streaming.requestIpl("imp_sm_13_cargarage_a")
// mp.game.streaming.requestIpl("imp_sm_13_cargarage_b")
// mp.game.streaming.requestIpl("imp_sm_13_cargarage_c")
 
// mp.game.streaming.requestIpl("imp_sm_15_modgarage")
// mp.game.streaming.requestIpl("imp_sm_15_cargarage_a")
// mp.game.streaming.requestIpl("imp_sm_15_cargarage_b")
// mp.game.streaming.requestIpl("imp_sm_15_cargarage_c")
 
// mp.game.streaming.requestIpl("imp_impexp_interior_placement")
// mp.game.streaming.requestIpl("imp_impexp_interior_placement_interior_0_impexp_int_01_milo_")
// mp.game.streaming.requestIpl("imp_impexp_interior_placement_interior_3_impexp_int_02_milo_")
// mp.game.streaming.requestIpl("imp_impexp_interior_placement_interior_1_impexp_intwaremed_milo_")
// mp.game.streaming.requestIpl("imp_impexp_interior_placement_interior_2_imptexp_mod_int_01_milo_")

mp.events.add(
{
	"cAutoShop-ShowPaintMenu" : (execute) => {
		misc.prepareToCef();
		misc.openCef("package://RP/Browsers/Business/AutoShop/Paint/paint.html");
		misc.injectCef(execute);
		misc.createPointedCam(103.216, 6626.427, 31.828, 0, 0, 0, 80, 103.871, 6622.121, 31.829)
		// setTimeout(function(){ 
		// 	misc.destroyCam();
		// },3000)
	},

	"cAutoShop-ShowMechanicMenu" : (execute) => {
		misc.prepareToGarage();
		misc.openCef("package://RP/Browsers/Business/AutoShop/Mechanic/mechanic.html");
		misc.injectCef(execute);
		misc.createPointedCam(110.48, 6631.676, 31.787, 0, 0, 0, 80, 109.888, 6626.924, 31.787)
		
		// setTimeout(function(){ 
		//	misc.destroyCam();
		// },3000)
	},

	"cAutoShop-ShowDevMenu" : () => {
		misc.prepareToCef()
		misc.openCef("package://RP/Browsers/Business/AutoShop/Dev/index.html")
	},

	"cAutoShop-TakePicture" : () => {
		mp.game.ui.displayRadar(false);
		mp.gui.chat.show(false);
		setTimeout(function(){ 
			mp.game.ui.displayRadar(true);
			mp.gui.chat.show(true);
		},12000)
	},
	"cAutoShop-SetDirt" : () => {
		vehicle.setDirtLevel(0)
	},
	"cAutoShop-CallServerEvent" : (eventName, a, b) => {
		mp.events.callRemote(eventName, a, b)
	},
	// "cAutoShop-SetVehicleColor" : (col1, col2) => vehicle.setColours(col1, col2)
});

// RAGE Object Declarations
// paleto right garage
// mp.game.object.doorControl(-822900180, 114, 6623, 32, true, 0, 0, 0);
// paleto left garage
// mp.game.object.doorControl(-822900180, 108, 6617, 32, true, 0, 0, 0);
// paleto paint garage
// mp.game.object.doorControl(106.161, 6619.949, 32, true, 0, 0, 0);