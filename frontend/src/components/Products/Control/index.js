import React from 'react'
import { connect } from 'react-redux'
import { setFilterName, setFilterId, setFilterValue, setFilterSort } from '../../../store/actions/filter'

export class Control extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sorting: null,
      desc: false
    }
  }

  handleFilterChange = (event) => {
    const { setFilterName, setFilterId, setFilterValue } = this.props
    const value = event.target.value
    switch (event.target.name) {
      case 'number':
        setFilterId(value)
        break
      case 'name':
        setFilterName(value)
        break
      case 'value':
        setFilterValue(value)
        break
      default:
        break
    }
  }

  handleSortChange = (event) => {
    const { setFilterSort } = this.props
    const sort = event.currentTarget.dataset.id
    let newState = null
    if (this.state.sorting === sort) newState = { ...this.state, desc: !this.state.desc }
    else newState = { ...this.state, sorting: sort, desc: false }
    this.setState(newState, () => {
      setFilterSort(`${this.state.desc ? '-' : ''}${this.state.sorting}`)
    })
  }

  render() {
    return (
      <div className="control ml-5 mt-5">
        <div className="filtering">
          <span className="filtering__header">Фильтры</span>
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline" onSubmit={(event) => event.preventDefault()}>
              <input name="number" onChange={this.handleFilterChange} className="form-control mr-sm-2 mb-3" type="search" placeholder="по номеру" aria-label="NumberFilter" />
              <input name="name" onChange={this.handleFilterChange} className="form-control mr-sm-2 mb-3" type="search" placeholder="по названию" aria-label="NameFilter" />
              <input name="value" onChange={this.handleFilterChange} className="form-control mr-sm-2" type="search" placeholder="по значению" aria-label="ValueFilter" />
            </form>
          </nav>
        </div>

        <div className="sorting">
          <span className="sorting__header">Сортировать по:</span>
          <ul className="sorting__list">
            <li className={'sorting__item' + (this.state.sorting === 'id' ? (this.state.desc ? ' sorting__selected' : ' sorting__selected sorting__desc') : '')}>
              <span data-id="id" onClick={this.handleSortChange}>
                номеру
              </span>
            </li>
            <li className={'sorting__item' + (this.state.sorting === 'name' ? (this.state.desc ? ' sorting__selected' : ' sorting__selected sorting__desc') : '')}>
              <span data-id="name" onClick={this.handleSortChange}>
                названию
              </span>
            </li>
            <li className={'sorting__item' + (this.state.sorting === 'value' ? (this.state.desc ? ' sorting__selected' : ' sorting__selected sorting__desc') : '')}>
              <span data-id="value" onClick={this.handleSortChange}>
                значению
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.filter.name,
    id: state.filter.id,
    value: state.filter.value,
    sort: state.filter.sort,
    requiredPage: state.filter.requiredPage
  }
}

const mapDispatchToProps = {
  setFilterName,
  setFilterId,
  setFilterValue,
  setFilterSort
}

export default connect(mapStateToProps, mapDispatchToProps)(Control)
