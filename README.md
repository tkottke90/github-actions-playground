# Github Actions Playground

Repository to store and test github actions without affecting existing projects.

## Project Structure

The structure of this project will use the branches as isolated examples that will never be merged into master as part of the `./github/workflows` file.  Examples should be stored in a folder with the branch name and merged into master.  Ideally with a readme file as follows:

```
root
  └ Project
    └ README.md
    └ <workflow>.yaml
```