// filtered list component
// this one lets the user search by name and also filter by category

import React, { Component } from "react";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    // tracking both the search text and the selected category
    this.state = {
      searchTerm: "",
      selectedCategory: "All"
    };
  }

  // updates the text input value
  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  // updates the dropdown value
  handleCategoryChange = (event) => {
    this.setState({
      selectedCategory: event.target.value
    });
  };

  render() {
    const { items } = this.props;
    const { searchTerm, selectedCategory } = this.state;

    // get unique categories from the item list
    const categories = ["All", ...new Set(items.map((item) => item.category))];

    // filter first by category, then by search text
    const filteredItems = items.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    return (
      <div>
        <h2>Filtered List</h2>

        <div>
          <input
            type="text"
            placeholder="Search by item name"
            value={searchTerm}
            onChange={this.handleSearchChange}
          />

          <select
            value={selectedCategory}
            onChange={this.handleCategoryChange}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>
              {item.name} ({item.category})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FilteredList;
