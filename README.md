# commit mvp front end

## quick start

### run ios simulator app
```
cd commitMvp 
npm install
react-native run-ios #--simulator="iPhone 8"
```

### view simulators:
``` xcrun simctl list devices ```
``` du -sh ~/Library/Developer/CoreSimulator/Devices ```

### update react (if it wont build):
``` 
react-native upgrade
npm install --save react-native@latest
npm install 
npm audit fix --force
```
### next item

### to do:

Integrate fb login with login view
Connect to backend database
Update users preferences (gender, age, religion, political, location, type, 1st date pref)
Research matching backend implementation

splash page
login/sign up page
profile page
