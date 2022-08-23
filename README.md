# WTW_Form_UI

## Validation
Validation is at the HTML level and in adition in the TypeScript.  This is in case someone fancies cross site scripting, it will make it harder for them as the validation is in two places.

Comprimising client side (html) validation to allow the value zero, allowed the input buttons go up in millions.  The value 0 is only made available on down click and if you add it manually.  The TypeScript validation kicks in here, becuase the button is now freed up in order for them to submit this.  In the real world I wouuld have had a chat with the UX designer about this play off, but I feel it was it was worth it for the extra functionality.

Validation has been moved into its own file and methods have been written so they can be reused as the app grows.

## Numbers and Date Functionality
Date formating has been done as requested and moved into its own file for reuse.  I did not reset the local, in this case but would in a real would example.

I appended a % sign to the numbers shown in the table.  The numbers shown in the number feild cannot have commas and again I thought this functionalty looked important.  If you wanted both I could build this in using a text box with a reg expresion for validation.

## show records
You can show the records anywhere between the first 5 and 20, by default it shows 5 records, to show more select a higher value.

## bonus
Submission timer and spinner added, succesffuly.

## To start
1. cd WTW-Customer-UI
2. ng serve --open

## Components 
* execution-input-form.component
* execution-output-table.component

## Unit Tests 
1. execution-input-form
    * should render title
    * two inputs, a button and a select
2. execution-output-table
    * add data and check row count
3. dateWriter
    * not outside the relms of a date
    * has the formate characters
4. Form Validation 
    * number is zero or less
    * unhappy its not a number
    * unhappy as has no lenngth
    * unhappy as has no value
    * happy as has value
5. IntegerCalculations
    no tests as this is purely for mocking numbers for table.

To run unit test run 'ng test'.
