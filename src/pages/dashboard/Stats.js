import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChartContainer, StatsContainer, Loading } from '../../components';
import { showStats } from '../../featured/allJobs/allJobsSlice';

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
};
export default Stats;
