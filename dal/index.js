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
  // Accepts field name and text
  filterByText(field,text) {
    // Filter by text
    const query = this.model.find({[field]:text});
    // Return the query
    return query;
  }
  // Accepts field name and options
  filterByNumber(field,options){
  // Filter by number
  const query = this.model.find({[field]:{$gte: options.gte, $lte: options.lte}});
  // Return the query
  return query;
  }
  // Accepts field name and date
  filterByDate(field,date){

  }
  projection() {}
  pagination() {}
}
module.exports = GlobalDAL;
