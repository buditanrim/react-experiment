# Chapter 5

### 0:45:00 — Two ways to export and import

Default export

```
export const NAME; << the specific variable
import NAME from "path"
```

Name export

```
export default NAME; << the whole file
import {NAME} from "path"
```

### Q: What is `src` folder?

A: It's an industry standard. It's a source code for the app and we'll keep all the files in that folder. But you can build the app without `src` too. It's a good idea to keep using this convention.

### Q: Why make separate files for each component?

A: In theory, you can put all the components in one file. But it's better to separate them so it's readable for human and easier to maintain.

```
src
|- components
|--- Header.js
|--- Footer.js
```

### Q: Should we use `jsx` on the component file?

A: You can use `tsx` `jsx` or `js` - it doesn't matter at all. Don't overthink on this part.

### Q: Never keep a hard data in the component

A:

### Build a feature for filtering

### React Hooks

A Hook is a normal JS utility function. Created by Facebook developers with a superpower.

- useState()
- useEffect()

Whenever a state variable changes, React will re-render the component

```jsx
let [myVar, setMyVar] = useState([])
// is equal to
let myVar = []

let [myVar, setMyVar] = useState(null)
// is equal to
let myVar = null
```
