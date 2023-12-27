import { ChangeEvent, FormEvent, useState } from 'react';
import Navigation from './Navigation';
import { useFormContext } from '../Context/stroe';

export default function FormInfo() {
  const { increceStep, setPersonalInfo, personalInfo } = useFormContext();

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone } = personalInfo;
    let isValid = true;
    const updatedErrors = {
      name: '',
      email: '',
      phone: '',
    };

    if (name.trim() === '') {
      updatedErrors.name = 'Name is required';
      isValid = false;
    }

    if (!validateEmail(email)) {
      updatedErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!validatePhone(phone)) {
      updatedErrors.phone = 'Invalid phone number';
      isValid = false;
    }

    if (isValid) {
      increceStep(); // Proceed to the next step if the form is valid
    } else {
      setErrors(updatedErrors);
    }
  };

  const getErrorClass = (field: 'name' | 'email' | 'phone'): string => {
    return errors[field] ? 'border-red-500' : '';
  };

  return (
    <div className="w-full flex flex-col mt-2 gap-2 items-center">
      <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="name" className="flex justify-between items-center">
            Name
            {errors.name && <p className="error ml-2">{errors.name}</p>}
          </label>
          <input
            className={`input text-right p-2 rounded-md border-2 ${getErrorClass('name')}`}
            type="text"
            id="name"
            name="name"
            value={personalInfo.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="email" className="flex justify-between items-center">
            Email
            {errors.email && <p className="error ml-2">{errors.email}</p>}
          </label>
          <input
            className={`input p-2 rounded-md border-2 ${getErrorClass('email')}`}
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="phone" className="flex justify-between items-center">
            Phone
            {errors.phone && <p className="error ml-2">{errors.phone}</p>}
          </label>
          <input
            className={`input p-2 rounded-md border-2 ${getErrorClass('phone')}`}
            type="text"
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handleInputChange}
          />
        </div>
        <Navigation goBack={false} />
      </form>
    </div>
  );
}
