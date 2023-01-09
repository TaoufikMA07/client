 export function getPharmacies() {
    return fetch('http://localhost:8099/pharmacies/all')
      .then(data => data.json())
}