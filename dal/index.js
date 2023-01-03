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

  sort() {}
  filter() {}
  projection() {}
  pagination() {}
}
module.exports = GlobalDAL;
