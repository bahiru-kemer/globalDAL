/*
Bahiru Mulugeta
Date: January 3, 2023
*/

// Global data access layer for sort,filter,projection and pagination
class GlobalDAL {
  // Constructor
  /*This constructor accepts model name of the schema and 
    creates and initializes an object instance for GlobalDAL class*/
  constructor(model) {
    this.model = model;
  }

  // Accepts field name and order type
  sort(field, order) {
    // Is the order type ascending  or descending
    const query = order
      ? this.model.find().sort(field)
      : this.model.find().sort("-" + field);
    // Return the query
    return query;
  }
  filter() {}
  projection() {}
  pagination() {}
}
module.exports = GlobalDAL;
