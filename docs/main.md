
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
```css
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
}```


9. Add react icons library for hamburgur menu

npm i react-icons


verify it installed properly by checking the package.json package
![Alt text](<Screenshot 2023-11-29 at 12.33.58 AM.png>)
