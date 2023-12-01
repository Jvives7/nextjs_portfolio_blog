
# .tsx vs. jsx. vs .ks
"A JS file is a JavaScript file extension, this is used for any modules and snippets of code made in pure JavaScript. You should use JS files when writing functions that won't use any React feature but will be used among different React components.

JSX is a file syntax extension used by React, you can render component, import CSS files and use React hooks among other things. You should use JSX files when rendering a React component.

TSX is the TypeScript version of JSX, TypeScript is a superset that adds static typing in JavaScript. You should use TypeScript whenever it's possible to do so as it has numerous advantages (code scalability and static typing)"

source: https://stackoverflow.com/questions/64343698/what-is-the-difference-between-js-tsx-and-jsx-in-react



# Creating Navbar

1. Create a folder named components. 


2. Create a file inside of components folder named Navbar.  
components > Navbar.tsx!
[Alt text](<Screenshot 2023-11-28 at 7.18.48 PM.png>)

3. Type in rafce to create a react arrow ....
![Alt text](<Screenshot 2023-11-28 at 7.25.53 PM.png>)
note: react snippets extension must be installed to use "rafce" shortcut
![Alt text](<Screenshot 2023-11-28 at 7.25.09 PM.png>)


![Alt text](<Screenshot 2023-11-28 at 7.27.07 PM.png>)

4. Add use client directive to top of navbar component .tsx file 

![Alt text](<Screenshot 2023-11-28 at 7.35.35 PM.png>)

4. Go back to root page.tsx and import Navbar

![Alt text](<Screenshot 2023-11-28 at 7.36.29 PM.png>)

You should now have the navbar element. 

6. Customize the navbar appearance in the navbar component .tsx file in tailwind.css and next js


7. Image attributes for logo template

```css
src="example.jpg" 
alt="logo" 
width="500" 
height="600"
className="example"
priority
```


8. Style the Navbar

Make sure that tailwind.config has module.exports 
```
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: []
}
```


9. Add react icons library for hamburgur menu

npm i react-icons


verify it installed properly by checking the package.json package
![Alt text](<Screenshot 2023-11-29 at 12.33.58 AM.png>)







# Adding Calender to booking page
 
 1. Setup a calender.tsx file in components folder 

Use rfce to create a funcitonal component for calender component code
![Alt text](<Screenshot 2023-11-29 at 5.07.45 PM.png>)
 2. Install nmn calender 

 No need to physically code the calendar in this project

Then install react calender with 
 ```
npm i react-calender
 ```

3. Once calender-react is installed 

Import calender into calendar component script with 

```
import Calendar from 'react-calendar'
```

Documentation for reac-calendar is here 
https://www.npmjs.com/package/react-calendar

4. Add this code 
```javascript
'use client';

import React from 'react'
import Calendar from 'react-calendar'

function Calender() {
  return (
    <div>
        <Calendar 
        minDate={new Date()}
        className='REACT-CALENDAR p-2' 
        view='month' 
        onClickDay={date => console.log(date)}
        />
    </div>
  )
}

export default Calender

```


Calendar should now display on localhost aswell as fucntiongin logging 
![Alt text](<Screenshot 2023-11-29 at 5.32.32 PM.png>)
![Alt text](<Screenshot 2023-11-29 at 5.34.06 PM.png>)

5. Add a style css file to style it later on 

import css file on the _app level not the component level



7. Add Condiitonal rendering to calendar when state is changed. 


Pseudocode

If date is not clicked, show calendar

If date is clicked, close calendar and show available times. 


info: https://legacy.reactjs.org/docs/conditional-rendering.html


Inline If-Else with Conditional Operator
Another method for conditionally rendering elements inline is to use the JavaScript conditional 

```
operator condition ? true : false.
```


```javascript
    <div className='h-screen flex flex-col justify-center items-center'>
        {date.justDate ? (
            <div></div>
        ) : (
        <ReactCalendar 
        minDate={new Date()}
        className='REACT-CALENDAR p-2' 
        view='month' 
        onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
        />
        )}
    </div>
```



If date is clicked go into div 

If not clicked, display Calendar

8. Download data-fns to structure opening and closing times for each specific date

```
npm i date-fns
```

Check documentation here, https://www.npmjs.com/package/date-fns


9. To develop time selection aspect of calendar, a function will be created to get the times
 

 ```javascript
     const getTimes = () => {
        if (!date.justDate) return

        const { justDate } = date

        const beginning = add(justDate, { hours: 9 })
        const end = add(justDate, {hours: 17})
        const interval = 60*6 // in minutes
 ```
getTimes function sets start and end time and interval of open slots


 ```javascript
     const times = []
    for (let i = beginning; i <= end; i = add(i, {minutes: interval})) {
        times.push(i)
    }

    return times
}
    const times = getTimes()
```

times function puts times into an array with get times function structure

```javascript
    <div className='h-screen flex flex-col justify-center items-center'>
        {date.justDate ? (
            <div className='flex gap-4'>
                {times?.map((time, i) => (
                    <div key={`time-${i}`} className='rounded-sm bg-gray-100 p-2'>
                    <button type='button' onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}>
                        {format(time, 'kk:mm')}
                    </button>
                    </div>
                ))}
            </div>
        ) : (
        <ReactCalendar 
        minDate={new Date()}
        className='REACT-CALENDAR p-2' 
        view='month' 
        onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
        />
        )}
    </div>
  )
  ```

  main body checks if date has been clicked, if it has then it will go into time table dive which updates the times with the values from the time array funciton. Then set up button around different time slots that when clicked will log the data and time chosen in the consol

![Alt text](<Screenshot 2023-11-29 at 8.39.36 PM.png>)

When 15:00 is clicked, this is the console output:
![Alt text](<Screenshot 2023-11-29 at 8.40.04 PM.png>)




10. Add an Auth for admin

Going to use JWT
JWT( JSON Web Tokens ) are an industry standard for authentication. Each JWT is cryptographically signed to prevent unwanted modifications. 



We are going to import the changeEvent, FC, and useState hook 

changeEvent
FC
useState = is a react hook that lets you add a state variable to your component

We first set up the interface. An interface in typescript allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. 
https://prismic.io/blog/typescript-interfaces



### download trcp 

https://trpc.io/docs/quickstart

documentation there




### download jose for JWT tokens

Vlidate JWT on the edge on next js middleware
https://www.npmjs.com/package/jose
```
npm i jose
```

install cookie 

https://www.npmjs.com/package/cookie

```
npm i cookie
```

also install 
```
npm i nanoid
```

https://www.npmjs.com/package/nanoid








# Authentication 

Is an important security aspect of a web application. Authentication is a system check to see if user is who they say they are. Provides an identity to a username and password



There will be a login page 

