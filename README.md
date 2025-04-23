# FMOD-EventBank-Organisation-scripts
Scripts to organise events assignments to banks.
Add to the Scripts folder in the FMOD application or to your project folder (add folder called Scripts):

There are two scripts:
•	One for adding single events to a bank - use with the shortcut (or add your own) for it to be more effective than the right-click method.
•	The second script allows for adding multiple event to a bank, create a new bank, remove and re-organise events.

To add your own shortcut, open the script in a text editor and look for: "keysequence:".

How to use:

https://github.com/user-attachments/assets/2c3a347f-1a35-4d16-abfa-fda6874c19f8

Parameter settings for Label param

https://github.com/user-attachments/assets/45edf209-40bb-4379-a18c-b904582018a4


## Create3DMultiEventMacro
A FMOD Studio script to create a **3D event** from selected audio assets.

<details>

### Usage
1. Select one or more audio assets in the FMOD Studio browser.
2. Run the script via `FMOD Examples -> Create 3D Event`, or hit `Ctrl + H`.
3. Enter a name for the new event when prompted.
4. The script will create an event, apply a spatializer, and assign the selected audio assets.

### Notes
- The script ensures that only **audio file assets** can be used.
- The longest selected asset determines the event length when using multiple assets.
- The created event includes a **group track** named `Audio Track`.
- The event will be displayed in the FMOD Studio project structure after execution.

</details>

## RetrieveEffectChain
A FMOD Studio script that will find effect chains on the master track of an event and log its effects.

<details>

### Usage
1. Select an event
2. Run the script via `FMOD Examples -> Retrieve Effect Chain`
3. Open the console (`CTRL + 0`) and see the effects logged if any

### Notes
- Currently only checks the master track of the selected event

</details>

## AddAllEffects
A FMOD Studio script that will add all effects as of 2.02 to an event

<details>

### Usage
1. Select an event
2. Run the script via `FMOD Examples -> Add All Effects`
3. Open the console (`CTRL + 0`) to view the output of the script
4. The effects are now added to the event

</details>

## FindAudioFiles
A FMOD Studio script that finds any audio files that are included in multiple banks.

<details>

### Usage
1. Run the script via `FMOD Examples -> Find Audio Files`
2. Open the console (`CTRL + 0`) to see the output.

</details>
