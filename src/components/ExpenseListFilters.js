import React from "react";
import { connect } from "react-redux";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChanged = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          onChange={e => {
            this.props.dispatch(
              e.target.value === "date" ? sortByDate() : sortByAmount()
            );
          }}
          value={this.props.filters.sortBy}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId="StartDateFilterId"
          endDateId="EndDateFilterId"
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChanged}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseListFilters);
