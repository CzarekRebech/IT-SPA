export const roomsService = {
  // pobiera liste wszystkich pokoi
    getRooms() {
      return fetch('http://localhost:3000/rooms').then(response => response.json());
    },
    // pobiera jeden pokoj o zadanym id
    getRoom(id) {
      return fetch(`http://localhost:3000/rooms/${id}`).then(response => response.json());
    }
  };
  