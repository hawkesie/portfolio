import React from 'react'
import PropTypes from 'prop-types'
import { isEqual } from 'lodash'
import Icon from '../Icon'
import styles from './Pagination.module.css'

const Pagination = (props) => {
  const { metaData, onChangeMethod } = props
  // const {
  //   current_page: current, total_pages: total, prev_page: prev, next_page: next,
  // } = metaData
  // const pageArray = [ ...Array(total).keys() ]
  // let start = current - 1 // default
  // if (total === 1) return null
  // if (total > 5 && total - current < 5) start = total - 5
  // if (total <= 5) start = 0
  const {
    current_page: current, total_pages: total, prev_page: prev, next_page: next,
  } = metaData
  const maxPages = 5 // default
  let startPage = 1
  let endPage = 1
  if (total <= maxPages) {
    startPage = 1
    endPage = total
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2)
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1
    if (current <= maxPagesBeforeCurrentPage) {
      startPage = 1
      endPage = maxPages
    } else if (current + maxPagesAfterCurrentPage >= total) {
      startPage = total - maxPages + 1
      endPage = total
    } else {
      startPage = current - maxPagesBeforeCurrentPage
      endPage = current + maxPagesAfterCurrentPage
    }
  }
  const pages = Array.from(Array((endPage + 1) - startPage).keys()).map((i) => startPage + i)
  return (
    <div className='pagination float-right'>
      <nav>
        <ul className='d-flex justify-content-end'>
          <Icon
            disabled={ !prev }
            name='fa-solid fa-angle-left'
            size='lg'
            color='white'
            onClick={ () => onChangeMethod({ page: prev }) }
            className={ styles.navButton }
          />
          { pages.map((page) => {
            const isActive = isEqual(page, current)
            return (
              <li key={ page } className=''>
                <a
                  className={ `py-0 pointer-cursor ${ styles.page } ${ isActive && styles.page_active }` }
                  onClick={ () => onChangeMethod({ page: page }) }
                  style={ { lineHeight: 'inherit', fontSize:'16px', fontFamily:"sans-serif" } }
                >
                  {page}
                </a>
              </li>
            )
          })}
          <Icon
            disabled={ !next }
            name='fa-solid fa-angle-right'
            size='lg'
            color='white'
            onClick={ () => onChangeMethod({ page: next }) }
            className={ styles.navButton }
          />
        </ul>
      </nav>
    </div>
  )
}

Pagination.defaultProps = {
  metaData: {},
  onChangeMethod: () => null,
}

Pagination.propTypes = {
  metaData: PropTypes.objectOf(PropTypes.any),
  onChangeMethod: PropTypes.func,
}

export default Pagination
