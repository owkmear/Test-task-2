import React from 'react'
import { connect } from 'react-redux'
import { getProductsList } from '../../../store/actions/products'
import { setFilterPage } from '../../../store/actions/filter'

export class Content extends React.Component {
  componentWillMount() {
    const { getProductsList } = this.props
    getProductsList()
  }

  handleChangePage = (event) => {
    const { setFilterPage } = this.props
    if (event.currentTarget.className === 'page-item') {
      setFilterPage(Number(event.currentTarget.getAttribute('value')))
    }
  }

  render() {
    const { data, isLoading, errorMessage, page, totalPages } = this.props
    const pageLinks = []
    if (totalPages > 3)
      for (let pageNumber = 1; pageNumber <= Math.ceil(totalPages / 3); pageNumber++)
        pageLinks.push(
          <li key={pageNumber} value={pageNumber} onClick={this.handleChangePage} className={'page-item' + (page === pageNumber ? ' active' : '')}>
            <span className="page-link">{pageNumber}</span>
          </li>
        )

    return (
      <div className="content mt-5">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow" role="status"></div>
          </div>
        ) : errorMessage ? (
          <div className="content__error d-flex justify-content-center">{errorMessage}</div>
        ) : (
          <div>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">Номер</th>
                  <th scope="col">Название</th>
                  <th scope="col">Значение</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                    <th>{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {totalPages ? (
              <nav aria-label="Search results pages" className="d-flex flex-row justify-content-between">
                <span>
                  Показаны {page * 3 - 2} - {page * 3 > totalPages ? totalPages : page * 3} из {totalPages} записей
                </span>
                {totalPages > 3 && <ul className="pagination">{pageLinks}</ul>}
              </nav>
            ) : (
              <div className="d-flex justify-content-center">Нет записей</div>
            )}
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.products.data,
    page: state.products.page,
    totalPages: state.products.totalPages,
    errorMessage: state.products.errorMessage,
    isLoading: state.products.isLoading
  }
}

const mapDispatchToProps = {
  getProductsList,
  setFilterPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
