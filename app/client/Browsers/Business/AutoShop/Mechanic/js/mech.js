const app = new Vue({
	el: '#app',
	data: {
		model: 3714356651,
		enginehealth: '',
		bodyhealth: '',
		engine: -1,
		horn: -1,
		breaks: -1, 
		transmission: -1,
		suspension: -1,
		turbo: -1,
		xenon: -1,
		tint: -1,
		plate: -1,
		boost: -1,
		spoiler: -1,
		fbumper: -1,
		rbumper: -1,
		skirt: -1,
		armor: -1,
		hydraulics: -1,
		wheels: -1,
		// 5
		frame: -1,
		// 4
		exhaust: -1,
		//6
		grille: -1,
		// 7
		hood: -1,
		//10
		roof: -1,
		repairammount: 10,
		// 
		m3f80: [
			{
				local: "spoiler",
				index: 0,
				mod: 2,
				item: "GT Universal Racing Spoiler"
			},
			{
				local: "spoiler",
				index: 0,
				mod: 1,
				item: "VIE Rear Lip Spoiler"
			},
			{
				local: "fbumper",
				index: 1,
				mod: 0,
				item: "Sherman Front Bumper Cover with wind splitter"
			},
			{
				local: "fbumper",
				index: 1,
				mod: 1,
				item: "Sherwood Front Bumper with Track Racing Tow Hook and wind splitter"
			},
			{
				local: "fbumper",
				index: 1,
				mod: 2,
				item: "Sherwood Front Bumper Cover"
			},
			{
				local: "rbumper",
				index: 2,
				mod: 0,
				item: "carbon fiber muffler guard"
			},
			{
				local: "rbumper",
				index: 2,
				mod: 1,
				item: "VIE Rear Diffuser"
			},
			{
				local: "rbumper",
				index: 2,
				mod: 2,
				item: "VIE Rear Diffuser with carbon fiber bumper guard"
			},
			{
				local: "skirt",
				index: 3,
				mod: 0,
				item: "Sherwood Side Skirt"
			},
			{
				local: "exhaust",
				index: 4,
				mod: 0,
				item: "Black Metal Exhaust Pipes"
			},
			{
				local: "exhaust",
				index: 4,
				mod: 1,
				item: "Double Black Metal Exhaust Pipes"
			},
			{
				local: "frame",
				index: 5,
				mod: 0,
				item: "Roll Cage"
			},
			{
				local: "grille",
				index: 6,
				mod: 0,
				item: "Chrome Grille"
			},
			{
				local: "grille",
				index: 6,
				mod: 1,
				item: "Black and BMW Racing Stripes Grille"
			},
			{
				local: "hood",
				index: 7,
				mod: 0,
				item: "Carbon Fiber Hood"
			},
			{
				local: "hood",
				index: 7,
				mod: 1,
				item: "Sport Vent Hood"
			},
			{
				local: "hood",
				index: 7,
				mod: 2,
				item: "Carbon Fiber Sport Vent Hood"
			},
			{
				local: "roof",
				index: 10,
				mod: -1,
				item: "Carbon Fiber Roof"
			},
			{
				local: "roof",
				index: 10,
				mod: 0,
				item: "Metal Roof"
			}
  	],
		//
		impalass: [
			{
				local: "spoiler",
				index: 0,
				mod: 0,
				item: "Back Blinds"
			},
			{
				local: "spoiler",
				index: 0,
				mod: 2,
				item: "Back Blinds"
			},
			{
				local: "spoiler",
				index: 0,
				mod: 1,
				item: "Back Blinds"
      },
      {
    index: 0,
    mod: 0,
    item: "Back Blinds"
  },
  {
    index: 0,
    mod: 2,
    item: "Back Blinds"
  },
  {
    index: 0,
    mod: 1,
    item: "Back Blinds"
  },
  {
    index: 1,
    mod: 0,
    item: "Silver Grille Claw"
  },
  {
    index: 1,
    mod: 1,
    item: "Gold Grille Claw"
  },
  {
    index: 1,
    mod: 2,
    item: "Body Paint Grille Claw"
  },
  {
    index: 1,
    mod: 6,
    item: "Body Paint Bumper"
  },
  {
    index: 1,
    mod: 9,
    item: "Gilded Chrome Bumper"
  },
  {
    index: 1,
    mod: 10,
    item: "Gold Bumper"
  },
  {
    index: 1,
    mod: 11,
    item: "Gold Bumper with Gold Grille Claw"
  },
  {
    index: 1,
    mod: 12,
    item: "Body Paint Bumper with Body Paint Grille Claw"
  },
  {
    index: 1,
    mod: 14,
    item: "Gilded Gold Bumper with Gilded Gold Grille Claw"
  },
  {
    index: 1,
    mod: 15,
    item: "Gilded Chrome Bumper with Gilded Chrome Grille Claw"
  },
  {
    index: 1,
    mod: 16,
    item: "Body Paint Bumper with Chrome Grille Claw"
  },
  {
    index: 2,
    mod: 0,
    item: "Body Paint Rear Bumper"
  },
  {
    index: 2,
    mod: 2,
    item: "Gold Rear Bumper"
  },
  {
    index: 2,
    mod: 3,
    item: "Gilded Gold Rear Bumper"
  },
  {
      index: 2,
      mod: 4,
      item: "Gilded Chome Rear Bumper"
    },
    {
      index: 2,
      mod: 5,
      item: "Gilded Gold Rear Bumper with Spare"
    },
    {
      index: 2,
      mod: 6,
      item: "Gilded Chrome Rear Bumper with Spare"
    },
    {
      index: 2,
      mod: 7,
      item: "Remove License Plate"
    },
    {
      index: 3,
      mod: 0,
      item: "Sherwood Silver Side Skirt"
    },
    {
      index: 5,
      mod: 0,
      item: "Silver Curb Feelers"
    },
    {
      index: 6,
      mod: 3,
      item: "Headlight Trim"
    },
    {
      index: 7,
      mod: 2,
      item: "Shark Fin Hood"
    },
    {
      index: 7,
      mod: 3,
      item: "Gilded Shark Fin Hood"
    }

    
		]
	},
	methods: {
		changeCamRotation: function() {
			mp.trigger("cChangeHeading", this.camRotation); 
		},
		engineA: function() {
			mp.trigger("cAutoShop-CallServerEvent", "sAutoShop-Mod", 1, 1);
		},
		mod: function() {
			mp.trigger("cAutoShop-CallServerEvent", "sAutoShop-Mod", 1, 1);
		},
		repair: function() {
			mp.trigger("cAutoShop-CallServerEvent", "sAutoShop-Repair");
		},
		exit: function() {
			mp.trigger("cCloseCefAndDestroyCam");
		}
	}
});