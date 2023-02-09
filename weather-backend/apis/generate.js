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

  const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid animal",
      }
    });
    return;
  }

  try {
    const prompt = generatePrompt(animal);
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

    res.status(200).json({ result: response.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    console.error(`Error with OpenAI API request: ${error.message}`);
    res.status(500).json({
      error: {
        message: 'An error occurred during your request.',
      }
    });
  }
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}

module.exports = generate