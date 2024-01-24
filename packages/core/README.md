<h3 align="center">
  <br>
  <img src="https://res.cloudinary.com/dvyoqkzft/image/upload/v1706073489/lokesh/lo-icon_a66jvj.svg" width="100"><br>
</h3>

<h4 align="center">Simple · Unique · Deep</h4>

## Installation

```bash
yarn add lo-icon
npm install lo-icon
bun install lo-icon
pnpm install lo-icon
```

## Usage

### CSS Icon

```js
import 'lo-icon/css/index.css';
```

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/lo-icon@1.1.0/css/index.css"
/>
```

```html
<style>
  @import url('~/lo-icon/css/index.css');
</style>
```

```html
<i class="lo-icon"></i>
```

### Local Image

```jsx
import SVGImg from 'lo-icon/images/svg/lo-icon.svg';

<img src={SVGImg} />;
```

### Hosted image

```html
<img src="https://cdn.jsdelivr.net/npm/lo-icon/images/svg/lo-icon.svg" />
```

### CDN Image

```jsx
import { svgPath } from 'lo-icon/cdn';

<img src={svgPath} />;
```

### React Component

```jsx
import LoIcon from 'lo-icon/react';

<LoIcon {...props} />;
```

### React ESM import

```html
<script type="module">
  import LoIcon from 'https://cdn.jsdelivr.net/npm/lo-icon@1.1.0/react/+esm';
</script>
```
