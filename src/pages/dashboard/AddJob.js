import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import FormRowSelect from '../../components/FormRowSelect';
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../featured/job/jobSlice';
import { useEffect } from 'react';

const AddJob = () => {
  const {
    isLoading,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    position,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, [dispatch, user.location, isEditing]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!company || !jobLocation || !position) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            company,
            position,
            status,
            jobLocation,
            jobType,
          },
        })
      );
      return;
    }

    dispatch(createJob({ company, jobLocation, position, status, jobType }));
  };

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={submitHandler}>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            onChangeValue={inputChangeHandler}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            onChangeValue={inputChangeHandler}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelName="job location"
            value={jobLocation}
            onChangeValue={inputChangeHandler}
          />
          <FormRowSelect
            name="status"
            value={status}
            onChangeValue={inputChangeHandler}
            list={statusOptions}
          />
          <FormRowSelect
            name="jobType"
            value={jobType}
            labelName="job type"
            onChangeValue={inputChangeHandler}
            list={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block"
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
