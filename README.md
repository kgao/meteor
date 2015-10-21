# meteor
The JavaScript App Platform

# Demo projects

  1. Meteor App - Test
  2. Localmarket App - Mobile
  3. Todos App - Web

# dependency

On OS X or Linux?

Install the latest official Meteor release from your terminal:

    curl https://install.meteor.com/ | sh

On Windows?

    [Download the official Meteor installer](https://install.meteor.com/windows)


# getting started
    cd meteor_app
    meteor

# deploy

Simply go to your app directory, and type:

    meteor deploy meteor_app.meteor.com



# mobile support

## Running on an iOS simulator (Mac Only)

If you have a Mac, you can run your app inside the iOS simulator.

Go to your app folder and type:

    meteor install-sdk ios

This will run you through the setup necessary to build an iOS app from your project. When you're done, type:

    meteor add-platform ios
    meteor run ios

## Running on an iPhone or iPad (Mac Only; requires Apple developer account)

    meteor run ios-device

## Running on an Android emulator

    meteor run android-device
