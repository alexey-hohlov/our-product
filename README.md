# Fun Project: Demo Landing Page for a Fictional E-Commerce Product

[Here is](https://alexey-hohlov.github.io/our-product/) a live demo, deployed on GitHub Pages 🌎

I've created a clean, minimalist design featuring a "glass navbar" aesthetic with careful spacing. This fully responsive landing page combines text sections with several interactive components including an accordion, drawer, and - of course - everyone's favorite headache: a slider.

While I normally avoid component libraries for small projects, I got tired of rebuilding the same components. This time I tried Radix UI and loved it - it gives me pre-built accessibility and functionality while keeping full styling control. I used it for the Drawer and Accordion components.

All static content lives in i18-next, prepping the structure for potential multilingual support (because you never know).

And yes, integrating the slider with flex container required some... creative CSS solutions to prevent my computer from rendering a million-pixel-wide carousel. It's 2025 - I keep hoping sliders will finally play nice with flexbox, or at least that documentation will start mentioning these issues!

## 💻 Technologies
* TypeScript
* React
* SCSS
* Css-modules
* Radix UI
* i18next
* Swiper

## 🤖 How to run

```bash
yarn install
#
yarn dev
```
Go to [http://localhost:5173](http://localhost:5173) to see result
