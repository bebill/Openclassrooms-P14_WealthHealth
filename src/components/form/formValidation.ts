import { Employee } from "../../interfaces/employeeInterface";

export const validateForm = (values: Employee) => {
  const errors: { [key: string]: string } = {};
  const {
    firstName,
    lastName,
    birthDate,
    startDate,
    address: { street, city, state, zip },
    department,
  } = values;

  const regex =
    /^[a-zA-ZàáâãäåçèéêëìíîïðòóôõöùúûüýÿÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÐÒÓÔÕÖÙÚÛÜÝ\s'-]+$/;
  const zipRegex = /^\d{5,10}$/;

  if (firstName === "") {
    errors.firstName = "Please enter a first name.";
  } else if (firstName.length < 2) {
    errors.firstName = "First name should be minimum 2 characters.";
  } else if (!regex.test(firstName)) {
    errors.firstName =
      "First name can only contain letters, spaces and « '- ».";
  }

  if (lastName === "") {
    errors.lastName = "Please enter a last name.";
  } else if (lastName.length < 2) {
    errors.lastName = "Last name should be minimum 2 characters.";
  } else if (!regex.test(lastName)) {
    errors.lastName = "Last name can only contain letters, spaces and « '- ».";
  }

  const today = new Date();
  const selectedBirthDate = new Date(birthDate);
  const selectedStartDate = new Date(startDate);
  const minBirthDate = new Date();
  minBirthDate.setFullYear(minBirthDate.getFullYear() - 120);
  const minStartDate = new Date(selectedBirthDate);
  minStartDate.setFullYear(minStartDate.getFullYear() + 14);

  if (birthDate === "") {
    errors.birthDate = "Please select a date.";
  } else if (selectedBirthDate > today) {
    errors.birthDate = "Birth date cannot be in the future.";
  } else if (selectedBirthDate < minBirthDate) {
    errors.birthDate = "Age should be less than 120 years.";
  }

  if (startDate === "") {
    errors.startDate = "Please select a date.";
  } else if (selectedStartDate < selectedBirthDate) {
    errors.startDate = "Start date cannot be prior to birth date.";
  } else if (selectedStartDate < minStartDate) {
    errors.startDate = "Employee should be at least 14 years old.";
  }

  if (street === "") {
    errors.street = "Please enter a street name.";
  } else if (street.length < 2) {
    errors.street = "Street name should be minimum 2 characters.";
  } else if (!regex.test(street)) {
    errors.street = "Street name can only contain letters, spaces and « '- ».";
  }

  if (city === "") {
    errors.city = "Please enter a city name.";
  } else if (city.length < 2) {
    errors.city = "City name should be minimum 2 characters.";
  } else if (!regex.test(city)) {
    errors.city = "City name can only contain letters, spaces and « '- ».";
  }

  if (zip === "") {
    errors.zip = "Please enter a zip code.";
  } else if (!/^\d+$/.test(zip)) {
    errors.zip = "Zip code should only contain numbers.";
  } else if (!zipRegex.test(zip)) {
    errors.zip = "Zip code's length should be between 5 and 10.";
  }

  if (state === "") {
    errors.state = "Please select a state.";
  }

  if (department === "") {
    errors.department = "Please select a departement.";
  }

  return errors;
};
