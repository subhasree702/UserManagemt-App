Project Structure:-

src/components: Reusable components. 
src/navigation: Navigation setup using react-navigation. 
src/redux: Redux slices and sagas. 
src/screens: Screen components (UserListScreen, UserDetailScreen). 
src/api: API integration (userApi.js). 
App.js: Root component integrating Redux provider and navigation. 





Design Decisions:-

React Navigation: To handle screen navigation. 
Redux Toolkit: For state management and simplicity in creating slices. 
Redux-Saga: To manage side effects for async actions. 
Axios: For API requests. 
Infinite Scrolling & Pull-to-Refresh: Implemented in UserListScreen for better user experience. 
