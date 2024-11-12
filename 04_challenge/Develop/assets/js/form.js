// TODO: Create a variable that selects the form element
const selectForm = document.querySelector('form');
const nameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const errorDisplay = document.querySelector('#error');
const submitForm = document.querySelector('#submit');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmission(event) {
  event.preventDefault();

  if (nameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
    errorDisplay.textContent = "Form is not completed.";
  } else {
    const blogSubmission = {

      name: nameInput.value,
      title: titleInput.value,
      content: contentInput.value
    };
    localStorage.setItem('blogSubmission', JSON.stringify(blogSubmission));
    redirectPage();
  }
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
selectForm.addEventListener('submit', formSubmission);