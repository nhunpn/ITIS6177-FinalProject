const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const validator = require('validator');

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

// post request for image analysis
app.post('/analyze', async (req, res) => {
  try {
    const imageUrl = req.body.imageUrl; 

    // data sanitization
    if (!validator.isURL(imageUrl, { require_protocol: true })) {
      return res.status(400).json({ error: 'Invalid image URL' });
    }

    if (!imageUrl) {
      return res.status(400).json({ error: 'Image URL is required' });
    }

    // call Azure API with Visual Feature Types
    const response = await axios.post(
      `${process.env.AZURE_ENDPOINT}?visualFeatures=Categories,Description,Color,Tags,Objects,Faces,Brands,ImageType,Adult`,
      {
        url: imageUrl,
      },
      {
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY, 
          'Content-Type': 'application/json',
        },
      }
    );

    // return the analysis result
    res.json(response.data);
  } catch (error) {
    console.error('Error response from Azure:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error analyzing image' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
