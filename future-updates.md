# Future Updates & Links to Fix

When you are ready, you should update the placeholder links in your `Experience` component so that they point to your real code and live deployed websites!

### Where to make the changes:
File: `src/components/experience.tsx`
Variable: `projects` array (at the top of the file)

### What to update:
For each project in the array, replace the default GitHub link and the `#` for the live URL with your actual links. 

**Example:**
```tsx
  {
    name: "Full Stack E-Commerce",
    stack: "React · Node.js · Express · MongoDB · JWT",
    desc: "A complete full-stack...",
    status: "In Progress",
    githubUrl: "https://github.com/priyanshsinghpurawat/Your-Ecommerce-Repo",
    liveUrl: "https://your-ecommerce-live-url.com", // Or keep "#" if not deployed
  },
  {
    name: "Aspect Ratio Calculator",
    stack: "HTML · CSS · JavaScript",
    desc: "A responsive single-page utility...",
    githubUrl: "https://github.com/priyanshsinghpurawat/Aspect-Ratio-Calculator",
    liveUrl: "https://your-aspect-ratio-live-url.netlify.app",
  }
```

Once you make these changes and push to GitHub, the new links will automatically be deployed!
