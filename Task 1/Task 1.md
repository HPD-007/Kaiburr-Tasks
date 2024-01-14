# Task Data Explanation

## Tasks Array

The JSON data consists of an array named "Tasks," which contains multiple task objects.

```json
{
  "Tasks": [
    // Task Objects...
  ]
}


Task Object Structure
Each task object within the "Tasks" array has the following properties:

name: The name or description of the task.
id: Unique identifier for the task.
assignee: The person assigned to complete the task.
project: The project associated with the task.
startTime: The starting time of the task in UTC format.
Custom Properties: Additional custom properties specific to each task.


TASK-1:
{
  "name": "donate to an orphanage",
  "id": "123",
  "assignee": "Rahul kanna",
  "project": "donation",
  "startTime": "2023-09-11 09:30:00.000Z",
  "hariPrannavProperty": "HarPi"
}

name: Donate to an orphanage.
id: Task ID is "123."
assignee: Assigned to Rahul Kanna.
project: Associated with the "donation" project.
startTime: Starts on September 11, 2023, at 09:30 AM UTC.
hariPrannavProperty: Custom property specific to this task ("HarPi").


TASK-2:
{
  "name": "Complete Project Presentation",
  "id": "124",
  "assignee": "Arundati singh",
  "project": "Presentation",
  "startTime": "2023-09-12 09:30:00.000Z",
  "santhoshJohnProperty": "StJoh"
}

name: Complete Project Presentation.
id: Task ID is "124."
assignee: Assigned to Arundati Singh.
project: Associated with the "Presentation" project.
startTime: Starts on September 12, 2023, at 09:30 AM UTC.
santhoshJohnProperty: Custom property specific to this task ("StJoh").


TASK-3:
{
  "name": "Submit Expense Report",
  "id": "125",
  "assignee": "Evagaline lily",
  "project": "Finance",
  "startTime": "2023-09-13 12:45:00.000Z",
  "vidyaDesaiProperty": "viDea"
}

name: Submit Expense Report.
id: Task ID is "125."
assignee: Assigned to Evagaline Lily.
project: Associated with the "Finance" project.
startTime: Starts on September 13, 2023, at 12:45 PM UTC.
vidyaDesaiProperty: Custom property specific to this task ("viDea").

Task-4:
{
  "name": "Plan Team Meeting",
  "id": "126",
  "assignee": "Madonna swamy",
  "project": "TeamMeeting",
  "startTime": "2023-04-25 11:00:00.000Z",
  "leisterGanapathyProperty": "leGan"
}

name: Plan Team Meeting.
id: Task ID is "126."
assignee: Assigned to Madonna Swamy.
project: Associated with the "TeamMeeting" project.
startTime: Starts on April 25, 2023, at 11:00 AM UTC.
leisterGanapathyProperty: Custom property specific to this task ("leGan").



This Markdown document explains the structure and details of each part of the provided JSON data. 
