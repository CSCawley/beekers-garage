"use strict"
const player = mp.players.local

// PAINT
// x: 104.129, y: 6622.053, z: 31.486, rot: 43.44


//Mech
//x: 111.08, y: 6626.702, z: 31.444, rot: 41.8

// car repair
//let bodyHealth = vehicle.bodyHealth

//raise car
//entity.setCollision(false, true)

// Map Location
mp.blips.new(524, new mp.Vector3(111.08, 6626.702, 31.444),
{
  name: "Carrucan's Customs",
  color: 49,		
  shortRange: true,
  scale: 0.75,
})
// Service Class. Tracks where your car is.
let service = {
  garage: '',
  service: '',
  primeColor: -1,
  secondaryColor: -1, 
  mod: -1,
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
  wheels: -1
}
class menu {
  constructor() {
    this.garage = false
    this.paint = false
  }
}
// Location Class
class colshapeloc {
  constructor() {
    this.location = ''
  }
}
// ColShapes
const colshapeMechanic = mp.colshapes.newSphere(111.08, 6626.702, 31.444, 2.5);
const colshapePaint = mp.colshapes.newSphere(104.129, 6622.053, 31.486, 2.5);
const colshapeDesk = mp.colshapes.newSphere(101.069, 6618.729, 32.435, 1);
// ColShape Functions Entering
function colShapeEntered(player, shape){
  // Car is registered into the garage service
  if (shape == colshapeMechanic) {
    if (player.vehicle) {
      service.engine = player.vehicle.getMod(11)
      service.horn = player.vehicle.getMod(14)
      service.breaks = player.vehicle.getMod(12)
      service.transmission = player.vehicle.getMod(13)
      service.suspension = player.vehicle.getMod(15)
      service.turbo = player.vehicle.getMod(18)
      service.xenon = player.vehicle.getMod(22)
      service.tint = player.vehicle.getMod(46)
      service.plate = player.vehicle.getMod(62)
      service.boost = player.vehicle.getMod(40)
      const str = `boost: ${service.boost} Turbo: ${service.turbo}`
      player.notify(str)
      player.notify(`Get out and see the mechanic.`)
      service.garage = 'ingarage'
    }
  }
  // Car is registered into the paint service
  if (shape == colshapePaint) {
    if (player.vehicle) {
      // Collect details of the vehicle in the garage
      service.primeColor = player.vehicle.getColorRGB(0)
      service.secondaryColor = player.vehicle.getColorRGB(1)
      player.notify(`Get out and see the mechanic.`)
      service.garage = 'inpaint'
    }
  }
  // Front desk presents menu based on car location
  if (shape == colshapeDesk) {
    colshapeloc.location = 'menuactive'
    if (service.garage == 'ingarage') {
      menu.garage = true
      player.notify(`Press ~b~E ~s~to open Mechanic Menu`)
    } else if (service.garage == 'inpaint') {
      menu.paint = true
      player.notify(`Press ~b~E ~s~to open Paint Menu`)
    } else {
      player.notify(`Yeah? What do you want?`)
    }
  }
}
// ColShape Functions Leaving
function colShapeExited(player, shape) {
  if (shape == colshapeMechanic) {
    if (player.vehicle) {
      player.notify(`Have a nice day!`)
      service.garage = ''
      menu.garage = false
    }
  }
  if (shape == colshapePaint) {
    if (player.vehicle) {
      player.notify(`Have a nice day!`)
      service.garage = ''
      menu.paint = false
    }
  }
  if (shape == colshapeDesk) {
    colshapeloc.location = ''
  }
}

// Get Current Service Class

function getCurrentService() {
  let garageservice = JSON.stringify(service)
  return garageservice
}

// RAGE Event Declarations
mp.events.add("playerEnterColshape", colShapeEntered)
mp.events.add("playerExitColshape", colShapeExited)
mp.events.add("getMods", getCurrentService)
mp.events.add({ 
  "sAutoShop-Mod" : ( a, b ) => {
    mp.vehicles.forEachInRange(new mp.Vector3(111.08, 6626.702, 31.444), 3,
      (vehicle) => {
        vehicle.setMod(a,b)
      }
  );
  }
})
mp.events.add({"sKeys-E" : (player) => {
    if (colshapeloc.location == 'menuactive') {
      if (menu.paint == true) {
      //player.call("cAutoShop-ShowPaintMenu", service)
      }
      else if (menu.garage == true) {
      //player.notify(`Those custom parts aren't in yet.`)
        const execute = JSON.stringify(service)
        player.call("cAutoShop-ShowMechanicMenu", execute)
      }
      else {
        player.call("cAutoShop-ShowDevMenu")
      }
    }
    else {
      return
    }
  }
})

mp.events.addCommand('mod', (player, fullText, a , b) => {
  player.vehicle.setMod(parseInt(a), parseInt(b));
});
mp.events.addCommand('getmod', (player, fullText, a) => {
  let modgot = player.vehicle.getMod(parseInt(a));
  player.notify(`${modgot}`)
});
mp.events.addCommand('modtest', () => {
  mp.vehicles.forEachInRange(new mp.Vector3(111.08, 6626.702, 31.444), 3,
    (vehicle) => {
      vehicle.setMod(0,1)
    }
  );
})
mp.events.addCommand('modcar', ( fulltext, a , b ) => {
  mp.vehicles.forEachInRange(new mp.Vector3(111.08, 6626.702, 31.444), 3,
    (vehicle) => {
      vehicle.setMod(parseInt(a), parseInt(b))
    }
  );
})