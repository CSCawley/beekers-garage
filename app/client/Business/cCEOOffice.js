mp.events.add("enterCEOOffice", (x,y,z,IPLName) => {
  var interior = mp.game.interior.getInteriorAtCoords(-786.8195, 315.5634, 187.9137);
  mp.game.streaming.requestIpl("apa_v_mp_h_02_c");
  mp.game.interior.refreshInterior(interior);
});