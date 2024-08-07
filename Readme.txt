1. What is the task assigned?

The task is to implement a search functionality that echoes user
input without proper sanitization, allowing for reflected XSS.

2. How is the search functionality implemented?

Backend (Node.js with Express):
A server is set up to handle GET requests, serve static files, and process search queries.

Frontend (HTML Files):
An HTML form allows users to input search queries.
The search results page directly displays the search term using a script that is vulnerable to XSS.