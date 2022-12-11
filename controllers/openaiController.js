const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
    const { prompt, size } = req.body;

    try {

        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: size === 'small' ? '256x256' : size === 'large' ? '1024x1024' : '512x512',
        });
        image_url = response.data.data[0].url;
        res.status(200).json({ success: true, url: image_url });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


module.exports = { generateImage };