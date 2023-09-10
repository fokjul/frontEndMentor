# Frontend Mentor - Accordion Card

### What I learned

#### HTML
- Responsive image, when you need to switch between different images
```html
<picture>
    <source srcset="images/illustration-woman-mobile.svg" media="(max-width:1200px)">
    <img src="images/women-and-box-desktop.svg" alt=""> //initial image
</picture>
```
- to syle content within a button, wrap the content in <span></span>

#### CSS
- buttons and other form elements doesn't inherit styles from HTML because they have default styles assigned by each browser. To override this, add value "inherit" to a CSS property (e.g., font-family) that should be applied to an element (e.g., button)
    ```css
    button {
        font-family: inherit
    }
    ```

- how to create partials and use them in the main .scss file 
- when value from a partial is used, partial name should be added to the value. For example:
```css
color: colors.$primary-dark-blue; (partial _colors.scss)
```
```css
button {
@include fonts.subtitle;
}

```
#### JS