## Q: What is `Config Driven UI`?

A: `Config Driven UI` are the way to compose user interface using some data from the backend. It's a common and good practice in the industry to develop a large scale application. It saves a lot of development time and effort. For example, you can adjust whether a page have a banner or not.

## Q: Why do we need to give a unique key in a component?

A: When there are multiple components on the same level. For example, there are list of 10 restaurant cards. When users click "load more" - then React will re-render everything if there's no unique ID. So having a unique ID is really critical because it's really slow if React have to repaint everything.

Important note: Don't use index as the unique key. Read: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

```jsx
// assume we have array of data called resList
{
  resList.map((restaurant) => (
    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
  ))
}
```
