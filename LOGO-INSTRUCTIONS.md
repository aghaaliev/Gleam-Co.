# How to Add Your Custom Logo

Follow these simple steps to add your own logo to the Gleam Co website:

## Step 1: Prepare Your Logo

- **Format**: PNG or JPG format recommended
- **Size**: Recommended dimensions: 200px wide × 50px tall (or similar proportions)
- **Background**: Transparent background (PNG) works best
- **Colors**: Logo should work well on a dark blue background (#0A1628 to #1E3A5F gradient)

## Step 2: Upload Your Logo

1. Place your logo file in the `images` folder
2. Rename your logo file to `logo.png` (or `logo.jpg` if using JPG format)
   - Full path should be: `images/logo.png`

## Step 3: Test Your Logo

1. Open `index.html` in your web browser
2. Your logo should now appear in the navigation bar at the top left
3. The logo will automatically replace the text "GLEAM CO"

## Alternative Logo Formats

If you want to use a different filename or format:

1. Open each HTML file (index.html, products.html, cart.html, contact.html, product-detail.html)
2. Find this line in the navigation:
   ```html
   <img src="images/logo.png" alt="Gleam Co Logo" onerror="this.style.display='none'">
   ```
3. Change `logo.png` to your filename (e.g., `logo.jpg`, `my-logo.svg`, etc.)

## Logo Styling

The logo is currently set to:
- **Height**: 50px (maintains aspect ratio)
- **Max Width**: 200px
- **Shadow**: Subtle drop shadow for depth

To adjust the logo size, edit `css/style.css` and modify the `.logo img` styles around line 59-65.

## Fallback Behavior

If no logo image is found or fails to load:
- The website will automatically display the text "GLEAM CO" instead
- This ensures your site always has a branded header

## Recommended Logo Design

For the best appearance with the silver and dark blue theme:
- Use white or silver colored logos
- Avoid dark logos (they won't show well on the dark blue background)
- Consider a logo with metallic/silver tones to match the jewelry theme
- Transparent backgrounds work best

## Example File Structure

```
Gleam-Co/
├── images/
│   └── logo.png          ← Place your logo here
├── css/
├── js/
├── index.html
└── ...
```

That's it! Your custom logo will now appear across all pages of the website.
