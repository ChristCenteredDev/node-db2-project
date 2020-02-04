
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: "XM0189234", make: "Ford", model: "Taurus", mileage: 30.5, transmission: null, title: "clean" },
        {VIN: "XM0167890", make: "Ford", model: "Bronco", mileage: 17.5, transmission: null, title: "clean" },
        {VIN: "AL0183634", make: "Chevy", model: "Malibu", mileage: 32.5, transmission: null, title: "clean" },
        {VIN: "TY0963234", make: "Toyota", model: "Prius", mileage: 50.5, transmission: null, title: "salvage" },
        {VIN: "DG0557634", make: "Dodge", model: "Ram-1500", mileage: 22.5, transmission: null, title: null }
      ]);
    });
};
