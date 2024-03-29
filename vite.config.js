import { defineConfig } from 'vite';
import path from 'path';

const moduleToJs = () => {
  return {
    name: "module-to-js",
    transformIndexHtml(html) {
      return html.replace(/module/, "text/javascript");
    }
  };
};

const noAttr = () => {
  return {
    name: "no-attribute",
    transformIndexHtml(html) {
      return html.replace(/ crossorigin/g, "");
    }
  };
};

export default defineConfig({
  plugins: [
    moduleToJs(),
    noAttr(),
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        properties: path.resolve(__dirname, 'properties.html'),
        propertyDetails: path.resolve(__dirname, 'property-details.html'),
        // Add other pages here
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    }
  }
});
