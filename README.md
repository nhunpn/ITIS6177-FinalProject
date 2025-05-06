# 📸 Image Analysis Proxy API Documentation

Analyze images effortlessly without the need for an Azure subscription. This API accepts an image URL and returns a detailed analysis using the Azure Computer Vision API (v3.2) so you do not need an Azure subscription or API key, this proxy API handles it for you.

## 📖 Overview
This API lets you connect to Microsoft’s Azure Computer Vision Image Analysis API via a simple endpoint without having to sign up for an account. In general, this API uses HTTP POST requests with JSON arguments and JSON responses.

## ⏩ Quick Start:
Here’s a quick way to start using the API:
1. Create a POST request to this endpoint in Postman: `http://157.245.249.190:3000/analyze`
   
2. In the Body tab, select **raw** and **JSON**, then paste your image URL in this following format: 
 ```json
   {  
      "imageUrl": "https://example.com/image.jpg"  
   }
```

3. Hit Send and receive a detailed image analysis.  
	Response example:
```json
{
  "categories": [ ... ],
  "adult": { ... },
  "color": { ... },
  "imageType": { ... }
}
```

## 🛠️ Getting Started: 

### Prerequisites: 
1. A publicly accessible image URL.
   
2. Postman installed to test out the API.
   
3. Active internet connection.

### How to Use (step-by-step)
1. Open Postman (download [Postman](https://www.postman.com/) or [Postman Desktop](https://www.postman.com/downloads/postman-agent/) if you haven’t)

2. Create a POST request to `http://157.245.249.190:3000/analyze`
   
   <img width="615" alt="image" src="https://github.com/user-attachments/assets/c428478c-ad3d-422d-b7ee-af63399c9dcb" />


   Example of what you should have in Postman: 

   <img width="647" alt="image" src="https://github.com/user-attachments/assets/dda97df6-8f72-4945-9394-ad8fa08e7efd" />


4. In the Body tab, select raw and JSON and paste your image url in this following format:
 ```json
   {  
      "imageUrl": "https://example.com/image.jpg"  
   }
```

   Example of what you should have in Postman: 
  
   <img width="602" alt="image" src="https://github.com/user-attachments/assets/01548aa9-755f-4ab3-8c94-f021b79bbe4d" />


4. Hit Send  
   You’ll receive a structured response like this with a status code of 200:
   ![Screenshot 2025-05-05 171317](https://github.com/user-attachments/assets/bfc1e79f-93a5-4673-b3e9-2abe5cea6a3a)



## 📝 Data Encoding
To make sure the image URL and the data in your request are properly formatted:
- Ensure any spaces or special characters in the URL are properly URL-encoded 
- You can use a URL encoding tool: [URL Encoder](https://www.urlencoder.org/)
- Ensure the image URL is sent in the body of the request in a JSON format 
 ```json
   {  
      "imageUrl": "https://example.com/image.jpg"  
   }
```

## ❗Error Handling
Here are examples of possible errors and what they mean:


| Error Code & Message   | Error Meaning                                            | Possible Fix                                             |
|------------------------|----------------------------------------------------------|----------------------------------------------------------|
| **400 Bad Request**     | Image URL is missing or invalid                          | Ensure that the image URL is correct and accessible. Make sure it starts with `http://` or `https://` |
| **404 Resource Not Found** | Incorrect endpoint or Azure configuration               | Ensure the endpoint URL is correct.                     |
| **500 Internal Server Error** | Server-side error. Often due to Azure rejecting the request or bad environment settings | Retry the request or contact support.           |

### ❔Contact Support
[Email](pnguye59@charlotte.edu) if you have any questions.

### 🔗 Other Resources
[Azure API](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/how-to/call-analyze-image?source=recommendations&tabs=rest)






