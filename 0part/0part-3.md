```mermaid

sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Submitting the form by clicking "save" after writing new note.
    activate browser
    browser-->>user: Reloading the page with new note. 
    deactivate browser
    browser->server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    %% I'm not sure about this diagram so I'll explain myself. The only HTTP request i see is POST new_note_spa. So as i see this logic - browser stores info about new note directly in my browser BUT after refreshing the page it'll be downloaded from the server. Hope i was right :D