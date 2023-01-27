# PokeDex App

PokéDex App is a React Native Application using Pokémon API. 
The App is available in both IOS and Android.

### App features
- List of Pokémon with Images
- Sortable by ascending/descending
- Grid & List View
- Number of Pokémon shown is 20 (infinite scroll) 
- Searchable Pokémon
- Ability to add Pokémon as favorite
- List of favorite Pokémons

## Prerequisites
- Node.js > 12 and npm (Recommended: Use nvm)
- Watchman
- Xcode 12
- Cocoapods 1.10.1
- JDK > 11
- Android Studio and Android SDK

## Base dependencies
- axios for networking.
- react-navigation navigation library.
- redux for state management.
- redux-thunk to dispatch asynchronous actions.
- react-native-paper ui components
- react-native-vector-icons icons

## Usage
You can start by cloning this repository.
Keep in mind that this library can cause trouble if you are renaming a project that uses Pods on the iOS side.

After that you should proceed as with any javascript project:
- Go to your project's root folder and run `yarn` or `npm install`.
- If you are using Xcode 12.5 or higher got /ios and execute `pod install --repo-update`
- Run `yarn ios` or `yarn android` to start your application!
(Using npm: `npm run ios` or `npm run android`)


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.