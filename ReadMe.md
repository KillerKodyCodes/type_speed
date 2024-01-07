# Typing Speed Calculator

## Overview

This project is designed to calculate typing speed in a similar fashion to nitro type.The application will prompt the user with a string sourced from an API. Then it will allow the user to type the string while keeping time. The prompt will not allow the user to continue on with an incorrect character, and will instead wait for the user to provide the correct character. This way, a gross WPM calculation will be quite accurate because the errors will have taken time to correct rather than artificially penalizing the speed for errors. 

## Project Setup

I recommend running this project in Windows Subsystem for Linux. You can follow a quick guide here with the commands you need: https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10

You will need to install node. Follow the steps here, NVM is a useful package for node versions: https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl

You will need to install tsc for typescript compilation: ```npm install -g typescript```

## Running the project

To run the project, use the command ```npm run dev``` which will start the typescript compiler in watch mode. This will keep your compiled Javascript in sync with your Typescript edits. 
Next, open another terminal and use the command ```npm run start```. This will start http-server and server the project to ```http://localhost:8080```. Navigate to the /src directory to view the GUI.
If you only want to compile the typescript use the command ```npm run build``` and look at the compiled files in the ```/build``` folder. 
