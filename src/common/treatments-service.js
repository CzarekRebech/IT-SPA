export const treatmentsService = {
    getTreatments() {
        // pobiera liste wszystkich zabiegów
        return fetch('http://localhost:3000/treatments').then(response => response.json());
    },
    getTreatment(id) {
        // pobiera jeden zabiek o zadanym id
        return fetch(`http://localhost:3000/treatments/${id}`).then(response => response.json());
    }
};
