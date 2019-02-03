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
class service {
  constructor() {
    this.garage = ''
    this.service = ''
  }
}
// Menu Class. Tracks what Menu to deliver based on which garage slot the users car is in.
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
      player.notify(`Get out and see the mechanic.`)
      service.garage = 'ingarage'
    }
  }
  // Car is registered into the paint service
  if (shape == colshapePaint) {
    if (player.vehicle) {
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

// RAGE Event Declarations
mp.events.add("playerEnterColshape", colShapeEntered)
mp.events.add("playerExitColshape", colShapeExited)
mp.events.add({"sKeys-E" : (player) => {
    if (colshapeloc.location == 'menuactive') {
      if (menu.paint == true) {
        player.call("cAutoShop-ShowPaintMenu")
      }
      if (menu.garage == true) {
        //player.notify(`Those custom parts aren't in yet.`)
        player.call("cAutoShop-ShowMechanicMenu")
      }
    }
    else {
      return
    }
  }
})