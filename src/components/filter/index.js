import React, { Component } from 'react';
import { Select, Switch } from 'antd';

import './style.scss';

const Option = Select.Option;

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleChange(value) {
    this.props.handleFilterSelect(value);
  }

  handleSwitch(value) {
    this.props.handleFilterSwitch(value);
  }

  render() {
    const { categories, selectValue } = this.props;

    return (
      <div className="filter">
        <Select
          defaultValue={selectValue}
          onChange={this.handleChange}
          style={{
            minWidth: '200px',
            maxWidth: '300px',
            width: '40%'
          }}
        >
          <Option value="">Filter by category</Option>
          {categories.map((category, index) => {
            return (
              <Option
                value={category.name}
                key={`category-${index}`}
              >
                {category.title}
              </Option>
            );
          })}
        </Select>

        <div className="lang-toggle">
          <span className="label">French Books</span>
          <Switch onChange={this.handleSwitch} />
        </div>
      </div>
    );
  }
}

export default Filter;