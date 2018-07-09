# SOSC - Website
**Source code for the official website of Sahyadri Open-Source Community**

## Setting up the project

Clone the repository into your local Machine, and issue the following command inside the project directory. This will install all the required modules.
```
npm install
```

To run the app in [localhost:3000](localhost:3000)
```
npm start
```


## Setting up the project for Contribution
**step 1.**
Fork this repository to your account, and clone it to your local machine.
```
git clone https://github.com/<YOUR_USERNAME>/sosc-website.git
```
**step 2.**
Make sure you have Ruby and Sass installed.
Follow this [YouTube](https://www.youtube.com/watch?v=wz3kElLbEHE&t=1s) tutorial to learn more about SASS.

Installing Ruby
```
sudo apt-get update
sudo apt-get install ruby
```
Installing SASS
```
sudo gem install sass --no-user-install
```
Installing compass
```
gem update --system
gem install compass
```
To automate the Gulp tasks to preprocess sass and clean the css, run the gulp command on a seperate terminal.

watch for changes in scss files
```
gulp
```
**step 3.**
Setup the git upstream to the main repository.
```
git remote add upstream https://github.com/so-sc/sosc-website.git
```

Keep your project frequently updated
```
git pull upstream/master
```
Create a new branch and start working on the project or make any changes required.
```
git checkout -b YourBranchName
```
Commit your changes and PUSH to your repository.
```
git add -A
git commit -m "Describe your commit"
git push -u origin master
```

**step 4.**
Create a PULL request to the main repository. Make sure your commit messages are brief and your pull request message should describe perfectly what changes you made.



