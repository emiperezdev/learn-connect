# Lean Connect

This repository contains the files and resources related to the development of the **Lean Connect** project. Below are the activities, deliverables, and guidelines that will be followed during the project's lifecycle.

---

## **1. Requirement List Prioritized with MOSCOW Method**
A requirement list must be prepared using the **MOSCOW** method (Must Have, Should Have, Could Have, Won't Have). This list will prioritize the functionalities of the project.

- **Deliverable**: Document detailing the requirements classified using the MOSCOW method.

---

## **2. Burndown Chart in JIRA**
- Create a project in **JIRA**.
- Set up the backlog with the tasks required for the project.
- Report progress on tasks during development.
- Generate and deliver the **Burndown Chart** graph at the end of the project.

- **Deliverable**: Burndown Chart graph exported from JIRA.

---

## **3. Wireframes**
Design wireframes for the project to visualize the screen flow and user interaction with the system.

- **Deliverable**: Wireframes in image format or PDF file.

---

## **4. Mockups**
Develop mockups based on the wireframes to represent the visual design of the screens in more detail.

- **Deliverable**: Mockups in image format or PDF file.

---

## **5. Create Git Branches per Programmer**
Each programmer must work on a specific branch assigned to their task or feature.

- **Git Flow**: This project uses **Git Flow** to manage the workflow.
  - **Main**: Main branch for production.
  - **Develop**: Branch for integration of development changes.
  - **Feature/<name>**: Specific branches for each feature.
  - **Release/<version>**: Release branches to prepare versions.
  - **Hotfix/<name>**: Branches to fix critical production issues.

---

## **6. Team Coordinator**
A team coordinator will be responsible for the main repository in **GitHub**. They will:
- Review pull requests.
- Perform merges in the main branches.
- Supervise the organization of branches.

- **Deliverable**: Report of branches and commits at the end of the project.

---

## **7. Selenium Test Scripts**
Develop and execute automated test scripts using **Selenium**.

- **Deliverable**: Screenshots of the executed scripts showing the results.

---

## **8. Functionality Video**
Record a demonstration video of the application's functionality, showcasing the main implemented features.

- **Deliverable**: Video file in MP4 or similar format.

---

## **Commit Message Structure**
To maintain a clean and organized history, we will follow the commit message structure below:

- `add: <description>` - To add new files or features.
- `feat: <description>` - For new functionalities.
- `fix: <description>` - For bug fixes.
- `refactor: <description>` - For code structure improvements without changing functionality.
- `wip: <description>` - For work in progress.
- `docs: <description>` - For documentation updates.

Example:
```bash
git commit -m "feat: add login functionality"
