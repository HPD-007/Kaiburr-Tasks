# CRUD Operation in JavaScript

## HTML (index.html)

### Form Section

- **Form Fields**: The HTML form contains fields for entering Name, The id, assignee, and Project details.
- **onFormSubmit()**: Invoked when the form is submitted. It prevents the default form submission and calls `insertNewRecord` or `updateRecord` based on whether a row is selected.
- **Reset Button**: Clears the form fields.

### Table Section

- **Table Structure**: Two columns - one for the form and one for displaying the list.
- **List Table**: Displays entered details in a table.
- **Edit/Delete Links**: Each row has links for editing and deleting entries.

## JavaScript (script.js)

### Variables

- **selectedRow**: Keeps track of the selected row for editing or deleting.

### Functions

- **onFormSubmit(e)**: Handles form submission, prevents the default action, and calls `insertNewRecord` or `updateRecord`.
- **readFormData()**: Reads form data and returns it as an object.
- **insertNewRecord(data)**: Inserts a new row in the table with the provided data.
- **resetForm()**: Resets the form fields and sets `selectedRow` to null.
- **onEdit(td)**: Fills the form fields with the selected row's data for editing.
- **updateRecord(formData)**: Updates the selected row with new data.
- **onDelete(td)**: Confirms deletion and removes the selected row from the table.

## CSS (style.css)

### Styling

- **Table Styling**: Sets the width, margin, and background color for the outer table.
- **List Table Styling**: Defines the styling for the list table.
- **Cell Styling**: Sets border, text alignment, and padding for table cells.
- **Even Row Styling**: Adds background color to even rows for better readability.
- **Input Styling**: Defines the styling for text and number input fields.
- **Button Styling**: Sets background, padding, and border-radius for submit and reset buttons.

---

Feel free to customize this explanation based on your specific needs or add more details as necessary.
