# Garage Hero Frontend Test

## Objective

The goal of this test is to evaluate your ability to integrate pre-built components, work with backend APIs, and design a functional dashboard from scratch.

---

## Scope

### Authentication Flow:

1. Integrate the provided **Login** and **OTP Verification** components with the backend API.
2. Implement API calls for login and OTP verification.

### Dashboard:

1. Build a dashboard interface following the provided [Figma design](https://www.figma.com/design/kBB5XdNU6L1zJpnAkmHXn6/test1?node-id=68-899&t=23poGHzKgD5OrHSc-1).
2. Use **Flowbite React** components to create the dashboard UI and the library of your choice for charts.

---

## Key Requirements

### API Integration:

Use the provided `api_key` in the request headers:

```bash
api_key: <api_key>
```

### Dashboard Features:

1. **Summary Metrics**:
   - Integrate and display metrics such as revenue, expenses, outstanding invoices, etc.
2. **Invoices Table**:
   - Fetch and display data in a table format with pagination and filtering.
3. **Profit/Expenses Chart**:
   - Render a chart based on financial data from the API.

### UI Design:

- Adhere to the Figma design as closely as possible.
- Use **Flowbite React** for buttons, tables, modals, and the library of your choice for charts.

---

## Provided Resources

1. **Login and OTP Components**:

   - Pre-built components for the **Login** and **OTP Verification** flows are provided.
   - Your task is to integrate them with the backend APIs.

2. **Backend API**:

   - Endpoints for authentication and dashboard data:
     - **Login**: `POST /api/v1/user/login`
     - **Verify OTP**: `POST /api/v1/user/verify-otp`
     - **Dashboard Data**: `GET /api/v1/dashboard/accountant`

3. **Design**:
   - Figma file for reference: [Figma Design](https://www.figma.com/design/kBB5XdNU6L1zJpnAkmHXn6/test1?node-id=68-899&t=23poGHzKgD5OrHSc-1).

---

## How to Use the Sign-Up API

While sign-up is not part of the task, you can create test users using the backend API. Use the following payload with the endpoint `POST /api/v1/user/signup`:

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "johndoe@gmail.com",
  "country": "AE",
  "lang": "{\"acceptedLang\":\"en\",\"browserLang\":\"en-US\"}",
  "phone_country_code": "971",
  "phone_number": "0000000000",
  "dob": "1993-03-03T20:00:00.000",
  "password": "GrosTest2020!_!_",
  "user_type": "root"
}
```

Ensure that the provided email and phone number are unique.

---

## Tasks

### 1. Authentication Flow Integration

- **Login**:
  - Use the provided login component.
  - Integrate it with the `POST /api/v1/user/login` endpoint.
- **OTP Verification**:
  - Use the provided OTP verification component.
  - Integrate it with the `POST /api/v1/user/verify-otp` endpoint.

### 2. Dashboard Implementation

- **Summary Metrics**:
  - Display metrics such as outstanding invoices, revenue, expenses, etc.
  - Fetch data from `GET /api/v1/dashboard/accountant`.
- **Invoices Table**:
  - Build a table to list invoices with pagination and filtering.
  - Use Flowbite's Table component.
- **Chart**:
  - Render a basic profit/expenses chart.
  - Use Flowbite or a compatible charting library.

---

## Submission

### Deliverables:

1. A GitHub repository containing the project code.
2. Instructions in the `README` to:
   - Set up and run the project.
   - Test the login, OTP verification, and dashboard functionality.

### Deadline:

You have **3 days** to complete the test.

---

## Evaluation Criteria

1. **Backend Integration**:
   - API calls are implemented correctly, and data is rendered as expected.
2. **UI/UX**:
   - Dashboard matches the Figma design closely.
   - Clean and user-friendly interface.
3. **Code Quality**:
   - Use of reusable components.
   - Clean and maintainable code structure.
4. **Proper Use of Flowbite**:
   - Appropriate use of Flowbite React components for tables, charts, and other UI elements.

---

### Note

Sign-up is not required in this test. Use the **Sign-Up API** as described above to create test accounts.

Good luck, and we look forward to reviewing your submission!
