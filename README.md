![SearchIT](./public/android-chrome-192x192.png)

## The raw, easy to use asset management system

### Created with :heart: by Drew Markel

#### About

This is just a small project I have started working on that uses Firebase and React to create a very basic, yet fast and effective asset management system. Contributions/PRs are welcome.

#### Configuration

Clone the respository: `git clone https://github.com/drewmrk/SearchIT`

Open the file: `SearchIT/.env`

The contents of the file are as follows:

```
# Database config
REACT_APP_APIKEY=
REACT_APP_AUTHDOMAIN=
REACT_APP_DATABASEURL=
REACT_APP_PROJECTID=
REACT_APP_STORAGEBUCKET=
REACT_APP_MESSAGINGSENDERID=
REACT_APP_APPID=
REACT_APP_MEASUREMENTID=

# Customization
REACT_APP_ORGANIZATION_NAME=
REACT_APP_ALLOWED_DOMAIN=
```

The `# Database config` section is simply the place where you put your Firebase configuration variables.

Under the `# Customization` section, the `REACT_APP_ORGANIZATION_NAME=` line is the place where you put your organization name. Your organization name will appear in two (2) places; the tab, and the initial login screen. **NOTE**: If your organization name has spaces, you must use quotes in order for it work. The `REACT_APP_ALLOWED_DOMAIN=` line is where your organization domain name goes.

#### Compilation

Go to the top of the directory: `SearchIT`

Run the build command: `yarn build`

Congrats! :confetti_ball: SearchIT should now be compiled and ready to go in the `build` directory.
