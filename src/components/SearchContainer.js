import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilters, handleChange } from '../featured/allJobs/allJobsSlice';
import { useCallback, useMemo, useState } from 'react';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
  const { isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const clearHandler = () => {
    setLocalSearch('');
    dispatch(clearFilters());
  };

  const debounce = useCallback(() => {
    let timerId;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 500);
    }
  }, [dispatch])

  const optimizedDebounce = useMemo(() => debounce(), [debounce]);

  return (
    <Wrapper>
      <form className="form">
        <h5>search form</h5>
        <div className="form-center">
          <FormRow
            type="text"
            value={localSearch}
            name="search"
            onChangeValue={optimizedDebounce}
          />
          <FormRowSelect
            value={searchStatus}
            labelName="status"
            name="searchStatus"
            onChangeValue={changeHandler}
            list={['all', ...statusOptions]}
          />
          <FormRowSelect
            value={searchType}
            labelName="type"
            name="searchType"
            onChangeValue={changeHandler}
            list={['all', ...jobTypeOptions]}
          />
          <FormRowSelect
            value={sort}
            name="sort"
            onChangeValue={changeHandler}
            list={sortOptions}
          />
          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={clearHandler}
            disabled={isLoading}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
