# Frontend Mentor - Interactive rating component solution

### What I learned

#### HTML
```html

```

#### CSS
- CSS adjacent sibling selector 
    ```css
    input[type="radio"]:hover + label {}
    ```
- rem
    -- will use it for creating Modular Scale System

- SASS veriables and mixins

- SASS partials and @use
```css

```
#### JS
- Array.prototype.map()
    Used it to create an array of rating buttons
    ```js
    //Define buttons
    const buttonArray = [1, 2, 3, 4, 5];

    //Wrap button values in <button> tag
    const btnContainer = buttonArray.map((buttonValue) => 
    {let button = 
        `<div class="button">
            <input type="radio" id="${buttonValue}" name="rating" value="${buttonValue}">
            <label for="${buttonValue}">${buttonValue}</label>
        </div>`; 
    return button;
    });
    ```
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

- Array.prototype.join()
    Used it to replace comas between rating buttons when displayed in HTML with space
    ```js
    <div class="grid-numbers">
    ${btnContainer.join('')}
    </div>
    ```





