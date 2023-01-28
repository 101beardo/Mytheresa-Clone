import React,{useMemo} from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import {Box} from '@chakra-ui/react';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });


  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Box cursor='pointer' w={[12,12,12]} display='flex' justifyContent={["space-evenly",'space-evenly','space-evenly']} gap={[2,2,2]}
      className={classnames('pagination-container', { [className]: className })}
    >
  
      <Box
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <Box className="arrow left" />
      </Box>
      {paginationRange.map(pageNumber => {
         
        if (pageNumber === DOTS) {
          return <Box className="pagination-item dots">&#8230;</Box>;
        }
		
        
        return (
          <Box
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Box>
        );
      })}
 
      <Box
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <Box className="arrow right" />
      </Box>
    </Box>
  );
};

export default Pagination;