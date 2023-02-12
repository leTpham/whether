const axios = require("axios");

async function generate(req, res) {
  const configuration = {
    apiKey: process.env.OPENAI_API_KEY,
  };

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  // const animal = req.body.animal || '';
  // if (animal.trim().length === 0) {
  //   res.status(400).json({
  //     error: {
  //       message: "Please enter a valid animal",
  //     }
  //   });
  //   return;
  // }

  const weatherData = req.body.weatherData;
  try {
    const prompt = generatePrompt(weatherData);
    const response = await axios.post("https://api.openai.com/v1/engines/text-davinci-003/completions", {
      prompt,
      temperature: 0.6,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }, {
      headers: {
        "Authorization": `Bearer ${configuration.apiKey}`,
        "Content-Type": "application/json",
      },
    });
    // res.json({tempresult: weatherData})
    res.json({ result: response.data.choices[0].text});
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    console.error(`Error with OpenAI API request: ${error.message}`);
    res.status(500).json({
      error: {
        message: 'An error occurred during your request.',
      }
    });
  }
}

function generatePrompt({temp, feels_like, humidity, wind_speed}) {
  console.log("generatePromptData;", temp, feels_like, humidity, wind_speed)
// return `Please rewrite this object of weather data as a paragraph: ${weatherData}. if you are given nothing, say "no weather given `
return `Please generate a witty, conversational message about whether one should wear a jacket based on the following weather conditions:
Temperature: ${temp}°C,
Feels like: ${feels_like}°C,
Humidity: ${humidity}%,
Wind Speed: ${wind_speed} mph.

The message should convey the necessary weather information and offer a suggestion
for whether a jacket should be worn.
It should be written in a fun, engaging, and memorable way that will vary
each time the user accesses the app.`
  // return `Suggest three possible clothing combinations based on the weather data provided below.
  // ${weatherData}. If no weather data is provided, say "NEED WEATHER DATA"`
}

module.exports = generate;