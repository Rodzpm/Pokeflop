//battle zones list
const BattleZonesMap = [];
for (let i = 0; i < battleZonesData.length; i += 70) {
    BattleZonesMap.push(battleZonesData.slice(i, 70 + i));
}

const battleZones = [];

BattleZonesMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) 
            battleZones.push(new Boundary({position: {
            x: j * Boundary.width + OFFSET.x,
            y: i * Boundary.height + OFFSET.y
            }}))
    });
});
