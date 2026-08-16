export const ABILITIES=['climb','dash','light'];
export function unlock(owned,ability){return owned.includes(ability)?owned:[...owned,ability]}
export function canEnter(room,owned){return !room.requires||owned.includes(room.requires)}
export function moveRoom(index,delta,rooms,owned){const next=Math.max(0,Math.min(rooms.length-1,index+delta));return canEnter(rooms[next],owned)?next:index}
