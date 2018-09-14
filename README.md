# 2018 UN Data Forum Website

## Explore

This website is build with [Gatsby](https://www.gatsbyjs.org/).

To launch this website on your local machine run

    yarn start

and go to [http://localhost:8000/](http://localhost:8000/).

## Content

### Profiles

Profiles are stored in `content/profiles`. One Markdown file represents one profile.

#### Conventions

- File name format is `<firstName>-<lastName>.md`.
- Profile picture name is `<firstName>-<lastName>.{jpg|png}`.

#### Frontmatter

| Property       | Type    | Required | Comment                                                                                          |
| :------------- | :------ | :------- | :----------------------------------------------------------------------------------------------- |
| `firstName`    | String  | yes      |                                                                                                  |
| `lastName`     | String  | yes      |                                                                                                  |
| `jobtitle`     | String  | no       |                                                                                                  |
| `organization` | String  | no       |                                                                                                  |
| `committee`    | Boolean | no       | If set to `true` profile is included in the committee page and displays a committe member badge. |

#### Supported Markdown Elements

| Element                                                             | Comment                                                                  |
| :------------------------------------------------------------------ | :----------------------------------------------------------------------- |
| [Paragraphs](https://daringfireball.net/projects/markdown/syntax#p) |                                                                          |
| [Links](https://daringfireball.net/projects/markdown/syntax#link)   | Use for external links only. Internal links are currently not supported. |
