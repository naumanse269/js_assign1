
    function randomHexaNumberGenerator() {
        let hexColorLength = 6;
        let hexColor = '#';
      
        for (let i = 0; i < hexColorLength; i++) {
          hexColor += Math.round(Math.random() * 16).toString(16);
        }
        return hexColor;
      }
      console.log(randomHexaNumberGenerator());