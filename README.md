# 📝 React Form Handling — Detailed Guide

In React, **form handling** means managing user input through state and events. React uses **controlled components**, which makes forms more predictable and easier to debug.

---

## ✅ What is Form Handling in React?

In plain HTML, form elements like `<input>` or `<textarea>` store their own state in the DOM.  
In React, you **control** these elements by storing their data in the **component’s state**.

This makes it easy to:
- **Read** the current input value anytime
- **Validate** the data while the user types
- **Handle** what happens when the form is submitted

---

## ✅ Controlled vs Uncontrolled Components

**Controlled Component:**
- Form element’s value is **controlled by React state**
- Data flows **one-way**: state → input value

**Uncontrolled Component:**
- Form element keeps its own state in the DOM
- You access the value using a **ref** (less common in React)

👉 **React encourages controlled components!**

---

## ✅ How it Works

- React uses **controlled components** — form elements like `<input>` have their **value controlled by state**.
- Changes in the input are handled with `onChange` events.
- The form’s data lives in **React state**, not in the DOM.

---

☝️ The above project is a small example for form handling — you can make use of it when you are learning.
