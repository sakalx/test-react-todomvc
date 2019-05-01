# Genius Plaza Todo App Test (React).

[DEMO]()
 ________________________________________________________
 ________________________________________________________

### To get start:
```javascript
  npm i
```

```javascript
  npm start
```

 ________________________________________________________
 ________________________________________________________

### Main packages:

| Package | Version | Description |
| --- | --- | --- |
| **[react / react-dom](https://reactjs.org/)** | `^16.8.6` | *Building UI.* |
| **[redux / react-redux](https://redux.js.org/)** | `^4.0.1 / ^6.0.1` | *Manage state of APP.* |
| **[styled-components](https://www.styled-components.com/)** | `^4.2.0` | *CSS in JS.* |
| **[redux-logger](https://github.com/LogRocket/redux-logger/)** | `^3` | *Log redux action.* |
| **[webpack](https://webpack.js.org/)** | `^4.29.6` | *Module bundler.* |

 ________________________________________________________
 ________________________________________________________
 
### Implementation:
> We holding a state of the tasks in redux-store, for easy manage and scalable project.
One of the reasons why we keep the list of all tasks separated from completed tasks,
because when we toggle task as completed we don't need iterate over all list,
we get access to the current task with time complexity **O(1)** instead of **O(n)**.


> For styling we use **styled-components**.
One of the reasons why don't use regular CSS class, because they have global visibility,
and it's getting difficult to make Reusable components.
>>_The single responsibility principle is a computer programming principle that states that every module 
or class should have responsibility over a single part of the functionality provided by the software,
and that responsibility should be entirely encapsulated by the class.
All its services should be narrowly aligned with that responsibility. 
**[Wikipedia](https://en.wikipedia.org/wiki/Single_responsibility_principle)**_ 

> On large React projects styling getting hard to manage, especial when you stick with BEM methodology :)
[Styled Components: To Use or Not to Use?](https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21)

 ________________________________________________________
 ________________________________________________________
 
### Credit:
Created by **Serhii Sakal**.