# CSE Routine Maker Only

This is a standalone, login-free local routine workspace. It keeps the class-routine builder from the department portal, including course/teacher assignment, manual drag-and-drop placement, room and teacher conflict checks, smart automatic scheduling, history, publish, and print/export actions.

It intentionally does **not** include the portal's Running Semester module. In **Class Routine**, use **Add Semester** to create the semesters required for that routine. Then enter only the information the scheduler needs:

- **Semester Courses & Teachers**: course code, course name, type, and credit.
- **Teacher Information**: teacher name, phone, email, and designation.

Those entries are saved inside the standalone routine database and can be selected for teacher assignment and automatic routine generation.

The opening screen contains all three existing routine choices:

- Class Routine — fully functional with the existing scheduling engine.
- Lab Exam Routine — retained as the existing exam-module entry screen.
- Theory Exam Routine — retained as the existing exam-module entry screen.

The original project does not yet contain editable lab/theory exam scheduling engines; this package does not invent or replace those workflows.

## Run locally

1. Install Node.js 20 or newer.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3001`.

For a production build, run `npm run build`, then `npm start` and open `http://localhost:5051`.

## Data

`server/routine-maker.sqlite` is an isolated copy for this package. The original portal database is not used or modified by this standalone workspace. Because there is no login, run it only on a trusted local machine.
