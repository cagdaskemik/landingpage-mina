import type { Feature } from "$lib/utils/types";

export default [
  {
    name: 'Markdown Support',
    description:
      'Blog posts are written in Markdown, a simple and nearly-universal format. This means you can bring over your posts from other platforms, and easily export to another if you want to.',
    image: 'images/features/markdown.jpg',
    tags: [{ label: 'Powered by MDsveX' }]
  },
  {
    name: 'Well Optimized',
    description:
      'Images are automatically optimized and lazy loaded, to ensure the website loads as fast as possible regardless of connection speed.',
    image: 'images/features/optimized.jpg',
    tags: [{ label: 'Powered by Image Transmutation' }]
  },
  {
    name: 'Light and Dark Modes',
    description:
      'Your website was built with dark mode in mind. It can swap between themes automatically (based on system settings) or manually!',
    image: 'images/features/light-dark.jpg',
  },
  {
    name: 'Open Source',
    description:
      'All code is open source, which means you can copy, modify & give it to others as you like. All I ask is that you make your revised/edited code open too so that knowledge can be passed on.',
    image: 'images/features/open-source.jpg'
  },
] as Feature[];