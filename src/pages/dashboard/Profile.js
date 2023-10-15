import { useState } from 'react';
import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../featured/user/userSlice';

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    location: user?.location || '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, lastName, email, location } = userData;

    if (!name || !lastName || !email || !location) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    dispatch(updateUser(userData));
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={submitHandler}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            value={userData.name}
            name="name"
            onChangeValue={changeHandler}
          />
          <FormRow
            type="text"
            value={userData.lastName}
            name="lastName"
            labelName="last name"
            onChangeValue={changeHandler}
          />
          <FormRow
            type="email"
            value={userData.email}
            name="email"
            onChangeValue={changeHandler}
          />
          <FormRow
            type="text"
            value={userData.location}
            name="location"
            onChangeValue={changeHandler}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save change'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
