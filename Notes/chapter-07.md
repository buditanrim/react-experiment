# React Route

- `npm install react-router-dom` to install
- `createBrowserRouter`
- https://reactrouter.com/en/main/start/tutorial

## Children route

- What: Children route is a list (array) of routes
- How: How to create a children route
- We can config the `createBrowserRouter` to recognize the parent and children route
- `<Outlet />` is a component we get from react router
- `<Outlet />` will get replaced depending on the `path` and the `element`
- So React will repaint the Outlet only without affecting Header

## Link

- `<Link to="/about">About</Link>` a component from `React Router`
- This component allow us to move between pages without reloading the whole page
- This give a better UX

## 2 type Routing in web apps

- Client Side Routing - we don't make a network call
- Server Side Routing — if I move from home to about --> send network call --> render the web

## Make a restaurant menu page

- we can make a dynamic routing with `path: /restaurants/:resId`
- the `:` identify to react routing that's a dynamic data
- Then we can `useEffect` to call the API
- Make a conditional rendering on the component (if resData = null)
- When use `map` the `key` should be on the parent element