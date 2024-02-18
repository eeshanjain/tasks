# MERN Task Manager Codebase Assessment - Solution Design

I'd like to elaborate on the decisions that I have taken to improve the code quality for the purpose of this assessment.
I was also able to implement the "Mark as Done" feature that was requested.

## Improvements to Code Quality

This was achieved through various changes, some of them are:
1. Implementation of Typescript to enfore strict typing
2. Implementation of static code analysis through ESLint
3. Implementation of Unit Test cases
4. Breaking down code into multiple components instead of having just one component with all of the UI code
5. Making these components stateless, so that they are dependent only on the props that are passed down to them
6. Identification of a file that was incorrectly placed (initial location - `/client/src/Task.js`, current location - `/server/models/Task.ts`)

## Feature Request - Mark Task as Done

One of the biggest advantages of using a Database like MongoDB is that even if there are changes to the structure of the document being stored, the older documents are fairly unaffected by the change and this was very evident here.
In order to achieve this feature, I just had to add an additional property called `done` that contains a boolean value (default value being `false`).
This way, it is assumed that the older tasks have not been marked as "done" but now have the capability for it.

## Challenges faced

1. The "Edit Task" feature was confusing. I was not sure what was to be done with it so, for now, I have left it as is. Ideally, I would have liked to delete the feature since it was not serving any real purpose.
2. Getting the UI to communicate with the back-end required some changes as there were CORS issues out-of-the-box. It is possible that I may have made a mistake in the setup, please do let me know if that's the case.
3. Mocking the API calls for the UI Unit Testing was a big challenge that I, unfortunately, did not have enough time to resolve. Hence, the UI testing is very rudimentary currently.
