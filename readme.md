# rapido-downloader 

Download videos from YouTube, Instagram, and Facebook using the Rapido API.  

## Installation  

```bash  
npm install rapido-dl  
```  

## Usage  

### JavaScript (CommonJS)  
```javascript  
const rapidodl = require('rapido-dl');  
const dl = new rapidodl();  

// YouTube  
dl.ytdl('https://youtu.be/VIDEO_ID')  
  .then(data => console.log(data))  
  .catch(err => console.error(err));  

// Instagram  
dl.igdl('https://www.instagram.com/p/POST_ID/')  
  .then(data => console.log(data))  
  .catch(err => console.error(err));  

// Facebook  
dl.fbdl('https://fb.watch/VIDEO_ID/')  
  .then(data => console.log(data))  
  .catch(err => console.error(err));  
```  

### TypeScript / ES Modules  
```typescript  
import rapidodl from 'rapido-dl';  
const dl = new rapidodl();  

// Use methods as shown above  
```  

## API Methods  

| Method  | Description | Example URL |  
|---------|------------|-------------|  
| `ytdl()` | YouTube video download | `https://youtu.be/...` |  
| `igdl()` | Instagram video download | `https://www.instagram.com/p/...` |  
| `fbdl()` | Facebook video download | `https://fb.watch/...` |  

## Response Format  

Returns a JSON object containing video details (URL, quality options, etc.).  
