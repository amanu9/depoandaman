
import { useDispatch, useSelector } from 'react-redux';
import { saveEmployee,clearFields } from '../api/user_registration_slice';

function EmployeeForm() {
  const dispatch = useDispatch();
  const { name, age, country, position, year } = useSelector((state) => state.employees);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, age, country, position, year };
    dispatch(saveEmployee(data))
      .then(() => {
        window.confirm('Record added successfully');
        dispatch(clearFields());
      })
      .catch((error) => {
        window.confirm('Unable to insert the record');
        console.log('error', error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-2">
          <img className="inline-block h-12 w-12 rounded-full ring-2 ring-wheat" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Add Employee</h2>
        <form className="py-1"on onClick={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Enter First Name"
             // value={name}
            //  onChange={(e) => dispatch({ type: 'employees/setName', payload: e.target.value })}
            />
          </div>
          <div className="mb-2">
          <input
              type="text"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Enter Last Name"
             // value={name}
            //  onChange={(e) => dispatch({ type: 'employees/setName', payload: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Enter Country"
             // value={country}
              //onChange={(e) => dispatch({ type: 'employees/setCountry', payload: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Enter Password"
              //value={position}
              //onChange={(e) => dispatch({ type: 'employees/setPosition', payload: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="confirm password"
             // value={year}
              //onChange={(e) => dispatch({ type: 'employees/setYear', payload: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none" type="submit">
              Save Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;