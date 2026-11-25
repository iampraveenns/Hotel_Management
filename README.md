# NamlaStay – Hotel Listing & Management System

A responsive hotel listing and management application built using **React.js, Redux Toolkit, and modern frontend technologies**.

NamlaStay provides an intuitive interface to explore hotels, manage hotel listings, upload images, filter properties, and view hotel locations through interactive maps.

## Features

### Hotel Management
- Add new hotel listings with image uploads and previews.
- Edit existing hotel information.
- Delete hotel listings with confirmation and success feedback.
- Reusable form component for adding and editing hotels.
- Form validation for required fields and input values.

### Hotel Discovery
- Browse hotels through a responsive card-based layout.
- Search hotels by title.
- Filter hotels by price range and category.
- Sort hotel listings by price and rating.
- Navigate results using reusable pagination.
- View detailed information about individual hotels.

### Interactive Maps
- Display hotel locations using latitude and longitude.
- Interactive maps powered by React Leaflet and OpenStreetMap.
- Browser Geolocation API integration to display the user's current location.

### User Experience
- Fully responsive layout for desktop, tablet, and mobile devices.
- Mobile-friendly sliding navigation menu.
- Consistent application theme and reusable UI components.
- Dynamic page titles and meta descriptions using React Helmet Async.
- Image alt attributes for accessibility.
- Persistent frontend data using browser Local Storage.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript (ES6+) |
| Build Tool | Vite |
| State Management | Redux Toolkit, React Redux |
| Routing | React Router DOM |
| Styling | HTML5, CSS3, Responsive CSS |
| Maps | React Leaflet, Leaflet, OpenStreetMap |
| Icons | React Icons |
| SEO | React Helmet Async |
| Storage | Browser Local Storage |
| Version Control | Git, GitHub |

## Getting Started

### Prerequisites
- Node.js
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/iampraveenns/Hotel_Management.git
```

**2. Navigate to the project directory**

```bash
cd Hotel_Management
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## Project Structure

```text
src/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   └── Pagination.jsx
│   └── hotel/
│       ├── HotelCard.jsx
│       ├── HotelForm.jsx
│       └── HotelMap.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── HotelListing.jsx
│   ├── HotelDetails.jsx
│   ├── AddHotel.jsx
│   └── EditHotel.jsx
│
├── layouts/
│   └── MainLayout.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── store/
│   ├── store.js
│   └── hotelSlice.js
│
├── data/
│   └── hotels.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Application Workflow

1. Explore available hotels on the home page.
2. Browse hotel listings and use search and filters.
3. Open a hotel to view its complete details and location.
4. Add new hotels or update existing listings.
5. Remove unwanted listings through the delete action.

## Data Management

Redux Toolkit manages the application's hotel state, while browser Local Storage maintains hotel data across page refreshes.

This implementation uses frontend-side data management and does not require a backend server or database.

## Scope

This repository focuses on the **frontend implementation** of the hotel listing and management assignment. Backend APIs, database integration, server-side image storage, and authentication are not included.

## Project Highlights

- Component-based React architecture.
- Centralized state management with Redux Toolkit.
- Reusable components and clean separation of concerns.
- Responsive UI and interactive user experience.
- Client-side CRUD operations and persistent browser storage.
- Map integration and browser geolocation.

---

**NamlaStay – Discover Your Perfect Stay.**
