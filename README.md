# Glossary Prototype

Prototype developed for showing glossary definitions in a modal for the new Computer Science Field Guide dynamic system. The term in the text sends a JSON request to the server, and displays a modal displaying the definition from the response.

The prototype must be viewed using a local web server, this can be done with Python3 by running `python -m http.server` and opening your preferred browser to `localhost:8000`.

## Possible improvements

- Could prevent duplicate requests by checking if a modal has already been created for the term.
