mp.blips.new(524, new mp.Vector3(-544.73876953125, -204.69960021972656, 38.215152740478516),
{
  name: "CEO Office",
  color: 49,		
  shortRange: true,
  scale: 0.75,
})
let CEOColShape = mp.colshapes.newSphere(-544.73876953125, -204.69960021972656, 38.215152740478516, 1, 0);

const CEOmarker = mp.markers.new(2, new mp.Vector3(-544.73876953125, -204.69960021972656, 38.215152740478516),1,
{
    color: [255, 165, 0, 50],
    visible: true,
    dimension: 0
});

mp.events.addCommand("CEOEnter", (player, fullText, x, y, z) => {
    if(PresiColShape.isPointWithin(player.position)) {
      player.position = new mp.Vector3(-141.78150939941406, -617.6240844726562, 168.82052612304688);
      player.call("enterCEOOffice", [x,y,z]);
      player.notify("Sie haben das Haus des Bürgermeisters betreten!");
    }
});

function colShapeEntered(player, shape) {
  if(shape == CEOColShape) {
    player.call("enterCEOOffice", [x,y,z]);
    player.position = new mp.Vector3(-786.8195, 315.5634, 187.9137);
    player.notify("Welcome back.");
  }
}

mp.events.add("playerEnterColshape", colShapeEntered);